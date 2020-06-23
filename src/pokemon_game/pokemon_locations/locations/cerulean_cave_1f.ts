import { PokemonLocationData } from "../../locations";

export const ceruleanCave1F: PokemonLocationData = {
    catchMap: {
        Cave: {
            Parasect: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 49,
                maxLevel: 58,
                rate: 25,
            },
            Magneton: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 49,
                maxLevel: 49,
                rate: 20,
            },
            Golbat: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 46,
                maxLevel: 55,
                rate: 14,
            },
            Primeape: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 52,
                maxLevel: 61,
                rate: 11,
            },
            Ditto: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 52,
                maxLevel: 61,
                rate: 11,
            },
            Machoke: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 46,
                maxLevel: 46,
                rate: 10,
            },
            Electrode: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 58,
                maxLevel: 58,
                rate: 5,
            },
        },
        Surfing: {
            Psyduck: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 30,
                maxLevel: 50,
                rate: 65,
            },
            Slowpoke: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 30,
                maxLevel: 50,
                rate: 65,
            },
            Golduck: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 40,
                maxLevel: 55,
                rate: 35,
            },
            Slowbro: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 40,
                maxLevel: 55,
                rate: 35,
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
                minLevel: 15,
                maxLevel: 35,
                rate: 5,
            },
            Slowpoke: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 15,
                maxLevel: 35,
                rate: 5,
            },
        },
        "Rock Smash": {
            Geodude: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 30,
                maxLevel: 50,
                rate: 65,
            },
            Graveler: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 40,
                maxLevel: 55,
                rate: 35,
            },
        }
    },
    connections: [
        // "Cerulean Cave", // By map this is true, but in game, you have to take Route 24
        "Route 24",
        "Cerulean Cave B1F",
        "Cerulean Cave 2F",
    ],
};
