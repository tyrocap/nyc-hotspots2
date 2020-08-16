import React from 'react';
import DropdownSelector from "./DropdownSelector";
import TimeSeriesSelector from "./TimeSeriesSelector";


function TimesHolder() {
  return (
    <div className="times-holder">
      <DropdownSelector />
      <TimeSeriesSelector />
    </div>
  );
}

export default TimesHolder;