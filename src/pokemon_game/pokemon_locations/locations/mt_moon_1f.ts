import { PokemonLocationData } from "../../locations";

export const mtMoon1F: PokemonLocationData = {
    catchMap: {
        Cave: {
            Zubat: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 7,
                maxLevel: 10,
                rate: 69,
            },
            Geodude: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 7,
                maxLevel: 9,
                rate: 25,
            },
            Paras: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 8,
                maxLevel: 8,
                rate: 5,
            },
            Clefairy: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 8,
                maxLevel: 8,
                rate: 1,
            },
        }
    },
    connections: [
        "Route 3",
        "Route 4",
        "Mt. Moon B1F",
    ],
};
