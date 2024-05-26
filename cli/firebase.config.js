// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "techmart-9617d.firebaseapp.com",
  projectId: "techmart-9617d",
  storageBucket: "techmart-9617d.appspot.com",
  messagingSenderId: "743960018442",
  appId: "1:743960018442:web:aaa5d405b62d1e0db6a9f3",
  measurementId: "G-7DT7J7NXJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth=getAuth();
export const storage=getStorage();
export default app;