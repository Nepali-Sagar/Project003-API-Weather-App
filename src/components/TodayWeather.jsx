import { useState, useEffect } from "react";

export function TodayWeather({ value, sendData }) {
  const today = new Date();
  const [weather, setWeather] = useState(null);
  const [nation, setNation] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const search = value.country || "Kathmandu";

  useEffect(() => {
    async function loadWeather() {
      setLoading(true);
      setError("");

      try {
        const getLocation = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${search}&count=10&language=en&format=json`,
        );
        if (!getLocation.ok) throw new Error("Failed to fetch location");

        const locationResult = await getLocation.json();
        const location = await locationResult.results?.[0];
        if (location === undefined) {
          sendData("")
          return setError(`"${search}", location not found or invalid`);
        }

        setNation({
          city: location.name,
          nation: location.country,
        });
     
        const getWeather = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&daily=temperature_2m_max,temperature_2m_min&current=temperature_2m,relative_humidity_2m,wind_speed_10m,apparent_temperature&timezone=auto`,
        );
        if (!getWeather.ok) throw new Error("Failed to fetch location");

        const weatherResult = await getWeather.json();

        setWeather({
          temperature: weatherResult.current.temperature_2m,
          high: weatherResult.daily.temperature_2m_max[0],
          low: weatherResult.daily.temperature_2m_min[0],
        });

        sendData({
          humidity: weatherResult.current.relative_humidity_2m,
          windSpeed: weatherResult.current.wind_speed_10m,
          apparent_temperature: weatherResult.current.apparent_temperature,
        });
      } catch (err) {
        sendData("")
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    loadWeather()

  }, [search, sendData]);

  if (loading) {
    return <p className="error-msg">Loading...</p>;
  }

  if (error) {
    return <p role="alert" className="error-msg" >Error: {error}</p>;
  }

  return (
    <>
      <div className="main-container">
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
      </div>
    </>
  );
}
