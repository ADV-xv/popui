import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import { signupUser } from "../utils/auth";

export default function Signup() {
  const nav = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignup = () => {
    signupUser(user);
    nav("/login");
  };

  return (
    <div style={{ padding: "24px" }}>
      <h2>Create your PopX account</h2>

      <Input
        placeholder="Full Name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />

      <Input
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />

      <Input
        placeholder="Password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />

      <Button text="Create Account" onClick={handleSignup} />
    </div>
  );
}   