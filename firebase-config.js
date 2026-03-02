// ─────────────────────────────────────────────
//  firebase-config.js
//  Replace the values below with YOUR Firebase
//  project credentials (from Firebase Console)
// ─────────────────────────────────────────────

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXX2yeWSx_CMkisZdhMG7sVu5_z898Qx0",
  authDomain: "stocktest-b6c8a.firebaseapp.com",
  databaseURL: "https://stocktest-b6c8a-default-rtdb.firebaseio.com",
  projectId: "stocktest-b6c8a",
  storageBucket: "stocktest-b6c8a.firebasestorage.app",
  messagingSenderId: "176708085448",
  appId: "1:176708085448:web:7a56a71faaae0043dfa7fd",
  measurementId: "G-H81CP2J0B1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
