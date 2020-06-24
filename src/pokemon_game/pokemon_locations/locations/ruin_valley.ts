import { PokemonLocationData } from "../../locations";

export const ruinValley: PokemonLocationData = {
    catchMap: {
        Grass: {
            Spearow: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 44,
                maxLevel: 44,
                rate: 20,
            },
            Fearow: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 49,
                maxLevel: 49,
                rate: 10,
            },
            Meowth: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 43,
                maxLevel: 43,
                rate: 10,
            },
            Persian: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 49,
                maxLevel: 52,
                rate: 5,
            },
            Psyduck: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 41,
                maxLevel: 41,
                rate: 5,
            },
            Slowpoke: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 41,
                maxLevel: 41,
                rate: 5,
            },
        },
        Surfing: {// These pokemon don't belong here, but we aren't doing gen 2 ... yet :^)
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
        "Water Path",
    ],
};
