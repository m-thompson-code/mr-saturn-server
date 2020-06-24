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

export type SegiiIslands = "Berry Forest" | "Bond Bridge" | "Canyon Entrance" | "Cape Brink" | "Five Island" | "Five Isle Meadow" | "Four Island" | "Green Path" | "Icefall Cave" | "Kindle Road" | "Lost Cave" | "Memorial Pillar" | "Mt. Ember" | "One Island" | "Outcast Island" | "Resort Gorgeous" | "Three Island" | "Treasure Beach" | "Two Island" | "Sevault Canyon" | "Seven Island" | "Six Island" | "Water Labyrinth" | "Water Path";
export type Celadon = "Celadon City" | "Celadon Condominiums" | "Mt. Moon 1F" | "Mt. Moon B1F" | "Mt. Moon B2F" | "Route 16" | "Route 3" | "Route 4" | "Route 7";
export type Cerulean = "Cerulean City" | "Cerulean Cave 1F" | "Cerulean Cave B1F" | "Cerulean Cave 2F" | "Route 24";
export type Cinnabar = "Cinnabar Island" | "Pokemon Mansion 1F" | "Pokemon Mansion 2F" | "Pokemon Mansion 3F" | "Pokemon Mansion B1F" | "Route 20" | "Route 21";
export type Fuchsia = "Fuchsia City" | "Route 15" | "Route 18" | "Route 19";// Safari Zone and Pal Park
export type Lavender = "Lavender Town" | "Pokemon Tower 1F" | "Pokemon Tower 2F" | "Pokemon Tower 3F" | "Pokemon Tower 4F" | "Pokemon Tower 5F" | "Pokemon Tower 6F" | "Pokemon Tower 7F";
export type Pewter = "Pewter City" | "Route 2" | "Route 3";
export type Saffron = "Saffron City";
export type Vermilion = "Vermilion City";

export type PokemonRoutes = "Route 1" | "Route 2" | "Route 8" | "Route 10" | "Route 11" | "Route 12" | "Route 13" | "Route 14" | "Route 15" | "Route 16" | "Route 17" | "Route 22" | "Route 23" | "Route 24" | "Route 5" | "Route 6" | "Route 9" | "Route 25";

export type PokemonLocation = "Altering Cave" | "Diglett's Cave" | "Indego Plateau" | "Pallet Town" | "Pokemon League Reception Gate" | "Power Plant" | "Rock Tunnel 1F" | "Rock Tunnel B1F" | "Victory Road" | "Viridian City" | SegiiIslands | Celadon | Cerulean | Cinnabar | Fuchsia | Lavender | Pewter | Saffron | Vermilion | PokemonRoutes;

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
    "Cerulean City": pokemonLocations.ceruleanCity,
    "Cinnabar Island": {
        catchMap: {
        },
        connections: [
            "Route 21",
            "Route 20",
            "Pokemon Mansion 1F",
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
    "Indego Plateau": pokemonLocations.indigoPlateau,
    "Icefall Cave": pokemonLocations.icefallCave,
    "Kindle Road": pokemonLocations.kindleRoad,
    "Lavender Town": pokemonLocations.lavenderTown,
    "Lost Cave": pokemonLocations.lostCave,
    "Power Plant": pokemonLocations.powerPlant,
    "Memorial Pillar": pokemonLocations.memorialPillar,
    "Mt. Ember": {
        catchMap: {
        },
        connections: [
        ],
    },
    "Mt. Moon 1F": pokemonLocations.mtMoon1F,
    "Mt. Moon B1F": pokemonLocations.mtMoonB1F,
    "Mt. Moon B2F": pokemonLocations.mtMoonB2F,
    "One Island": pokemonLocations.oneIsland,
    "Outcast Island": pokemonLocations.outcastIsland,
    // "Pal Park": // TODO: what is Pal Park lol?
    "Pallet Town": pokemonLocations.palletTown,
    "Pewter City": pokemonLocations.pewterCity,
    "Pokemon League Reception Gate": pokemonLocations.pokemonLeagueReceptionGate,
    "Pokemon Mansion 1F": pokemonLocations.pokemonMansion1F,
    "Pokemon Mansion 2F": pokemonLocations.pokemonMansion2F,
    "Pokemon Mansion 3F": pokemonLocations.pokemonMansion3F,
    "Pokemon Mansion B1F": pokemonLocations.pokemonMansionB1F,
    "Pokemon Tower 1F": pokemonLocations.pokemonTower1F,
    "Pokemon Tower 2F": pokemonLocations.pokemonTower2F,
    "Pokemon Tower 3F": pokemonLocations.pokemonTower3F,
    "Pokemon Tower 4F": pokemonLocations.pokemonTower4F,
    "Pokemon Tower 5F": pokemonLocations.pokemonTower5F,
    "Pokemon Tower 6F": pokemonLocations.pokemonTower6F,
    "Pokemon Tower 7F": pokemonLocations.pokemonTower7F,
    "Resort Gorgeous": pokemonLocations.resortGorgeous,
    // Pewter Museum of Science // Skipping for now
    "Rock Tunnel 1F": pokemonLocations.rockTunnel1F,
    "Rock Tunnel B1F": pokemonLocations.rockTunnelB1F,
    "Route 1": pokemonLocations.route1,
    "Route 10": pokemonLocations.route10,
    "Route 11": pokemonLocations.route11,
    "Route 12": pokemonLocations.route12,
    "Route 13": pokemonLocations.route13,
    "Route 14": pokemonLocations.route14,
    "Route 15": pokemonLocations.route15,
    "Route 16": pokemonLocations.route16,
    "Route 17": pokemonLocations.route17,
    "Route 18": pokemonLocations.route18,
    "Route 19": pokemonLocations.route19,
    "Route 2": pokemonLocations.route2,
    "Route 20": pokemonLocations.route20,
    "Route 21": pokemonLocations.route21,
    "Route 22": pokemonLocations.route22,
    "Route 23": pokemonLocations.route23,
    "Route 24": pokemonLocations.route24,
    "Route 25": pokemonLocations.route25,
    "Route 3": pokemonLocations.route3,
    "Route 4": pokemonLocations.route4,
    "Route 5": pokemonLocations.route5,
    "Route 6": pokemonLocations.route6,
    "Route 7": pokemonLocations.route7,
    "Route 8": pokemonLocations.route8,
    "Route 9": pokemonLocations.route9,
    "Saffron City": {
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
    "Treasure Beach": {
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
    // TODO: Handle Underground Path 5-6
    // TODO: Handle Underground Path 7-8
    "Vermilion City": {
        catchMap: {
        },
        connections: [
        ],
    },
    "Victory Road": {
        catchMap: {
        },
        connections: [
        ],
    },
    "Viridian City": {
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

