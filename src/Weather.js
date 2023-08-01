


































// import React, { useState, useEffect } from 'react';

// const Weather = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const API_KEY = 'YOUR_API_KEY';
//   const CITY_NAME = 'YOUR_CITY_NAME';
//   const COUNTRY_CODE = 'YOUR_COUNTRY_CODE';

//   useEffect(() => {
//     const fetchWeatherData = async () => {
//       try {
//         const response = await fetch(
//           `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${CITY_NAME},${COUNTRY_CODE}`
//         );
//         const data = await response.json();
//         setWeatherData(data);
//       } catch (error) {
//         console.error('Error fetching weather data:', error);
//       }
//     };

//     fetchWeatherData();
//   }, []);

//   if (!weatherData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>Weather for {CITY_NAME}, {COUNTRY_CODE}</h2>
//       <p>Temperature: {weatherData.current.temp_c}°C</p>
//       <p>Condition: {weatherData.current.condition.text}</p>
//       <img src={weatherData.current.condition.icon} alt="Weather Icon" />
//     </div>
//   );
// };

// export default Weather;
