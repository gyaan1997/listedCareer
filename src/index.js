
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { Auth0Provider } from '@auth0/auth0-react';

// ReactDOM.render(
//   <Auth0Provider
//     domain="dev-1zi4d13h6zfmijzo.us.auth0.com"
//     clientId="C838oBXhjxXFYyFBQ8XyGKHU8APE7W4X"
//     redirectUri="http://localhost:3000/dashboard/callback"
//   >
//     <App />
//   </Auth0Provider>,
//   document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Auth0Provider
    domain="dev-1zi4d13h6zfmijzo.us.auth0.com"
    clientId="C838oBXhjxXFYyFBQ8XyGKHU8APE7W4X"
    authorizationParams={{
      redirect_uri: "http://localhost:3000/dashboard"
    }}
  >
    <App />
  </Auth0Provider>,

);
