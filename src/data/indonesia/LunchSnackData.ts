import { IChoiceItem, Character } from "../../Types";
import { CommonData } from "../CommonData";

namespace Private {
    export const questions: IChoiceItem[][][] = [
        // Wulandari
        [
            [
                {
                    icon: "/public/food/indonesia/wulandari/snacks/1.svg",
                    description: "Kue cubit (pinch cake)"
                },
                {
                    icon: "/public/food/indonesia/wulandari/snacks/2.svg",
                    description: "Krupuk (crispy rice crackers)"

                },
                {
                    icon: CommonData.fruitDrink,
                    description: "Sweetened juice packet"

                },
                {
                    icon: "/public/food/indonesia/wulandari/snacks/4.svg",
                    description: "Local fruit (durian)"
                }
            ]
        ],
        // Neesa
        [
            [
                {
                    icon: CommonData.banana,
                    description: "local banana"
                },
                {
                    icon: CommonData.rolledEggs,
                    description: "Telur gulung (rolled fried egg)"

                },
                {
                    icon: CommonData.milkShake,
                    description: "Ice cream / milk shake from fast food chain"

                },
                {
                    icon: "/public/food/indonesia/nisa/snacks/4.svg",
                    description: "Fried chicken from fast food chain"
                }
            ]
        ],
        // Hassan
        [
            [
                {
                    icon: "/public/food/indonesia/hassan/snacks/1.svg",
                    description: "Mangosteen fruit"
                },
                {
                    icon: "/public/food/indonesia/hassan/snacks/2.svg",
                    description: "Telur gulung (rolled fried egg)"
                },
                {
                    icon: CommonData.pinchCake,
                    description: "Kue cubit (pinch cake)"

                },
                {
                    icon: CommonData.riceCake,
                    description: "Krupuk (crispy rice crackers)"
                }
            ]
        ]
    ];
}

export class LunchSnackData {
    public static getQuestions(character: Character): IChoiceItem[][] {
        return Private.questions[character];
    }
}
