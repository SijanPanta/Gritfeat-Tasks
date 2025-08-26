import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("isAuth", "true");

      // Dispatch custom event to notify App component that auth status changed
      window.dispatchEvent(new Event("authChange"));

      navigate("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="p-6 border rounded-lg w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-2"
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-2"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <Button className="w-full mt-2" onClick={handleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
}
