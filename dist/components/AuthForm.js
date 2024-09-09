import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
function AuthForm({ onAuth }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const validateInput = () => {
        const errors = [];
        if (!email)
            errors.push("Email is required");
        if (!password)
            errors.push("Password is required");
        if (onAuth && !displayName)
            errors.push("Display Name is required for sign up");
        return errors;
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const errors = validateInput();
        if (errors.length > 0) {
            setError(errors.join(", "));
            return;
        }
        try {
            if (onAuth) {
                await createUserWithEmailAndPassword(auth, email, password);
                await updateProfile(auth.currentUser, {
                    displayName: displayName.trim(),
                });
                navigate("/dashboard");
            }
            else {
                await signInWithEmailAndPassword(auth, email, password);
                navigate("/dashboard");
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.error("Firebase Error:", error.message);
                setError(error.message);
            }
            else if (typeof error === "object") {
                console.error("Firebase Error:", JSON.stringify(error));
                setError("An unexpected error occurred");
            }
        }
    };
    return (_jsxs("form", { onSubmit: handleSubmit, children: [_jsx("input", { id: "email-address", name: "email", type: "email", placeholder: "Email address", onChange: (e) => setEmail(e.target.value), required: true }), _jsx("input", { id: "password", name: "password", type: "password", placeholder: "Password", onChange: (e) => setPassword(e.target.value), required: true }), onAuth && (_jsxs(_Fragment, { children: [_jsx("input", { id: "confirm-password", name: "confirmPassword", type: "password", placeholder: "Confirm Password", onChange: (e) => setPassword(e.target.value), required: true }), _jsx("input", { id: "display-name", name: "displayName", type: "text", placeholder: "Display Name", onChange: (e) => setDisplayName(e.target.value), required: true })] })), error && _jsx("p", { className: "error", children: error }), _jsx("button", { type: "submit", children: onAuth ? "Sign Up" : "Log In" })] }));
}
export default AuthForm;
//# sourceMappingURL=AuthForm.js.map