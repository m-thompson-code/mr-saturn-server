import { PokemonLocationData } from "../../locations";

export const route15: PokemonLocationData = {
    catchMap: {
        Grass: {
            Oddish: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 22,
                maxLevel: 26,
                rate: 35,
            },
            Bellsprout: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 22,
                maxLevel: 26,
                rate: 35,
            },
            Venonat: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 24,
                maxLevel: 26,
                rate: 30,
            },
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
            Gloom: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 30,
                maxLevel: 30,
                rate: 5,
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
        "Route 14",
        "Route 16",
    ],
};
