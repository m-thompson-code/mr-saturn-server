import { PokemonLocationData } from "../../locations";

export const route7: PokemonLocationData = {
    catchMap: {
        Grass: {
            Meowth: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 17,
                maxLevel: 20,
                rate: 40,
            },
            Pidgey: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 19,
                maxLevel: 22,
                rate: 30,
            },
            Oddish: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 19,
                maxLevel: 22,
                rate: 20,
            },
            Bellsprout: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 19,
                maxLevel: 22,
                rate: 20,
            },
            Growlithe: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 18,
                maxLevel: 20,
                rate: 10,
            },
            Vulpix: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 18,
                maxLevel: 20,
                rate: 10,
            },
        }
    },
    connections: [
        "Celadon City",
        "Saffron City",
    ],
};
