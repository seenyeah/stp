// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJFrzgBVGHB0FV6KX458WfcKiX8syWwjg",
  authDomain: "loginapp-7c555.firebaseapp.com",
  projectId: "loginapp-7c555",
  storageBucket: "loginapp-7c555.appspot.com",
  messagingSenderId: "677266336381",
  appId: "1:677266336381:web:9b9e02e88b07bbc0335f14",
  measurementId: "G-NL9B980BQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app);
export const auth=getAuth();
export default {app};