import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const nav = useNavigate();

  return (
    <div className="page" style={{ justifyContent: "flex-end" }}>
      <div>
        <h2>Welcome to PopX</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <button onClick={() => nav("/signup")} className="primary">
          Create Account
        </button>

        <button onClick={() => nav("/login")} className="secondary">
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}