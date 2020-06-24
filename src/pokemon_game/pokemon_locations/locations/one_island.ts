import { PokemonLocationData } from "../../locations";

export const oneIsland: PokemonLocationData = {
    catchMap: {
        Surfing: {
            Tentacool: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 5,
                maxLevel: 40,
                rate: 95,
            },
            Tentacruel: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 35,
                maxLevel: 40,
                rate: 5,
            },
        }
    },
    connections: [
        "Outcast Island",
    ],
};
