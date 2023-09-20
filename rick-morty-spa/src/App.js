import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  //let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;
  let [search, setSearch] = useState("");

  let api = `https://rickandmortyapi.com/api/character/?page=1&name=${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <header>
        <Navbar />
        <div className="">
          <Search setSearch={setSearch} />
        </div>
      </header>

      <div className="container">
        <div className="col-12">
          <div className="row">
            <Cards results={results} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
