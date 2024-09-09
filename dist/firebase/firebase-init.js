import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "./firebase-config";
let app = null;
if (typeof window !== "undefined") {
    app = initializeApp(firebaseConfig);
}
else {
    // Initialize Firebase app without window
    const firebaseApp = initializeApp(firebaseConfig);
    window.firebase = firebaseApp;
}
export const auth = app ? getAuth(app) : null;
export default app || null;
//# sourceMappingURL=firebase-init.js.map