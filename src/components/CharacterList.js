import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList({name}) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`)
      .then(res => {
        console.log('CHARACTERS: ', res);
        setCharacters(res.data.results);
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
        {characters.map(character => {
          return <CharacterCard key={character.id} character={character}/>
        })}
    </section>
  );
}
