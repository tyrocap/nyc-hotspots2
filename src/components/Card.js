import React from 'react';
import {GrMapLocation} from "react-icons/gr/index";

function Card({restaurant}) {
  return (
    <div className={`lp-slide active-slide-${restaurant.id}`}>
      <div className="slide-left">
        <img alt="Image"/>
      </div>
      <div className="slide-mid">
        <a href={`https://www.${restaurant.website}`} target="_blank">
          <h2>{restaurant.title}</h2></a>
        <h3>{restaurant.categoryName}</h3>
        <h4>{restaurant.phone}</h4>
        <a href={restaurant.url} target="_blank"><GrMapLocation/></a>
      </div>
      <div className="slide-right">
        <h2>Score</h2>
        <h1>{restaurant.totalScore}</h1>
      </div>
    </div>
  );
}

export default Card;