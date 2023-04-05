import { PokemonService } from "../service/pokemonservice";

export class PokemonController {
    pokemonService = new PokemonService();

    async getPokemons(limit, skip) {
        return await this.pokemonService.getPokemons(limit, skip);
    }
}