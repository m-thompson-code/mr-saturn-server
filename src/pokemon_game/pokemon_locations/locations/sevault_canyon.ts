import { PokemonLocationData } from "../../locations";

export const sevaultCanyon: PokemonLocationData = {
    catchMap: {// FR also can get Skarmory, but we only do gen 1, so treating both versions the same
        Cave: {
            Fearow: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 50,
                maxLevel: 50,
                rate: 15,
            },
            Meowth: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 43,
                maxLevel: 43,
                rate: 15,
            },
            Persian: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 49,
                maxLevel: 52,
                rate: 5,
            },
            Geodude: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 46,
                maxLevel: 46,
                rate: 20,
            },
            Onix: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 54,
                maxLevel: 54,
                rate: 5,
            },
            Cubone: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 46,
                maxLevel: 46,
                rate: 10,
            },
            Marowak: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 52,
                maxLevel: 52,
                rate: 10,
            },
        },
        "Rock Smash": {
            Geodude: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 25,
                maxLevel: 40,
                rate: 65,
            },
            Graveler: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 30,
                maxLevel: 50,
                rate: 35,
            },
        }
    },
    connections: [
        "Canyon Entrance",
        "Tanoby Ruins",
    ],
};
