/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { useState } from "react";
import List from "./components/list";
import NavbarComponent from "./components/navbar";
import { AuthProvider } from "./context/AuthContext";
import { initializeApp } from "firebase/app";
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

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <AuthProvider>
      <div className="App">
        <h1>Job Chaser</h1>
        <NavbarComponent
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <List searchQuery={searchQuery} />
      </div>
    </AuthProvider>
  );
}

export default App;
