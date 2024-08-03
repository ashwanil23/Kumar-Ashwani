// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzON9zV1vk0bEHy0RNCT2gMPRHqwV9moE",
  authDomain: "catch-me-b26c4.firebaseapp.com",
  projectId: "catch-me-b26c4",
  storageBucket: "catch-me-b26c4.appspot.com",
  messagingSenderId: "750251102043",
  appId: "1:750251102043:web:d964275deb395f9145147e",
  measurementId: "G-ZSN4LJKQJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);