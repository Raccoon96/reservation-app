import "./MainPage.css";
import React from "react";
import NavigationBar from "../Components/NavigationBar";
import Header from "../Components/Header";
import Recommended from "../Components/Recommended";
import PropertyType from "../Components/PropertyType";
import Footer from "../Components/Footer";

const MainPage = () => {
  return (
    <div>
      <NavigationBar />
      <Header />
      <div className="homeContainer">
        <Recommended />
        <h1 className="MainPageTitle">Browse by property</h1>
        <PropertyType />
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
