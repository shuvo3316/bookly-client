// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVImsNiBk61qvEZFeTo9llL5l60qp44s0",
  authDomain: "bookly-auth-c4076.firebaseapp.com",
  projectId: "bookly-auth-c4076",
  storageBucket: "bookly-auth-c4076.appspot.com",
  messagingSenderId: "433221809102",
  appId: "1:433221809102:web:425a75ec46ab38c854319f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;