import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../utils/auth";

export default function Signup() {
  const nav = useNavigate();

  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });

  const handleSignup = () => {
    signupUser(user);
    nav("/login");
  };

  return (
    <div className="page">
      <h2>Create your PopX account</h2>

      <label>Full Name*</label>
      <input
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />

      <label>Phone number*</label>
      <input
        value={user.phone}
        onChange={(e) => setUser({ ...user, phone: e.target.value })}
      />

      <label>Email address*</label>
      <input
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />

      <label>Password*</label>
      <input
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />

      <label>Company name</label>
      <input
        value={user.company}
        onChange={(e) => setUser({ ...user, company: e.target.value })}
      />

      <label>Are you an Agency?</label>
      <div className="radio-group">
        <label>
          <input
            type="radio"
            checked={user.isAgency === "yes"}
            onChange={() => setUser({ ...user, isAgency: "yes" })}
          />
          Yes
        </label>

        <label>
          <input
            type="radio"
            checked={user.isAgency === "no"}
            onChange={() => setUser({ ...user, isAgency: "no" })}
          />
          No
        </label>
      </div>

      <button className="primary" onClick={handleSignup}>
        Create Account
      </button>
    </div>
  );
}