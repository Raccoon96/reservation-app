import "./Offer.css";
import React from "react";

const Offer = () => {
  return (
    <div className="OfferContainer">
      <div className="OfferImage">
        <img src="images/mywork1.jpg" alt="" className="PropertyTypeImage" />
      </div>
      <div className="OfferDescription">
        <h1 className="Name">Luxury House Luxa</h1>
        <span className="OfferDescriptionCity">Las Vegas</span>
        <span className="OfferDescriptionText">
          Luxury House Luxa is placed on a city hill. It has outside pool and
          huge windows so you can watch sunsets.
        </span>
      </div>
      <div className="OfferPrice">
        <div className="OfferRating">
          <span>9.1</span>
        </div>
        <span className="PriceNumber">$100</span>
        <button className="ResultSeeMoreButton">See more</button>
      </div>
    </div>
  );
};

export default Offer;
