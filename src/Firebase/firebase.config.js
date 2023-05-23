// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKh625pdUpR1ztRGw3qxVG5CJ4I3U9InI",
  authDomain: "cafe-chefs.firebaseapp.com",
  projectId: "cafe-chefs",
  storageBucket: "cafe-chefs.appspot.com",
  messagingSenderId: "378864193237",
  appId: "1:378864193237:web:333483dde5b25746e21c5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;