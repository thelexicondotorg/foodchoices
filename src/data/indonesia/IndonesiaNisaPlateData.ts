import { IPlateItem } from "../../Types";
import { CommonData } from "../CommonData";
import { IndonesiaWulandariPlateData } from "./IndonesiaWulandariPlateData";
import { IndonesiaHassanPlateData } from "./IndonesiaHassanPlateData";

namespace Private {
    export const choices: IPlateItem[][] = [
        // Protein
        [
            IndonesiaHassanPlateData.getItems()[0][0], // tempeh
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
                    content: "Fried Tofu",
                    offset: CommonData.plateTextOffset
                },
                scale: 2.5,
                plateScale: 3
            },
            IndonesiaHassanPlateData.getItems()[0][1], // Fried egg
            IndonesiaHassanPlateData.getItems()[0][2], // fish
            IndonesiaHassanPlateData.getItems()[0][3], // beef
            // IndonesiaHassanPlateData.getItems()[0][4], // fried shrimp
            IndonesiaHassanPlateData.getItems()[0][5], // fried chicken
        ],        
        // Grain
        IndonesiaWulandariPlateData.getItems()[1],
        // Vegetables
        IndonesiaWulandariPlateData.getItems()[2]
    ];
}

export class IndonesiaNisaPlateData {
    public static getItems() {
        return Private.choices;
    }
}
