import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBRaWrm7LmhSkBStcqcS6BgXxm11L0Fh2U",
    authDomain: "clone-515a9.firebaseapp.com",
    projectId: "clone-515a9",
    storageBucket: "clone-515a9.appspot.com",
    messagingSenderId: "629789992487",
    appId: "1:629789992487:web:7fcc6de636cc1758145002",
    measurementId: "G-JD5GEZV3K0",
});

const auth = firebase.auth();

export { auth };