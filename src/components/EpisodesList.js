import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function LocationList({name}) {
  // TODO: Add useState to track data from useEffect
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/episode/?name=${name}`)
      .then(res => {
        console.log('EPISODES: ', res)
        setEpisodes(res.data.results);
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
        {episodes.map(episode => {
          return <EpisodeCard key={episode.id} episode={episode}/>
        })}
    </section>
  );
}
