import React from 'react';
import {withScriptjs, withGoogleMap, GoogleMap} from "react-google-maps";
import HeatmapLayer
  from "react-google-maps/lib/components/visualization/HeatmapLayer";
import restaurants
  from "../data/dataset_crawler-google-places_nyc_2020-08-14.json";


const GoogleMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{lat: 40.7530743, lng: -74.0056167}}
    mapTypeId={"satellite"}
    // all logic will be here
  >
    <HeatmapLayer
      data={restaurants.map(restaurant => {
        return ({
          location: new window.google.maps.LatLng(restaurant.location.lat,
            restaurant.location.lng),
          weight: restaurant.totalScore
        })
      })}
      options={{radius: 10, opacity: 0.7}}/>
  </GoogleMap>))


function GoogleMapReact() {
  return (
    <div>
      <GoogleMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=KEYS_HERE&v=3.exp&libraries=geometry,drawing,places,visualization"
        loadingElement={<div style={{height: `100%`}}/>}
        containerElement={<div style={{height: `100vh`}}/>}
        mapElement={<div style={{height: `100%`}}/>}
      />
    </div>
  )
}

export default GoogleMapReact;


