import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../firebase/auth";
function ProtectedRoute({ children }) {
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useContext(AuthContext);
    if (!user &&
        (location.pathname === "/login" || location.pathname === "/signup")) {
        navigate("/login");
    }
    return children;
}
export default ProtectedRoute;
//# sourceMappingURL=ProtectedRoute.js.map