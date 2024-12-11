// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDariaRJ-7ucoEyyS5d4t_WYMe5JOI4Jnk",
  authDomain: "netflixgpt-7777c.firebaseapp.com",
  projectId: "netflixgpt-7777c",
  storageBucket: "netflixgpt-7777c.firebasestorage.app",
  messagingSenderId: "519107748054",
  appId: "1:519107748054:web:239d64b4b6434e4bc0e977",
  measurementId: "G-EEZPXWCPJH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
