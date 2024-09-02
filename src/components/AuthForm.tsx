import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "../firebase";

interface AuthFormProps {
  onSignUp?: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ onSignUp = false }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (onSignUp) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          email,
          password
        );
        await updateProfile(userCredential.user!, { displayName: name });
        navigate("/dashboard");
      } catch (error) {
        console.error("Error creating user:", error);
      }
    } else {
      try {
        await signInWithEmailAndPassword(email, password);
        navigate("/dashboard");
      } catch (error) {
        console.error("Error signing in:", error);
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
      {onSignUp && (
        <>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </>
      )}
      <button type="submit">{onSignUp ? "Sign Up" : "Log In"}</button>
    </form>
  );
};

export default AuthForm;
// npx tsc --watch
