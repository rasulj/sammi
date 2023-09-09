import { initializeApp, getApp, getApps } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyC3Bt5irSRWueegl3lSVhxA9x2fGsR1y_I",
    authDomain: "sammi-movie.firebaseapp.com",
    projectId: "sammi-movie",
    storageBucket: "sammi-movie.appspot.com",
    messagingSenderId: "103874308947",
    appId: "1:103874308947:web:56f226d9e24e71864b0fa6"
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth();

export default app;
export { db, auth };