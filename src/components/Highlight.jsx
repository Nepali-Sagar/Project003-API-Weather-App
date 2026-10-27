export function Highlight({ getHighlight }) {
  return (
    <div className="highlight-container">
      <p className="highlight-text">Today's highlights</p>
      <div className="highlight-box-section">
        <div className="highlight-box">
          <span>🌡️</span>
          <p>Feels like</p>
          <p>{getHighlight.apparent_temperature}°C</p>
        </div>
        <div className="highlight-box">
          <span>💧</span>
          <p>Humidity</p>
          <p>{getHighlight.humidity}%</p>
        </div>
        <div className="highlight-box">
          <span>💨</span>
          <p>Wind Speed</p>
          <p>{getHighlight.windSpeed} km/h</p>
        </div>
      </div>
    </div>
  );
}
