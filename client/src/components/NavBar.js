import React, { useContext, useEffect } from "react";
import AuthContext from "../context/auth/authContext";
import { Link } from "react-router-dom"; 
export default function NavBar(){
    const authContext = useContext(AuthContext);

    const { user } = authContext;
    useEffect(() => {
      authContext.loadUser();
      // eslint-disable-next-line
    }, []);

    
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to="/"><span className="navbar-brand"><i className="fas fa-birthday-cake"> Lifeline</i></span></Link>
    <div className="navbar-nav">
       <span className="nav-item nav-link">{!user ? "" : user.name} </span>
    </div>
    <div className="navbar-nav">
        {user && (<span className="nav-item nav-link"><Link to="admin">Edit Events</Link></span>)}
    </div>
    <div className="navbar-nav">
        {!user ?
            (<span className="nav-item nav-link"><Link to="login">Login </Link> / <Link to="register">Register </Link></span>)
            :
            (<Link to="logout"><span className="nav-item nav-link">Logout</span></Link>)
        }
    </div>
    </nav>
    );
}
