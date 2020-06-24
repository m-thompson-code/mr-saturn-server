import { PokemonLocationData } from "../../locations";

export const celadonCity: PokemonLocationData = {
    catchMap: {
        Surfing: {
            Psyduck: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 5,
                maxLevel: 40,
                rate: 99,
            },
            Slowpoke: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 5,
                maxLevel: 40,
                rate: 99,
            },
            Koffing: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 30,
                maxLevel: 40,
                rate: 1,
            },
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
        "Good Rod": {
            Magikarp: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 5,
                maxLevel: 15,
                rate: 100,
            }
        },
        "Super Rod": {
            Magikarp: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 15,
                maxLevel: 35,
                rate: 99,
            },
            Grimer: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 30,
                maxLevel: 40,
                rate: 1,
            },
        }
    },
    connections: [
        "Route 16",
        "Route 7",
        "Celadon Condominiums",
    ],
};
