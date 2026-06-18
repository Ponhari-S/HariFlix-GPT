import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { FIREBASE_API } from "./constants";

const firebaseConfig = {
  apiKey: FIREBASE_API,
  authDomain: "hariflix-gpt.firebaseapp.com",
  projectId: "hariflix-gpt",
  storageBucket: "hariflix-gpt.firebasestorage.app",
  messagingSenderId: "940649706282",
  appId: "1:940649706282:web:d5888ebf01df051054e453",
  measurementId: "G-0FB0CWQPCL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;