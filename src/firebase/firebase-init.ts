import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "./firebase-config";

let app: FirebaseApp | null = null;

interface WindowWithFirebase {
  firebase: FirebaseApp;
}

if (typeof window !== "undefined") {
  app = initializeApp(firebaseConfig);
} else {
  // Initialize Firebase app without window
  const firebaseApp = initializeApp(firebaseConfig);
  (window as unknown as WindowWithFirebase).firebase = firebaseApp;
}

export const auth = app ? getAuth(app) : null;
export default app || null;
