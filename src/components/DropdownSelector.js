import React, {useState} from 'react';
import {GoTriangleDown} from 'react-icons/go';

function DropdownSelector() {
  const [city_toggled, CityToggle] = useState(false);
  const [city_selected, selectCity] = useState("Chelsea");
  const [day_toggled, DayToggle] = useState(false);
  const [day_selected, selectDay] = useState("Monday");
  const [time_toggled, TimeToggle] = useState(false);
  const [time_selected, selectTime] = useState("5PM");

  const changeCity = (event) => {
    event.preventDefault();
    selectCity(event.target.value);
  };

  const changeDay = (event) => {
    event.preventDefault();
    selectDay(event.target.value);
  };

  const changeTime = (event) => {
    event.preventDefault();
    selectTime(event.target.value);
  };

  return (
    <div className="dropdown-selector">
      <div className="dropdown-city-holder"
           onClick={() => CityToggle(city_toggled === false)}>{city_selected}
        <GoTriangleDown/>
        {
          city_toggled ? (
              <div className="dd-city-wrapper">
                <button className="dd-btn" onClick={changeCity}
                        value="Chelsea">Chelsea
                </button>
                <button className="dd-btn" onClick={changeCity}
                        value="Upper East Side">Upper East
                  Side
                </button>
                <button className="dd-btn" onClick={changeCity}
                        value="Upper Upper West Side">Upper
                  West Side
                </button>
                <button className="dd-btn" onClick={changeCity}
                        value="Chinatown">Chinatown
                </button>
                <button className="dd-btn" onClick={changeCity}
                        value="Tribecca">Tribecca
                </button>
                <button className="dd-btn" onClick={changeCity}
                        value="Downtown">Downtown
                </button>
                <button className="dd-btn" onClick={changeCity}
                        value="Chelsea">Chelsea
                </button>
              </div>)
            : null}
        on a
      </div>
      <div className="dropdown-day-holder"
           onClick={() => DayToggle(day_toggled === false)}>&nbsp;{day_selected}
        <GoTriangleDown/>
        {
          day_toggled ? (
              <div className="dd-day-wrapper">
                <button className="dd-btn" onClick={changeDay}
                        value="Monday">Monday
                </button>
                <button className="dd-btn" onClick={changeDay}
                        value="Tuesday">Tuesday
                </button>
                <button className="dd-btn" onClick={changeDay}
                        value="Wednesday">Wednesday
                </button>
                <button className="dd-btn" onClick={changeDay}
                        value="Thursday">Thursday
                </button>
                <button className="dd-btn" onClick={changeDay}
                        value="Friday">Friday
                </button>
                <button className="dd-btn" onClick={changeDay}
                        value="Saturday">Saturday
                </button>
                <button className="dd-btn" onClick={changeDay}
                        value="Sunday">Sunday
                </button>
              </div>)
            : null}
      </div>
      around
      <div className="dropdown-time-holder"
           onClick={() => TimeToggle(time_toggled === false)}>&nbsp;{time_selected}
        <GoTriangleDown/>
        {
          time_toggled ? (
              <div className="dd-time-wrapper">
                <button className="dd-btn" onClick={changeTime} value="5PM">5PM
                </button>
                <button className="dd-btn" onClick={changeTime} value="6PM">6PM
                </button>
                <button className="dd-btn" onClick={changeTime} value="7PM">7PM
                </button>
                <button className="dd-btn" onClick={changeTime} value="8PM">8PM
                </button>
                <button className="dd-btn" onClick={changeTime} value="9PM">9PM
                </button>
                <button className="dd-btn" onClick={changeTime}
                        value="10PM">10PM
                </button>
                <button className="dd-btn" onClick={changeTime}
                        value="11PM">11PM
                </button>
                <button className="dd-btn" onClick={changeTime}
                        value="12PM">12PM
                </button>
                <button className="dd-btn" onClick={changeTime} value="1AM">1AM
                </button>
                <button className="dd-btn" onClick={changeTime} value="2AM">2AM
                </button>
                <button className="dd-btn" onClick={changeTime} value="3AM">3AM
                </button>
              </div>)
            : null}
      </div>
    </div>
  );
}


export default DropdownSelector;