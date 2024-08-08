// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9tUSPGZdhOJHItITqvLZ7C64BeqgbU4M",
  authDomain: "codedwap-8bbe0.firebaseapp.com",
  projectId: "codedwap-8bbe0",
  storageBucket: "codedwap-8bbe0.appspot.com",
  messagingSenderId: "365921262336",
  appId: "1:365921262336:web:b141ba6e8a6173ade2f1e5",
  measurementId: "G-9X39LLQHQW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);