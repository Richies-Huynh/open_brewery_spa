import React, {useEffect, useState} from 'react';
import './App.css';
import { Brewery } from "./types/Brewery";
import DataTable from "./components/DataTable"
import Title from "./components/Title";

function App() {
  const [breweries, setBreweries] = useState<Brewery.Model[]>([]);

  useEffect(() => {
    fetch('https://api.openbrewerydb.org/v1/breweries?by_city=san_diego', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(breweries => {
        setBreweries(breweries);
      })
  });

  return (
    <div>
      <Title label={"Breweries"}></Title>
      <DataTable breweries={breweries} />
    </div>
  );
}

export default App;
