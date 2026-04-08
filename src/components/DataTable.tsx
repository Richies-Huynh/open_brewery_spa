import React, {JSX, useState} from "react";
import { Brewery } from "../types/Brewery"
import "./DataTable.css"
import Modal from "./Modal";
import {APIProvider, Map} from "@vis.gl/react-google-maps";

export default function DataTable({breweries, page, setPage}: {breweries: Brewery.Model[], page: number, setPage: (page: number) => void}): JSX.Element {
  const [selectedBrewery, setSelectedBrewery] = useState<Brewery.Model | null>(null);

  return (
    <div>
      {selectedBrewery &&
        <Modal isOpen={true} onClose={() => setSelectedBrewery(null)}>
          <h2>{selectedBrewery.name}</h2>
          <h4>{Brewery.getAddress(selectedBrewery)}</h4>
          {selectedBrewery.latitude && selectedBrewery.longitude &&
            <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string}>
              <Map
                style={{width: '50vw', height: '50vh'}}
                defaultCenter={{lat: selectedBrewery.latitude, lng: selectedBrewery.longitude}}
                defaultZoom={17}
                gestureHandling='greedy'
                disableDefaultUI
              />
            </APIProvider>
          }
          <h4>Want to learn more? Give them a call at {selectedBrewery.phone}!</h4>
        </Modal>
      }
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Address</th>
          <th>URL</th>
        </tr>
        </thead>
        <tbody>
        {breweries.map((brewery) => (
          <tr key={brewery.id} onClick={() => setSelectedBrewery(brewery)}>
            <td>{brewery.name}</td>
            <td>{brewery.brewery_type}</td>
            <td>{Brewery.getAddress(brewery)}</td>
            <td><a href={brewery.website_url} target={"_blank"} rel="noreferrer">{brewery.website_url}</a></td>
          </tr>
        ))}
        </tbody>
      </table>
      <div className={"datatable-buttons"}>
        <button className={"prev"} onClick={() => setPage(Math.max(1, page - 1))}>Prev</button>
        <button className={"next"} onClick={
          () => {
            if (breweries.length > 0)
              setPage(page + 1)
          }
        }>Next
        </button>
      </div>
    </div>
  );
}