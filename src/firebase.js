// Import the functions you need from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgKQefaE5dDje1aNpDMm3uwpAr5kSHdXE",
  authDomain: "react-auth-9e4c8.firebaseapp.com",
  projectId: "react-auth-9e4c8",
  storageBucket: "react-auth-9e4c8.appspot.com",
  messagingSenderId: "78897323601",
  appId: "1:78897323601:web:20ba03fd7853ef4efde270",
  measurementId: "G-NV0C07MZ4P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


export { app, auth, analytics };
