// import system files
import React, {useState} from 'react';

// import style files
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import restaurants
  from "./data/dataset_crawler-google-places_nyc_2020-08-14.json";


// import component files
import LandingPage from "./components/LandingPage";
import CityList from "./components/CityList";
import TimesHolder from "./components/TimesHolder";
import MyListHolder from "./components/MyListHolder";
import GoogleMapReact from './components/GoogleMapsReact';
import RestOnMap from './components/RestOnMap';

// main function
function App() {
  const [clicked_rest, setRest] = useState(null)
  const [selected_rests, addToList] = useState([])
  return (
    <div className="App">
      <LandingPage/>
      <CityList
        // "show more" logic
        onClickedRest={placeId => {
          let newRest = restaurants.filter(restaurant => restaurant.placeId === placeId);
          setRest(newRest[0]);
        }}
      />
      <TimesHolder/>
      <MyListHolder
        selected_rests={selected_rests}
        // "remove rest from my list" logic
        onRemoveRest={placeId => {
          let newRestList = selected_rests.filter(restaurant=> restaurant.placeId !== placeId)
          addToList(newRestList);
        }}
      />
      {clicked_rest ?
        <RestOnMap
          clicked_rest={clicked_rest}
          // "add rest to my list" logic
          addRest={placeId => {
            // double-entry check
            if (selected_rests.length > 0 &&
              selected_rests.filter(restaurant => restaurant.placeId === placeId).length > 0) {
              // the rest is already in the user list
              // ADD ALERT
              console.log("This restaurant is already in your list.")
            } else {
              let newRestaurant = restaurants.filter(restaurant => restaurant.placeId === placeId);
              addToList(selected_rests => [...selected_rests, newRestaurant[0]]);
            }
          }}
        />
        : null}
      <GoogleMapReact/>
    </div>
  );
}

export default App;
