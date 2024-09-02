import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../firebase/firebase";

interface AuthFormProps {
  onSignUp?: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ onSignUp = false }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      if (onSignUp) {
        await createUserWithEmailAndPassword(email, password);
        navigate("/dashboard");
      } else {
        await signInWithEmailAndPassword(email, password);
        navigate("/dashboard");
      }
    } catch (error: unknown) {
      console.error("Error:", error);
      if (typeof error === "object" && error !== null) {
        alert((error as Error).message || "An unexpected error occurred.");
      } else {
        alert("An unexpected error occurred.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">{onSignUp ? "Sign Up" : "Log In"}</button>
    </form>
  );
};

export default AuthForm;
