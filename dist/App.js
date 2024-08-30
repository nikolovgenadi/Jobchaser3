import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import List from "./components/list";
import NavbarComponent from "./components/navbar";
function App() {
    const [searchQuery, setSearchQuery] = useState("");
    return (_jsxs("div", { className: "App", children: [_jsx("h1", { children: "Job Chaser" }), _jsx(NavbarComponent, { searchQuery: searchQuery, setSearchQuery: setSearchQuery }), _jsx(List, { searchQuery: searchQuery })] }));
}
export default App;
