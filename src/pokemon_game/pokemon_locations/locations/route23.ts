import { PokemonLocationData } from "../../locations";

export const route23: PokemonLocationData = {
    catchMap: {
        Grass: {
            Spearow: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 32,
                maxLevel: 34,
                rate: 15,
            },
            Fearow: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 40,
                maxLevel: 44,
                rate: 25,
            },
            Ekans: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 32,
                maxLevel: 34,
                rate: 20,
            },
            Arbok: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 4,
                maxLevel: 44,
                rate: 5,
            },
            Sandshrew: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 32,
                maxLevel: 34,
                rate: 20,
            },
            Sandslash: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 4,
                maxLevel: 44,
                rate: 5,
            },
            Mankey: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 32,
                maxLevel: 34,
                rate: 30,
            },
            Primeape: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 42,
                maxLevel: 42,
                rate: 5,
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
        "Pokemon League Reception Gate",
        "Victory Road",
        "Cerulean Cave 1F"
    ],
};
