import { PokemonLocationData } from "../../locations";

export const pokemonTower3F: PokemonLocationData = {
    catchMap: {// All these floors are basedon 7F since they're basically the same and more Haunters and Cubones is better :^)
        Walking: {
            Gastly: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 13,
                maxLevel: 19,
                rate: 75,
            },
            Haunter: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 20,
                maxLevel: 25,
                rate: 15,
            },
            Cubone: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 17,
                maxLevel: 19,
                rate: 10,
            },
        }
    },
    connections: [
        "Pokemon Tower 2F",
        "Pokemon Tower 4F",
    ],
};
