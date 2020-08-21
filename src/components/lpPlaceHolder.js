import React, {useState} from 'react';
import Card from './Card';
import {Carousel} from 'react-responsive-carousel';
import {v4} from 'uuid';


function PlaceHolder({restaurants = []}) {
  return (
    <div className="lp-place-holder">
      <div className="lp-slide-holder">
        <div className="lp-place-wrapper">
          <Carousel
            infiniteLoop
            autoPlay={true}
            interval={4000}
            stopOnHover={true}
            showThumbs={false}
            showStatus={false}
            transitionTime={2200}
            showArrows={false}
            showIndicators={false}>
            {restaurants.sort((a, b) =>
              b.totalScore - a.totalScore).slice(0, 10).map(restaurant =>
              <Card key={restaurant.placeId} restaurant={restaurant}/>
            )}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default PlaceHolder;