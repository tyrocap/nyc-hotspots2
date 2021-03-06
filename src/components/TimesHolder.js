import React, {useState} from 'react';
import DropdownSelector from "./DropdownSelector";
import TimeSeriesSelector from "./TimeSeriesSelector";


function TimesHolder({passSelectedCity = f => f}) {
  const [timeIndex, changeTime] = useState(3);

  // change the state of a parent to rerender the child
  function handleChange(index) {
    changeTime(index);
  }

  return (
    <div className="times-wrapper">
      <div className="times-holder">
        <DropdownSelector
          key={timeIndex}
          timeIndex={timeIndex}
          passChangedCity={passSelectedCity}
        />
        <TimeSeriesSelector passTimeIndex={handleChange}/>
      </div>
    </div>
  );
}

export default TimesHolder;