// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// (Analytics is optional; you can keep or remove it)
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDzlNpJ-e2iaqVdUrgbJBrjXsPOYDGlRAo",
  authDomain: "akshaya-portfolio.firebaseapp.com",
  projectId: "akshaya-portfolio",
  storageBucket: "akshaya-portfolio.firebasestorage.app",
  messagingSenderId: "65503906696",
  appId: "1:65503906696:web:c31b4d24c17b005ae3083d",
  measurementId: "G-22N2GGDTJP"
};

const app = initializeApp(firebaseConfig);

// Firestore instance used in Works.js and Contact.js
const db = getFirestore(app);

// (optional) Analytics
const analytics = getAnalytics(app);

export { db };
