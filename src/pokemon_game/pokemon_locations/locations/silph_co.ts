import { PokemonLocationData } from "../../locations";

export const silphCo: PokemonLocationData = {
    catchMap: {// Skipping all of the flours since it doesn't really have any pokemon anyway
        Special: {
            Lapras: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 25,
                maxLevel: 25,
                rate: 100,
                note: "One time gift",
            },
        }
    },
    connections: [
        "Saffron City",
    ],
};
