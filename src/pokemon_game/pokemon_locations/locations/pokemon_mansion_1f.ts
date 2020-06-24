import { PokemonLocationData } from "../../locations";

export const pokemonMansion1F: PokemonLocationData = {
    catchMap: {// This area has mixed rating on versions, so we had to mix them
        Walking: {
            Rattata: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 26,
                maxLevel: 28,
                rate: 15,
            },
            Raticate: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 32,
                maxLevel: 36,
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
                minLevel: 32,
                maxLevel: 32,
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
                minLevel: 32,
                maxLevel: 32,
                rate: 4,
            },
        }
    },
    connections: [
        "Outcast Island",
    ],
};
