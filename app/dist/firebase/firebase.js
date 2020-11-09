"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase = require("firebase/app");
// Add the Firebase services that you want to use
require("firebase/auth");
require("firebase/firestore");
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
const secrets_1 = require("../secrets/secrets");
const _signIn = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield firebase.auth().signInWithEmailAndPassword((secrets_1.firebaseCerts === null || secrets_1.firebaseCerts === void 0 ? void 0 : secrets_1.firebaseCerts.email) || process.env.email || '', (secrets_1.firebaseCerts === null || secrets_1.firebaseCerts === void 0 ? void 0 : secrets_1.firebaseCerts.password) || process.env.password || '');
    }
    catch (error) {
        console.error(error && error.message || error);
        throw error;
    }
});
const _firebaseInit = () => __awaiter(void 0, void 0, void 0, function* () {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // Sign in using secret certs
    return _signIn();
});
exports.firebaseInit = _firebaseInit;
//# sourceMappingURL=firebase.js.map