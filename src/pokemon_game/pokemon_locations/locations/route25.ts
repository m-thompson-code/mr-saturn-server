import { PokemonLocationData } from "../../locations";

export const route25: PokemonLocationData = {
    catchMap: {
        Grass: {// Mixing version rates
            Caterpie: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 8,
                maxLevel: 8,
                rate: 20,
            },
            Metapod: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 9,
                maxLevel: 9,
                rate: 3,
            },
            Weedle: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 8,
                maxLevel: 8,
                rate: 20,
            },
            Kakuna: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 9,
                maxLevel: 9,
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
                minLevel: 9,
                maxLevel: 13,
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
            Psyduck: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 20,
                maxLevel: 40,
                rate: 100,
            },
            Slowpoke: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 20,
                maxLevel: 40,
                rate: 100,
            },
        },
        "Old Rod": {
            Magikarp: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 5,
                maxLevel: 5,
                rate: 100,
            },
        },
        "Good Rod": {
            Poliwag: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 5,
                maxLevel: 15,
                rate: 60,
            },
            Goldeen: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 5,
                maxLevel: 15,
                rate: 20,
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
                minLevel: 15,
                maxLevel: 35,
                rate: 5,
            },
            Poliwag: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 15,
                maxLevel: 25,
                rate: 40,
            },
            Poliwhirl: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 20,
                maxLevel: 30,
                rate: 40,
            },
            Slowpoke: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 15,
                maxLevel: 35,
                rate: 5,
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
        "Route 24",
    ],
};
