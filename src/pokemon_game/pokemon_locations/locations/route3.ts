import { PokemonLocationData } from "../../locations";

export const route3: PokemonLocationData = {
    catchMap: {
        Grass: {
            Pidgey: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 6,
                maxLevel: 7,
                rate: 30,
            },
            Spearow: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 6,
                maxLevel: 8,
                rate: 35,
            },
            "Nidoran ♀": {// Mixing these rates from both versions
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 6,
                maxLevel: 6,
                rate: 7,
            },
            "Nidoran ♂": {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 6,
                maxLevel: 6,
                rate: 7,
            },
            Jigglypuff: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 3,
                maxLevel: 7,
                rate: 10,
            },
            Mankey: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 7,
                maxLevel: 7,
                rate: 10,
            },
        }
    },
    connections: [
        "Pewter City",
        "Route 4",
        "Mt. Moon 1F",
    ],
};
