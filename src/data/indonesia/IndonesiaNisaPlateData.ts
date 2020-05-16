import { IPlateItem } from "../../Types";
import { CommonData } from "../CommonData";
import { IndonesiaWulandariPlateData } from "./IndonesiaWulandariPlateData";
import { IndonesiaHassanPlateData } from "./IndonesiaHassanPlateData";

namespace Private {
    export const choices: IPlateItem[][] = [
        // Protein
        [
            IndonesiaHassanPlateData.getItems()[0][0],
            IndonesiaHassanPlateData.getItems()[0][1],
            IndonesiaHassanPlateData.getItems()[0][2],
            IndonesiaHassanPlateData.getItems()[0][3],
            IndonesiaHassanPlateData.getItems()[0][4]
        ],        
        // Grain
        IndonesiaWulandariPlateData.getItems()[1],
        // Vegetables
        [
            IndonesiaWulandariPlateData.getItems()[2][0],
            IndonesiaWulandariPlateData.getItems()[2][1],
            IndonesiaWulandariPlateData.getItems()[2][2],
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
                    content: "/public/food/indonesia/plate-veggie-mushrooms.svg",
                    offset: { x: 60, y: 35 }
                },
                descriptionInfo: {
                    content: "Mushrooms",
                    offset: CommonData.plateTextOffset
                },
                scale: 2,
                plateScale: 3
            }
        ]
    ];
}

export class IndonesiaNisaPlateData {
    public static getItems() {
        return Private.choices;
    }
}
