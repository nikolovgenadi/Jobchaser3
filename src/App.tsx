import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/navbar";
import List from "./components/list";
import Dashboard from "./components/dashboard";
import Login from "./components/AuthForm";
import Signup from "./components/AuthForm";
import { AuthProvider } from "./firebase/auth";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthForm from "./components/AuthForm";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <AuthProvider>
      <Router>
        <NavbarComponent
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <AuthForm onAuth={location.pathname.includes("/signup")} />
        <Routes>
          <Route path="/signup" element={<Signup onAuth={true} />} />
          <Route path="/login" element={<Login onAuth={false} />} />
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
