import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function PublicRoute(props) {
  const loginStatus = useSelector((state) => state.user.loginStatus);
  return (
    <React.Fragment>
      {loginStatus === "Success" ? (
        <Redirect to="/home"></Redirect>
      ) : (
        <Route exact path={props.path} component={props.component}></Route>
      )}
    </React.Fragment>
  );
}
export default PublicRoute;
