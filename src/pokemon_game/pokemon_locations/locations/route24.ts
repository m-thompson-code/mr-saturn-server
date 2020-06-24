import { PokemonLocationData } from "../../locations";

export const route24: PokemonLocationData = {
    catchMap: {
        Grass: {// Mixing version rates
            Caterpie: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 7,
                maxLevel: 7,
                rate: 20,
            },
            Metapod: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 8,
                maxLevel: 8,
                rate: 3,
            },
            Weedle: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 7,
                maxLevel: 7,
                rate: 20,
            },
            Kakuna: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 8,
                maxLevel: 8,
                rate: 3,
            },
            Pidgey: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 11,
                maxLevel: 13,
                rate: 15,
            },
            Oddish: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 12,
                maxLevel: 14,
                rate: 25,
            },
            Abra: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 8,
                maxLevel: 12,
                rate: 15,
            },
            Bellsprout: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 12,
                maxLevel: 14,
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
        "Route 25",
        "Cerulean City",
        "Cerulean Cave 1F",
    ],
};
