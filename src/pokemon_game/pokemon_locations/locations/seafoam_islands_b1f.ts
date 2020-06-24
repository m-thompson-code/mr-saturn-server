import { PokemonLocationData } from "../../locations";

export const seafoamIslandsB1F: PokemonLocationData = {
    catchMap: {
        Cave: {
            Psyduck: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 26,
                maxLevel: 33,
                rate: 40,
            },
            Slowpoke: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 26,
                maxLevel: 33,
                rate: 40,
            },
            Zubat: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 22,
                maxLevel: 26,
                rate: 34,
            },
            Golbat: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 26,
                maxLevel: 30,
                rate: 11,
            },
            Seel: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 28,
                maxLevel: 28,
                rate: 10,
            },
            Golduck: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 33,
                maxLevel: 35,
                rate: 5,
            },
            Slowbro: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 33,
                maxLevel: 35,
                rate: 5,
            },
        }
    },
    connections: [
        "Seafoam Islands 1F",
        "Seafoam Islands B2F",
    ],
};
