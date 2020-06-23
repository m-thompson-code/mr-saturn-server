import { PokemonLocationData } from "../../locations";

export const alteringCave: PokemonLocationData = {
    catchMap: {
        Cave: {
            "Zubat": {
                minLevel: 6,
                maxLevel: 16,
                rate: 100,
                inFireRed: true,
                inLeafGreen: true,
            }
        }
    },
    connections: [
        "Outcast Island",
    ],
};
