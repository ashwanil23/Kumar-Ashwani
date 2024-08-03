// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set, increment } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzON9zV1vk0bEHy0RNCT2gMPRHqwV9moE",
    authDomain: "catch-me-b26c4.firebaseapp.com",
    databaseURL: "https://catch-me-b26c4-default-rtdb.firebaseio.com/",
    projectId: "catch-me-b26c4",
    storageBucket: "catch-me-b26c4.appspot.com",
    messagingSenderId: "750251102043",
    appId: "1:750251102043:web:d964275deb395f9145147e",
    measurementId: "G-ZSN4LJKQJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Function to update visitor count
function updateVisitorCount() {
    const visitorCountRef = ref(db, 'visitorCount');

    // Increment visitor count using a transaction
    set(visitorCountRef, increment(1));

    // Listen for changes to the visitor count
    onValue(visitorCountRef, (snapshot) => {
        const count = snapshot.val();
        document.getElementById('visitor-count').innerText = count || 0;
    });
}

// Update the visitor count when the page loads
window.onload = updateVisitorCount;
