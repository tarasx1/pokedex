import React from 'react';

function ActiveBlock({ activePokemon }) {
  return (
    <div className="activeBlock">
      <img
        src={activePokemon.sprites.front_default}
        //src={`https://pokeres.bastionbot.org/images/pokemon/${activePokemon.id}.png`}
      />
      <h2>
        {activePokemon.name} #{activePokemon.order}
      </h2>
      <div className="character">
        <span>Type</span>
        <span>{activePokemon.types[0].type.name}</span>
      </div>
      <div className="character">
        <span>{activePokemon.stats[1].stat.name}</span>
        <span>{activePokemon.stats[1].base_stat}</span>
      </div>
      <div className="character">
        <span>{activePokemon.stats[2].stat.name}</span>
        <span>{activePokemon.stats[2].base_stat}</span>
      </div>
      <div className="character">
        <span>{activePokemon.stats[0].stat.name}</span>
        <span>{activePokemon.stats[0].base_stat}</span>
      </div>
      <div className="character">
        <span>{activePokemon.stats[3].stat.name}</span>
        <span>{activePokemon.stats[3].base_stat}</span>
      </div>
      <div className="character">
        <span>{activePokemon.stats[4].stat.name}</span>
        <span>{activePokemon.stats[4].base_stat}</span>
      </div>
      <div className="character">
        <span>{activePokemon.stats[5].stat.name}</span>
        <span>{activePokemon.stats[5].base_stat}</span>
      </div>
      <div className="character">
        <span>Weight</span>
        <span>{activePokemon.weight}</span>
      </div>
    </div>
  );
}

export default ActiveBlock;
