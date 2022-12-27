import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonThunk, getPokemonTypes } from '../../redux/pokemonReducer';
import LoadMore from '../LoadMore/LoadMore';

export const Pokemons = ({ selectCard, setActiveBlock }) => {
  const { pokemons, activeType } = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  const [pokemon, setPokemon] = useState(null);

  const loadMorePokemon = () => {
    console.log(pokemon);
    setPokemon(pokemon + 12);
    setActiveBlock(false);
  };

  useEffect(() => {
    dispatch(getPokemonThunk(pokemon));
    dispatch(getPokemonTypes());
  }, [pokemon]);

  return (
    <div className="content">
      {pokemons
        .filter((card) => {
          if (activeType === null) {
            return true;
          } else if (card.types.length > 1) {
            if (
              card.types[0].type.name === activeType ||
              card.types[1].type.name === activeType
            ) {
              return true;
            }
          } else if (card.types.length === 1) {
            if (card.types[0].type.name === activeType) {
              return true;
            }
          }
          return false;
        })
        .map((card, index) => (
          <div
            onClick={() => {
              selectCard(card);
            }}
            key={`${card.name + index}`}
            className="blockCart"
          >
            <img src={card.sprites.front_default} />
            <h2>{card.name}</h2>
            {card.types.map((type, index) => {
              return (
                <span key={`${index + type.type.name}`}>{type.type.name}</span>
              );
            })}
          </div>
        ))}
      <LoadMore loadMorePokemon={loadMorePokemon} />
    </div>
  );
};
