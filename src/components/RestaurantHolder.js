import React from 'react';
import RestaurantItem from "./RestaurantItem";

function RestaurantHolder({
                            restaurants = [],
                            filter_zcodes = [],
                            onClickedRest = f => f
                          }) {
  if (!restaurants.length) return (<p>No data for this neighborhood.</p>)

  return (
    <div className="restaurant-holder">
      {
        restaurants.filter(restaurant =>
          filter_zcodes.includes(parseInt(restaurant.address.substring(
            restaurant.address.length - 5)))).map(restaurant =>
          <RestaurantItem key={restaurant.placeId} {...restaurant}
                          selectRest={onClickedRest} />)
      }
    </div>
  );
}

export default RestaurantHolder;