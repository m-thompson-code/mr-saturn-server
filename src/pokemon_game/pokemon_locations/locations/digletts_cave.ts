import { PokemonLocationData } from "../../locations";

export const diglettsCave: PokemonLocationData = {
    catchMap: {
        Cave: {
            "Diglett": {
                minLevel: 15,
                maxLevel: 22,
                rate: 95,
                inFireRed: true,
                inLeafGreen: true,
            },
            "Dugtrio": {
                minLevel: 29,
                maxLevel: 31,
                rate: 5,
                inFireRed: true,
                inLeafGreen: true,
            }
        }
    },
    connections: [
        "Route 2",
        "Route 11",
    ],
};
