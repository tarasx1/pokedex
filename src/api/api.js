import axios from 'axios';

export const API = {
  getPokemon: async (pokemon) => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?offset=${pokemon}&limit=12`
    );
    //.then((resp) => resp.data);
    const requestArray = response.data.results.map(async (request) => {
      return axios.get(`https://pokeapi.co/api/v2/pokemon/${request.name}`);
    });
    const responseAll = await axios.all(requestArray);
    return responseAll;
  },
  getTypes() {
    return axios
      .get(`https://pokeapi.co/api/v2/type?limit=999`)
      .then((resp) => resp.data);
  },
};
