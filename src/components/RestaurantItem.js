import React from 'react';

function RestaurantItem({placeId, title, categoryName, totalScore, selectRest = f => f}) {
  const handleClick = e => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e.defaultPrevented)
    selectRest(placeId);
  }
  
  return (
    <div className="restaurant-item" onClick={handleClick}>
      <div style={{flex: 3}}>
        <h3 id="restaurant-item-header">{title}</h3>
        <p id="restaurant-item-body">{categoryName}</p>
      </div>
      <div style={{flex: 1}}>
        <h3
          id="restaurant-item-score">{Math.round((totalScore / 5) * 100)}%</h3>
      </div>
    </div>
  );
}

export default RestaurantItem;

