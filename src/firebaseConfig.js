// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCn25K96ToTPyRC1YA-eKcw5HT6XSI2Us",
  authDomain: "date-planner-c74d2.firebaseapp.com",
  databaseURL: "https://date-planner-c74d2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "date-planner-c74d2",
  storageBucket: "date-planner-c74d2.firebasestorage.app",
  messagingSenderId: "625313855497",
  appId: "1:625313855497:web:cf57ccf0c0a02ae06720d8",
  measurementId: "G-1H5779E8SF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };