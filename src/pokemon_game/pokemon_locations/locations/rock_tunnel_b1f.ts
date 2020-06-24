import { PokemonLocationData } from "../../locations";

export const rockTunnelB1F: PokemonLocationData = {
    catchMap: {
        Cave: {
            Geodude: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 15,
                maxLevel: 17,
                rate: 35,
            },
            Zubat: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 15,
                maxLevel: 16,
                rate: 30,
            },
            Mankey: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 16,
                maxLevel: 17,
                rate: 15,
            },
            Machop: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 16,
                maxLevel: 17,
                rate: 15,
            },
            Onix: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 13,
                maxLevel: 17,
                rate: 10,
            },
        },
        "Rock Smash": {
            Geodude: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 5,
                maxLevel: 30,
                rate: 90,
            },
            Graveler: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 25,
                maxLevel: 40,
                rate: 10,
            },
        },
    },
    connections: [
        "Rock Tunnel 1F",
    ],
};
