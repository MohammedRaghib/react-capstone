// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBno5xRc46pODbVDW3Do3NWKIsTUMuSlv8",
    authDomain: "react-capstone2.firebaseapp.com",
    projectId: "react-capstone2",
    storageBucket: "react-capstone2.firebasestorage.app",
    messagingSenderId: "322164148476",
    appId: "1:322164148476:web:e116504fba91b88042ef79",
    measurementId: "G-CVGJHKDFRE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);