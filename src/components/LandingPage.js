import React from 'react';
import PlaceHolder from "./lpPlaceHolder";
import restaurants from "../data/dataset_crawler-google-places_2020-08-20_00-37-10-231.json";

function LandingPage() {
  return (
    <div>
      <div className="lp-content">
        <h1 id="lp-title">New York City Hotspots</h1>
        <p id="lp-description">Discover restaurants, clubs and bars that
          are <br/>consistently busy and
          highly rated in NYC's most popular areas</p>
      </div>
      <PlaceHolder restaurants={restaurants}/>
      <div className="lp-background"></div>
    </div>
  );
}

export default LandingPage;