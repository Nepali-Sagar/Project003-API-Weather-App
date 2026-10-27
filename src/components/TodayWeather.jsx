import { useState, useEffect } from "react";

export function TodayWeather({ value, sendData }) {
  const today = new Date();
  const [weather, setWeather] = useState(null);
  const [nation, setNation] = useState(null);
  const [message, setMessage] = useState(null);

  const search = value.country || "Kathmandu";

  useEffect(() => {
    async function loadWeather() {
      setMessage(null);

      const getLocation = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${search}&count=10&language=en&format=json`,
      );
      if (!getLocation.ok) throw new Error("Request Fail");

      const locationResult = await getLocation.json();
      const location = await locationResult.results?.[0];
      if (!location) {
        setMessage(`${search}, location not found or invalid`);
        throw new Error(`Not found ${search}`);
      }

      setNation({
        city: location.name,
        nation: location.country,
      });

      const getWeather = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&daily=temperature_2m_max,temperature_2m_min&hourly=wind_speed_10m&current=temperature_2m,relative_humidity_2m,apparent_temperature&timezone=auto`,
      );
      if (!getWeather.ok) throw new Error("Cannot find the location");

      const weatherResult = await getWeather.json();

      setWeather({
        humidity: weatherResult.current.relative_humidity_2m,
        temperature: weatherResult.current.temperature_2m,
        apparent_temperature: weatherResult.current.apparent_temperature,
        windSpeed: weatherResult.hourly.wind_speed_10m[0],
        high: weatherResult.daily.temperature_2m_max[0],
        low: weatherResult.daily.temperature_2m_min[0],
      });

      sendData({
        humidity: weatherResult.current.relative_humidity_2m,
        windSpeed: weatherResult.hourly.wind_speed_10m[0],
        apparent_temperature: weatherResult.current.apparent_temperature,
      });
    }

    loadWeather().catch((error) => {
      console.error(error);
    });
  }, [search, sendData]);

  return (
    <>
      <div className="main-container">
        {message ? (
          <p role="alert">{message}</p>
        ) : weather && nation ? (
          <div className="text-info">
            <p className="date">
              {today.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="location">
              {nation.city}, {nation.nation}
            </p>
            <p className="celcius">{weather.temperature}°C</p>
            <p className="high-low">
              H: {weather.high}° L: {weather.low}°
            </p>
          </div>
        ) : (
          <>
            <p>Loading...</p>
          </>
        )}
      </div>
    </>
  );
}
