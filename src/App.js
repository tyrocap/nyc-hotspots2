// import system files
import React, { useState } from 'react';

// import style files
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import restaurants from "./data/dataset_crawler-google-places_nyc_2020-08-14.json";


// import component files
import LandingPage from "./components/LandingPage";
import CityList from "./components/CityList";
import TimesHolder from "./components/TimesHolder";
import MyListHolder from "./components/MyListHolder";
import GoogleMapReact from './components/GoogleMapsReact';
import RestOnMap from './components/RestOnMap';

// main function
function App() {
  const [rest, setRest] = useState(null)
  return (
    <div className="App">
      <LandingPage />
      <CityList
        onClickedRest={placeId => {
          console.log(placeId);
          let newRest = restaurants.filter(restaurant => restaurant.placeId === placeId);
          console.log(newRest[0])
          setRest(newRest[0]);
        }}
      />
      <TimesHolder/>
      <MyListHolder/>
      { rest ?
        <RestOnMap rest = {rest} />
        : null}
      <GoogleMapReact />
    </div>
  );
}

export default App;
