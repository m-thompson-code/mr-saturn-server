import { PokemonLocationData } from "../../locations";

export const rockTunnel1F: PokemonLocationData = {
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
                maxLevel: 15,
                rate: 5,
            },
        }
    },
    connections: [
        "Route 10",
        "Rock Tunnel B1F",
    ],
};
