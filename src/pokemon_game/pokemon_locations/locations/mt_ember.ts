import { PokemonLocationData } from "../../locations";

export const mtMoon1F: PokemonLocationData = {
    catchMap: {
        Cave: {// Ignoring the actual Cave section and replacing it with its Grass area
            Spearow: {// Treating LG as both versions since we have conflicting rates for the same pokemon and LG includes more pokemon
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 30,
                maxLevel: 32,
                rate: 10,
            },
            Fearow: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 38,
                maxLevel: 40,
                rate: 25,
            },
            Machop: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 35,
                maxLevel: 35,
                rate: 5,
            },
            Geodude: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 33,
                maxLevel: 33,
                rate: 1,
            },
            Ponyta: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 30,
                maxLevel: 36,
                rate: 35,
            },
            Rapidash: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 39,
                maxLevel: 42,
                rate: 5,
            },
            Magmar: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 38,
                maxLevel: 40,
                rate: 5,
            },
        },
        Special: {
            Moltres: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 50,
                maxLevel: 50,
                rate: 100,
                note: "One encounter",
            }
        }
    },
    connections: [
        "Route 3",
        "Route 4",
        "Mt. Moon B1F",
    ],
};
