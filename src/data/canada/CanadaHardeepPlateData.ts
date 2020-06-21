import { IPlateItem } from "../../Types";
import { CommonData } from "../CommonData";

namespace Private {
    export const choices: IPlateItem[][] = [
        // Protein
        [       
            {
                containerUrl: CommonData.plate,
                foodInfo: {
                    content: CommonData.eggOmelet,
                    offset: {
                        x: 60,
                        y: 10
                    }
                },
                descriptionInfo: {
                    content: "Egg omelet",
                    offset: CommonData.plateTextOffset
                },
                scale: 2
            },     
            {
                containerUrl: "/public/gamelets/plate/BeanLentilPlate.svg",
                foodInfo: {
                    content: "/public/gamelets/plate/BeanLentil.svg",
                    offset: {
                        x: 10,
                        y: 20
                    }
                },
                descriptionInfo: {
                    content: "Bean and lentil salad",
                    offset: {
                        x: 80,
                        y: 140
                    }
                }
            },
            {
                containerUrl: "/public/gamelets/plate/TofuPlate.svg",
                foodInfo: {
                    content: "/public/gamelets/plate/Tofu.svg",
                    offset: {
                        x: 40,
                        y: 10
                    }
                },
                descriptionInfo: {
                    content: "Marinated grilled tofu",
                    offset: {
                        x: 100,
                        y: 150
                    }
                }
            },
            {
                containerUrl: "/public/food/brazil/sandra/plate/grain2-container.svg",
                foodInfo: {
                    content: CommonData.chickPeas,
                    offset: {
                        x: 70,
                        y: 110
                    }
                },
                descriptionInfo: {
                    content: "Pre-made chick pea curry meal",
                    offset: {
                        x: 80,
                        y: 200
                    }
                }
            },
        ],        
        // Grain
        [
            {
                containerUrl: "/public/gamelets/plate/BrownRiceBowl.svg",
                foodInfo: {
                    content: "/public/gamelets/plate/BrownRice.svg",
                    offset: {
                        x: 10,
                        y: 13
                    }
                },
                descriptionInfo: {
                    content: "Brown Rice",
                    offset: {
                        x: 70,
                        y: 150
                    }
                }
            },
            {
                containerUrl: "/public/gamelets/plate/WhiteRiceBowl.svg",
                foodInfo: {
                    content: "/public/gamelets/plate/WhiteRice.svg",
                    offset: {
                        x: 10,
                        y: 10
                    }
                },
                descriptionInfo: {
                    content: "White Rice",
                    offset: {
                        x: 80,
                        y: 150
                    }
                }
            },
            {
                containerUrl: "/public/gamelets/plate/MicrowaveRiceBowl.svg",
                foodInfo: {
                    content: "/public/gamelets/plate/MicrowaveRice.svg",
                    offset: {
                        x: 62,
                        y: 114
                    }
                },
                descriptionInfo: {
                    content: "Instant flavoured rice",
                    offset: {
                        x: 90,
                        y: 210
                    }
                }
            },
            {
                containerUrl: "/public/gamelets/plate/WildRiceBowl.svg",
                foodInfo: {
                    content: "/public/gamelets/plate/WildRice.svg",
                    offset: {
                        x: 13,
                        y: 29
                    }
                },
                descriptionInfo: {
                    content: "Wild Rice",
                    offset: {
                        x: 130,
                        y: 210
                    }
                },
                plateScale: 1
            }
        ],
        // Vegetables
        [
            {
                containerUrl: "/public/gamelets/plate/CaesarSaladKit.svg",
                foodInfo: {
                    content: "/public/gamelets/plate/CaesarSalad.svg",
                    offset: {
                        x: 133,
                        y: 122
                    }
                },
                descriptionInfo: {
                    content: "Caesar salad from a kit",
                    offset: {
                        x: 50,
                        y: 180
                    }
                }
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
                    content: "Processed fries",
                    offset: {
                        x: 50,
                        y: 215
                    }
                }
            },
            {
                containerUrl: "/public/gamelets/plate/SpinachSaladKit.svg",
                foodInfo: {
                    content: "/public/gamelets/plate/SpinachSalad.svg",
                    offset: {
                        x: 80,
                        y: 110
                    }
                },
                descriptionInfo: {
                    content: "Fresh, local spinach salad with mixed fresh local vegetables and vinaigrette",
                    offset: {
                        x: 10,
                        y: 200
                    }
                }
            },
            {
                containerUrl: "/public/gamelets/plate/BroccoliPlate.svg",
                foodInfo: {
                    content: "/public/gamelets/plate/Broccoli.svg",
                    offset: {
                        x: 40,
                        y: 10
                    }
                },
                descriptionInfo: {
                    content: "Broccoli with cheese from scratch",
                    offset: {
                        x: 140,
                        y: 210
                    }
                },
                plateScale: 1
            }
        ]
    ];
}

export class CanadaHardeepPlateData {
    public static getItems() {
        return Private.choices;
    }
}
