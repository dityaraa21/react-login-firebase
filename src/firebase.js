import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ1fo84sAH41Y_MnR45Fbm8zxDyWY2P4Q",
  authDomain: "login-firebase-d6365.firebaseapp.com",
  projectId: "login-firebase-d6365",
  storageBucket: "login-firebase-d6365.appspot.com",
  messagingSenderId: "69882680149",
  appId: "1:69882680149:web:b150a23867eb9098c4d5dc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
