import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Navbar, Container, Nav, Form, FormControl } from "react-bootstrap";
function NavbarComponent({ searchQuery, setSearchQuery }) {
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    return (_jsx(Navbar, { bg: "light", expand: "lg", children: _jsxs(Container, { children: [_jsx(Navbar.Brand, { href: "#home", children: "Navbar" }), _jsx(Navbar.Toggle, { "aria-controls": "basic-navbar-nav" }), _jsxs(Navbar.Collapse, { id: "basic-navbar-nav", children: [_jsxs(Nav, { className: "me-auto", children: [_jsx(Nav.Link, { href: "#home", children: "Jobs" }), _jsx(Nav.Link, { href: "#home", children: "Signup" }), _jsx(Nav.Link, { href: "#home", children: "Sign-in" })] }), _jsx(Form, { className: "d-flex", children: _jsx(FormControl, { type: "search", value: searchQuery, onChange: handleSearchChange, placeholder: "Search", className: "me-2", "aria-label": "Search" }) })] })] }) }));
}
export default NavbarComponent;
