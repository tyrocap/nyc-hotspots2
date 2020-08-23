import React, {useEffect, useState, useRef} from 'react';
import {withScriptjs, withGoogleMap, GoogleMap} from "react-google-maps";
import HeatmapLayer
  from "react-google-maps/lib/components/visualization/HeatmapLayer";
import restaurants
  from "../data/dataset_crawler-google-places_2020-08-20_00-37-10-231.json";
import neighborhoods from "../data/nyc_neighborhoods_by_zcode.json";


const timeIndexMap = {
  1: "5PM",
  2: "6PM",
  3: "7PM",
  4: "8PM",
  5: "9PM",
  6: "10PM",
  7: "11PM",
  8: "12PM",
  9: "1AM",
  10: "2AM",
  11: "3AM"
}


const GoogleMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{lat: 40.7530743, lng: -74.0056167}}
    mapTypeId={"satellite"}
    // all logic will be here
  >
    <HeatmapLayer
      data={
        restaurants.filter(restaurant =>
          neighborhoods.filter(neighborhood => neighborhood.title === props.selectedArea)
            [0].zcodes.includes(parseInt(restaurant.address.substring(
            restaurant.address.length - 5)))).map(restaurant => {
          return ({
            location: new window.google.maps.LatLng(restaurant.location.lat,
              restaurant.location.lng),
            weight: restaurant.totalScore
          })
        })}
      options={{radius: 10, opacity: 0.7}}/>
  </GoogleMap>))


function GoogleMapReact({changed_city}) {
  const [selectedTime, setTime] = useState(3);
  const [selectedDay, setDay] = useState("Saturday");
  const [selectedArea, setArea] = useState("Chelsea");

  const firstUpdate = useRef(true);

  // whenever the props change, this will update the state
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    setArea(changed_city)
  }, [changed_city]);

  return (
    <div>
      {console.log(selectedArea)}
      <GoogleMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDDJFeJW3ZBIgoEVoBFT-4py25QEnL_p1c&v=3.exp&libraries=geometry,drawing,places,visualization"
        loadingElement={<div style={{height: `100%`}}/>}
        containerElement={<div style={{height: `100vh`}}/>}
        mapElement={<div style={{height: `100%`}}/>}
        selectedArea={selectedArea}
      />

    </div>
  );

}

export default GoogleMapReact;


