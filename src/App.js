import "./App.css";
import Series from "./components/Series.js";
import SerieList from "./components/SerieList.js";
import SearchSeries from "./components/SearchSeries.js";
import AddToTheList from "./components/AddToTheList.js";
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router";
import DescriptionM from "./components/DescriptionM.Js";

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
      <Link to="/">
        {" "}
        <h1> Serie Application </h1>
      </Link>

      <AddToTheList addSerie={addSerie} />

      <SearchSeries search1={filter1} search2={filter2} />
    </div>
    <Routes>
      <Route
        exact
        path="/"
        element={
          <SerieList serie={serieFlow} name={search1} rating={search2} />
        }
      ></Route>
     {serieFlow.map((el) => {
        <Route path={`/description/${el.id}`}>
          <DescriptionM
            title={el.title}
            description={el.description}
            rating={el.rating}
            trailer={el.trailer}
          />
        </Route>;
      })} 
      <Route path="/description/:id" element={<DescriptionM Series={serieFlow} />} />
    </Routes>

    <footer>
      <h1>Enjoy Watching</h1>
    </footer>
  </div>
);
}


export default App;
