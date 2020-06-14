import { IChoiceItem, Character } from "../../Types";
import { CommonData } from "../CommonData";

namespace Private {
    export const questions: IChoiceItem[][] = [
        // Wulandari
        [
            {
                icon: "/public/food/indonesia/groceries-shopping/W_C_CHOICE_1.svg",
                description: `4 eggs, 4 instant noodle packets, chili sauce, 250 g. oil, cabbage, tomatoes and 100g milk powder (38,000 rpa)`
            },
            {
                icon: "/public/food/indonesia/groceries-shopping/W_C_CHOICE_2.svg",
                description: `250 g. beef, 4 instant noodle packets, 250 gr. oil, tomatoes, 100 g. milk powder, 250 g. sugar (53,000 rpa)`,
                easterEgg: "Wulandari doesn't have enough money"
            },
            {
                icon: "/public/food/indonesia/groceries-shopping/W_C_CHOICE_3.svg",
                description: `0.5 kg. fish, 0.5 kg. rice, spinach, small satchet of shrimp paste, 250 g. oil, tomatoes, 100 g. sugar, half portion (50g.) of milk powder (32,000 rpa)`
            },
            {
                icon: "/public/food/indonesia/groceries-shopping/W_C_CHOICE_4.svg",
                description: `500 g. tempeh, 250 g. yams, 100 g. oil, soy sauce, tomatoes, cabbage, 100 g. milk (23,000 rpa)`
            }
        ],
        // Neesa
        [
            {
                icon: "/public/food/indonesia/groceries-shopping/NEESA_CHOICE_1.svg",
                description: "250 g. chicken, 1 kg. rice, oil,  8 eggs, 250 g. sugar, chli sauce, cabbage and tomatoes (46,500 rpa)"
            },
            {
                icon: "/public/food/indonesia/groceries-shopping/NEESA_CHOICE_2.svg",
                description: "250 g. beef, 4 pkts. noodles , 1 L. milk, 2 pkts. oil, 4 eggs, 250 g. sugar, tomatoes, soy sauce (72,600 rpa)",
            },
            {
                icon: "/public/food/indonesia/groceries-shopping/NEESA_CHOICE_3.svg",
                description: "1/2 kg fish, 1 kg. rice, 1 L. milk, yams, cabbage, tomatoes, 100 g. sugar, shrimp paste (46, 000 rpa)",
            },
            {
                icon: "/public/food/indonesia/groceries-shopping/NEESA_CHOICE_4.svg",
                description: "250 g. tofu, 1 kg. rice, 4 eggs, yams, spinach, tomatoes,  250 g. sugar (28,000 rpa)"
            }
        ],
        // Hassan
        [
            {
                icon: "/public/food/indonesia/groceries-shopping/HASSAN_CHOICE_1.svg",
                description: "250 g. chicken, 1 kg. rice, oil,  8 eggs, 250 g. sugar, chli sauce, cabbage and tomatoes (46,500 rpa)"
            },
            {
                icon: "/public/food/indonesia/groceries-shopping/HASSAN_CHOICE_2.svg",
                description: "250 g. beef, 4 pkts. noodles , 1 L. milk, 2 pkts. oil, 4 eggs, 250 g. sugar, tomatoes, soy sauce (72,600 rpa)",
                easterEgg: "Hassan doesn't have enough money"
            },
            {
                icon: "/public/food/indonesia/groceries-shopping/HASSAN_CHOICE_3.svg",
                description: "1/2 kg fish, 1 kg. rice, 1 L. milk, yams, cabbage, tomatoes, 100 g. sugar, shrimp paste (46, 000 rpa)"
            },
            {
                icon: "/public/food/indonesia/groceries-shopping/HASSAN_CHOICE_4.svg",
                description: "250 g. tofu, 4 pkts, 4 eggs, oil, yams, spinach, tomatoes,  250 g. sugar (29,500 rpa)"
            }
        ]
    ];
}

export class GroceriesShoppingData {
    public static getQuestions(character: Character): IChoiceItem[] {
        return Private.questions[character];
    }
}
