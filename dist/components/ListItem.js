import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useFetchData from "./useFetchData";
import "bootstrap/dist/css/bootstrap.min.css";
function ListItem({ item, searchQuery, }) {
    const { jobs, isLoading /* unused */, error /* unused */ } = useFetchData();
    const filteredJobs = jobs.filter((i) => i.position.toLowerCase().includes(searchQuery.toLowerCase()));
    return (_jsx("div", { className: "accordion", id: "accordionPanelsStayOpenExample", children: _jsx("div", { className: "accordion-item", children: filteredJobs.length > 0 ? (_jsxs("div", { children: [_jsx("h2", { className: "accordion-header", children: _jsx("button", { className: "accordion-button", type: "button", "data-bs-toggle": "collapse", "data-bs-target": `#collapse${item.id}`, "aria-expanded": "true", "aria-controls": `collapse${item.id}`, children: item.position }) }), _jsx("div", { id: `collapse${item.id}`, className: "accordion-collapse collapse", children: _jsxs("div", { className: "accordion-body", children: [_jsx("h3", { className: "accordion-header", children: item.role }), _jsx("p", { className: "accordion-header", children: item.company }), _jsx("p", { className: "accordion-header", children: item.location }), _jsx("p", { className: "accordion-header", children: item.postedAt }), _jsx("p", { className: "accordion-header", children: item.tools }), item.languages.map((lang, index) => (_jsx("p", { className: "accordion-header", children: lang.name }, `${lang.name}-${index}`)))] }, item.id) })] })) : (_jsxs("p", { children: ["No jobs found matching \"", searchQuery, "\""] })) }) }));
}
export default ListItem;
