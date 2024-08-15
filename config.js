// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW-URYIn7gAuPyVbi_6IdieLVDPU3Q2zw",
  authDomain: "website-123-000.firebaseapp.com",
  projectId: "website-123-000",
  storageBucket: "website-123-000.appspot.com",
  messagingSenderId: "617462231927",
  appId: "1:617462231927:web:bc742c5650defaf862a772",
  measurementId: "G-QVN1P3HZ4D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); 
