import "./Recommended.css";
import React from "react";

const Recommended = () => {
  return (
    <div className="Recommended">
      <div className="RecommendedItem">
        <img src="images/mywork1.jpg" alt="" className="RecommendedImage" />
        <div className="RecommendedTitle">
          <h1>Las Vegas</h1>
          <h2>325m² Luxury house</h2>
        </div>
      </div>
      <div className="RecommendedItem">
        <img src="images/mywork2.jpg" alt="" className="RecommendedImage" />
        <div className="RecommendedTitle">
          <h1>New York</h1>
          <h2>95m²Apartment</h2>
        </div>
      </div>
      <div className="RecommendedItem">
        <img src="images/mywork3.jpg" alt="" className="RecommendedImage" />
        <div className="RecommendedTitle">
          <h1>Los Angeles</h1>
          <h2>58m² Flat</h2>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
