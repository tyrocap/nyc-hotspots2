import React from 'react';
import DropdownSelector from "./DropdownSelector";
import TimeSeriesSelector from "./TimeSeriesSelector";


function TimesHolder() {
  return (
      <div className="times-wrapper">
        <div className="times-holder">
          <DropdownSelector/>
          <TimeSeriesSelector/>
        </div>
      </div>
  );
}

export default TimesHolder;