 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-d0d47.firebaseapp.com",
  projectId: "realestate-d0d47",
  storageBucket: "realestate-d0d47.appspot.com",
  messagingSenderId: "694745003644",
  appId: "1:694745003644:web:07a07d23202493da47bbf9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);