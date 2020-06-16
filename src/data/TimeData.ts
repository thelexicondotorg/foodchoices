
import { Region, Character } from "../Types";
import { CommonData } from "./CommonData";

namespace Private {
    export const questions = [
        // Canada
        [
            // Sylvia
            [
                {
                    icon: "/public/gamelets/time/Eggs.svg",
                    description: "She cooks a big breakfast of bacon and eggs with white toast"
                },
                {
                    icon: "/public/gamelets/time/Flakes.svg",
                    description: "The family has a quick bowl of sugary frosted flakes and milk",
                    easterEgg: "Sylvia is health conscious and doesn't buy cereals that contain a lot of sugar."
                },
                {
                    icon: "/public/gamelets/time/Porridge.svg",
                    description: "She makes homemade porridge with raisins"
    
                },
                {
                    icon: "/public/gamelets/time/Coffee.svg",
                    description: "She grabs coffee and skips breakfast altogether"
                }    
            ],
            // Esther
            [
                {
                    icon: "/public/gamelets/time/Eggs.svg",
                    description: "She cooks a big breakfast of bacon and eggs with white toast"
                },
                {
                    icon: "/public/gamelets/time/Flakes.svg",
                    description: "The family has a quick bowl of sugary frosted flakes and milk"
                },
                {
                    icon: "/public/gamelets/time/Porridge.svg",
                    description: "She makes homemade porridge with raisins"
    
                },
                {
                    icon: "/public/gamelets/time/Coffee.svg",
                    description: "She grabs coffee and skips breakfast altogether"
                } 
            ],
            // Hardeep
            [
                {
                    icon: "/public/gamelets/time/EggsNoBacon.svg",
                    description: "${subjectPronoun} cooks a big breakfast of eggs with white toast"
                },
                {
                    icon: "/public/gamelets/time/Flakes.svg",
                    description: "Sugary frosted flakes",
                },
                {
                    icon: "/public/gamelets/time/Porridge.svg",
                    description: "He makes homemade porridge with raisins.",
                    easterEgg: " Hardeep doesn’t know how to make porridge from scratch, and doesn’t have the ingredients!"
                },
                {
                    icon: "/public/gamelets/time/Coffee.svg",
                    description: "${subjectPronoun} grabs coffee and skips breakfast"
                }
            ]
        ],
        // Brazil
        [
            // Gabriel
            [
                {
                    icon: CommonData.nothingIcon,
                    description: "Nothing!"
                },
                {
                    icon: "/public/food/brazil/gabriel/coffee.svg",
                    description: "Coffee with milk, French bread with butter and a banana."
                },
                {
                    icon: "/public/food/brazil/gabriel/milk.svg",
                    description: "Ultra-rocessed chocolate milk and bisnaguinha (ultra-processed milk bread) with requeijão (similar to cream cheese)."
                },
                {
                    icon: "/public/food/brazil/gabriel/baozi.svg",
                    description: "Baozi (Chinese bread) with soup.",
                    easterEgg: "Although it is a very healthy meal, this meal is not usually part of Brazilian culture!"
                }
            ],
            // Sandra
            [
                {
                    icon: "/public/food/brazil/sandra/toast.svg",
                    description: "Toast with light cream cheese and black coffee with sweetened",
                    easterEgg: "Be careful about the brand's claim (light/diet), be critical sense. These are ultraprocessed food"
                },
                {
                    icon: "/public/food/brazil/sandra/cereal.svg",
                    description: "Sugary cereal with milk."
                },
                {
                    icon: CommonData.nothingIcon,
                    description: "She didn't have breakfast."
                },
                {
                    icon: "/public/food/brazil/sandra/breakfast/4.svg",
                    description: "Fruit, Cuca (cake, typical cuisine) and black coffee"
                }
            ],
            // Maria
            [
                {
                    icon: "/public/food/brazil/maria/coffee.svg",
                    description: "Same as her parents: a cup of coffee with milk, sweet couscous with margarine and fruit (mango)"
                },
                {
                    icon: "/public/food/brazil/maria/breastfeed.svg",
                    description: "She will be breastfed"
                },
                {
                    icon: "/public/food/brazil/maria/porridge.svg",
                    description: "Porridge made with cow's milk and sugared instant rice flour",
                    easterEgg: "Children at Maria's age should not eat added sugar foods. Select another option!"
                },
                {
                    icon: "/public/food/brazil/maria/formula.svg",
                    description: "Infant milk formula (bottle-feeding)"
                }
            ]
        ],
        // Indonesia
        [
            // Wulandari
            [
                {
                    icon: "/public/food/indonesia/wulandari/breakfast/1.svg",
                    description: "Rice porridge with fortified milk"
                },
                {
                    icon: "/public/food/indonesia/wulandari/breakfast/2.svg",
                    description: "Sweet potato",
                },
                {
                    icon: "/public/food/indonesia/nisa/breakfast/2.svg",
                    description: "Noodles"
                },
                {
                    icon: "/public/food/indonesia/nisa/breakfast/3.svg",
                    description: "Noodles with meatballs",
                    easterEgg: "Even though this is a healthy option, meat is expensive to purchase"
                }
            ],
            // Neesa
            [
                {
                    icon: CommonData.riceVeggieSoup,
                    description: "She eats rice and vegetable soup before she leaves home"
                },
                {
                    icon: "/public/food/indonesia/nisa/breakfast/2.svg",
                    description: "She has instant noodles at home",
                },
                {
                    icon: "/public/food/indonesia/nisa/breakfast/3.svg",
                    description: "She grabs some Mi Baso (meatballs with noodles) from the street vendor"
                },
                {
                    icon: CommonData.nothingIcon,
                    description: "She skips breakfast today"
                }
            ],
            // Hassan
            [
                {
                    icon: "/public/food/indonesia/hassan/breakfast/1.svg",
                    description: "He eats rice and vegetable soup before he leaves home"
                },
                {
                    icon: "/public/food/indonesia/hassan/breakfast/2.svg",
                    description: "A cup of milo (cocoa drink) at home",
                },
                {
                    icon: "/public/food/indonesia/hassan/breakfast/3.svg",
                    description: "He grabs some Bubur ayam (chicken congee) from the street vendor"
                },
                {
                    icon: CommonData.nothingIcon,
                    description: "He skips breakfast today because he is late"
                }
            ]
        ],
        // Nordics
        [
            // Elias
            [
                {
                    icon: "/public/food/nordics/elias/breakfast/1.svg",
                    description: "Cereal (sugary) with milk and a chopped apple"
                },
                {
                    icon: "/public/food/nordics/elias/breakfast/2.svg",
                    description: "Oat porridge with blueberry jam, banana and milk"
                },
                {
                    icon: "/public/food/nordics/elias/breakfast/3.svg",
                    description: "White-bread toast with butter and cheese and chocolate milk",
                    easterEgg: "His parents don't allow him to have chocolate milk as it contains too much sugar"
                },
                {
                    icon: "/public/food/nordics/elias/breakfast/4.svg",
                    description: "Wholegrain cereal with milk and a glass of Piimä"
                }
            ],
            // Amena
            [
                {
                    icon: "/public/food/nordics/amena/breakfast/1.svg",
                    description: "She has a dairy-free oat-based yoghurt and wholegrain cereal"
                },
                {
                    icon: "/public/food/nordics/amena/breakfast/2.svg",
                    description: "Tea, an egg and toast with cheese and cucumber"
                },
                {
                    icon: CommonData.nothingIcon,
                    description: "She skips breakfast"
                },
                {
                    icon: "/public/food/nordics/amena/breakfast/4.svg",
                    description: "Syrian Cheeses, Eggs and Foul Mudammas"
                }
            ],
            // Lisen
            [
                {
                    icon: "/public/food/nordics/lisen/breakfast/1.svg",
                    description: "Cup of coffee, oat based porridge with milk and fruit/berries on top"
                },
                {
                    icon: "/public/food/nordics/lisen/breakfast/2.svg",
                    description: "A rye bread sandwich with cheese and cucumber, with orange juice and coffee",
                },
                {
                    icon: "/public/food/nordics/lisen/breakfast/3.svg",
                    description: "White bread with cream cheese and tomato and apple juice"
                },
                {
                    icon: "/public/food/nordics/lisen/breakfast/4.svg",
                    description: "Whole grain cereal bowl with raspberry jam and milk"
                }
            ]
        ]
    ];
}

export class TimeData {
    public static getQuestions(region: Region, character: Character) {
        return Private.questions[region][character];
    }
}
