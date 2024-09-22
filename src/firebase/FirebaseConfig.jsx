// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8ZV7skwmRSOq8sQOCWGJQpjCZF7CkKO0",
  authDomain: "jwellery-e0f90.firebaseapp.com",
  projectId: "jwellery-e0f90",
  storageBucket: "jwellery-e0f90.appspot.com",
  messagingSenderId: "853248345371",
  appId: "1:853248345371:web:37d0d20a4e23eff3e9ffbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;