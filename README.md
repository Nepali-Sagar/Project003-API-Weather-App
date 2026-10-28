# Weather App

A React weather app that displays current conditions and daily high and low temperatures. It starts with Kathmandu, Nepal, and lets you search for weather by city.

## Screenshot / Live Demo

There is no deployed live demo or application screenshot available yet. To run the app on your computer, follow [Getting Started](#getting-started).

## Features

- Loads current weather for Kathmandu by default.
- Search for a city to view its current temperature and the day's high and low temperatures.
- Displays feels-like temperature, humidity, and wind speed in weather highlight cards.
- Shows loading feedback while weather information is being fetched and an error message if the request fails or the city cannot be found.

## Tech Stack

- React 19 for the user interface.
- Vite 8 for local development and production builds.
- JavaScript and CSS.
- Open-Meteo Geocoding API and Forecast API for weather data.

## Getting Started

### Prerequisites

- Node.js and npm installed on your computer.
- An internet connection to retrieve weather data from Open-Meteo.

### Install and run

1. Download or clone this repository.
2. Open a terminal in the project folder.
3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the local development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed in your terminal, usually `http://localhost:5173`.

To create and preview a production build, run:

```bash
npm run build
npm run preview
```

## Environment Variables

No environment variables or API keys are required for the current version. The app uses the public Open-Meteo APIs directly from the browser.

## API Overview / Usage

When the weather view loads or a city is searched, the app makes two requests:

1. The Open-Meteo Geocoding API looks up the selected city (Kathmandu by default).
2. The Open-Meteo Forecast API uses the returned coordinates to request current temperature, relative humidity, wind speed, apparent temperature, and daily high and low temperatures.

The interface displays the city and country, current temperature, daily high and low, feels-like temperature, humidity, and wind speed. The city search input must not be empty.

## Scripts and Testing

Run these commands from the project folder:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run build` | Create the production files in the `dist` folder. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Check the project code with ESLint. |

There is no automated test script configured yet.

## Deployment

The app can be deployed to a static hosting service that supports Vite projects.

1. Run `npm run build`.
2. Configure the hosting service to use `npm run build` as its build command.
3. Set the published output directory to `dist`.
4. Follow the hosting provider's instructions to publish the app.

The project does not currently have a published deployment.

## Project Structure

```text
.
├── index.html
├── src/
│   ├── asset/              # Background and image assets
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Highlight.jsx
│   │   ├── SearchBar.jsx
│   │   └── TodayWeather.jsx
│   ├── App.jsx             # Main page layout
│   ├── App.css             # App component styles
│   ├── index.css           # Global styles
│   └── main.jsx            # App entry point
├── package.json
└── vite.config.js
```

## Troubleshooting

- **The weather does not load:** Check your internet connection and try again. The app needs to reach the Open-Meteo APIs.
- **The page does not open:** Make sure `npm run dev` is still running and open the local address shown in the terminal.
- **Dependencies are missing:** Run `npm install` from the project folder, then try again.
- **Lint or build reports an error:** Read the terminal output for the file and issue reported, then fix it before retrying.

## Contributing

This is a solo learning project, but contributions and suggestions are welcome.

1. Create a branch for your change.
2. Make and test the change with `npm run lint` and `npm run build`.
3. Commit your work and open a pull request describing what changed.

For ideas or problems, open an issue in the repository.

## License

This project is licensed under the MIT License. You may use, copy, modify, distribute, sublicense, and sell copies of the software, provided the copyright and permission notice are included. See the [LICENSE](./LICENSE) file for the full license text.
