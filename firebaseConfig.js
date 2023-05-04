// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgpT9y7OZpP4qiWCcKzMdmvLvIjNYZelQ",
  authDomain: "stickman-todo.firebaseapp.com",
  projectId: "stickman-todo",
  storageBucket: "stickman-todo.appspot.com",
  messagingSenderId: "153892138532",
  appId: "1:153892138532:web:ee55e908c05368533432b1",
  measurementId: "G-1KXT4NXNLZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// const analytics = getAnalytics(app);
