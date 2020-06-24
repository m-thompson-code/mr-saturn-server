import { PokemonLocationData } from "../../locations";

export const route16: PokemonLocationData = {
    catchMap: {
        Grass: {
            Doduo: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 18,
                maxLevel: 22,
                rate: 35,
            },
            Rattata: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 18,
                maxLevel: 22,
                rate: 30,
            },
            Spearow: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 20,
                maxLevel: 22,
                rate: 30,
            },
            Raticate: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 23,
                maxLevel: 25,
                rate: 5,
            },
        },
        Special: {
            Snorlax: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 30,
                maxLevel: 30,
                rate: 100,
                note: "One encounter",
            }
        }
    },
    connections: [
        "Celadon City",
        "Route 17",
    ],
};
