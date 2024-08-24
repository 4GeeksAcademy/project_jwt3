import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Navbar");
  }, [store.token]);

  const handleClick = () => {
    !store.token && navigate("/login");
    actions.logOut();
  };
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Home</span>
        </Link>
        <div className="ml-auto">
          {!store.token ? (
            <>
              <Link to="/login">
                <button className="btn btn-primary">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="btn btn-secondary ml-2">
                  Register
                </button>
              </Link>
            </>
          ) : (
            <button className="btn btn-danger" onClick={handleClick}>
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
