import { PokemonLocationData } from "../../locations";

export const route10: PokemonLocationData = {
    catchMap: {
        Grass: {
            Voltorb: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 14,
                maxLevel: 17,
                rate: 40,
            },
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
                minLevel: 11,
                maxLevel: 17,
                rate: 25,
            },
            Sandshrew: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 11,
                maxLevel: 17,
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
            Horsea: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 5,
                maxLevel: 15,
                rate: 40,
            },
            Krabby: {
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
            Horsea: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 15,
                maxLevel: 35,
                rate: 84,
            },
            Krabby: {
                inFireRed: false,
                inLeafGreen: true,
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
        },
    },
    connections: [
        "Route 9",
        "Lavender Town",
    ],
};
