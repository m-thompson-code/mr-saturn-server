import { PokemonLocationData } from "../../locations";

export const berryForest: PokemonLocationData = {
    catchMap: {
        Grass: {
            "Pidgeotto": {
                minLevel: 37,
                maxLevel: 37,
                rate: 20,
                inFireRed: true,
                inLeafGreen: true,
            },
            "Gloom": {
                minLevel: 35,
                maxLevel: 35,
                rate: 20,
                inFireRed: true,
                inLeafGreen: false,
            },
            "Weepinbell": {
                minLevel: 35,
                maxLevel: 35,
                rate: 20,
                inFireRed: false,
                inLeafGreen: true,
            },
            "Pidgey": {
                minLevel: 32,
                maxLevel: 32,
                rate: 10,
                inFireRed: true,
                inLeafGreen: true,
            },
            "Oddish": {
                minLevel: 30,
                maxLevel: 30,
                rate: 10,
                inFireRed: true,
                inLeafGreen: false,
            },
            "Bellsprout": {
                minLevel: 30,
                maxLevel: 30,
                rate: 10,
                inFireRed: false,
                inLeafGreen: true,
            },
            "Venonat": {
                minLevel: 34,
                maxLevel: 34,
                rate: 10,
                inFireRed: true,
                inLeafGreen: true,
            },
            "Psyduck": {
                minLevel: 31,
                maxLevel: 31,
                rate: 5,
                inFireRed: true,
                inLeafGreen: false,
            },
            "Slowpoke": {
                minLevel: 31,
                maxLevel: 31,
                rate: 5,
                inFireRed: false,
                inLeafGreen: true,
            },
            "Hypno": {
                minLevel: 37,
                maxLevel: 40,
                rate: 5,
                note: "Only allowed to catch/default once",
                inFireRed: true,
                inLeafGreen: true,
            },
            "Exeggcute": {
                minLevel: 35,
                maxLevel: 35,
                rate: 5,
                inFireRed: true,
                inLeafGreen: true,
            },
        },
        Surfing: {
            "Psyduck": {
                minLevel: 5,
                maxLevel: 40,
                rate: 95,
                inFireRed: true,
                inLeafGreen: false,
            },
            "Slowpoke": {
                minLevel: 5,
                maxLevel: 40,
                rate: 95,
                inFireRed: false,
                inLeafGreen: true,
            },
            "Golduck": {
                minLevel: 35,
                maxLevel: 40,
                rate: 5,
                inFireRed: true,
                inLeafGreen: false,
            },
            "Slowbro": {
                minLevel: 35,
                maxLevel: 40,
                rate: 5,
                inFireRed: false,
                inLeafGreen: true,
            },
        },
        "Old Rod": {
            "Magikarp": {
                minLevel: 5,
                maxLevel: 5,
                rate: 100,
                inFireRed: true,
                inLeafGreen: true,
            }
        },
        "Good Rod": {
            "Goldeen": {
                minLevel: 5,
                maxLevel: 15,
                rate: 60,
                inFireRed: true,
                inLeafGreen: true,
            },
            "Poliwag": {
                minLevel: 5,
                maxLevel: 15,
                rate: 20,
                inFireRed: true,
                inLeafGreen: true,
            },
            "Magikarp": {
                minLevel: 5,
                maxLevel: 15,
                rate: 20,
                inFireRed: true,
                inLeafGreen: true,
            },
        },
        "Super Rod": {
            "Seaking": {
                minLevel: 20,
                maxLevel: 30,
                rate: 40,
                inFireRed: true,
                inLeafGreen: true,
            },
            "Gyarados": {
                minLevel: 15,
                maxLevel: 25,
                rate: 15,
                inFireRed: true,
                inLeafGreen: true,
            },
            "Psyduck": {
                minLevel: 15,
                maxLevel: 35,
                rate: 5,
                inFireRed: true,
                inLeafGreen: false,
            },
            "Slowpoke": {
                minLevel: 15,
                maxLevel: 35,
                rate: 5,
                inFireRed: false,
                inLeafGreen: true,
            },
        }
    },
    connections: [
        "Bond Bridge",
    ],
};
