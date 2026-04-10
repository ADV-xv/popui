import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import { loginUser } from "../utils/auth";

export default function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (loginUser(email, password)) {
      nav("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={{ padding: "24px" }}>
      <h2>Signin to your PopX account</h2>

      <Input
        placeholder="Email Address"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button text="Login" onClick={handleLogin} />
    </div>
  );
}   