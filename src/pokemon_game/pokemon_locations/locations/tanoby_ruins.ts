import { PokemonLocationData } from "../../locations";

export const tanobyRuins: PokemonLocationData = {
    catchMap: {
        Surfing: {// Only support for gen 1 means no Mantine from LG, so just using FR
            Tentacool: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 5,
                maxLevel: 40,
                rate: 95,
            },
            Tentacruel: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 35,
                maxLevel: 40,
                rate: 5,
            },
        },
        "Old Rod": {// Using some place with similar rates since we don't support gen 2 pokemon
            Magikarp: {
                rate: 100,
                minLevel: 5,
                maxLevel: 5,
                inFireRed: true,
                inLeafGreen: true,
            },
        },
        "Good Rod": {
            Horsea: {
                rate: 80,
                minLevel: 5,
                maxLevel: 15,
                inFireRed: true,
                inLeafGreen: false,
            },
            Krabby: {
                rate: 80,
                minLevel: 5,
                maxLevel: 15,
                inFireRed: false,
                inLeafGreen: true,
            },
            Magikarp: {
                rate: 80,
                minLevel: 5,
                maxLevel: 15,
                inFireRed: true,
                inLeafGreen: true,
            },
        },
        "Super Rod": {
            Horsea: {
                rate: 80,
                minLevel: 15,
                maxLevel: 20,
                inFireRed: true,
                inLeafGreen: false,
            },
            Krabby: {
                rate: 80,
                minLevel: 5,
                maxLevel: 15,
                inFireRed: false,
                inLeafGreen: true,
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
        "Sevault Canyon",
        // "Tanoby Chambers",// No support for unknown yet, so losing connection
    ],
};
