import { useState } from 'react';
import './App.css';
import ActiveBlock from './components/ActiveBlock/ActiveBlock';
import { Pokemons } from './components/Pokemons/Pokemons';
import UpPopup from './components/upPopup/UpPopup';

function App() {
  //const { pokemons, activeType } = useSelector((state) => state.pokemon);
  //const dispatch = useDispatch();
  const [activeBlock, setActiveBlock] = useState(false);
  const [selectPokemon, setSelectPokemon] = useState('');
  // const [pokemon, setPokemon] = useState(null);

  // const loadMorePokemon = () => {
  //   console.log(pokemon);
  //   setPokemon(pokemon + 12);
  // };

  // useEffect(() => {
  //   dispatch(getPokemonThunk(pokemon));
  //   dispatch(getPokemonTypes(1));
  // }, [pokemon]);

  const selectCard = (pokemon) => {
    setActiveBlock(true);
    setSelectPokemon(pokemon);
  };
  return (
    <div className="wrapper">
      <header className="header">Pokedex</header>

      <div className="app">
        <div className="content">
          <UpPopup />

          <Pokemons setActiveBlock={setActiveBlock} selectCard={selectCard} />
          {/* {pokemons
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
                <img
                  src={card.sprites.front_default}
                  // src={`https://pokeres.bastionbot.org/images/pokemon/${card.id}.png`}
                />
                <h2>{card.name}</h2>
                {card.types.map((type, index) => {
                  return (
                    <span key={`${index + type.type.name}`}>
                      {type.type.name}
                    </span>
                  );
                })}
              </div>
            ))}

          <LoadMore loadMorePokemon={loadMorePokemon} /> */}
        </div>
        {activeBlock && <ActiveBlock activePokemon={selectPokemon} />}
      </div>
    </div>
  );
}

export default App;
