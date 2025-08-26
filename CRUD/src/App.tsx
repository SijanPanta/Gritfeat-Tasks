import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

export default function App() {
  // Force initial state to false to ensure login is required
  const [isAuth, setIsAuth] = useState(false);

  // Listen for changes in localStorage
  useEffect(() => {
    // Clear any existing auth on initial load to ensure login is required
    localStorage.removeItem("isAuth");

    const checkAuth = () => {
      const authStatus = localStorage.getItem("isAuth") === "true";
      console.log("Auth status:", authStatus);
      setIsAuth(authStatus);
    };

    // Check auth on mount
    checkAuth();

    // Add event listener for storage changes (in case of multiple tabs)
    window.addEventListener("storage", checkAuth);

    // Custom event for auth changes within the same tab
    window.addEventListener("authChange", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
      window.removeEventListener("authChange", checkAuth);
    };
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
