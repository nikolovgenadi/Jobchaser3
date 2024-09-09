import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function NavbarComponent({ searchQuery, setSearchQuery }) {
    const navigate = useNavigate();
    const handleAuth = (isSignup) => {
        navigate(`${isSignup ? "/signup" : "/login"}`);
    };
    return (_jsx("nav", { className: "navbar navbar-expand-lg navbar-light bg-light", children: _jsxs("div", { className: "container-fluid", children: [_jsx(Link, { className: "navbar-brand", to: "/", children: "Job Chaser" }), _jsx("button", { className: "navbar-toggler", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#navbarNav", "aria-controls": "navbarNav", "aria-expanded": "false", "aria-label": "Toggle navigation", children: _jsx("span", { className: "navbar-toggler-icon" }) }), _jsxs("div", { className: "collapse navbar-collapse", id: "navbarNav", children: [_jsxs("ul", { className: "navbar-nav", children: [_jsx("li", { className: "nav-item", children: _jsx(Link, { className: "nav-link", to: "/dashboard", children: "Dashboard" }) }), _jsx("li", { className: "nav-item", children: _jsx("a", { className: "nav-link", onClick: () => handleAuth(false), children: "Sign In" }) }), _jsx("li", { className: "nav-item", children: _jsx("a", { className: "nav-link", onClick: () => handleAuth(true), children: "Sign Up" }) })] }), _jsx("form", { className: "d-flex", children: _jsx("input", { className: "form-control me-2", type: "text", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), placeholder: "Search", "aria-label": "Search" }) })] })] }) }));
}
export default NavbarComponent;
//# sourceMappingURL=navbar.js.map