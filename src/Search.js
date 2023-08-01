import { useState } from 'react';

const WeatherSearch = () => {
  const [location, setLocation] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const API_KEY = 'c910ec3f3e70722b68f4406733ccac23';
  
  const handleLatLon = () => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setLatitude(data.city.coord.lat);
        setLongitude(data.city.coord.lon); 
        setErrorMessage('');
      })
      .catch(error => {
        console.log(error);
        setErrorMessage('Please enter a valid location');
      });
  };
  const handleSearch = () => {
    handleLatLon();
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`)
    .then(response => response.json())
    .then(details => {
      console.log(details.main.temp);

      setWeatherData(details);
    })
    .catch(error => console.log(error));
  };
  const handleOnchange = (event) =>{
    setLocation(event.target.value);
  }

  return (
    <div className="search">
      <div className="search-top">
        <input type="text" placeholder="Enter location" onChange={handleOnchange} />
        <button className="searchbtn" onClick={handleSearch}>Search</button>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {!errorMessage && weatherData && (
        <div className="search-result">
          <h4>Weather for {weatherData.name}</h4>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Pressure: {weatherData.main.pressure}mb</p>
          <p>Wind Speed: {weatherData.wind.speed}m/s</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};
export default WeatherSearch;
