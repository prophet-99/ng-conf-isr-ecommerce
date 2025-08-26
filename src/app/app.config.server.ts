import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';

import { isrHttpInterceptors, provideISR } from '@rx-angular/isr/server';

import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideISR(),
    provideHttpClient(withFetch(), withInterceptors(isrHttpInterceptors)),
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
