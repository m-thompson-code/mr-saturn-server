import { PokemonLocationData } from "../../locations";

export const route1: PokemonLocationData = {
    catchMap: {
        Grass: {
            Pidgey: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 2,
                maxLevel: 5,
                rate: 50,
            },
            Rattata: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 2,
                maxLevel: 4,
                rate: 50,
            },
        }
    },
    connections: [
        "Viridian City",
        "Pallet Town",
    ],
};
