'use client'

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth';

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

const app_mode = process.env.NEXT_PUBLIC_APP_MODE

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIavwhCNLqUyYT6ZMKiR-myuKbkMOBs0A",
    authDomain: "saudagar-92dc2.firebaseapp.com",
    projectId: "saudagar-92dc2",
    storageBucket: "saudagar-92dc2.appspot.com",
    messagingSenderId: "505071838454",
    appId: "1:505071838454:web:9991becf5e57b04a1938d7",
    measurementId: "G-XGCJN7DQEP"
};


const firebaseConfigStaging = {
    apiKey: "AIzaSyDJt25hHsouxWKaGAwX5lRqCGtv4v2vr18",
    authDomain: "saudagar-staging.firebaseapp.com",
    projectId: "saudagar-staging",
    storageBucket: "saudagar-staging.appspot.com",
    messagingSenderId: "167715247415",
    appId: "1:167715247415:web:e9b4812bdd936409a6f6b2",
    measurementId: "G-VFCZV24Z8W"
}

// Initialize Firebase
const app = initializeApp(app_mode === 'production' ? firebaseConfig : firebaseConfigStaging);
const analytics = getAnalytics(app);
const authFirebase = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { authFirebase, db, analytics, storage };