import { useLocation } from "react-router-dom";
import Header from "../Components/Header";
import NavigationBar from "../Components/NavigationBar";
import "./HotelsListPage.css";
import React, { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import Offer from "../Components/Offer";
import Footer from "../Components/Footer";

const HotelsListPage = () => {
  const location = useLocation();

  const [openDate, setOpenDate] = useState(false);

  const [destination, setDestiantion] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);

  const doIncreaseOrDecrease = (name, operation) => {
    setOptions((previous) => {
      return {
        ...previous,
        [name]: operation === "plus" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div>
      <NavigationBar />
      <Header type="list" />
      <div className="HotelsListPageContainer">
        <div className="SearchResultContainer">
          <div className="HotelsListPageSearch">
            <h1 className="SearchTitle">Search</h1>
            <div className="SearchInfo">
              <input
                placeholder={destination ? destination : "Destination"}
                type="text"
                className="SearchInput"
              />
              <span className="SearchInput">
                {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}
              </span>
              <button
                onClick={() => setOpenDate(!openDate)}
                className="headerSearchButton"
              >
                Show calendar
              </button>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="dateAlwaysOn"
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="PlusMinus">
              <div className="OptionItemSearch">
                <span className="OptionText">Adults</span>
                <div className="PlusMinusContainer">
                  <button
                    disabled={options.adults <= 1}
                    onClick={() => doIncreaseOrDecrease("adults", "minus")}
                    className="IncreaseDecrease"
                  >
                    -
                  </button>
                  <span className="IncreaseDecreaseNumber">
                    {options.adults}
                  </span>
                  <button
                    onClick={() => doIncreaseOrDecrease("adults", "plus")}
                    className="IncreaseDecrease"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="OptionItemSearch">
                <span className="OptionText">Children</span>
                <div className="PlusMinusContainer">
                  <button
                    disabled={options.children <= 0}
                    onClick={() => doIncreaseOrDecrease("children", "minus")}
                    className="IncreaseDecrease"
                  >
                    -
                  </button>
                  <span className="IncreaseDecreaseNumber">
                    {options.children}
                  </span>
                  <button
                    onClick={() => doIncreaseOrDecrease("children", "plus")}
                    className="IncreaseDecrease"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="OptionItemSearch">
                <span className="OptionText">Rooms</span>
                <div className="PlusMinusContainer">
                  <button
                    disabled={options.rooms <= 1}
                    onClick={() => doIncreaseOrDecrease("rooms", "minus")}
                    className="IncreaseDecrease"
                  >
                    -
                  </button>
                  <span className="IncreaseDecreaseNumber">
                    {options.rooms}
                  </span>
                  <button
                    onClick={() => doIncreaseOrDecrease("rooms", "plus")}
                    className="IncreaseDecrease"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="SearchInfo">
              <input
                min={1}
                placeholder="Min price for night"
                type="number"
                className="SearchInput"
              />
              <input
                min={1}
                placeholder="Max price for night"
                type="number"
                className="SearchInput"
              />
            </div>

            <div className="ListSearchButton">
              <button
                onClick={() => setOpenDate(!openDate)}
                className="headerSearchButton"
              >
                Search
              </button>
            </div>
          </div>
          <div className="HotelsListPageResult">
            <h1 className="SearchTitle">Results</h1>
            <Offer />
            <Offer />
            <Offer />
            <Offer />
            <Offer />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HotelsListPage;
