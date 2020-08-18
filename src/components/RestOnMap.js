import React from 'react';
import {GrMapLocation} from "react-icons/gr/index";

function RestOnMap(props) {
  return (
    <div className="rest-onmap-container">
      <div className="rom-left">
        <img alt="Image"/>
      </div>
      <div className="rom-mid">
        <div className="slide-mid">
          <a href={`https://www.${props.rest.website}`} target="_blank">
            <h2>{props.rest.title}</h2></a>
          <h3>{props.rest.categoryName}</h3>
          <h4>{props.rest.phone}</h4>
          <a href={props.rest.url} target="_blank"><GrMapLocation/></a>
        </div>
      </div>
      <div className="rom-right">
        <h2>Score</h2>
        <h1>{props.rest.totalScore}</h1>
      </div>
    </div>
  )
};

export default RestOnMap;