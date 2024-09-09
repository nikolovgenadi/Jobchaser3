import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase-config";
export const AuthContext = createContext({ user: null });
export const AuthProvider = ({ children, }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);
    return (_jsx(AuthContext.Provider, { value: { user }, children: children }));
};
//# sourceMappingURL=auth.js.map