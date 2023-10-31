import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('moscow');
  const [weather, setWeather] = useState({});
  const [futureWeather, setFutureWeather] = useState({});

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`;
  const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=ru`;

  const weatherFormat = (data) => {
    return {
      city: data.name,
      country: data.sys.country,
      temp: data.main.temp,
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      weather: data.weather.map(weather => weather.description),
      windSpeed: data.wind.speed,
      windDeg: data.wind.deg,
    }
  }

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        const formattedWeather = weatherFormat(data);
        setWeather(formattedWeather);
      })
      .catch(console.error);
  }, []);
  

  return (
    <div className='page'>

    </div>
  );
}

export default App;
