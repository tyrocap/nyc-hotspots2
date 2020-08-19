import React from 'react';


function MyList({selected_rest, removeRest = f => f}) {
  return (
    <div className="mylist-item">
      <div style={{flex: 3}}>
        <h3 id="mylist-item-header"
            style={{margin: 0}}>{selected_rest.title}</h3>
        <p id="mylist-item-body"
           style={{margin: 0}}>{selected_rest.categoryName}</p>
      </div>
      <div style={{flex: 1}}>
        <button
          onClick={() => removeRest(selected_rest.placeId)}
          style={{
            border: 0,
            backgroundColor: "rgba(255,255,255, 1)",
            cursor: "pointer"
          }}>X
        </button>
        <h4
          id="mylist-item-score"
          style={{margin: 0}}>{Math.round((selected_rest.totalScore / 5) * 100)}%</h4>
      </div>
    </div>
  )
}

export default MyList;