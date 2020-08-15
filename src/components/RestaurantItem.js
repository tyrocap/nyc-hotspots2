import React from 'react';

function RestaurantItem({
                          title,
                          categoryName,
                          address,
                          phone,
                        }) {
  return (
    <div className="restaurant-item">
      <h2>{title}</h2>
      <p>{categoryName}</p>
      <p>{phone}</p>
      <p>{address}</p>
    </div>
  );
}

export default RestaurantItem;

