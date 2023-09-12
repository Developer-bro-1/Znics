
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyC16DVri9PO2JzE2s3JYT35p4y7pberY4Y",
  authDomain: "znics-project.firebaseapp.com",
  projectId: "znics-project",
  storageBucket: "znics-project.appspot.com",
  messagingSenderId: "998798426395",
  appId: "1:998798426395:web:7172f71aed47df843f93be",
  measurementId: "G-0B8FE8TYPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();