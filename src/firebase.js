// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWWjVOkqnM6lC2TCcq5i2CkaKIPetBwg4",
  authDomain: "linkedin-clone-339c1.firebaseapp.com",
  projectId: "linkedin-clone-339c1",
  storageBucket: "linkedin-clone-339c1.appspot.com",
  messagingSenderId: "549624736757",
  appId: "1:549624736757:web:be68048865d428c7aa0ebc"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {
  auth,db
}