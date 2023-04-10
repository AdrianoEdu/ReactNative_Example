import axios from 'axios';

export class PokemonService {

    instance;

    constructor(){
        this.instance = this.createInstance();
    }

    createInstance() {
        return axios.create({
            baseURL: 'https://pokeapi.co/api/v2/pokemon',
            timeout: 50000,
        });
    }

    async getPokemons(limit, skip)
    {
        return (await this.instance.get(`?limit=${limit}&offset=${skip}`)).data;
    }
}