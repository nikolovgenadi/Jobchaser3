import { auth } from "./firebase-config";
export const createUserWithEmailAndPassword = async (email, password) => {
    return await auth.createUserWithEmailAndPassword(email, password);
};
export const signInWithEmailAndPassword = async (email, password) => {
    return await auth.signInWithEmailAndPassword(email, password);
};
export const updateProfile = async (user, profile) => {
    try {
        if (user) {
            await auth.updateProfile(user, profile);
        }
    }
    catch (error) {
        console.error("Error updating profile:", error);
    }
};
export * from "firebase/auth";
//# sourceMappingURL=firebase.js.map