import { User } from "firebase/auth";
import { UserCredential } from "firebase/auth";
import { auth } from "./firebase-config";

declare global {
  interface Window {
    firebase: typeof import("firebase/app");
  }
}

declare module "firebase/auth" {
  interface Auth {
    createUserWithEmailAndPassword(
      email: string,
      password: string
    ): Promise<UserCredential>;
    signInWithEmailAndPassword(
      email: string,
      password: string
    ): Promise<UserCredential>;
    updateProfile(user: User | null, profile: Partial<User>): Promise<void>;
  }
}

export const createUserWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<UserCredential> => {
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

export * from "firebase/auth";
