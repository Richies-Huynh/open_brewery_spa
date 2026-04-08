import React, {useEffect, useState} from 'react';
import './App.css';
import { Brewery } from "./types/Brewery";
import DataTable from "./components/DataTable"
import Title from "./components/Title";

function App() {
  const [breweries, setBreweries] = useState<Brewery.Model[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(encodeURI(`https://api.openbrewerydb.org/v1/breweries?by_city=san_diego&page=${page}`), {
      method: 'GET'
    })
    .then(res => res.json())
    .then(breweries => {
      setBreweries(breweries);
    })
  });

  return (
    <div>
      <Title label={"San Diego Breweries"}></Title>
      <DataTable breweries={breweries} page={page} setPage={setPage} />
    </div>
  );
}

export default App;
