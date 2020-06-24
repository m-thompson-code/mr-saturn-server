import { PokemonLocationData } from "../../locations";
import { pokemonTower3F } from "./pokemon_tower_3f";

export const pokemonTower4F: PokemonLocationData = {
    catchMap: pokemonTower3F.catchMap,
    connections: [
        "Pokemon Tower 3F",
        "Pokemon Tower 5F",
    ],
};
