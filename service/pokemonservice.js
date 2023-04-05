import axios from 'axios';

export class PokemonService {


    getInstance() {
        return axios.create({
            baseURL: 'https://pokeapi.co/api/v2/pokemon',
            timeout: 50000,
            headers: { 'X-Custom-Header': 'foobar' }
        });
    }

    async getPokemons(limit, skip)
    {
        let response = await this.getInstance().get(`?limit=${limit}&offset=${skip}`);
        return await response.data
    }

    async getPokemon(name)
    {
        let response
    }
}