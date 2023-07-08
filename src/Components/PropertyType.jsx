import "./PropertyType.css";
import React from "react";

const PropertyType = () => {
  return (
    <div className="PropertyType">
      <div className="PropertyTypeItem">
        <div className="PropertyTypeImageContainer">
          <img src="images/mywork1.jpg" alt="" className="PropertyTypeImage" />
        </div>
        <div className="PropertyTypeTitle">
          <h1>Luxury</h1>
          <h2>14 available</h2>
        </div>
      </div>
      <div className="PropertyTypeItem">
        <div className="PropertyTypeImageContainer">
          <img src="images/mywork2.jpg" alt="" className="PropertyTypeImage" />
        </div>
        <div className="PropertyTypeTitle">
          <h1>Apartments</h1>
          <h2>57 available</h2>
        </div>
      </div>
      <div className="PropertyTypeItem">
        <div className="PropertyTypeImageContainer">
          <img src="images/mywork3.jpg" alt="" className="PropertyTypeImage" />
        </div>
        <div className="PropertyTypeTitle">
          <h1>Flats</h1>
          <h2>129 available</h2>
        </div>
      </div>
      <div className="PropertyTypeItem">
        <div className="PropertyTypeImageContainer">
          <img src="images/mywork4.jpg" alt="" className="PropertyTypeImage" />
        </div>
        <div className="PropertyTypeTitle">
          <h1>Houses</h1>
          <h2>41 available</h2>
        </div>
      </div>
      <div className="PropertyTypeItem">
        <div className="PropertyTypeImageContainer">
          <img src="images/mywork5.jpg" alt="" className="PropertyTypeImage" />
        </div>
        <div className="PropertyTypeTitle">
          <h1>Hotels</h1>
          <h2>85 available</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyType;
