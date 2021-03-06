import { IChoiceItem, Region, Character } from "../Types";
import { CommonData } from "./CommonData";

namespace Private {
    export const questions = [
        // Canada
        [
            // Sylvia
            [
                [
                    {
                        icon: "/public/gamelets/mcq/Chips.svg",
                        description: "A bag of potato chips"
                    },
                    {
                        icon: "/public/food/canada/yogurt-granola.svg",
                        description: "Yogurt and granola parfait"
        
                    },
                    {
                        icon: "/public/gamelets/mcq/Strawberries.svg",
                        description: "Local strawberries"
        
                    },
                    {
                        icon: "/public/transition/banana.svg",                
                        description: "Imported banana"
                    }
                ],
                [
                    {
                        icon: "/public/gamelets/mcq/Soda.svg",
                        description: "Can of soda"
                    },
                    {
                        icon: "/public/gamelets/mcq/WaterBottle.svg",
                        description: "Bottle of water"
                    },
                    {
                        icon: "/public/gamelets/mcq/TapWater.svg",
                        description: "A glass of tap water"
                    },
                    {
                        icon: "/public/gamelets/mcq/Latte.svg",                
                        description: "A latte from the coffee bar"
                    }
                ]
            ],
            // Esther
            [
                [
                    {
                        icon: "/public/gamelets/mcq/Chips.svg",
                        description: "A bag of potato chips"
                    },
                    {
                        icon: "/public/food/canada/yogurt-granola.svg",
                        description: "Yogurt and granola parfait"
        
                    },
                    {
                        icon: "/public/gamelets/mcq/Strawberries.svg",
                        description: "Local strawberries"
        
                    },
                    {
                        icon: "/public/transition/banana.svg",                
                        description: "Imported banana"
                    }
                ],
                [
                    {
                        icon: "/public/gamelets/mcq/Soda.svg",
                        description: "Can of soda"
                    },
                    {
                        icon: "/public/gamelets/mcq/WaterBottle.svg",
                        description: "Bottle of water"
                    },
                    {
                        icon: "/public/gamelets/mcq/TapWater.svg",
                        description: "A glass of tap water"
        
                    },
                    {
                        icon: "/public/gamelets/mcq/Latte.svg",                
                        description: "A latte from the coffee bar",
                        easterEgg: "Esther can't afford a Latte"
                    }
                ]
            ],
            // Hardeep
            [
                [
                    {
                        icon: "/public/gamelets/mcq/Chips.svg",
                        description: "Potato chips"
                    },
                    {
                        icon: "/public/food/canada/yogurt-granola.svg",
                        description: "Yogurt and granola"
        
                    },
                    {
                        icon: "/public/gamelets/mcq/Strawberries.svg",
                        description: "Local strawberries"
        
                    },
                    {
                        icon: "/public/transition/banana.svg",                
                        description: "Imported banana"
                    }
                ],
                [
                    {
                        icon: "/public/gamelets/mcq/Soda.svg",
                        description: "Can of soda"
                    },
                    {
                        icon: "/public/gamelets/mcq/WaterBottle.svg",
                        description: "Bottle of water"
                    },
                    {
                        icon: "/public/gamelets/mcq/TapWater.svg",
                        description: "A glass of tap water"
        
                    },
                    {
                        icon: "/public/gamelets/mcq/Latte.svg",                
                        description: "A latte from the coffee bar"                        
                    }
                ]
            ]
        ],
        // Brazil
        [
            // Gabriel
            [
                [
                    {
                        icon: "/public/food/brazil/gabriel/guava.svg",
                        description: "Guava and tangerine",
                        easterEgg: "These fruits are a good option, but it's not easy to find fruits in Brazilian schools."
                    },
                    {
                        icon: "/public/food/brazil/gabriel/drumstick_soda.svg",
                        description: "Chicken drumstick with requeijão (similar to cream cheese) and a can of soda."
        
                    },
                    {
                        icon: "/public/food/brazil/gabriel/morningsnack/3.svg",
                        description: "A package of low sodium snacks, a chocolate bar, and a pack of hard candy."
                    },
                    {
                        icon: "/public/food/brazil/sandra/dinnergrain/1.svg",
                        description: "Gabriel eats a free meal prepared at his school, which is usually rice, beans, meat and cooked vegetables."
                    }
                ]
            ],
            // Sandra
            [
                [
                    {
                        icon: "/public/food/brazil/sandra/cereal_bar.svg",
                        description: "Cereal bars, because she thinks it’s a pratical and healthy snack."
                    },
                    {
                        icon: "/public/food/brazil/sandra/fruits_nuts.svg",
                        description: "Nuts, fruits or fresh vegetables. She has small fridge in her office where she can keep these foods."
        
                    },
                    {
                        icon: "/public/food/brazil/sandra/coffee.svg",
                        description: "Just black coffee with sweetener or sugar. She isn’t hungry"
        
                    },
                    {
                        icon: "/public/food/brazil/sandra/coffee_crackers.svg",
                        description: "Coffee with sweetener and crackers. A quick snack so she can get back to work."
                    }
                ]                
            ],
            // Maria
            [
                [
                    {
                        icon: "/public/food/brazil/sandra/cereal.svg",
                        description: "Sugary cereal with milk."
                    },
                    {
                        icon: "/public/food/brazil/maria/yogurt.svg",
                        description: "Strawberry yogurt added sugar (colored and artificially flavored)."
        
                    },
                    {
                        icon: "/public/food/brazil/maria/morningsnack/3.svg",
                        description: "Seasonal fruit in pieces."
        
                    },
                    {
                        icon: "/public/food/brazil/maria/morningsnack/4.svg",
                        description: "Salty package cracker."
                    }
                ]                
            ]
        ],
        // Indonesia
        [
            // Wulandari
            [
                [
                    {
                        icon: "/public/food/indonesia/wulandari/drinks/1.svg",
                        description: "Wulandari takes a break to breastfeed the baby",
                    },
                    {
                        icon: "/public/food/indonesia/nisa/drinks/3.svg",
                        description: "She gives her a cup of milk because she no longer breastfeeds and knows that milk is good for her"
                    },
                    {
                        icon: "/public/food/indonesia/wulandari/drinks/3.svg",
                        description: "Wulandari brought a hard boiled egg and some fruit",
                        easterEgg: "Even though this is a healthy option, eggs are expensive to purchase, and household hens typically do not lay eggs daily."
                    },
                    {
                        icon: "/public/food/indonesia/wulandari/drinks/4.svg",
                        description: "Wulandari brings some sweetened fruit juice for Centia"
                    }
                ]
            ],
            // Neesa
            [
                [
                    {
                        icon: CommonData.softDrink,
                        description: "Carbonated soft drink",
                    },
                    {
                        icon: CommonData.fruitDrink,
                        description: "Sweetened fruit drink"
                    },
                    {
                        icon: "/public/food/indonesia/nisa/drinks/3.svg",
                        description: "Soy milk"
                    },
                    {
                        icon: CommonData.coconutDrink,
                        description: "Coconut water"
                    }
                ]
            ],
            // Hassan
            [
                [
                    {
                        icon: "/public/food/indonesia/hassan/drinks/1.svg",
                        description: "Carbonated soft drink",
                        easterEgg: "The street cart doesn't have soda today."
                    },
                    {
                        icon: "/public/food/indonesia/hassan/drinks/2.svg",
                        description: "Sweetened fruit drink"
                    },
                    {
                        icon: "/public/food/indonesia/hassan/drinks/3.svg",
                        description: "Water in a plastic pouch"
                    },
                    {
                        icon: "/public/food/indonesia/hassan/drinks/4.svg",
                        description: "Coconut water"
                    }
                ]
            ]
        ],
        // Nordics
        [
            // Elias
            [
                [
                    {
                        icon: "/public/food/nordics/elias/snacks/1.svg",
                        description: "He buys a rye bread sandwich with ham and cheese"
                    },
                    {
                        icon: CommonData.apple,
                        description: "He buys an apple"
        
                    },
                    {
                        icon: CommonData.sodaCan,
                        description: "He buys a soft drink",
                        easterEgg: "Soda is not available to buy at Elias's school as a result of the Finnish government's Child Obesity Initiative (COI). As part of this initiative, the soft drinks industry has also agreed not to market soft drinks in the country to children under the age of 12. In 2001, the Nordic countries agreed to a joint protocol for monitoring the tactics used to market unhealthy foods and beverages towards children and young people."
                    },
                    {
                        icon: CommonData.nothingIcon,
                        description: "He doesn't get money from his parents to buy snacks at school"
                    }
                ]
            ],
            // Amena
            [
                [
                    {
                        icon: CommonData.cerealBar,
                        description: "Power bar (nuts & dried fruit)"
                    },
                    {
                        icon: CommonData.banana,
                        description: "She tries to bring or buy one fruit a day; today she brought a banana"
                    },
                    {
                        icon: "/public/food/nordics/amena/snacks/3.svg",
                        description: "Coffee with oatmilk"
                    },
                    {
                        icon: CommonData.nothingIcon,
                        description: "She doesn't snack before lunch"
                    }
                ]
            ],
            // Lisen
            [
                [
                    {
                        icon: "/public/food/nordics/lisen/snacks/1.svg",
                        description: "A cappuccino from a nearby coffee bar"
                    },
                    {
                        icon: "/public/food/nordics/lisen/snacks/2.svg",
                        description: "A smoothie with apple-juice, spinach and banana"
                    },
                    {
                        icon: CommonData.nothingIcon,
                        description: "Nothing, she is not hungry before lunch"
                    },
                    {
                        icon: CommonData.waterGlass,
                        description: "She prefers sparkling water from the office soda-stream"
                    }
                ]
            ]
        ]
    ];
}

export class MCQData {
    public static getQuestions(region: Region, character: Character): IChoiceItem[][] {
        return Private.questions[region][character];
    }
}
