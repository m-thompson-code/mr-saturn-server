import { PokemonLocationData } from "../../locations";
import { pokemonTower3F } from "./pokemon_tower_3f";

export const pokemonTower5F: PokemonLocationData = {
    catchMap: pokemonTower3F.catchMap,
    connections: [
        "Pokemon Tower 4F",
        "Pokemon Tower 6F",
    ],
};
