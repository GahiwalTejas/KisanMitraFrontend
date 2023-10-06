import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute(props) {
  const isUserLoggedIn = window.sessionStorage.getItem("isUserLoggedIn");

  if (isUserLoggedIn === "true") {
    return <Route exact path={props.path} component={props.component} />;
  } else {
    return <Redirect to="/registration" />;
  }
}

export default ProtectedRoute;