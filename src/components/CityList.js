import React from 'react';
import CityHolder from "./CityHolder";
import restaurants from "../data/dataset_crawler-google-places_2020-08-20_00-37-10-231.json";
import neighborhoods from "../data/nyc_neighborhoods_by_zcode.json";
import {v4} from 'uuid';

function CityList({onClickedRest = f => f}) {
  return (
      <div className="city-list-wrapper">
        <h2 id="city-list-header">Explore Areas</h2>
        {neighborhoods.map(neighborhood =>
          <CityHolder
            key={v4()}
            city_name={neighborhood.title}
            data={restaurants}
            filter_zcodes={neighborhood.zcodes}
            onClicked={onClickedRest}
          />)}
      </div>
  );
}

export default CityList;