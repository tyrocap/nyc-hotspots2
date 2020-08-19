import React from 'react';
import {GrMapLocation} from "react-icons/gr/index";

function RestOnMap({clicked_rest, addRest = f => f}) {
  return (
    <div className="rest-onmap-container">
      <div className="rom-left" style={{flex: 2}}>
        <h3>{clicked_rest.title}</h3>
        <p>{clicked_rest.categoryName}</p>
        <h2>Score: {clicked_rest.totalScore}</h2>
      </div>
      <div className="rom-mid" style={{flex: 2}}>
        <div className="slide-mid">
          <p>Address: {clicked_rest.address}</p>
          <p>Phone: {clicked_rest.phone}</p>
          <p>Google Score: {clicked_rest.phone}</p>
          <p>Yelp Score: {clicked_rest.phone}</p>
        </div>
      </div>
      <div className="rom-right" style={{flex: 1}}>
        <button onClick={() => addRest(clicked_rest.placeId)}>Add to my
          list>>>
        </button>
      </div>
    </div>
  )
};

export default RestOnMap;