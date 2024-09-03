import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBoIsMhxktT-huJCa3C6Hyh1xkJ3_VPJCU",
  authDomain: "jobchaser-79072.firebaseapp.com",
  projectId: "jobchaser-79072",
  storageBucket: "jobchaser-79072.appspot.com",
  messagingSenderId: "917761348451",
  appId: "1:917761348451:web:1fd48a02f2c78510453956",
  measurementId: "G-L9EB9VCHEE",
};

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
