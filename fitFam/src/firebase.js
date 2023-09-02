import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env_REACT_APP_FIREBASE_API_KEY,
  authDomain: "fitfam-da802.firebaseapp.com",
  projectId: "fitfam-da802",
  storageBucket: "fitfam-da802.appspot.com",
  messagingSenderId: process.env_REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env_REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env_REACT_APP_FIREBASE_MEASUREMENTID,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
