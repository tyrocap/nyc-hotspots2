import React, {useState, useEffect} from 'react';
import {GoTriangleDown} from 'react-icons/go';
import neighborhoods from "../data/nyc_neighborhoods_by_zcode.json";

const timeIndexMap = {
  1: "5PM",
  2: "6PM",
  3: "7PM",
  4: "8PM",
  5: "9PM",
  6: "10PM",
  7: "11PM",
  8: "12PM",
  9: "1AM",
  10: "2AM",
  11: "3AM"
}

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]


function DropdownSelector(props) {
  const [city_toggled, CityToggle] = useState(false);
  const [city_selected, selectCity] = useState("Chelsea");
  const [day_toggled, DayToggle] = useState(false);
  const [day_selected, selectDay] = useState("Monday");
  const [time_selected, selectTime] = useState("7PM");

  const changeCity = (event) => {
    event.preventDefault();
    selectCity(event.target.value);
  };

  const changeDay = (event) => {
    event.preventDefault();
    selectDay(event.target.value);
  };

  // whenever the props change, this will update the state
  useEffect(() => {
    selectTime(timeIndexMap[props.timeIndex])
  }, [props.timeIndex]);

  return (
    <div className="dropdown-selector">
      <div className="dropdown-city-holder"
           onClick={() => CityToggle(city_toggled === false)}>
        <b>{city_selected}</b>
        <GoTriangleDown/>
        {
          city_toggled ? (
              <div className="dd-city-wrapper">
                {neighborhoods.map(neighborhood =>
                  <button className="dd-btn" onClick={changeCity}
                          value={neighborhood.title}>{neighborhood.title}</button>
                )}
              </div>)
            : null}
        on a
      </div>
      <div className="dropdown-day-holder"
           onClick={() => DayToggle(day_toggled === false)}>&nbsp;
        <b>{day_selected}</b>
        <GoTriangleDown/>
        {
          day_toggled ? (
              <div className="dd-day-wrapper">
                {days.map(day =>
                  <button className="dd-btn" onClick={changeDay}
                          value={day}>{day}
                  </button>
                )}
              </div>)
            : null}
      </div>
      around
      <div className="dropdown-time-holder">&nbsp;<b>{time_selected}</b>
      </div>
    </div>
  );
}


export default DropdownSelector;