import { PokemonLocationData } from "../../locations";

export const canyonEntrance: PokemonLocationData = {
    catchMap: {
        Grass: {
            Spearow: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 44,
                maxLevel: 44,
                rate: 20,
            },
            Fearow: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 48,
                maxLevel: 50,
                rate: 15,
            },
            Meowth: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 41,
                maxLevel: 41,
                rate: 10,
            },
            Persian: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 47,
                maxLevel: 50,
                rate: 5,
            },
            Psyduck: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 41,
                maxLevel: 41,
                rate: 5,
            },
            Slowpoke: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 41,
                maxLevel: 41,
                rate: 5,
            },
        }
    },
    connections: [
        "Seven Island",
        "Sevault Canyon",
    ]
};
