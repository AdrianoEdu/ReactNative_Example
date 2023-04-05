import { PokemonController } from "../controller/pokemoncontroller";

export class PokemonState{

    pokemonController = new PokemonController();

    async getPokemons(limit, skip)
    {
        return await this.pokemonController.getPokemons(limit, skip);
    }
}