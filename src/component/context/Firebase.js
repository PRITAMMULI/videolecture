// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCvD7-Ge7zmZttYTWrTmiNWcw5Ei96ICck",
  authDomain: "videolecture-61692.firebaseapp.com",
  projectId: "videolecture-61692",
  storageBucket: "videolecture-61692.appspot.com",
  messagingSenderId: "82423608354",
  appId: "1:82423608354:web:fd63650afbc73e6a85c67b",
  measurementId: "G-X3JCKMYS4N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider()
const auth = getAuth();
const storage = getStorage(app)
export { auth, db, provider, storage };

// muli.pritam@gmail.co
