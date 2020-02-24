import React from "react";
import { Link } from "react-router-dom";
import "../styles/UserPanel.css";

const UserPanel = props => {
  const { name, points, money } = props.userData;
  return (
    <>
      <div className="user_data">
        <h2>{name}</h2>
        <p>Twoje punkty: {points} pkt</p>
        <p>Twoje środki: {money} zł</p>
      </div>
      <div className="actions">
        <Link to="/UserPage/sell">Wystaw przedmiot</Link>
        <Link to="/UserPage/auctions">Wszystkie Twoje aukcje</Link>
      </div>
    </>
  );
};

export default UserPanel;
