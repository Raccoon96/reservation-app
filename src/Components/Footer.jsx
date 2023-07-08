import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <div className="BackgroundFooter">
      <div className="Footer">
        <div className="List">
          <ul className="footerList">
            <li className="footerListItem">Luxury</li>
            <li className="footerListItem">Apartments</li>
            <li className="footerListItem">Flats</li>
            <li className="footerListItem">Houses</li>
            <li className="footerListItem">Hotels</li>
          </ul>
          <ul className="footerList">
            <li className="footerListItem">Countries</li>
            <li className="footerListItem">Regions</li>
            <li className="footerListItem">Cities</li>
            <li className="footerListItem">Stays</li>
          </ul>
          <ul className="footerList">
            <li className="footerListItem">Register</li>
            <li className="footerListItem">Login</li>
            <li className="footerListItem">Subscribe</li>
            <li className="footerListItem">Search</li>
            <li className="footerListItem">Opinions</li>
          </ul>
          <ul className="footerList">
            <li className="footerListItem">About us</li>
            <li className="footerListItem">News</li>
            <li className="footerListItem">Customer Service</li>
            <li className="footerListItem">Help Center</li>
            <li className="footerListItem">FAQ</li>
            <li className="footerListItem">Contact</li>
          </ul>
        </div>
      </div>
      <div className="footerText">Copyright © 2023 Reservation App</div>
    </div>
  );
};

export default Footer;
