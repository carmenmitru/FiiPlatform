import {AuthMethods, AuthProviders} from 'angularfire2';
export const firebaseConfig = {
    apiKey: 'AIzaSyAyQOwdvYUh9yIvI0bikqBUPFbR10UvInM',
    authDomain: 'kygoproj.firebaseapp.com',
    databaseURL: 'https://kygoproj.firebaseio.com',
    projectId: 'kygoproj',
    storageBucket: 'kygoproj.appspot.com',
    messagingSenderId: '212056359548'
};

export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};
