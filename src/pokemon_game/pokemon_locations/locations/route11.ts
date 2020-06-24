import { PokemonLocationData } from "../../locations";

export const route11: PokemonLocationData = {
    catchMap: {
        Grass: {
            Spearow: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 13,
                maxLevel: 17,
                rate: 35,
            },
            Ekans: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 12,
                maxLevel: 15,
                rate: 40,
            },
            Sandshrew: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 12,
                maxLevel: 15,
                rate: 40,
            },
            Drowzee: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 11,
                maxLevel: 15,
                rate: 25,
            },
        },
        Surfing: {
            Tentacool: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 5,
                maxLevel: 40,
                rate: 100,
            }
        },
        "Old Rod": {
            Magikarp: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 5,
                maxLevel: 5,
                rate: 100,
            }
        },
        "Good Rod": {// Mixing versions
            Krabby: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 5,
                maxLevel: 15,
                rate: 40,
            },
            Horsea: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 5,
                maxLevel: 15,
                rate: 40,
            },
            Magikarp: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 5,
                maxLevel: 15,
                rate: 20,
            },
        },
        "Super Rod": {
            Psyduck: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 25,
                maxLevel: 35,
                rate: 1,
            },
            Slowpoke: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 25,
                maxLevel: 35,
                rate: 1,
            },
            Krabby: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 15,
                maxLevel: 35,
                rate: 84,
            },
            Horsea: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 15,
                maxLevel: 35,
                rate: 84,
            },
            Gyarados: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 15,
                maxLevel: 25,
                rate: 15,
            },
        },
    },
    connections: [
        "Diglett's Cave",
        "Vermilion City",
        "Route 12",
    ],
};
