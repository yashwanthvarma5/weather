// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCARRabel_KeHE25GyeS7zdRfvWNEHoXUc",
  authDomain: "weather-c5ef4.firebaseapp.com",
  projectId: "weather-c5ef4",
  storageBucket: "weather-c5ef4.firebasestorage.app",
  messagingSenderId: "970214124034",
  appId: "1:970214124034:web:90a94a32e5df8de380951b",
  measurementId: "G-88WYPMSZL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth service
const auth = getAuth(app);

// Create Google provider instance
const provider = new GoogleAuthProvider();

// Function to trigger Google Sign-In popup
export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

export { auth };
