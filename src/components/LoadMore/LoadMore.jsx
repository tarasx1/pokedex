import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemonThunk } from '../../redux/pokemonReducer';

function LoadMore({ loadMorePokemon }) {
  const dispatch = useDispatch();
  //const [pokemon, setPokemon] = useState(null);

  return (
    <div>
      <button
        onClick={() => {
          loadMorePokemon();
        }}
        className="buttonLoad"
      >
        Load More
      </button>
    </div>
  );
}

export default LoadMore;
