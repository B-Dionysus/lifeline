import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Auth context states
// Many thanks to Owen Roth for demoing this code (and all the rest of the auth code here) for me in bootcamp!
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/routing/PrivateRoute";
// // auth components
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from "./utils/Alerts";

// Pages
import Landing from "./pages/Landing";

// Put login token in local storage
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <AuthState>
          <AlertState>
              <Router>
              <Alert />
                  <Route exact path="/" component={Landing} />   
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />            
                  <PrivateRoute exact path="/test" />        
              </Router>
          </AlertState>
        </AuthState>
        <div>We are set like Fett!</div>
      </header>
    </div>
  );
}

export default App;
