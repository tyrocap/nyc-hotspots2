// import system files
import React from 'react';

// import style files
import './App.css';

// import component files
import LandingPage from "./components/LandingPage";
import CityList from "./components/CityList";
import TimesHolder from "./components/TimesHolder";
import MyListHolder from "./components/MyListHolder";

// main function
function App() {
  return (
    <div className="App">
      <LandingPage />
      <CityList>
      </CityList>
      <TimesHolder/>
      <MyListHolder/>
    </div>
  );
}

export default App;
