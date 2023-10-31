// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALVTuLvE8WQAScR3BQbb98K43zFep8Ekc",
  authDomain: "furesta-db.firebaseapp.com",
  databaseURL: "https://furesta-db-default-rtdb.firebaseio.com",
  projectId: "furesta-db",
  storageBucket: "furesta-db.appspot.com",
  messagingSenderId: "514379487567",
  appId: "1:514379487567:web:f8ed5df741015e8c848d3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);