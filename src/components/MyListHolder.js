import React from 'react';
import MyList from "./MyList";

function MyListHolder({selected_rests, onRemoveRest = f => f}) {
  if (selected_rests.length !== 0) {
    return (
        <div className="mylist-wrapper">
          {selected_rests.map(restaurant =>
            <MyList
              key={restaurant.placeId}
              selected_rest={restaurant}
              removeRest={onRemoveRest}
            />
          )}
        </div>
    );
  } else {
    return null;
  }
}

export default MyListHolder;