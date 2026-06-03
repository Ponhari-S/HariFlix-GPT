import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuQPCXXfJmfa1V5MhAH8DRGhoRuoNO4_M",
  authDomain: "hariflix-gpt.firebaseapp.com",
  projectId: "hariflix-gpt",
  storageBucket: "hariflix-gpt.firebasestorage.app",
  messagingSenderId: "940649706282",
  appId: "1:940649706282:web:d5888ebf01df051054e453",
  measurementId: "G-0FB0CWQPCL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
export const auth = getAuth(app);