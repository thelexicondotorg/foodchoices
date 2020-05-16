import { IPlateItem } from "../../Types";
import { CommonData } from "../CommonData";

namespace Private {
    export const choices: IPlateItem[][] = [
        // Protein
        [
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/nordics/plate/protein1.svg",
                    offset: { x: 40, y: 10 }
                },
                descriptionInfo: {
                    content: "Meatballs",
                    offset: CommonData.plateTextOffset
                },
                scale: 2,
                plateScale: 3
            },
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/nordics/plate/protein2.svg",
                    offset: { x: 60, y: 25 }
                },
                descriptionInfo: {
                    content: "Feta cheese",
                    offset: CommonData.plateTextOffset
                },
                scale: 2.5,
                plateScale: 3
            },
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/nordics/plate/protein3.svg",
                    offset: { x: 60, y: 10 }
                },
                descriptionInfo: {
                    content: "Flatfish",
                    offset: CommonData.plateTextOffset
                },
                scale: 2,
                plateScale: 3
            },
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/nordics/plate/protein4.svg",
                    offset: { x: 60, y: 10 }
                },
                descriptionInfo: {
                    content: "Oven-baked salmon filet",
                    offset: CommonData.plateTextOffset
                },
                scale: 2,
                plateScale: 3
            }           
        ],        
        // Carbs
        [
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/nordics/plate/carbs1.svg",
                    offset: { x: 70, y: 30 }
                },
                descriptionInfo: {
                    content: "Whole Potato",
                    offset: CommonData.plateTextOffset
                },
                scale: 2.5,
                plateScale: 3.2
            },
            {
                containerUrl: "/public/food/nordics/plate/carbs2-container.svg",
                foodInfo: {
                    content: "/public/food/nordics/plate/carbs2.svg",
                    offset: { x: 14, y: 32 }
                },
                descriptionInfo: {
                    content: "Buckwheat",
                    offset: {
                        x: 130,
                        y: 210
                    }
                },
                scale: 2,
                plateScale: 3,
                containerScale: 2
            },
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/nordics/plate/carbs3.svg",
                    offset: { x: 60, y: 10 }
                },
                descriptionInfo: {
                    content: "Mashed Potato",
                    offset: CommonData.plateTextOffset
                },
                scale: 2.5,
                plateScale: 3.2
            },
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/nordics/plate/carbs4.svg",
                    offset: { x: 60, y: 20 }
                },
                descriptionInfo: {
                    content: "Crispy whole grain bread ",
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
                    content: "/public/food/nordics/plate/vegetable1.svg",
                    offset: { 
                        x: 25, 
                        y: 10 
                    }
                },
                descriptionInfo: {
                    content: "Pickled cucumber and broccoli with jam",
                    offset: { 
                        x: 140, 
                        y: 190 
                    }
                },
                scale: 2,
                plateScale: 3
            },
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/nordics/plate/vegetable2.svg",
                    offset: { x: 20, y: 25 }
                },
                descriptionInfo: {
                    content: "Broccoli, tomato, and spinach",
                    offset: CommonData.plateTextOffset
                },
                scale: 2.5,
                plateScale: 3
            },
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/nordics/plate/vegetable3.svg",
                    offset: { x: 80, y: -60 }
                },
                descriptionInfo: {
                    content: "Green peas",
                    offset: CommonData.plateTextOffset
                },
                scale: 2,
                plateScale: 3
            },
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: "/public/food/nordics/plate/vegetable4.svg",
                    offset: { x: 14, y: 10 }
                },
                descriptionInfo: {
                    content: "Cucumber, fennel, grean peas, and pommegranade salad",
                    offset: CommonData.plateTextOffset
                },
                scale: 3,
                plateScale: 4
            },
        ]
    ];
}

export class PlateDataNordics {
    public static getItems() {
        return Private.choices;
    }
}
