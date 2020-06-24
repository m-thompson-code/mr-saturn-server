import { PokemonLocationData } from "../../locations";

export const route5: PokemonLocationData = {
    catchMap: {
        Grass: {
            Pidgey: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 13,
                maxLevel: 16,
                rate: 40,
            },
            Meowth: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 10,
                maxLevel: 16,
                rate: 35,
            },
            Oddish: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 13,
                maxLevel: 16,
                rate: 25,
            },
            Bellsprout: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 13,
                maxLevel: 16,
                rate: 25,
            },
        }
    },
    connections: [
        "Cerulean City",
        "Saffron City",
    ],
};
