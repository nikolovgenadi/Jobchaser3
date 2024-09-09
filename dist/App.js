import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/navbar";
import List from "./components/list";
import Dashboard from "./components/dashboard";
import Login from "./components/AuthForm";
import Signup from "./components/AuthForm";
import { AuthProvider } from "./firebase/auth";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
    const [searchQuery, setSearchQuery] = useState("");
    return (_jsx(AuthProvider, { children: _jsxs(Router, { children: [_jsx(NavbarComponent, { searchQuery: searchQuery, setSearchQuery: setSearchQuery }), _jsxs(Routes, { children: [_jsx(Route, { path: "/signup", element: _jsx(Signup, { onAuth: true }) }), _jsx(Route, { path: "/login", element: _jsx(Login, { onAuth: false }) }), _jsx(Route, { path: "/dashboard", element: _jsx(ProtectedRoute, { children: _jsx(Dashboard, {}) }) }), _jsx(Route, { path: "/", element: _jsx(List, { searchQuery: searchQuery }) })] })] }) }));
}
export default App;
//# sourceMappingURL=App.js.map