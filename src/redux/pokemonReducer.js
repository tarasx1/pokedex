import { API } from '../api/api';

let initialState = {
  pokemons: [],
  types: [],
  activeType: null,
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_POKEMON': {
      return { ...state, pokemons: [...action.pokemons] };
    }
    case 'SELECTED_POKEMON': {
      return {
        ...state,
        types: [action.pokemonTypes],
      };
    }
    case 'SET_ACTIVE_TYPE': {
      return {
        ...state,
        activeType: action.activeType,
      };
    }
    default:
      return state;
  }
};

export const getPokemonActionCreator = (pokemons) => ({
  type: 'GET_POKEMON',
  pokemons,
});
export const selectedPokemonActionCreator = (pokemonTypes) => ({
  type: 'SELECTED_POKEMON',
  pokemonTypes,
});

export const setActiveType = (activeType) => ({
  type: 'SET_ACTIVE_TYPE',
  activeType,
});
export const getPokemonThunk = (pokemon) => async (dispatch) => {
  let data = await API.getPokemon(pokemon);
  let pokemons = data.map((pokemon) => pokemon.data);
  dispatch(getPokemonActionCreator(pokemons));
};

export const getPokemonTypes = () => async (dispatch) => {
  let data = await API.getTypes();
  dispatch(selectedPokemonActionCreator(data.results));
};

// export const getAllTypes = () => {
//   return async (dispatch, getState) => {
//     let response = await pokemonsAPI.getTypes();
//     dispatch(setAllTypes(response.results));
//   };
// };

export default pokemonReducer;
