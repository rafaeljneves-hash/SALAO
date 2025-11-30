// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
     apiKey: "AIzaSyBjIrxtWmjSxJcfPLUV0asTWZwOx3uEW98",
  authDomain: "salao-857ef.firebaseapp.com",
  projectId: "salao-857ef",
  storageBucket: "salao-857ef.firebasestorage.app",
  messagingSenderId: "171169766618",
  appId: "1:171169766618:web:5d52f74d5c779bcce859e3",
  measurementId: "G-7EME82E6ZX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
