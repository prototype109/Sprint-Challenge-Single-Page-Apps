import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationList({name}) {
  // TODO: Add useState to track data from useEffect
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/?name=${name}`)
      .then(res => {
        setLocations(res.data.results);
      })
      .catch(err => {
        console.log('ERROR: ', err);
      })
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [name]);

  return (
    <section className="character-list grid-view">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
        {locations.map(location => {
          return <LocationCard key={location.id} location={location}/>
        })}
    </section>
  );
}
