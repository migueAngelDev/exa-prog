// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { addDoc, collection, getFirestore, getDocs } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

export const FIREBASE_APP =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const db = getFirestore(FIREBASE_APP);

export const addItem = (data) => addDoc(collection(db, "products"), data);

export const getProducts = () => getDocs(collection(db, "products"));

export const hola = () => console.log("hols");
