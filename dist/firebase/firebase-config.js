// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyBoIsMhxktT-huJCa3C6Hyh1xkJ3_VPJCU",
    authDomain: "jobchaser-79072.firebaseapp.com",
    databaseURL: "https://jobchaser-79072-default-rtdb.firebaseio.com",
    projectId: "jobchaser-79072",
    storageBucket: "jobchaser-79072.appspot.com",
    messagingSenderId: "917761348451",
    appId: "1:917761348451:web:1fd48a02f2c78510453956",
    measurementId: "G-L9EB9VCHEE",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//# sourceMappingURL=firebase-config.js.map