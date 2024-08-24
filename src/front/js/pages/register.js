import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css";

const Register = () => {
  const navigate = useNavigate();
  const { actions } = useContext(Context);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password_check: "",
  });
  const [error, setError] = useState("");

  const handleRegister = async () => {
    if (user.password === user.password_check && user.password !== "") {
      const createUser = await actions.createUser(user);
      if (createUser) {
        navigate("/login");
      } else {
        setError("An unexpected error occurred");
      }
    } else {
      setError("Passwords do not match or are empty");
      setUser({ ...user, password: "", password_check: "" });
    }
  };

  return (
    <div className="login-form">
      <section>
        <h1>Register</h1>
        {error && <div className="error-message">{error}</div>}
        <div className="content">
          <div className="input-field">
            <input
              type="text"
              value={user.name}
              placeholder="Name"
              autoComplete="nope"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>
          <div className="input-field">
            <input
              type="email"
              value={user.email}
              placeholder="Email"
              autoComplete="nope"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              value={user.password}
              placeholder="Password"
              autoComplete="new-password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              value={user.password_check}
              placeholder="Repeat Password"
              autoComplete="new-password"
              onChange={(e) => setUser({ ...user, password_check: e.target.value })}
            />
          </div>
        </div>
        <div className="action">
          <button onClick={handleRegister}>Register</button>
        </div>
      </section>
    </div>
  );
};

export default Register;