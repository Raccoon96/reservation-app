import "./NavigationBar.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();

  const BackToMainPage = () => {
    navigate("/");
  };

  return (
    <div className="navigation">
      <div className="navigationContainer">
        <span onClick={BackToMainPage} className="navigationLogo">
          Reservation App
        </span>
        <div className="navigationItems">
          <button className="navigationButton">Register</button>
          <button className="navigationButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
