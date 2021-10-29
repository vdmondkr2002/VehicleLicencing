import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
// import { connect } from "react-redux";

const PrivateRoute = ({
  component: Component,
  ...rest
}) => {
  const auth = useSelector(state=>state.auth)
  return (
    <Route
      {...rest}
      render={props =>
        !auth.isAuthenticated && !auth.loading ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};


export default PrivateRoute;
