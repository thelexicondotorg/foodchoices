import { IPlateItem } from "../../Types";
import { CommonData } from "../CommonData";
import { IndonesiaWulandariPlateData } from "./IndonesiaWulandariPlateData";

namespace Private {
    export const choices: IPlateItem[][] = [
        // Protein
        [
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/indonesia/hassan/plate/protein1.svg",
                    offset: { x: 60, y: 20 }
                },
                descriptionInfo: {
                    content: "Fried chicken",
                    offset: CommonData.plateTextOffset
                },
                scale: 2,
                plateScale: 2.5
            },
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/indonesia/hassan/plate/protein2.svg",
                    offset: { x: 40, y: 10 }
                },
                descriptionInfo: {
                    content: "Fried shrimp",
                    offset: CommonData.plateTextOffset
                },
                scale: 2,
                plateScale: 2.5
            },
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/indonesia/nisa/plate/protein1.svg",
                    offset: { x: 60, y: 20 }
                },
                descriptionInfo: {
                    content: "Beef",
                    offset: CommonData.plateTextOffset
                },
                scale: 2.5,
                plateScale: 3.2
            },
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/indonesia/nisa/plate/protein2.svg",
                    offset: { x: 30, y: 10 }
                },
                descriptionInfo: {
                    content: "Fish",
                    offset: CommonData.plateTextOffset
                },
                scale: 2,
                plateScale: 2.5
            },
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/indonesia/wulandari/plate/protein2.svg",
                    offset: { x: 60, y: 20 }
                },
                descriptionInfo: {
                    content: "Fried Tofu (imported)",
                    offset: CommonData.plateTextOffset
                },
                scale: 2,
                plateScale: 2.5
            }
        ],        
        // Grain
        IndonesiaWulandariPlateData.getItems()[1]
        ,
        // Vegetables
        IndonesiaWulandariPlateData.getItems()[2]
    ];
}

export class IndonesiaHassanPlateData {
    public static getItems() {
        return Private.choices;
    }
}
