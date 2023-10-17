// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2eN8k944Hk6VCi1QpEHhFii6li7WWu80",
  authDomain: "ecell-website-49178.firebaseapp.com",
  projectId: "ecell-website-49178",
  storageBucket: "ecell-website-49178.appspot.com",
  messagingSenderId: "176545755436",
  appId: "1:176545755436:web:0dd3fc134414d49558fc89",
  measurementId: "G-1GJ2ZFWLC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);