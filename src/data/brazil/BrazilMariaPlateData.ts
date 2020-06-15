import { IPlateItem } from "../../Types";
import { CommonData } from "../CommonData";

namespace Private {
    export const choices: IPlateItem[][] = [
        // Protein
        [            
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/cooked_eggs.svg",
                    offset: { x: 60, y: 10 }
                },
                descriptionInfo: {
                    content: "Cooked eggs",
                    offset: CommonData.plateTextOffset
                },
                scale: 3.5,
                plateScale: 4
            },
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/ground_beef.svg",
                    offset: { x: 45, y: 15 }
                },
                descriptionInfo: {
                    content: "Ground beef with bolognese sauce",
                    offset: CommonData.plateTextOffset,                    
                },
                scale: 2.5,
                plateScale: 3
            },
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/brazil/sandra/plate/protein4.svg",
                    offset: { x: 50, y: 10 }
                },
                descriptionInfo: {
                    content: "Hot dog sausages",
                    offset: CommonData.plateTextOffset
                },
                scale: 2,
                plateScale: 2.5
            }
        ],
        // Grain
        [
            {
                containerUrl: CommonData.bowl,
                foodInfo: {
                    content: CommonData.whiteRice,
                    offset: CommonData.whiteRiceFoodOffset
                },
                descriptionInfo: {
                    content: "White rice",
                    offset: CommonData.whiteRiceTextOffset
                },
                containerScale: 2,
                scale: 2,
                plateScale: 3.5
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
                plateScale: 3.5
            },
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/brazil/gabriel/plate/grain3.svg",
                    offset: { x: 50, y: 20 }
                },
                descriptionInfo: {
                    content: "Chicken flavored Instant noodles",
                    offset: CommonData.plateTextOffset
                },
                scale: 2,
                plateScale: 3
            },
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/spaghetti.svg",
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
                    content: "/public/food/brazil/sandra/plate/vegetable1.svg",
                    offset: {
                        x: 30,
                        y: 0
                    }
                },
                descriptionInfo: {
                    content: "A mix of vegetables from the backyard",
                    offset: CommonData.plateTextOffset
                },
                scale: 2,
                plateScale: 2.5
            },
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/brazil/plate-salad.svg",
                    offset: {
                        x: 30,
                        y: 0
                    }
                },
                descriptionInfo: {
                    content: "Salad",
                    offset: CommonData.plateTextOffset
                },
                scale: 3,
                plateScale: 4
            },
            {
                containerUrl: "/public/gamelets/plate/FriesBag.svg",
                foodInfo: {
                    content: "/public/gamelets/plate/Fries.svg",
                    offset: {
                        x: 40,
                        y: 34
                    }
                },
                descriptionInfo: {
                    content: "Industrialized french fries",
                    offset: {
                        x: 50,
                        y: 215
                    }
                }
            }
        ]
    ];
}

export class BrazilMariaPlateData {
    public static getItems() {
        return Private.choices;
    }
}
