import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute(props) {
  const loginStatus = useSelector((state) => state.user.loginStatus);
  return (
    <React.Fragment>
      {loginStatus === "Success" ? (
        <Route path={props.path} component={props.component}></Route>
      ) :
      <Redirect to="/"></Redirect>
      }
    </React.Fragment>
  );
}
export default PrivateRoute;
