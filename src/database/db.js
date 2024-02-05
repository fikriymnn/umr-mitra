// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz3N2aMtccSfS_3bTUyh4LFq3xFWniODI",
  authDomain: "ibadahku-34d2d.firebaseapp.com",
  projectId: "ibadahku-34d2d",
  storageBucket: "ibadahku-34d2d.appspot.com",
  messagingSenderId: "328514384121",
  appId: "1:328514384121:web:6c69af0d065dbbcc9d7228",
  measurementId: "G-CJPYFRFP9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);