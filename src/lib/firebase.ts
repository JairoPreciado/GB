// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWffJPjXWBreza19H1ooCusCkRUbQwSF4",
  authDomain: "gbrep-80289.firebaseapp.com",
  projectId: "gbrep-80289",
  storageBucket: "gbrep-80289.firebasestorage.app",
  messagingSenderId: "327903261934",
  appId: "1:327903261934:web:2f5681340cdc8b8bbfafff",
  measurementId: "G-K5CJCF2DW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Exporta los servicios que vas a usar
export const auth = getAuth(app); // Para autenticación
const db = getFirestore(app); // Para la base de datos Firestores