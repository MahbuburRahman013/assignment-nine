// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEXChbjsHNlMLIlDYoxxOI9wApfZpcMT0",
  authDomain: "assignment-nine-7e101.firebaseapp.com",
  projectId: "assignment-nine-7e101",
  storageBucket: "assignment-nine-7e101.appspot.com",
  messagingSenderId: "967798199374",
  appId: "1:967798199374:web:93b06084d6b29b3da5df1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth; 