import { PokemonLocationData } from "../../locations";

export const route13: PokemonLocationData = {
    catchMap: {
        Grass: {
            Pidgey: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 25,
                maxLevel: 27,
                rate: 20,
            },
            Pidgeotto: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 29,
                maxLevel: 29,
                rate: 5,
            },
            Oddish: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 22,
                maxLevel: 26,
                rate: 35,
            },
            Gloom: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 28,
                maxLevel: 30,
                rate: 5,
            },
            Venonat: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 24,
                maxLevel: 26,
                rate: 30,
            },
            Bellsprout: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 22,
                maxLevel: 26,
                rate: 35,
            },
            Weepinbell: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 28,
                maxLevel: 30,
                rate: 5,
            },
            Ditto: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 25,
                maxLevel: 25,
                rate: 5,
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
        "Route 12",
        "Route 14",
    ],
};
