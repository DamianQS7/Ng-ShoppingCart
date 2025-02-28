import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app'
import { getDatabase, provideDatabase } from '@angular/fire/database';

import { routes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';
import { environment } from '../environments/environment';

const firebaseConfig = {
    projectId: environment.PROJECT_ID,
    appId: environment.APP_ID,
    storageBucket: environment.STORAGE_BUCKET,
    apiKey: environment.API_KEY,
    authDomain: environment.AUTH_DOMAIN,
    databaseURL: environment.DATABASE_URL,
    messagingSenderId: environment.MESSAGING_SENDER_ID
  }

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideDatabase(() => getDatabase())
  ]
};
