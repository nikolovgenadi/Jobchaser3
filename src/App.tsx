import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/navbar";
import List from "./components/list";
import Dashboard from "./components/dashboard";
import Login from "./components/AuthForm";
import Signup from "./components/AuthForm";
import { AuthProvider } from "./context/auth";
import ProtectedRoute from "./components/ProtectedRoute";
// import { getFirestore } from 'firebase/firestore';
// import {app} from "./firebaseInit";
// import {auth} from "./firebaseInit";

async function initFirebase() {
  (window as { firebase: typeof import("firebase/app") }).firebase =
    await import("firebase/app");
  await import("firebase/firestore");
}

initFirebase();

function App() {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <AuthProvider>
      <Router>
        <NavbarComponent
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<List searchQuery={searchQuery} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
