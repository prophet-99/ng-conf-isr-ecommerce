import Redis from 'ioredis';
import { CacheData, CacheHandler, ISROptions } from '@rx-angular/isr/models';

import { cacheMessageUtil } from './utils/cache-message.util';

export class RedisCacheHandler extends CacheHandler {
  private redis: Redis;
  private clientConfig = {
    host: process.env['REDIS_HOST'],
    port: Number(process.env['REDIS_PORT']),
    username: process.env['REDIS_USERNAME'],
    password: process.env['REDIS_PASSWORD'],
    prefix: process.env['REDIS_PREFIX'],
  };

  constructor() {
    super();

    const { host, port, username, password } = this.clientConfig;
    this.redis = new Redis({
      host,
      port,
      username,
      password,
      maxRetriesPerRequest: 2,
      enableAutoPipelining: true,
    });

    console.log('RedisCacheHandler initialized 🚀');
  }

  private createKey(url: string): string {
    const prefix = this.clientConfig.prefix || 'isr';
    return `${prefix}:${url}`;
  }

  add(
    url: string,
    html: string,
    options: ISROptions = { revalidate: null }
  ): Promise<void> {
    const htmlWithMsg = html + cacheMessageUtil(options.revalidate);

    return new Promise((resolve, reject) => {
      const cacheData: CacheData = {
        html: htmlWithMsg,
        options,
        createdAt: Date.now(),
      };
      const key = this.createKey(url);
      this.redis.set(key, JSON.stringify(cacheData)).then(() => {
        resolve();
      });
    });
  }

  get(url: string): Promise<CacheData> {
    return new Promise((resolve, reject) => {
      const key = this.createKey(url);
      this.redis.get(key, (err, result) => {
        if (err || result === null || result === undefined) {
          reject('This url does not exist in cache!');
        } else {
          resolve(JSON.parse(result));
        }
      });
    });
  }

  getAll(): Promise<string[]> {
    console.log('getAll() is not implemented for RedisCacheHandler');
    return Promise.resolve([]);
  }

  has(url: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const key = this.createKey(url);
      resolve(this.redis.exists(key).then((exists) => exists === 1));
    });
  }

  delete(url: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const key = this.createKey(url);
      resolve(this.redis.del(key).then((deleted) => deleted === 1));
    });
  }

  clearCache?(): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
