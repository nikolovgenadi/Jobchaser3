import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { User } from "firebase/auth";
// import { auth } from "./firebaseConfig";

declare global {
  interface Window {
    firebase: typeof import("firebase/app");
  }
}

const firebaseConfig = {
  apiKey: "AIzaSyBoIsMhxktT-huJCa3C6Hyh1xkJ3_VPJCU",
  authDomain: "jobchaser-79072.firebaseapp.com",
  projectId: "jobchaser-79072",
  storageBucket: "jobchaser-79072.appspot.com",
  messagingSenderId: "917761348451",
  appId: "1:917761348451:web:1fd48a02f2c78510453956",
  measurementId: "G-L9EB9VCHEE",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Define these functions here instead of binding them
export const createUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  return await auth.createUserWithEmailAndPassword(email, password);
};

export const signInWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  return await auth.signInWithEmailAndPassword(email, password);
};

export const updateProfile = async (
  user: User | null,
  profile: Partial<User>
) => {
  try {
    if (user) {
      await auth.updateProfile(user, profile);
    }
  } catch (error) {
    console.error("Error updating profile:", error);
  }
};
