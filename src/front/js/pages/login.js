import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css";

const Login = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (store.token) {
      navigate("/private");
    }
    return () => {
      setUser({
        email: "",
        password: "",
      });
    };
  }, [store.token, navigate]);

  const handleLogin = async () => {
    const login = await actions.login(user);
    if (login) {
      alert("Login was successful");
      navigate("/private");
    } else {
      alert("Unable to login");
      setUser({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="login-form">
      <section>
        <h1>Login</h1>
        <div className="content">
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
        </div>
        <div className="action">
          <button onClick={handleLogin}>Sign in</button>
        </div>
      </section>
    </div>
  );
};

export default Login;