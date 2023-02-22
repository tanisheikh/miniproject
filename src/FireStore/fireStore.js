// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj5RvJPmw4uP62YuyWpZxWaV265_Gmvp0",
  authDomain: "todoappproject-f94fe.firebaseapp.com",
  projectId: "todoappproject-f94fe",
  storageBucket: "todoappproject-f94fe.appspot.com",
  messagingSenderId: "612407078498",
  appId: "1:612407078498:web:33499e2eafe9e9ee22eb3b",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
