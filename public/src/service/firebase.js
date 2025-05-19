// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCGAs3IejrchyWQ3wgTa3L2sfJoiK5Jhw",
  authDomain: "camilomeme-127ef.firebaseapp.com",
  databaseURL: "https://camilomeme-127ef-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "camilomeme-127ef",
  storageBucket: "camilomeme-127ef.firebasestorage.app",
  messagingSenderId: "538314220845",
  appId: "1:538314220845:web:d70d0bf0632ae398d09fa4",
  measurementId: "G-T7HK75MEF0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// Exporting the necessary functions and objects
export { auth, db, ref, set, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail };
