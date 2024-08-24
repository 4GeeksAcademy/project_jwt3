import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { useLocalStorage } from "../hooks/hooks";
import "../../styles/private.css"

const Private = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(store.token);
    !store.token && navigate("/login");
  }, [store.token]);
  console.log(store.profile);

  return (
    <div className="text-center mt-5">
    <h1 className="home-title">Bienvenido a la Página Privada</h1>
    <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnLZY33k74UbCFi6Auop5cmcbYIjiyDWysViZMu0qT75n7WRxxlXKXjPs_Ugn5Rap1H4IS6nOzkWI3ImYKUrGQ697ycqoQFz1KRTUtyGlrHSZ1pfrd4hqRIwAiOPo4jtVl479T_PhXZ2I/s1600/seguridad-1.gif"
        alt="Loading..."
        className="private-gif"
      />
  </div>
  );
};

export default Private;