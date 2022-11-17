import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzlbCJGVikO0P5LYcssM8ppe2C2KlXhK4",
    authDomain: "morgan-569c6.firebaseapp.com",
    projectId: "morgan-569c6",
    storageBucket: "morgan-569c6.appspot.com",
    messagingSenderId: "686005606213",
    appId: "1:686005606213:web:6a65f5471b62baf61e102c",
    measurementId: "G-N99ZL98TWJ"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage();