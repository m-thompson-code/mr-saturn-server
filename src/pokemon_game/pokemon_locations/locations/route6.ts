import { PokemonLocationData } from "../../locations";

export const route6: PokemonLocationData = {
    catchMap: {
        Grass: {
            Pidgey: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 13,
                maxLevel: 16,
                rate: 40,
            },
            Meowth: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 10,
                maxLevel: 16,
                rate: 35,
            },
            Oddish: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 13,
                maxLevel: 16,
                rate: 25,
            },
            Bellsprout: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 13,
                maxLevel: 16,
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
        }
    },
    connections: [
        "Saffron City",
        "Vermilion City",
    ],
};
