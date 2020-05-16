import { IChoiceItem, Character } from "../../Types";
import { CommonData } from "../CommonData";

namespace Private {
    export const questions: IChoiceItem[][][] = [
        // Wulandari
        [
            [
                {
                    icon: CommonData.banana,
                    description: "Banana"
                },
                {
                    icon: CommonData.apple,
                    description: "Apple (imported)",
                    easterEgg: "There are no imported apples in the rural areas, they are too expensive."
                },
                {
                    icon: "/public/food/indonesia/fruits/snakefruit.svg",
                    description: "Snake fruit"
                },
                {
                    icon: "/public/food/indonesia/fruits/mango.svg",
                    description: "Mango"
                }
            ]
        ],
        // Neesa
        [
            [
                {
                    icon: CommonData.banana,
                    description: "Banana"
                },
                {
                    icon: CommonData.apple,
                    description: "Apple (imported)",
                },
                {
                    icon: "/public/food/indonesia/fruits/snakefruit.svg",
                    description: "Snake fruit",
                    easterEgg: "These are out of season and not available."
                },
                {
                    icon: "/public/food/indonesia/fruits/mango.svg",
                    description: "Mango"
                }
            ]
        ],
        // Hassan
        [
            [
                {
                    icon: CommonData.banana,
                    description: "Banana"
                },
                {
                    icon: CommonData.apple,
                    description: "Apple (imported)",
                    easterEgg: "There are no imported apples in the rural areas."
                },
                {
                    icon: "/public/food/indonesia/fruits/snakefruit.svg",
                    description: "Snake fruit"
                },
                {
                    icon: "/public/food/indonesia/fruits/mango.svg",
                    description: "Mango"
                }
            ]
        ]
    ];
}

export class FruitShoppingData {
    public static getQuestions(character: Character): IChoiceItem[][] {
        return Private.questions[character];
    }
}
