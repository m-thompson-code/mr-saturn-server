import { Pokemon } from './pokemon';

import * as pokemonLocations from './pokemon_locations/locations';
// import { alteringCave } from './pokemon_locations/locations/altering_cave';
// import { berryForest } from './pokemon_locations/locations/berry_forest';
// import { bondBridge } from './pokemon_locations/locations/bond_bridge';

export type FishingRod = "Old Rod" | "Good Rod" | "Super Rod";

export type SpawnType = "Grass" | "Cave" | "Surfing" | "Special" | FishingRod;

export interface PokemonLocationData {
    catchMap: {
        [spawnType in SpawnType]?: {
            [pokemon in Pokemon]?: {
                rate: number;
                minLevel: number;
                maxLevel: number;
                note?: string;
                inFireRed: boolean;
                inLeafGreen: boolean;
            }
        }
    };
    connections: PokemonLocation[];
}

export type SegiiIslands = "Berry Forest" | "Bond Bridge" | "Three Island" | "Six Island";
export type PokemonLocation = "Altering Cave" | "Outcast Island" | SegiiIslands;

export type PokemonLocationDataMap = {
    [location in PokemonLocation]: PokemonLocationData;
}

export const locationDataMap: PokemonLocationDataMap = {
    "Altering Cave": pokemonLocations.alteringCave,
    "Berry Forest": pokemonLocations.berryForest,
    // "Birth Island": // Skip since only Deoxys can be found here
    "Bond Bridge": pokemonLocations.bondBridge,
    "Outcast Island": {
        catchMap: {
        },
        connections: [
        ],
    },
    "Six Island": {
        catchMap: {
        },
        connections: [
        ],
    },
    "Three Island": {
        catchMap: {
        },
        connections: [
        ],
    },
    
}

