import { PokemonLocationData } from "../../locations";

export const route12: PokemonLocationData = {
    catchMap: {
        Grass: {
            Oddish: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 22,
                maxLevel: 26,
                rate: 35,
            },
            Bellsprout: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 22,
                maxLevel: 26,
                rate: 35,
            },
            Pidgey: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 23,
                maxLevel: 27,
                rate: 30,
            },
            Venomoth: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 24,
                maxLevel: 26,
                rate: 30,
            },
            Gloom: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 28,
                maxLevel: 30,
                rate: 5,
            },
            Weepinbell: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 28,
                maxLevel: 30,
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
        Special: {
            Snorlax: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 30,
                maxLevel: 30,
                rate: 100,
                note: "One encounter"
            }
        }
    },
    connections: [
        "Lavender Town",
        "Route 11",
        "Route 13",
    ],
};
