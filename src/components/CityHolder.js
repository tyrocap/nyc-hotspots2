import React, {useState} from 'react';
import RestaurantHolder from "./RestaurantHolder";
import {GoTriangleDown} from 'react-icons/go'


// props is equal to (city_name: "Chelsea", data: "restaurants")
// if you have more than one type of props to pass (e.g. a string and an array
// then, use pass items regularly in the parent and use 'props' in the child


function CityHolder({city_name, filter_zcodes, data, onClicked = f => f}) {
  // useState hook to toggle city-holder component content
  const [toggled, setToggle] = useState(false);

  return (
    <div className="city-holder">{city_name}
      <GoTriangleDown onClick={() => setToggle(toggled === false)} />
      {
        toggled ?
          <RestaurantHolder
            filter_zcodes={filter_zcodes}
            restaurants={data}
            onClickedRest={onClicked}
          />
          : null
      }
    </div>
  );
}

export default CityHolder;
