import React, { useState } from "react";
import List from "./components/list";
import NavbarComponent from "./components/navigation/navbar";
import Login from "./src/components/auth/login";
import Register from "./components/auth/register";
import Header from "./components/navigation/header";
import Home from "./components/navigation/home";
import { AuthProvider } from "./components/auth/contexts";
import { useRoutes } from "@router";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ];

  let routesElement = useRoutes(routesArray);

  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <NavbarComponent
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <List searchQuery={searchQuery} />
      </AuthProvider>
    </div>
  );
}

export default App;
