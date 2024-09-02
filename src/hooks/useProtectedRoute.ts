import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function useProtectedRoute() {
  const location = useLocation();
  const { user } = useContext(AuthContext);

  if (!user && location.pathname !== "/login") {
    window.location.href = "/login";
  }
}
