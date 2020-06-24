import { PokemonLocationData } from "../../locations";

export const route22: PokemonLocationData = {
    catchMap: {
        Grass: {
            Rattata: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 2,
                maxLevel: 5,
                rate: 45,
            },
            Mankey: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 2,
                maxLevel: 5,
                rate: 45,
            },
            Spearow: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 3,
                maxLevel: 5,
                rate: 10,
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
    },
    connections: [
        "Pokemon League Reception Gate",
        "Viridian City",
    ],
};
