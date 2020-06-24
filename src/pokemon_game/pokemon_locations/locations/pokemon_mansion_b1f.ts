import { PokemonLocationData } from "../../locations";

export const pokemonMansionB1F: PokemonLocationData = {
    catchMap: {// This area has mixed rating on versions, so we had to mix them
        Walking: {
            Rattata: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 26,
                maxLevel: 26,
                rate: 5,
            },
            Raticate: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 34,
                maxLevel: 38,
                rate: 30,
            },
            Vulpix: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 30,
                maxLevel: 32,
                rate: 15,
            },
            Growlithe: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 30,
                maxLevel: 32,
                rate: 15,
            },
            Grimer: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 28,
                maxLevel: 30,
                rate: 18,
            },
            Muk: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 34,
                maxLevel: 34,
                rate: 4,
            },
            Koffing: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 28,
                maxLevel: 28,
                rate: 18,
            },
            Weezing: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 34,
                maxLevel: 34,
                rate: 4,
            },
            Ditto: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 30,
                maxLevel: 30,
                rate: 10,
            },
        }
    },
    connections: [
        "Outcast Island",
    ],
};
