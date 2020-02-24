import React from "react";
import { Route, Redirect } from "react-router-dom";
import UserPanel from "./UserPanel";
const permission = true;
const userData = { id: 1, name: "Mateusz", points: 120, money: 4000 };
const UserPage = () => {
  return (
    <Route
      render={() =>
        permission ? (
          <UserPanel userData={userData} />
        ) : (
          <Redirect to="/Login" />
        )
      }
    />
  );
};

export default UserPage;
