// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK8PblcwG3T5-JLrdply6n6_ZeAkI8D50",
  authDomain: "authentication-3c7bd.firebaseapp.com",
  projectId: "authentication-3c7bd",
  storageBucket: "authentication-3c7bd.firebasestorage.app",
  messagingSenderId: "670001647585",
  appId: "1:670001647585:web:5d68f1c0cc14e6b3c80ca0",
  measurementId: "G-C68ZCLWLQG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;