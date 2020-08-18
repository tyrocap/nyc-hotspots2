import React from 'react';
import CityHolder from "./CityHolder";
import restaurants from "../data/dataset_crawler-google-places_nyc_2020-08-14.json";
import neighborhoods from "../data/nyc_neighborhoods_by_zcode.json";
import {v4} from 'uuid';

function CityList() {
  return (
      <div className="city-list-wrapper">
        <h2 id="city-list-header">Explore Areas</h2>
        {neighborhoods.map(neighborhood =>
          <CityHolder
            key={v4()}
            city_name={neighborhood.title}
            data={restaurants}
            filter_zcodes={neighborhood.zcodes}/>)}
      </div>
  );
}

export default CityList;