export interface Theme {
  image:    string;
  bgColor:  string;
  btnColor: string;
  navColor: string;
}

export interface FirebaseConfiguration {
  projectId:         string;
  appId:             string;
  storageBucket:     string;
  apiKey:            string;
  authDomain:        string;
  databaseURL:       string;
  messagingSenderId: string;
}

export type DatabaseItems = [string, {item: string; category: Category}][];
export type Category = 'groceries' | 'veggies' | 'pharmacy';