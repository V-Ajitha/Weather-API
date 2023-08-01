import React from 'react';
import './App.css';
import WeatherSearch from './Search';
import LightDark from './LightAndDarkMode';

const App = () => {
  return (
    <div className="wrapper">
      <LightDark />
      <h2>Weather App</h2>
      <WeatherSearch/>
    </div>
  );
};

export default App;
