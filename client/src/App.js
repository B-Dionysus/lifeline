import './css/App.css';
import React, {useState} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Auth context states
// Many thanks to Owen Roth for demoing this code (and all the rest of the auth code here) for me in bootcamp!
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/routing/PrivateRoute";

import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes"
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// // auth components
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";

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
  let defaultTheme="light";
  defaultTheme=localStorage.getItem("theme");
  const [theme, setTheme] = useState(defaultTheme);
  const themeToggler = () => {
  if(theme==="light"){
    setTheme("dark");
    localStorage.setItem("theme", "dark");
  }
  else {
    setTheme("light");
    localStorage.setItem("theme", "light");
  }
}
  return (
    <div className="App">
      <header className="App-header main">
        <AuthState>
          <AlertState>
          <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
              <Router>
              <Alert />
                <NavBar switchTheme={themeToggler} theme={theme}/>
                  <Route exact path="/" component={Lifeline} />   
                  <Route exact path="/user" component={Lifeline} />   
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />        
                  <Route exact path="/logout" component={Logout} />            
                  <PrivateRoute exact path="/test" component={Test} />    
                  <PrivateRoute exact path="/admin" component={Admin} />   
              </Router>
              </ThemeProvider>
          </AlertState>
        </AuthState>
      </header>  
      <Footer />   
    </div>
  );
}

export default App;
