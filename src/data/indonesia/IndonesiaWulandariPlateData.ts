import { IPlateItem } from "../../Types";
import { CommonData } from "../CommonData";

namespace Private {
    export const choices: IPlateItem[][] = [
        // Protein
        [
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/indonesia/wulandari/plate/protein1.svg",
                    offset: {
                        x: 60,
                        y: 30
                    }
                },
                descriptionInfo: {
                    content: "Fried local tempeh",
                    offset: CommonData.plateTextOffset
                },
                scale: 2.5,
                plateScale: 3
            },
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/indonesia/wulandari/plate/protein2.svg",
                    offset: {
                        x: 40,
                        y: 10
                    }
                },
                descriptionInfo: {
                    content: "Fried Tofu (imported)",
                    offset: CommonData.plateTextOffset
                },
                scale: 2.5,
                plateScale: 3
            },
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: CommonData.friedEgg,
                    offset: CommonData.friedEggOffset
                },
                descriptionInfo: {
                    content: "Fried egg",
                    offset: CommonData.plateTextOffset
                },
                scale: 3,
                plateScale: 3.5
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
                    content: "Rice",
                    offset: CommonData.whiteRiceTextOffset
                },
                containerScale: 2,
                scale: 2,
                plateScale: 3.5
            },
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/indonesia/wulandari/plate/grain2.svg",
                    offset: { x: 15, y: 15 }
                },
                descriptionInfo: {
                    content: "Noodles",
                    offset: CommonData.plateTextOffset
                },
                scale: 2.5,
                plateScale: 3
            }
        ],
        // Vegetables
        [
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/indonesia/wulandari/plate/vegetable2.svg",
                    offset: { x: 40, y: 30 }
                },
                descriptionInfo: {
                    content: "Tumis Kangkung (stir fried water spinach)",
                    offset: CommonData.plateTextOffset
                },
                scale: 2,
                plateScale: 2.5
            },
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/indonesia/wulandari/plate/vegetable3.svg",
                    offset: { x: 40, y: 5 }
                },
                descriptionInfo: {
                    content: "Mixed vegetables",
                    offset: CommonData.plateTextOffset
                },
                scale: 2,
                plateScale: 2.5
            },
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/indonesia/plate-veggie-kassava.svg",
                    offset: { x: 40, y: 35 }
                },
                descriptionInfo: {
                    content: "Gulai daun singkong (cassava leaves)",
                    offset: CommonData.plateTextOffset
                },
                scale: 2,
                plateScale: 3
            },
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/indonesia/wulandari/plate/vegetable1.svg",
                    offset: { x: 10, y: 10 }
                },
                descriptionInfo: {
                    content: "Petai (stink beans)",
                    offset: CommonData.plateTextOffset
                },
                scale: 1.8,
                plateScale: 2.5
            },            
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/indonesia/plate-veggie-mushrooms.svg",
                    offset: { x: 60, y: 35 }
                },
                descriptionInfo: {
                    content: "Mushrooms",
                    offset: CommonData.plateTextOffset
                },
                scale: 2,
                plateScale: 3
            },
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/indonesia/plate-veggie-cabbage.svg",
                    offset: { x: 45, y: 12 }
                },
                descriptionInfo: {
                    content: "Cabbage",
                    offset: CommonData.plateTextOffset
                },
                scale: 2,
                plateScale: 3
            },
        ]
    ];
}

export class IndonesiaWulandariPlateData {
    public static getItems() {
        return Private.choices;
    }
}
