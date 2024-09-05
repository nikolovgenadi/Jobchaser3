import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebaseSetup";

interface AuthFormProps {
  onSignUp?: boolean;
}

function AuthForm({ onSignUp }: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState(""); // Added for sign up
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const validateInput = (): string[] => {
    const errors: string[] = [];
    if (!email) errors.push("Email is required");
    if (!password) errors.push("Password is required");
    if (password.length < 6)
      errors.push("Password must be at least 6 characters long");
    if (onSignUp && !displayName)
      errors.push("Display Name is required for sign up");
    return errors;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = validateInput();
    if (errors.length > 0) {
      setError(errors.join(", "));
      return;
    }
    try {
      if (onSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser!, {
          displayName: displayName.trim(),
        });
        navigate("/dashboard");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/dashboard");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Firebase Error:", error.message);
        setError(error.message);
      } else if (typeof error === "object") {
        console.error("Firebase Error:", JSON.stringify(error));
        setError("An unexpected error occurred");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="email-address"
        name="email"
        type="email"
        placeholder="Email address"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {onSignUp && (
        <>
          <input
            id="display-name"
            name="displayName"
            type="text"
            placeholder="Display Name"
            onChange={(e) => setDisplayName(e.target.value)}
            required
          />
          <input
            id="confirm-password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </>
      )}
      {error && <p className="error">{error}</p>}
      <button type="submit">{onSignUp ? "Sign Up" : "Log In"}</button>
    </form>
  );
}

export default AuthForm;
