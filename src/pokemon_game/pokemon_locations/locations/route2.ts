import { PokemonLocationData } from "../../locations";

export const route2: PokemonLocationData = {
    catchMap: {
        Grass: {
            Pidgey: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 2,
                maxLevel: 5,
                rate: 45,
            },
            Rattata: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 2,
                maxLevel: 5,
                rate: 45,
            },
            Caterpie: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 4,
                maxLevel: 5,
                rate: 5,
            },
            Weedle: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 4,
                maxLevel: 5,
                rate: 5,
            },
        }
    },
    connections: [
        "Viridian City",
        "Pewter City",
        "Diglett's Cave",
    ],
};
