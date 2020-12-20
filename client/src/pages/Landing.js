import React, { Fragment, useContext, useEffect } from "react";
import AuthContext from "../context/auth/authContext";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar"
const Landing = () => {
  const authContext = useContext(AuthContext);

  const { user } = authContext;
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <NavBar />
                {!user ? (
            <Link to="login">
              <button>Login</button>
            </Link>  
          ) : (
            <Link to="/test">
            <button>
              Hello and welcome!</button>
            </Link>
          )}
    </Fragment>
  );
};

export default Landing;
