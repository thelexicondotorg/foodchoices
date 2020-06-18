import { IChoiceItem, Region, Character } from "../Types";
import { CommonData } from "./CommonData";

namespace Private {
    export const questions: IChoiceItem[][][] = [
        // Canada
        [
            // Sylvia
            [
                {
                    icon: "/public/gamelets/yesnosocial/kitchen_meal.svg",
                    description: "Does Sylvia make her dinner from whole ingredients?"
                },
                {
                    icon: "/public/gamelets/yesnosocial/table_cooking.svg",
                    description: "Do the kids help Sylvia make dinner?"        
                },
                {
                    icon: "/public/gamelets/yesnosocial/table_sofa.svg",
                    description: "Does the family eat dinner together with no distractions like TV or smartphones?"
                }
            ],
            // Esther
            [
                {
                    icon: "/public/gamelets/yesnosocial/kitchen_meal.svg",
                    description: "Does Esther make her dinner from whole ingredients?"
                },
                {
                    icon: "/public/gamelets/yesnosocial/table_cooking.svg",
                    description: "Does the family help Esther prepare dinner?"
        
                },                
                {
                    icon: "/public/gamelets/yesnosocial/table_sofa.svg",
                    description: "Do Esther and her family eat dinner together with no distractions like TV or smartphones?"
                }
            ],
            // Hardeep
            [
                {
                    icon: "/public/gamelets/yesnosocial/kitchen_meal.svg",
                    description: "Does Hardeep make his dinner from whole ingredients?",
                    easterEgg: "Hardeep doesn't know how to cook dishes from whole ingredients"
                },
                {
                    icon: "/public/gamelets/yesnosocial/table_friends.svg",
                    description: "Does Hardeep invite a friend or neighbour over to share his meal?"
                },
                {
                    icon: "/public/gamelets/yesnosocial/table_sofa.svg",
                    description: "Does Hardeep eat dinner without any distractions like TV or phones?"
                }                
            ]
        ],
        // Brazil
        [
            // Gabriel
            [
                {
                    icon: "/public/food/brazil/gabriel/eatingout/1.svg",
                    description: "They eat hamburgers, pizza or Arabic food at fast-food chains."
                },
                {
                    icon: "/public/food/brazil/gabriel-fancy-restaurant.svg",
                    description: "They go to a fancy restaurant and have a whatever's on special.",
                    // tslint:disable-next-line
                    easterEgg: "Fancy restaurants often serve healthy dishes, but Gabriel and his teenage friends don't always have the money to frequent these establishments."
                },
                {
                    icon: "/public/food/brazil/gabriel-traditional-dish.svg",
                    description: "They cook traditional dishes together at someone's house."
                },
                {
                    icon: "/public/food/brazil/gabriel-hamburger.svg",
                    // tslint:disable-next-line
                    description: "They go to a bakery or a snack bar that sells fresh hamburgers and other types of convenience foods."
                }
            ],
            // Sandra
            [
                {
                    icon: "/public/food/brazil/sandra/eatingout/1.svg",
                    description: "Frozen pizza"
                },
                {
                    icon: "/public/food/brazil/sandra/eatingout/2.svg",
                    description: "Typical german restaurant/fair",
                },
                {
                    icon: "/public/food/brazil/sandra/eatingout/3.svg",
                    description: "Hamburger, coke, and chips"
                },
                {
                    icon: "/public/food/brazil/brazil-traditional-food.svg",
                    description: "Sandra and her family prefer to make typical food together"
                }
            ],
            // Maria
            [
                {
                    icon: "/public/food/brazil/maria/eatingout/1.svg",
                    description: "They all eat ‘pastel de feira' (pastry) and drink a ‘sugar cane juice' (typical Brazilian food/drink) at the farmers street fair."
                },
                {
                    icon: "/public/food/brazil/maria/eatingout/2.svg",
                    description: "They all eat some hamburgers and soda from a fast-food chain.",
                },
                {
                    icon: "/public/food/brazil/gabriel-fancy-restaurant.svg",
                    description: "They go to a fancy restaurant and have an executive menu.",
                    // tslint:disable-next-line
                    easterEgg: "Fancy restaurants often serve healthy dishes. But Maria's family do not have money enough to attend these places. Choose another option!"
                },
                {
                    icon: "/public/food/brazil/maria/eatingout/4.svg",
                    description: "Maria and her parents eat a homemade meal (leftovers from lunch), washed fruit and water."
                }
            ]
        ],
        // Game is not used in Indonesia
        // But this must remain because indexing into this structure relies on it
        // Indonesia
        [
            // Wulandari
            [

            ],
            // Neesa
            [
                
            ],
            // Hassan
            [

            ]
        ],
        // Nordics
        [
            // Elias
            [
                {
                    icon: "/public/food/nordics/elias/dinner/1.svg",
                    description: "The family stops at a fast food restaurant on the way home from football practice. They have hamburgers with soda"
                },
                {
                    icon: "/public/food/nordics/elias/dinner/2.svg",
                    description: "Based on the ingredients they got at the Reko-ring farmers market, his dad prepares a vegetable soup with some carrots, pumpkin, onion and garlic served with whole grain bread, butter and cheese.",
                },
                {
                    icon: "/public/food/nordics/elias/dinner/3.svg",
                    description: "Elias's mom makes pancakes served with jam and keso (cottage cheese)"
                },
                {
                    icon: "/public/food/nordics/elias/dinner/4.svg",
                    description: "The family heats up a frozen pizza (carbonara) from the freezer and makes a quick cabbage salad with carrots as a side dish"
                }
            ],
            // Amena
            [
                {
                    icon: "/public/food/nordics/amena/dinner/1.svg",
                    description: "Tabbouleh, a salad made of parsley, mint, onion and tomato with bulgur topped with olive oil and lemon juice. Accompanied by hummus with zaatar bread (her parents add kofta kebab too)"
                },
                {
                    icon: "/public/food/nordics/amena/dinner/2.svg",
                    description: "Herb spiced chicken wings (Amena prepares quorn filet instead, using the same spices) served with rice and a syrian yoghurt sauce",
                },
                {
                    icon: "/public/food/nordics/amena/dinner/3.svg",
                    description: "After watching a Swedish cooking show where a fish in white sauce was prepared, they family tries the recipe using cod",
                    easterEgg: "Amena and her family are not yet sure of all the food labels and can thus not choose a sustainably sourced option. In Sweden MSC, ASC and Krav are some of the most common labels for sustainble fish and WWF Sweden has developed a specific fish-guide to help consumers",
                    easterEggCanContinue: true
                },
                {
                    icon: "/public/food/nordics/amena/dinner/4.svg",
                    description: "They make a fusion dish serving Syrian fatayer bread with spinach and onion together with a Swedish soup made of cauliflower and leek"
                }
            ],
            // Lisen
            [
                {
                    icon: "/public/food/nordics/lisen/dinner/1.svg",
                    description: "Yellow pea soup served with a small piece of smoked, farmed Norwegian salmon, crisp bread with butter"
                },
                {
                    icon: "/public/food/nordics/lisen/dinner/2.svg",
                    description: "Fried flatfish with cucumber, radishes, lemon herbs and dressing served with potato"
                },
                {
                    icon: "/public/food/nordics/lisen/dinner/3.svg",
                    description: "Fresh pasta with creamy shrimp-sauce served with a yellow beetroot salad and leafy greens"
                },
                {
                    icon: "/public/food/nordics/lisen/dinner/4.svg",
                    description: "Prepackaged tartlets served with Brussels sprouts, spinach, cloves, beetroot and fried eggs with potato wedges"
                }
            ]
        ]
    ];
}

export class YesNoSocialData {
    public static getQuestions(region: Region, character: Character): IChoiceItem[] {
        return Private.questions[region][character];
    }
}
