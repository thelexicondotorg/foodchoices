import { IStoryData, Region, Character, IndonesiaCharacters, CanadaCharacters, BrazilCharacters, NordicCharacters } from "../Types";

namespace Private {

    const breakfastIcons = {
        backgroundColor: "rgba(251, 188, 6, .30)",
        icons: [
            "/public/transition/club_sandwish.svg",
            "/public/transition/banana.svg",
            "/public/transition/coffee.svg"
        ]
    };

    const breakIcons = {
        backgroundColor: "#F8D2CE",
        icons:  [
            "/public/transition/Toast.svg",
            "/public/transition/Tomato.svg",
            "/public/transition/ToastSandwish.svg"
        ]
    };

    const lunchIcons = {
        backgroundColor: "#f8f8ce",
        icons:  [
            "/public/gamelets/plate/Tofu.svg",
            "/public/food/indonesia/wulandari/lunch/4.svg",
            "/public/food/indonesia/wulandari/lunch/3.svg",
        ]
    };

    const shoppingIcons = {
        backgroundColor: "#DAE7FC",
        icons: [
            "/public/transition/cart.svg"
        ]
    };

    const clockIcons = {
        backgroundColor: "#ffccff",
        icons: [
            "/public/transition/clock.svg"
        ]
    };

    export const getIcons = () => {
        return [
            ...breakfastIcons.icons,
            ...breakIcons.icons,
            ...lunchIcons.icons,
            ...shoppingIcons.icons,
            ...clockIcons.icons
        ];
    };

    const defaultSections: IStoryData[] = [
        {
            ...breakfastIcons,
            message: "Can you help ${name} start ${possessivePronoun} day?",
        },
        {
            ...breakIcons,
            message: "${name} has a lunch break, help ${objectPronoun} pick ${possessivePronoun} meal!",
        },
        {
            ...shoppingIcons,
            message: "On ${possessivePronoun} way home, ${name} needs to purchase groceries",
        },
        {
            ...clockIcons,
            message: "It's dinner time for ${name}!",
        }
    ];

    const nordicSections: IStoryData[] = [
        {
            ...breakfastIcons,
            message: "Can you help ${name} start ${possessivePronoun} day?",
        },
        {
            ...breakIcons,
            message: "${name} has a lunch break, help ${objectPronoun} pick ${possessivePronoun} meal!",
        },
        {
            ...clockIcons,
            message: "It's dinner time for ${name}!",
        }
    ];

    export const sections: {
        [region: number]: {
            [character: number]: IStoryData[];
        }
    } = {
        [Region.Indonesia]: {
            [IndonesiaCharacters.Wulandari]: [
                {
                    ...breakfastIcons,
                    message: "Can you help ${name} get breakfast?",
                },
                {
                    ...breakIcons,
                    message: "Wulandari goes to the rice field to work, and Centia gets hungry",
                },
                {
                    ...lunchIcons,
                    message: "Wulandari is home from the farm. She starts making lunch.",
                },
                {
                    ...shoppingIcons,
                    message: "On their way home, Wulandari needs to purchase groceries",
                },
                {
                    ...clockIcons,
                    message: "It's dinner time for ${name}!",
                }
            ],
            [IndonesiaCharacters.Hassan]: [
                {
                    ...breakfastIcons,
                    message: "Can you help ${name} get breakfast?",
                },
                {
                    ...breakIcons,
                    message: "It's recess, and time to play soccer! Can you help ${name} pick a beverage?",
                },
                {
                    ...lunchIcons,
                    message: "Hassan has a break for lunch during the school day"
                },
                {
                    ...shoppingIcons,
                    message: "${name} and his grandmother are heading home and purchase a few things.",
                },
                {
                    ...clockIcons,
                    message: "It's dinner time for ${name}!",
                }
            ],
            [IndonesiaCharacters.Neesa]: [
                {
                    ...breakfastIcons,
                    message: "Can you help ${name} get breakfast?",
                },
                {
                    ...breakIcons,
                    // tslint:disable-next-line
                    message: "${name} has a 10 minute break between classes, and it's hot! What beverage does she pick?",
                },
                {
                    ...lunchIcons,
                    message: "It's lunchtime at Neesa's school. She takes a break with her friends and gets some lunch."
                },
                {
                    ...shoppingIcons,
                    message: "${name} and her housekeeper are heading home and purchase a few things.",
                },
                {
                    ...clockIcons,
                    message: "It's dinner time for ${name}!",
                }
            ]
        },
        [Region.Canada]: {
            [CanadaCharacters.Sylvia]: defaultSections,
            [CanadaCharacters.Hardeep]: defaultSections,
            [CanadaCharacters.Esther]: defaultSections,
        },
        [Region.Brazil]: {
            [BrazilCharacters.Gabriel]: [
                defaultSections[0],
                defaultSections[1],
                {
                    ...shoppingIcons,
                    message: "On their way home, Gabriel and his mother needs to purchase groceries",
                },
                defaultSections[3]
            ],
            [BrazilCharacters.Maria]: [
                {
                    ...breakfastIcons,
                    message: "Can you help ${name} start ${possessivePronoun} day?",
                },
                {
                    ...breakIcons,
                    message: "${name} has a lunch break, help ${objectPronoun} pick ${possessivePronoun} meal!",
                },
                {
                    ...shoppingIcons,
                    message: "On their way home, ${name}'s parent need to purchase groceries",
                },
                {
                    ...clockIcons,
                    message: "It's dinner time for ${name}!",
                }
            ],
            [BrazilCharacters.Sandra]: defaultSections,
        },
        [Region.Nordics]: {
            [NordicCharacters.Amena]: nordicSections,
            [NordicCharacters.Elias]: nordicSections,
            [NordicCharacters.Lisen]: nordicSections,
        }
    };
}

export class StoryData {
    public static get(section: number, region: Region, character: Character): IStoryData {
        return Private.sections[region][character][section];
    }

    public static getIcons() { return Private.getIcons(); }
}
