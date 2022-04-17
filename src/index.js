import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import setAuthorizationToken from "./utils/validations/setAuthorization Token"
import store from './redux/store';
import { setCurrentUser } from './redux/actions/authAction';
import jwtDecode from "jwt-decode"
import { Provider } from 'react-redux';

if(localStorage.loginToken){
  store.dispatch(setCurrentUser(jwtDecode(localStorage.loginToken)))
  setAuthorizationToken(localStorage.loginToken)
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
