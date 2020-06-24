import { PokemonLocationData } from "../../locations";

export const resortGorgeous: PokemonLocationData = {
    catchMap: {
        Surfing: {
            "Tentacool": {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 5,
                maxLevel: 40,
                rate: 65,
            },
            "Tentacruel": {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 35,
                maxLevel: 40,
                rate: 5,
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
            Horsea: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 5,
                maxLevel: 15,
                rate: 80,
            },
            Krabby: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 5,
                maxLevel: 15,
                rate: 80,
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
            Shellder: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 15,
                maxLevel: 25,
                rate: 40,
            },
            Horsea: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 15,
                maxLevel: 25,
                rate: 40,
            },
            Krabby: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 15,
                maxLevel: 25,
                rate: 40,
            },
            Staryu: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 15,
                maxLevel: 25,
                rate: 40,
            },
            Gyarados: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 15,
                maxLevel: 25,
                rate: 15,
            },
            Seadra: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 25,
                maxLevel: 35,
                rate: 4,
            },
            Kingler: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 25,
                maxLevel: 35,
                rate: 4,
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
        }
    },
    connections: [
        "Lost Cave",
        "Water Labyrinth",
    ],
};
