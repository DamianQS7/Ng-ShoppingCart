import { Injectable } from '@angular/core';
import { FirebaseConfiguration } from '../types/types';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {

  private firebase: FirebaseConfiguration = {
    projectId: environment.PROJECT_ID,
    appId: environment.APP_ID,
    storageBucket: environment.STORAGE_BUCKET,
    apiKey: environment.API_KEY,
    authDomain: environment.AUTH_DOMAIN,
    databaseURL: environment.DATABASE_URL,
    messagingSenderId: environment.MESSAGING_SENDER_ID
  }

  getFirebaseConfig = (): FirebaseConfiguration => this.firebase;
}
