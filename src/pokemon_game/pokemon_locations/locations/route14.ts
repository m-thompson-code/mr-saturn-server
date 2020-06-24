import { PokemonLocationData } from "../../locations";

export const route14: PokemonLocationData = {
    catchMap: {
        Grass: {
            Pidgey: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 25,
                maxLevel: 27,
                rate: 20,
            },
            Pidgeotto: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 29,
                maxLevel: 29,
                rate: 5,
            },
            Oddish: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 22,
                maxLevel: 26,
                rate: 35,
            },
            Gloom: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 30,
                maxLevel: 30,
                rate: 5,
            },
            Venonat: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 24,
                maxLevel: 26,
                rate: 30,
            },
            Bellsprout: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 22,
                maxLevel: 26,
                rate: 35,
            },
            Weepinbell: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 30,
                maxLevel: 30,
                rate: 5,
            },
            Ditto: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 23,
                maxLevel: 23,
                rate: 5,
            },
        }
    },
    connections: [
        "Route 13",
        "Route 15",
    ],
};
