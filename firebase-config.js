// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// GANTI DENGAN DATA PROJECT FIREBASE ANDA
const firebaseConfig = {
  apiKey: "AIzaSyAWSKTg0vUrQZGMS5vjTK_YShXnz1BNheE",
  authDomain: "tasksms-aa883.firebaseapp.com",
  projectId: "tasksms-aa883",
  storageBucket: "tasksms-aa883.firebasestorage.app",
  messagingSenderId: "282007667507",
  appId: "1:282007667507:web:129ea8c1da3ae370287446"
};

// Inisialisasi Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);