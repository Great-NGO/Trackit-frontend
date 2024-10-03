/* eslint-disable react/prop-types */
// ProtectedAdminRoute.jsx

// import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedAdminRoute = ({ component: Component, isAuthenticated, isAdmin, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
      isAuthenticated && isAdmin ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    )} />
  );
}

export default ProtectedAdminRoute;
