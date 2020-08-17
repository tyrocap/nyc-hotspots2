// import system files
import React from 'react';

// import style files
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";


// import component files
import LandingPage from "./components/LandingPage";
import CityList from "./components/CityList";
import TimesHolder from "./components/TimesHolder";
import MyListHolder from "./components/MyListHolder";
import GoogleMapReact from './components/GoogleMapsReact';
// main function
function App() {
  return (
    <div className="App">
      <LandingPage />
      <CityList />
      <TimesHolder/>
      <MyListHolder/>
      <GoogleMapReact />
    </div>
  );
}

export default App;
