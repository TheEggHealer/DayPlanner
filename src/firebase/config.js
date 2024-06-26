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
  apiKey: "AIzaSyCUy4Vd1jWrc9nvd-MpCMzsCBM2BCJFPY4",
  authDomain: "day-planner-b7648.firebaseapp.com",
  projectId: "day-planner-b7648",
  storageBucket: "day-planner-b7648.appspot.com",
  messagingSenderId: "369368998485",
  appId: "1:369368998485:web:747931c2c6693fc5feeadc",
  measurementId: "G-EDXSQBQPY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };