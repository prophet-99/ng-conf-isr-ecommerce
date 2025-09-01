import { CommonEngine } from '@angular/ssr/node';

import express from 'express';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { FileSystemCacheHandler, ISRHandler } from '@rx-angular/isr/server';

import { RedisCacheHandler } from './redis/main';
import { environment } from './src/environments/environment';
import bootstrap from './src/main.server';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');
  const commonEngine = new CommonEngine();

  //* -> File System Cache [Optional]
  const fsCacheHandler = new FileSystemCacheHandler({
    cacheFolderPath: join(serverDistFolder, '/custom-cache'),
    //! -> Contains a bug.
    // prerenderedPagesPath: browserDistFolder,
    // addPrerenderedPagesToCache: true,
  });
  //* -> Redis Cache [Optional]
  // const redisCacheHandler = new RedisCacheHandler();

  //* -> Allowed Query Params [Optional]
  // * Case 1: allowedQueryParams = undefined
  // -> All query params are part of the cache key.
  // -> /products?id=123&color=red ≠ /products?id=123&color=blue

  // * Case 2: allowedQueryParams = []
  // -> No query params are used in the cache key.
  // -> /products?id=123&color=red = /products?id=123 (same cache)

  // * Case 3: allowedQueryParams = ['id','color']
  // -> Only these params are part of the cache key.
  // -> /products?id=123&color=red ≠ /products?id=123&color=blue
  let allowedQueryParams: string[] = [];

  //* Register the ISR handler
  const isr = new ISRHandler({
    indexHtml,
    invalidateSecretToken: 'MY_SECURE_TOKEN',
    enableLogging: true,
    serverDistFolder,
    browserDistFolder,
    bootstrap,
    commonEngine,
    allowedQueryParams,
    cache: fsCacheHandler,
    // Optional
    // skipCachingOnHttpError: false, //* -> By default, when an http error occurs during the server-rendering of a page, we don't cache the page but fall back to client-side rendering, because it probably will have error messages or other content that is not intended to be cached.
    buildId: `${environment.buildTimestamp}`,
    // backgroundRevalidation: true, //* -> Returns cached HTML immediately and revalidates/updates the cache in the background
  });

  server.use(express.json());
  //* Locale API
  server.post(
    '/api/invalidate',
    async (req, res) => await isr.invalidate(req, res)
  );

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);
  //* Static files
  server.get(
    '*.*',
    express.static(browserDistFolder, {
      maxAge: '1y',
    })
  );
  //* RxAngular ISR render
  server.get(
    '*',
    // Serve page if it exists in cache
    async (req, res, next) => await isr.serveFromCache(req, res, next),
    // Server side render the page and add to cache if needed
    async (req, res, next) => await isr.render(req, res, next)
  );

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
