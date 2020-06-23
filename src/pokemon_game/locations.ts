import { Pokemon } from './pokemon';

import * as pokemonLocations from './pokemon_locations/locations';
// import { alteringCave } from './pokemon_locations/locations/altering_cave';
// import { berryForest } from './pokemon_locations/locations/berry_forest';
// import { bondBridge } from './pokemon_locations/locations/bond_bridge';

export type FishingRod = "Old Rod" | "Good Rod" | "Super Rod";

export type SpecialSpawnType = "Rock Smash";

export type NormalSpawnType = "Grass" | "Cave" | "Walking";

export type SpawnType = NormalSpawnType | "Surfing" | "Special" | FishingRod | SpecialSpawnType;

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

export type SegiiIslands = "Berry Forest" | "Bond Bridge" | "Canyon Entrance" | "Cape Brink" | "Five Island" | "Five Isle Meadow" | "Four Island" | "Green Path" | "Icefall Cave" | "Kindle Road" | "Memorial Pillar" | "Mt. Ember" | "One Island" | "Outcast Island" | "Three Island" | "Two Island" | "Sevault Canyon" | "Seven Island" | "Six Island" | "Water Labyrinth" | "Water Path";
export type Celadon = "Celadon City" | "Celadon Condominiums" | "Route 16" | "Route 7";
export type Cerulean = "Cerulean Cave 1F" | "Cerulean Cave B1F" | "Cerulean Cave 2F" | "Route 24";
export type Cinnabar = "Cinnabar Island" | "Route 21" | "Route 20";
export type Fuchsia = "Fuchsia City" | "Route 15" | "Route 18" | "Route 19";// Safari Zone and Pal Park

export type PokemonRoutes = "Route 2" | "Route 10" | "Route 11";

export type PokemonLocation = "Altering Cave" | "Diglett's Cave" | "Power Plant" | SegiiIslands | Celadon | Cerulean | Cinnabar | Fuchsia | PokemonRoutes;

export type PokemonLocationDataMap = {
    [location in PokemonLocation]: PokemonLocationData;
}

export const locationDataMap: PokemonLocationDataMap = {
    "Altering Cave": pokemonLocations.alteringCave,
    "Berry Forest": pokemonLocations.berryForest,
    // "Birth Island": // Skip since only Deoxys can be found here
    "Bond Bridge": pokemonLocations.bondBridge,
    "Canyon Entrance": pokemonLocations.canyonEntrance,
    "Cape Brink": pokemonLocations.capeBrink,
    "Celadon Condominiums": {
        catchMap: {
            Special: {
                Eevee: {
                    inFireRed: true,
                    inLeafGreen: true,
                    minLevel: 25,
                    maxLevel: 25,
                    rate: 100,
                    note: "Gift Pokemon (limit 1)"
                }
            }
        },
        connections: [
            "Celadon City",
        ],
    },
    // Celadon Department Store: // Skip since there's no pokemon here
    // Celadon Game Corner: // TODO: Skip for now since this would be specific since all pokemon are prizes
    "Celadon City": {
        catchMap: {
        },
        connections: [
            "Route 16",
            "Route 7",
            "Celadon Condominiums",
        ],
    },
    "Cerulean Cave B1F": pokemonLocations.ceruleanCaveB1F,
    "Cerulean Cave 1F": pokemonLocations.ceruleanCave1F,
    "Cerulean Cave 2F": pokemonLocations.ceruleanCave2F,
    "Cinnabar Island": {
        catchMap: {
        },
        connections: [
            "Route 21",
            "Route 20",
        ],
    },
    "Diglett's Cave": pokemonLocations.diglettsCave,
    // "Fighting Dojo": // TODO: Skip as the gift pokemon require special handling
    "Five Island": pokemonLocations.fiveIsland,
    "Five Isle Meadow": pokemonLocations.fiveIsleMeadow,
    // "Cinnabar Lab":// TODO: Skip for now as fossil pokemon require special handling
    "Four Island": pokemonLocations.fourIsland,
    "Fuchsia City": pokemonLocations.fuchsiaCity,
    "Green Path": pokemonLocations.greenPath,
    "Icefall Cave": pokemonLocations.icefallCave,
    "Kindle Road": pokemonLocations.kindleRoad,// CONTINUE HERE
    "Power Plant": pokemonLocations.powerPlant,
    "Memorial Pillar": {
        catchMap: {
        },
        connections: [],
    },
    "Mt. Ember": {
        catchMap: {
        },
        connections: [
        ],
    },
    "One Island": {
        catchMap: {
        },
        connections: [
        ],
    },
    "Outcast Island": {
        catchMap: {
        },
        connections: [
        ],
    },
    // "Pal Park": // TODO: what is Pal Park lol?
    "Route 10": {
        catchMap: {
        },
        connections: [
            "Power Plant",
        ],
    },
    "Route 11": {
        catchMap: {
        },
        connections: [
        ],
    },
    "Route 15": {
        catchMap: {
        },
        connections: [
        ],
    },
    "Route 16": {
        catchMap: {
        },
        connections: [
        ],
    },
    "Route 18": {
        catchMap: {
        },
        connections: [
        ],
    },
    "Route 19": {
        catchMap: {
        },
        connections: [
        ],
    },
    "Route 2": {
        catchMap: {
        },
        connections: [],
    },
    "Route 20": {
        catchMap: {
        },
        connections: [],
    },
    "Route 21": {
        catchMap: {
        },
        connections: [],
    },
    "Route 24": {
        catchMap: {
        },
        connections: [
            "Cerulean Cave 1F",// Actually connected to Cerulean City, but in game, you have to take this route to get to Cerulean Cave
        ],
    },
    "Route 7": {
        catchMap: {
        },
        connections: [
        ],
    },
    // "Safari Zone": // TODO: dunno how we would handle safari zone yet
    "Sevault Canyon": {
        catchMap: {
        },
        connections: [
        ],
    },
    "Seven Island": {
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
    "Two Island": {
        catchMap: {
        },
        connections: [
        ],
    },
    "Water Labyrinth": {
        catchMap: {
        },
        connections: [
        ],
    },
    "Water Path": {
        catchMap: {
        },
        connections: [
        ],
    },
}

