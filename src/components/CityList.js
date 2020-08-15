import React from 'react';
import CityHolder from "./CityHolder";
import restaurants from "../data/copy_dataset.json";
import neighborhoods from "../data/nyc_neighborhoods_by_zcode.json";
import { v4 } from 'uuid';

function CityList() {
  return (
    <div className="city-list">
      <h1>This is a CityList</h1>
      {Object.keys(neighborhoods).map(neighborhood => <CityHolder key={v4()} city_name={neighborhood} data={restaurants}/>)}
    </div>
  );
}

export default CityList;