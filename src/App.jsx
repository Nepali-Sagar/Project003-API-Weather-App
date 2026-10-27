import "./App.css";
import { Header } from "./components/Header";
import { TodayWeather } from "./components/TodayWeather";
import { SearchBar } from "./components/SearchBar";
import { Highlight } from "./components/Highlight";
import { useState } from "react";

export function App() {
  const [formData, setFormData] = useState("");
  const [highlight, setHighlight] = useState({
     humidity: "",
    windSpeed: "",
    apparent_temperature: ""
  })

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="app-container">
      <Header />
      <main>
        <TodayWeather value={formData} sendData={setHighlight}/>
        <SearchBar onSubmit={handleFormSubmit} />
      </main>
      <Highlight getHighlight={highlight} />
    </div>
  );
}

export default App;
