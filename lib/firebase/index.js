// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyArWRMO_-MK9DJZ5oRR6dZu7g0oiwiTM30",
//   authDomain: "expense-tracker-68de6.firebaseapp.com",
//   projectId: "expense-tracker-68de6",
//   storageBucket: "expense-tracker-68de6.firebasestorage.app",
//   messagingSenderId: "713112330075",
//   appId: "1:713112330075:web:3d15dbba5d21cf0996847e",
//   measurementId: "G-VF19CT3BV4"
// };

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY, // Ensure correct variable names
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
