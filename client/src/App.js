import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Auth context states
// Many thanks to Owen Roth for demoing this code (and all the rest of the auth code here) for me in bootcamp!
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/routing/PrivateRoute";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// // auth components
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from "./utils/Alerts";
// Pages
import Test from "./pages/Test";
import Admin from "./pages/Admin";
import Lifeline from "./pages/Lifeline";
// Put login token in local storage
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <div className="App">
      <header className="App-header main">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <AuthState>
          <AlertState>
              <Router>
              <Alert />
                <NavBar />
                  <Route exact path="/" component={Lifeline} />   
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />            
                  <PrivateRoute exact path="/test" component={Test} />    
                  <PrivateRoute exact path="/admin" component={Admin} />   
              </Router>
          </AlertState>
        </AuthState>
      </header>  
      <Footer />   
    </div>
  );
}

export default App;
