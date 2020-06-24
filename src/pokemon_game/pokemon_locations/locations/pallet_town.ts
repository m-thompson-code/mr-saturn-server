import { PokemonLocationData } from "../../locations";

export const palletTown: PokemonLocationData = {
    catchMap: {
        Surfing: {
            Tentacool: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 5,
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
            }
        },
        "Good Rod": {// Mixing FR and LG rates since it messes up the system 20/60 -> 40/40
            Krabby: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 5,
                maxLevel: 15,
                rate: 40,
            },
            Horsea: {
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
            Shellder: {
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
            Kingler: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 25,
                maxLevel: 35,
                rate: 4,
            },
            Horsea: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 15,
                maxLevel: 25,
                rate: 40,
            },
            Seadra: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 25,
                maxLevel: 35,
                rate: 4,
            },
            Staryu: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 25,
                maxLevel: 35,
                rate: 40,
            },
            Gyarados: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 15,
                maxLevel: 25,
                rate: 15,
            },
        },
        Special: {// Skipping Professor Oak's Laboratory to keep it simple and bring it all to Home instead
            Bulbasaur: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 5,
                maxLevel: 5,
                rate: 100,
                note: "starter, only one per encounter, player chooses",
            },
            Charmander: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 5,
                maxLevel: 5,
                rate: 100,
                note: "starter, only one per encounter, player chooses",
            },
            Squirtle: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 5,
                maxLevel: 5,
                rate: 100,
                note: "starter, only one per encounter, player chooses",
            },
            Pikachu: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 5,
                maxLevel: 5,
                rate: 100,
                note: "starter, only one per encounter, player chooses",
            },
            Eevee: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 5,
                maxLevel: 5,
                rate: 100,
                note: "starter, only one per encounter, player chooses",
            },
        }
    },
    connections: [
        "Route 1",
        "Route 21",
    ],
};
