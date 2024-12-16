import "./App.css";
import Card from "./components/Cards";
import FilterBlock from "./components/Filter-block";
import blueAirlineIcon from "../src/assets/blue-airline.png";
import { useState } from "react";

function App() {
  const [selectedCurrency, setSelectedCurrency] = useState("RUB");
  const [stops, setStops] = useState<number[]>([]);
  return (
    <div className="App">
      <img src={blueAirlineIcon} alt="blue-airline-icon" />
      <div className="content">
        <FilterBlock
          selectedCurrency={selectedCurrency}
          setSelectedCurrency={setSelectedCurrency}
          stops={stops}
          setStops={setStops}
        />
        <Card stops={stops} selectedCurrency={selectedCurrency} />
      </div>
    </div>
  );
}

export default App;
