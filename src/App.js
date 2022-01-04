import "./App.css";
import Series from "./components/Series.js";
import SerieList from "./components/SerieList.js";
import SearchSeries from "./components/SearchSeries.js";
import AddToTheList from "./components/AddToTheList.js";
import React, { useState } from "react";

function App() {
  const [serieFlow, setSerieFlow] = useState(Series);
  const [search1, setSearch1] = useState("");
  const [search2, setSearch2] = useState(0);
  const filter1 = (e) => setSearch1(() => e.target.value);
  const filter2 = (e) => setSearch2(e);
  const addSerie = (el) => setSerieFlow([...serieFlow, el]);

  return (
    <div className="App">
      <div className="Header">
        <h1> Serie Application </h1>
        <AddToTheList addSerie={addSerie} />
        <SearchSeries search1={filter1} search2={filter2} />
      </div>
      <SerieList serie={serieFlow} name={search1} rating={search2} />

      <footer>
        <h1>Enjoy Watching</h1>
      </footer>
    </div>
  );
}

export default App;
