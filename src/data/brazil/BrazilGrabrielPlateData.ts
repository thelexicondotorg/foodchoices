import { IPlateItem } from "../../Types";
import { CommonData } from "../CommonData";

namespace Private {
    export const choices: IPlateItem[][] = [
        // Protein
        [
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/brazil/gabriel/plate/protein1.svg",
                    offset: { x: 70, y: 30 }
                },
                descriptionInfo: {
                    content: "Grilled tilápia filet",
                    offset: CommonData.plateTextOffset
                },
                scale: 2,
                plateScale: 3
            },
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/brazil/gabriel/plate/protein2.svg",
                    offset: { x: 70, y: 30 }
                },
                descriptionInfo: {
                    content: "Ground beef with tomato sauce",
                    offset: CommonData.plateTextOffset
                },
                scale: 2,
                plateScale: 3
            },
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/brazil/gabriel/plate/protein3.svg",
                    offset: { x: 70, y: 30 }
                },
                descriptionInfo: {
                    content: "Fried chicken nuggets",
                    offset: CommonData.plateTextOffset
                },
                scale: 2,
                plateScale: 3
            }
        ],        
        // Grain
        [
            {
                containerUrl: CommonData.bowl,
                foodInfo: {
                    content: CommonData.whiteRice,
                    offset: CommonData.whiteRiceFoodOffset,
                },
                descriptionInfo: {
                    content: "White rice",
                    offset: CommonData.whiteRiceTextOffset
                },
                containerScale: 2,
                scale: 2,
                plateScale: 3
            },
            {
                containerUrl: CommonData.bowl,
                foodInfo: {
                    content: "/public/food/brazil/gabriel/plate/grain2.svg",
                    offset: CommonData.whiteRiceFoodOffset,
                },
                descriptionInfo: {
                    content: "Brown rice",
                    offset: CommonData.whiteRiceTextOffset
                },
                containerScale: 2,
                scale: 2,
                plateScale: 3
            },
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/brazil/gabriel/plate/grain3.svg",
                    offset: { x: 50, y: 20 }
                },
                descriptionInfo: {
                    content: "Chicken flavored instant noodles",
                    offset: CommonData.plateTextOffset
                },
                scale: 2,
                plateScale: 3
            },
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/brazil/gabriel/plate/grain4.svg",
                    offset: { x: 50, y: 20 }
                },
                descriptionInfo: {
                    content: "Spaghetti",
                    offset: CommonData.plateTextOffset
                },
                scale: 2,
                plateScale: 3
            }
        ],
        // Vegetables
        [
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/brazil/gabriel/plate/vegetable1.svg",
                    offset: { x: 50, y: 20 }
                },
                descriptionInfo: {
                    content: "Cooked okra",
                    offset: CommonData.plateTextOffset
                },
                scale: 2,
                plateScale: 3
            },
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/brazil/gabriel/plate/vegetable2.svg",
                    offset: {
                        x: 40,
                        y: 14
                    }
                },
                descriptionInfo: {
                    content: "Lettuce salad with vinaigrette",
                    offset: {
                        x: 140,
                        y: 190
                    },
                },
                scale: 2,
                plateScale: 3
            },
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/brazil/gabriel/plate/vegetable3.svg",
                    offset: { x: 50, y: 20 }
                },
                descriptionInfo: {
                    content: "Potato, carrot, corn and mayonnaise",
                    offset: CommonData.plateTextOffset
                },
                scale: 2,
                plateScale: 3
            }
        ]
    ];
}

export class BrazilGabrielPlateData {
    public static getItems() {
        return Private.choices;
    }
}
