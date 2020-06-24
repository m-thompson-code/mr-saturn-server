import { PokemonLocationData } from "../../locations";
import { pokemonTower3F } from "./pokemon_tower_3f";

export const pokemonTower6F: PokemonLocationData = {
    catchMap: pokemonTower3F.catchMap,
    connections: [
        "Pokemon Tower 5F",
        "Pokemon Tower 7F",
    ],
};
