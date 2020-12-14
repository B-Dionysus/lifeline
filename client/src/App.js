import './App.css';
import Test from "./Test"
import React from "react";
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import config from './config';
import { withAuth } from '@okta/okta-react';
import { useAuth } from './components/auth';

import { OktaAuth } from '@okta/okta-auth-js';
import { Route, useHistory, Switch } from 'react-router-dom';
import CustomLoginComponent from './Login';
const App = withAuth(({ auth }) => {
  const [authenticated, user] = useAuth(auth);
  const history = useHistory(); // example from react-router  
  const customAuthHandler = () => {
    // Redirect to the /login page that has a CustomLoginComponent
    history.push('/login');
  };
  
  return (
  //   <Security
  //   oktaAuth={OktaAuth}
  //   onAuthRequired={customAuthHandler}
  // >
  <Security
  issuer={`${process.env.REACT_APP_OKTA_ORG_URL}/oauth2/default`}
  client_id={process.env.REACT_APP_OKTA_CLIENT_ID}
  redirect_uri={`${window.location.origin}/implicit/callback`}
>
  
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <Route path="/login/callback" component={LoginCallback} />
          <Route path="/login" component={CustomLoginComponent} />
          
          <SecureRoute path="/messages" component={Test} />
        <div>Now we need to implement user authentication</div>
        
    {authenticated !== null && (
      <button
        onClick={() => authenticated ? auth.logout() : auth.login()}
        className="App-link"
      >
        Log {authenticated ? 'out' : 'in'}
      </button>
    )}
      </header>
    </div>
    </Security>
  );
});

export default App;
