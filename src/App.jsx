import "./App.css";
import { Header } from "./components/Header";
import { TodayWeather } from "./components/TodayWeather";
import { SearchBar } from "./components/SearchBar";
import { Highlight } from "./components/Highlight";

export function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <TodayWeather />
        <SearchBar />
      </main>
      <Highlight />
    </div>
  );
}

export default App;
