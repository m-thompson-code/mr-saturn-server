import { PokemonLocationData } from "../../locations";

export const seafoamIslandsB2F: PokemonLocationData = {
    catchMap: {
        Cave: {
            Psyduck: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 30,
                maxLevel: 32,
                rate: 40,
            },
            Slowpoke: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 30,
                maxLevel: 32,
                rate: 40,
            },
            Zubat: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 22,
                maxLevel: 24,
                rate: 20,
            },
            Golbat: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 26,
                maxLevel: 30,
                rate: 10,
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
                minLevel: 32,
                maxLevel: 34,
                rate: 10,
            },
            Slowbro: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 32,
                maxLevel: 34,
                rate: 10,
            },
        }
    },
    connections: [
        "Seafoam Islands B1F",
        "Seafoam Islands B3F",
    ],
};
