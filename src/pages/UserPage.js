import React from "react";
import { Route, Redirect } from "react-router-dom";

const permission = true;

const UserPage = () => {
  return (
    <Route
      render={() =>
        permission ? <h3>*Panel użytkownika*</h3> : <Redirect to="/Login" />
      }
    />
  );
};

export default UserPage;
