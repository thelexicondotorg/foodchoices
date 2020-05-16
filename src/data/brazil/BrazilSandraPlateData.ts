import { IPlateItem } from "../../Types";
import { CommonData } from "../CommonData";

namespace Private {
    export const choices: IPlateItem[][] = [
        // Protein
        [
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/brazil/sandra/plate/protein1.svg",
                    offset: { x: 80, y: 20 }
                },
                descriptionInfo: {
                    content: "Chicken filet",
                    offset: CommonData.plateTextOffset
                },
                scale: 2,
                plateScale: 3
            },
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/brazil/sandra/plate/protein2.svg",
                    offset: { x: 80, y: 20 }
                },
                descriptionInfo: {
                    content: "Kassler",
                    offset: CommonData.plateTextOffset
                },
                scale: 1.5,
                plateScale: 2.5
            },
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: CommonData.eggOmelet,
                    offset: { x: 60, y: 10 }
                },
                descriptionInfo: {
                    content: "Omelet",
                    offset: CommonData.plateTextOffset
                },
                scale: 2,
                plateScale: 2.5
            },
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/brazil/sandra/plate/protein4.svg",
                    offset: { x: 50, y: 10 }
                },
                descriptionInfo: {
                    content: "Sausage",
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
                plateScale: 3
            },
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: CommonData.chickPeas,
                    offset: {
                        x: 40,
                        y: 10
                    }
                },
                descriptionInfo: {
                    content: "Risotto, ready to eat",
                    offset: {
                        x: 80,
                        y: 200
                    }
                },
                scale: 3,
                plateScale: 3.5
            },
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/brazil/sandra/plate/grain3.svg",
                    offset: {
                        x: 70,
                        y: 0
                    }
                },
                descriptionInfo: {
                    content: "Boiled corn",
                    offset: CommonData.plateTextOffset
                },
                scale: 1.5,
                plateScale: 2.5
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
                    content: "Fresh vegetables",
                    offset: CommonData.plateTextOffset
                },
                scale: 2,
                plateScale: 2.5
            },
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/brazil/sandra/plate/vegetable2.svg",
                    offset: {
                        x: 40,
                        y: 25
                    }
                },
                descriptionInfo: {
                    content: "Chucrute, Sauerkraut",
                    offset: {
                        x: 140,
                        y: 190
                    }
                },
                scale: 3,
                plateScale: 3.5
            },
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/brazil/sandra/plate/vegetable3.svg",
                    offset: {
                        x: 40,
                        y: 30
                    }
                },
                descriptionInfo: {
                    content: "Cavolo with ultraprocessed sauce",
                    offset: CommonData.plateTextOffset
                },
                scale: 2,
                plateScale: 3
            }
        ]
    ];
}

export class BrazilSandraPlateData {
    public static getItems() {
        return Private.choices;
    }
}
