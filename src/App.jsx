import "./App.css";
import { Header } from "./components/Header";
import { TodayWeather } from "./components/TodayWeather";
import { SearchBar } from "./components/searchBar";
import { Highlight } from "./components/Highlight";

export function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <TodayWeather />
      </main>
      <SearchBar />
      <Highlight/>
    </div>
  );
}

export default App;
