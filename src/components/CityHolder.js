import React, { useState } from 'react';
import RestaurantHolder from "./RestaurantHolder";
import { GoTriangleDown } from 'react-icons/go'


// props is equal to (city_name: "Chelsea", data: "restaurants")
// if you have more than one type of props to pass (e.g. a string and an array
// then, use pass items regularly in the parent and use 'props' in the child
function CityHolder(props) {
  // useState hook to toggle city-holder component content
  const [toggled, setToggle] = useState(false);
  return (
    <div className="city-holder">{props.city_name}
      <GoTriangleDown onClick={() => setToggle( toggled === false)}/>
      {
        toggled ?
          <RestaurantHolder restaurants={props.data}/>
          : null
      }
    </div>
  );
}

export default CityHolder;
