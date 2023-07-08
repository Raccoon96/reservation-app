import "./Header.css";
import React from "react";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adults: 2,
    children: 0,
    rooms: 1,
  });
  const doIncreaseOrDecrease = (name, operation) => {
    setOptions((previous) => {
      return {
        ...previous,
        [name]: operation === "plus" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const navigate = useNavigate();

  const SearchRooms = () => {
    navigate("/hotelslist", { state: { destination, date, options } });
  };

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem">
            <span>Luxury</span>
          </div>
          <div className="headerListItem">
            <span>Apartments</span>
          </div>
          <div className="headerListItem">
            <span>Flats</span>
          </div>
          <div className="headerListItem">
            <span>Houses</span>
          </div>
          <div className="headerListItem">
            <span>Hotels</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="Title">Best holidays? Book with us.</h1>
            <p className="Description">
              Already have a destination and are looking for a suitable place to
              stay? Find a place with us! There is no better option than using
              Reservation App.
            </p>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <input
                  type="text"
                  placeholder="Choose your destiantion."
                  className="headerSearchInput"
                  onChange={(place) => setDestination(place.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >
                  {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                    date[0].endDate,
                    "dd/MM/yyyy"
                  )}`}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >
                  {`${options.adults} adults ; ${options.children} children ; ${options.rooms} rooms`}
                </span>
                {openOptions && (
                  <div className="Options">
                    <div className="OptionItem">
                      <span className="OptionText">Adults</span>
                      <div className="PlusMinusContainer">
                        <button
                          disabled={options.adults <= 1}
                          onClick={() =>
                            doIncreaseOrDecrease("adults", "minus")
                          }
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
                    <div className="OptionItem">
                      <span className="OptionText">Children</span>
                      <div className="PlusMinusContainer">
                        <button
                          disabled={options.children <= 0}
                          onClick={() =>
                            doIncreaseOrDecrease("children", "minus")
                          }
                          className="IncreaseDecrease"
                        >
                          -
                        </button>
                        <span className="IncreaseDecreaseNumber">
                          {options.children}
                        </span>
                        <button
                          onClick={() =>
                            doIncreaseOrDecrease("children", "plus")
                          }
                          className="IncreaseDecrease"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="OptionItem">
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
                )}
              </div>
              <div className="headerSearchItem">
                <button onClick={SearchRooms} className="headerSearchButton">
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
