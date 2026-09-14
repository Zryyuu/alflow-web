import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

const firebaseConfig = {
  apiKey: "AIzaSyCtfgGrheQKz9QxF_G07D4vqrUN3O6XdPk",
  authDomain: "todolist-5c453.firebaseapp.com",
  projectId: "todolist-5c453",
  storageBucket: "todolist-5c453.firebasestorage.app",
  messagingSenderId: "724958697708",
  appId: "1:724958697708:web:038915d1e1437618e92dc9",
  measurementId: "G-X94G90VRC1",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

if (
  typeof window !== "undefined" &&
  process.env.NODE_ENV === "production" &&
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
) {
  initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY),
    isTokenAutoRefreshEnabled: true,
  });
}

const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, db, googleProvider };
