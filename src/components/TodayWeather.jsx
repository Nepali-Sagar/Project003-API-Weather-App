import { useState, useEffect } from "react";

export function TodayWeather() {
  const [weather, setWeather] = useState(null);
  const [nation, setNation] = useState(null)

  const search = "Kathmandu";

  useEffect(() => {
    async function loadWeather() {
      const getLocation = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${search}&count=10&language=en&format=json`,
      );
      if (!getLocation.ok) throw new Error({ message: "Request Fail" });

      const locationResult = await getLocation.json();
      const location = locationResult.results[0];
      setNation({
        "city": location.name,
        "nation": location.country
      })

      const getWeather = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&daily=temperature_2m_max,temperature_2m_min&hourly=wind_speed_10m&current=temperature_2m,relative_humidity_2m,apparent_temperature&timezone=auto`,
      );
      if (!getWeather.ok) throw new Error("Cannot find the location");

      const weatherResult = await getWeather.json();
      setWeather({
        humidity: weatherResult.current.relative_humidity_2m,
        temperature: weatherResult.current.temperature_2m,
        windSpeed: weatherResult.hourly.wind_speed_10m[0],
        high: weatherResult.daily.temperature_2m_max[0],
        low: weatherResult.daily.temperature_2m_min[0],
      });
    }

    loadWeather();
  }, [search]);

  return (
    <>
      <div className="main-container">
        {weather && nation ? (
          <div className="text-info">
            <p className="date">MONDAY, October 26</p>
            <p className="location">{nation.city}, {nation.nation}</p>
            <p className="celcius">{weather.temperature}°C</p>
            <p className="weather-summary">Partly cloudy</p>
            <p className="high-low">H: {weather.high}° L: {weather.low}°</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}

      </div>
    </>
  );
}
