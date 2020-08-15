import React from 'react';
import RestaurantItem from "./RestaurantItem";

function RestaurantHolder({restaurants=[]}) {
  return (
    <div className="restaurant-holder">
      {
        restaurants.map(restaurant =>
          <RestaurantItem key={restaurant.placeId} {...restaurant} /> )
      }
    </div>
  );
}

export default RestaurantHolder;