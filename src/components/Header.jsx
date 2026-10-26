import logo from '../asset/weather-logo.png'
import locationIcon from '../asset/location-icon.png'

export function Header() {
  return (
    <header>
      <div className="logo-section">
          <img src={logo} alt="logo" />

        <div className="site-name">
          <p>Weather App</p>
          <p>Your daily weather forecast</p>
        </div>
      </div>

      <p className="live-weather-text">
        <img src={locationIcon} alt="" />
        Live Weather</p>
    </header>
  );
}
