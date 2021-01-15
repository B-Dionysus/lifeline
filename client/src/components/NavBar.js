import React, { useContext, useEffect } from "react";
import AuthContext from "../context/auth/authContext";
import { Link } from "react-router-dom"; 
export default function NavBar(props){
    const authContext = useContext(AuthContext);

    const { user } = authContext;
    useEffect(() => {
      authContext.loadUser();
      // eslint-disable-next-line
    }, []);
console.log(user);
    function share(){
        let tempURL= `${document.location.origin}?id=${user._id}`;
        navigator.clipboard.writeText(tempURL);
        alert(`Copied to clipboard\n ${tempURL}`);
    }
    return(
    <nav className="navbar navbar-expand-lg justify-content-between">
    <Link to="/"><span className="navbar-brand"><i className="fas fa-birthday-cake"> Lifeline</i></span></Link>
    <div className="navbar-nav">
       <span className="nav-item nav-link">{!user ? "" : user.name} </span>
    </div>
    <div className="navbar-nav">
        {user && (<span className="nav-item nav-link" onClick={share}>Share <i className="fas fa-share-alt"></i></span>)}
    </div>
    <div className="navbar-nav">
        {user && (<span className="nav-item nav-link"><Link to="admin">Edit Events</Link></span>)}
    </div>
    <div className="navbar-nav">
        <span className="theme-toggle" onClick={props.switchTheme}>{props.theme==="light" ? "Light Mode" : "Dark Mode"} <i className="fas fa-toggle-off"/><i className="fas fa-toggle-on"/></span>
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
