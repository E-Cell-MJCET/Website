// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDznJo4rl2AhHh-evcMeOluHyiGKUipxk",
  authDomain: "e-cell-fc64d.firebaseapp.com",
  projectId: "e-cell-fc64d",
  storageBucket: "e-cell-fc64d.appspot.com",
  messagingSenderId: "428965924201",
  appId: "1:428965924201:web:37fd7e48753540a161c1f8",
  measurementId: "G-RVM88W3QHK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
analytics.app.automaticDataCollectionEnabled = true;
