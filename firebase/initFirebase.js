// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmnU6JzBoW7-IAgzykZW_b9GmxCLxDabc",
  authDomain: "sport-portalen.firebaseapp.com",
  projectId: "sport-portalen",
  storageBucket: "sport-portalen.appspot.com",
  messagingSenderId: "739311309949",
  appId: "1:739311309949:web:5cb2177d7adf4eda26cd14",
  measurementId: "G-6XJVKQJFDL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;