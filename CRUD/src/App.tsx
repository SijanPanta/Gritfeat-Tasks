import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const authStatus = localStorage.getItem("isAuth") === "true";
      console.log("Auth status:", authStatus);
      setIsAuth(authStatus);
    };

    checkAuth();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={isAuth ? <Navigate to="/dashboard" /> : <Login />}
      />
      <Route
        path="/dashboard"
        element={isAuth ? <Dashboard /> : <Navigate to="/" />}
      />
    </Routes>
  );
}
