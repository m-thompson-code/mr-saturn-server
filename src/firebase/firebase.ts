import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as dotenv from 'dotenv';
dotenv.config();

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDkY3b-5WGgLcEPK7s9L65if7-svTW2was",
    authDomain: "mr-saturn.firebaseapp.com",
    databaseURL: "https://mr-saturn.firebaseio.com",
    projectId: "mr-saturn",
    storageBucket: "mr-saturn.appspot.com",
    messagingSenderId: "847893261051",
    appId: "1:847893261051:web:8b5d67c34a840976cc5e5e",
    measurementId: "G-282RBMWF9D"
};

const _signIn = async(): Promise<void> => {
    try {
        const email = process.env.email || process.env.firebaseEmail || '';
        const password = process.env.password || process.env.firebasePassword || '';
        console.log(email, password);
        await firebase.auth().signInWithEmailAndPassword(email, password);
    }catch(error) {
        console.error(error && error.message || error);
        throw error;
    }
}

const _firebaseInit = async(): Promise<void> => {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Sign in using secret certs
    return _signIn();
}

export const firebaseInit = _firebaseInit;