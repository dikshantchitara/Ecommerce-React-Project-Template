// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWgeD07gyoKMFJrDLvJ_93ngrT6J9qz5U",
  authDomain: "fashion-e5fb1.firebaseapp.com",
  projectId: "fashion-e5fb1",
  storageBucket: "fashion-e5fb1.appspot.com",
  messagingSenderId: "213728995677",
  appId: "1:213728995677:web:b416f19dbfc1aadc0be0b4",
  measurementId: "G-3NJ7YECS24",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export { app };
