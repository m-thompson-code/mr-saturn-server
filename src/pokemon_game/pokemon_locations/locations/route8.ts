import { PokemonLocationData } from "../../locations";

export const route8: PokemonLocationData = {
    catchMap: {
        Grass: {
            Pidgey: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 18,
                maxLevel: 20,
                rate: 30,
            },
            Meowth: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 18,
                maxLevel: 20,
                rate: 30,
            },
            Ekans: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 17,
                maxLevel: 19,
                rate: 20,
            },
            Growlithe: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 15,
                maxLevel: 18,
                rate: 20,
            },
            Sandshrew: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 17,
                maxLevel: 19,
                rate: 20,
            },
            Vulpix: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 15,
                maxLevel: 18,
                rate: 20,
            },
        }
    },
    connections: [
        "Saffron City",
        "Lavender Town",
    ],
};
