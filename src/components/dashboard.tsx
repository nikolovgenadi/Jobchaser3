import React from "react";
import { useProtectedRoute } from "../hooks/useProtectedRoute";

const Dashboard: React.FC = () => {
  useProtectedRoute();

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      {}
    </div>
  );
};

export default Dashboard;
