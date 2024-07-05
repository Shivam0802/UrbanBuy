import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY || "mock-api-key",
  authDomain: "urbanbuy-93a58.firebaseapp.com",
  projectId: "urbanbuy-93a58",
  storageBucket: "urbanbuy-93a58.appspot.com",
  messagingSenderId: "311259916789",
  appId: "1:311259916789:web:79d54c95b29b2141cc58bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage};