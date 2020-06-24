import { PokemonLocationData } from "../../locations";

export const viridianForest: PokemonLocationData = {
    catchMap: {
        Grass: {// Mixing rates for both versions since they overlap rates
            Caterpie: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 3,
                maxLevel: 5,
                rate: 40,
            },
            Metapod: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 5,
                maxLevel: 6,
                rate: 5,
            },
            Weedle: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 3,
                maxLevel: 5,
                rate: 40,
            },
            Kakuna: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 5,
                maxLevel: 6,
                rate: 5,
            },
            Pikachu: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 3,
                maxLevel: 5,
                rate: 10,
            },
        }
    },
    connections: [
        "Route 2 (Pewter)",
        "Route 2 (Viridian)",
    ],
};
