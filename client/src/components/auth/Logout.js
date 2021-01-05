import React, { useContext, useEffect, Fragment } from "react";
import AuthContext from "../../context/auth/authContext";

const Logout = (props) => {
  const authContext = useContext(AuthContext);

  const { logout } = authContext;

  useEffect(() => {
    logout();
    props.history.push("/login");
    // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
    </Fragment>
  );
};
export default Logout;
