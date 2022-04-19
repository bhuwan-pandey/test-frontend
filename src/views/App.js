import React from "react";
import "antd/dist/antd.css";
import Navbar from "./navbar/navbar";
import LoginForm from "./auth/login";
import { verifyToken } from "../auth/auth";
import { encodedToken, decodedToken, tokenKey } from "../constants/constants";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

class App extends React.Component {
  state = {};

  render() {
    encodedToken.value = localStorage.getItem(tokenKey);
    decodedToken.value = verifyToken();
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginForm}></Route>
          {!decodedToken.value || !decodedToken.value.remember ? (
            <Redirect to="/login"></Redirect>
          ) : null}
          <Route path="/" component={Navbar}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
