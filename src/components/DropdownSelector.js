import React, {useState} from 'react';
import {GoTriangleDown} from 'react-icons/go';


function DropdownSelector() {
  const [city_toggled, CityToggle] = useState(false);
  const [day_toggled, DayToggle] = useState(false);
  const [time_toggled, TimeToggle] = useState(false);
  return (
    <div>
      <div className="dropdown-city-holder">
        <GoTriangleDown onClick={() => CityToggle(city_toggled === false)}/>
        {
          city_toggled ? (
            <div>
              <a>Chelsea</a>
              <a>Upper East Side</a>
              <a>Upper West Side</a>
              <a>Chinatown</a>
              <a>Tribecca</a>
              <a>Downtown</a>
              <a>Chelsea</a>
            </div>)
          : null}
      </div>
      <div className="dropdown-day-holder">
        <GoTriangleDown onClick={() => DayToggle(day_toggled === false)}/>
        {
          day_toggled ? (
            <div>
              <a>Monday</a>
              <a>Tuesday</a>
              <a>Wednesday</a>
              <a>Thursday</a>
              <a>Friday</a>
              <a>Saturday</a>
              <a>Sunday</a>
            </div>)
          : null}
      </div>
      <div className="dropdown-time-holder">
        <GoTriangleDown onClick={() => TimeToggle(time_toggled === false)}/>
        {
          time_toggled ? (
            <div>
              <a>5PM</a>
              <a>6PM</a>
              <a>7PM</a>
              <a>8PM</a>
              <a>9PM</a>
              <a>10PM</a>
              <a>11PM</a>
              <a>12PM</a>
            </div>)
          : null}
      </div>
    </div>
  );
}

export default DropdownSelector;