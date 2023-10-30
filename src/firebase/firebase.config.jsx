// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEMPVfmjh6nZ0bonRnPs_XNJICy9zKm_c",
  authDomain: "brand-shop-5b25c.firebaseapp.com",
  projectId: "brand-shop-5b25c",
  storageBucket: "brand-shop-5b25c.appspot.com",
  messagingSenderId: "110621393922",
  appId: "1:110621393922:web:ebd7ea1b7a6fd612ca931b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
