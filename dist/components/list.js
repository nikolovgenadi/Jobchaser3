import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import useFetchData from "./useFetchData";
import ListItem from "./ListItem";
import "bootstrap/dist/css/bootstrap.min.css";
function List({ searchQuery }) {
    const { jobs, isLoading, error } = useFetchData();
    const filteredJobs = jobs.filter((i) => i.position.toLowerCase().includes(searchQuery.toLowerCase()));
    return (_jsx("div", { className: "accordion", id: "accordionPanelsStayOpenExample", children: _jsx("div", { className: "accordion-item", children: isLoading ? (_jsx("p", { children: "Loading..." })) : error ? (_jsxs("p", { children: ["Error: ", error] })) : (_jsx(_Fragment, { children: filteredJobs.map((item) => (_jsx(ListItem, { item: item, searchQuery: searchQuery }, item.id))) })) }) }));
}
export default List;
