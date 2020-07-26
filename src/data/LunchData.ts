import { Region, Character, IChoiceItem } from "../Types";
import { CommonData } from "./CommonData";

namespace Private {
    export const questions = [
        // Canada
        [
            // Sylvia
            [
                [{
                    icon: "/public/gamelets/mcq2/ChickenSub.svg",
                    description: "Grilled chicken sandwich from a fastfood restaurant chain"
                },
                {
                    icon: "/public/gamelets/mcq2/VeggieSub.svg",
                    description: "Grilled veg sandwich on white bread from a grab-and-go store"
                },
                {
                    icon: "/public/gamelets/mcq2/LeftoverChicken.svg",
                    description: "Sliced leftover chicken on white bread brought from home",
                    easterEgg: "Sylvia didn't have time to buy groceries and prepare her lunch this morning"
                },
                {
                    icon: "/public/gamelets/mcq2/VeggieWrap.svg",
                    description: "Cucumber and hummus sandwich wrapped in a whole grain tortilla brought from home"
                }]
            ],
            // Esther
            [
                [{
                    icon: "/public/gamelets/mcq2/ChickenSub.svg",
                    description: "Grilled chicken sandwich from a fastfood restaurant chain"
                },
                {
                    icon: "/public/gamelets/mcq2/VeggieSub.svg",
                    description: "Grilled veg sandwich on white bread from a grab-and-go store"
                },
                {
                    icon: "/public/gamelets/mcq2/LeftoverChicken.svg",
                    description: "Sliced leftover chicken on white bread brought from home",
                },
                {
                    icon: "/public/gamelets/mcq2/VeggieWrap.svg",
                    description: "Cucumber and hummus sandwich wrapped in a whole grain tortilla brought from home"
                }]
            ],
            // Hardeep
            [
                [{
                    icon: "/public/food/canada/beanwrap.svg",
                    description: "He walks across the street and gets a bean burrito from a fastfood restaurant chain"
                },
                {
                    icon: "/public/gamelets/mcq2/VeggieSub.svg",
                    description: "Grilled veg sandwich on white bread from a grab-and-go store"
                },
                {
                    icon: "/public/food/canada/sushi.svg",
                    description: "He orders vegetarian sushi from a food delivery app, delivered right to his desk"
                },
                {
                    icon: "/public/gamelets/mcq2/VeggieWrap.svg",
                    description: "Cucumber and hummus sandwich wrapped in a whole grain tortilla brought from home",
                    easterEgg: "Hardeep doesn't usually have the groceries to make up a healthy lunch"
                }]
            ]
        ],
        // Brazil
        [
            // Gabriel
            [
                [
                    {
                        icon: "/public/food/brazil/gabriel/lunch/1.svg",
                        description: "Rice, beans, a cooked vegetable, an omelet and a leafy salad. Guava paste with queijo minas (white cheese)."
                    },
                    {
                        icon: "/public/food/brazil/gabriel/lunch/2.svg",
                        description: "A frozen lasagna. Diet dulce de leche."
                    },
                    {
                        icon: "/public/food/brazil/gabriel/lunch/3.svg",
                        description: "Rice and a beef steak. Chocolate candies."
                    },
                    {
                        icon: "/public/food/brazil/gabriel/lunch/4.svg",
                        description: "Seven-grain rice with nuts, grilled salmon with passion fruit sauce and grilled asparagus. A star fruit.",
                        easterEgg: "There's nothing ultra-processed in this dish and there is a lot of color, but it's not an everyday meal for a middle-income Brazilian family."
                    }
                ],
                [
                    {
                        icon: "/public/gamelets/mcq/Soda.svg",
                        description: "Soda"
                    },
                    {
                        icon: "/public/food/brazil/gabriel/drinking/2.svg",
                        description: "Powdered juice"
                    },
                    {
                        icon: "/public/food/brazil/gabriel/drinking/3.svg",
                        description: "Whole grape juice",
                        easterEgg: "Whole grape juice is not ultra-processed but it’s expensive. There is nothing better than water to quench our thirst."
                    },
                    {
                        icon: "/public/gamelets/mcq/TapWater.svg",
                        description: "A glass of water"
                    }
                ]
            ],
            // Sandra
            [
                [
                    {
                        icon: "/public/food/brazil/sandra/lunch/1.svg",
                        description: "Self service restaurant that offers a variety of meat, salad, vegetables, pasta, rice and beans."
                    },
                    {
                        icon: "/public/food/brazil/sandra/eatingout/3.svg",
                        description: "Fast food restaurant."
                    },
                    {
                        icon: "/public/food/brazil/sandra/lunch/2.svg",
                        description: "She use to take packed lunch."
                    },
                    {
                        icon: "/public/food/brazil/sandra/lunch/3.svg",
                        description: "Vegan restaurant."
                        // tslint:disable-next-line
                        // easterEgg: "Nice pick! Eat less meat its a good way to adopt of environmentally friendly practices."
                    }
                ],
                [
                    {
                        icon: CommonData.nothingIcon,
                        description: "Nothing"
                    },
                    {
                        icon: "/public/food/brazil/sandra/drinking/2.svg",
                        description: "Natural Juice"
                    },
                    {
                        icon: "/public/food/brazil/maria/drinking/2.svg",
                        description: "Soft drink",
                        easterEgg: "Watch out! Sugar beverages are associated with nutrition related chronic diseases. Avoid ultra-processed foods."
                    },
                    {
                        icon: "/public/gamelets/mcq/TapWater.svg",
                        description: "Glass of water"
                    }
                ]
            ],
            // Maria
            [
                [
                    {
                        icon: "/public/food/brazil/maria/lunch/1.svg",
                        description: "Rice, beans, chicken, cabbage, pumpkin and a piece of fruit."
                    },
                    {
                        icon: "/public/food/brazil/maria/lunch/2.svg",
                        description: "Ultra-processed baby food and a small piece of fruit."
                    },
                    {
                        icon: "/public/food/brazil/maria/lunch/3.svg",
                        description: "Liquefied homemade soup and coloured gelatine."
                    },
                    {
                        icon: "/public/food/brazil/maria/lunch/4.svg",
                        description: "Porridge made of cow's milk and sweet rice flour."
                    }
                ],
                [
                    {
                        icon: "/public/food/brazil/sandra/drinking/2.svg",
                        description: "Natural Juice",
                        easterEgg: "Remember that Maria is only 9 months old and it is not recommended to offer fruit juice to children under 1 year old, even one made with fruit only. Choose another option!"
                    },
                    {
                        icon: "/public/food/brazil/maria/drinking/2.svg",
                        description: "Soft drink"
                    },
                    {
                        icon: "/public/gamelets/mcq/TapWater.svg",
                        description: "Water"
                    },
                    {
                        icon: "/public/food/brazil/gabriel/drinking/2.svg",
                        description: "Artificial orange juice."
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
                        icon: "/public/food/indonesia/wulandari/lunch/1.svg",
                        description: "Family dish of cooked white rice with sambal and small piece of tofu"
                    },
                    {
                        icon: "/public/food/indonesia/wulandari/lunch/2.svg",
                        description: "Family dish of cooked white rice with sambal and a small piece of fish"
                    },
                    {
                        icon: "/public/food/indonesia/wulandari/lunch/3.svg",
                        description: "Stirf-fried kangkung(spinach)"
                    },
                    {
                        icon: "/public/food/indonesia/wulandari/lunch/4.svg",
                        description: "She doesn't have time so she buys Martaback (sweet pancakes) on the road."
                    }
                ]                
            ],
            // Neesa
            [
                [
                    {
                        icon: "/public/food/indonesia/nisa/lunch/1.svg",
                        description: "She purchases rice, chicken, and vegetable dish from school canteen."
                    },
                    {
                        icon: "/public/food/indonesia/nisa/lunch/2.svg",
                        description: "She gets a burger from fast food restaurant nearby"
                    },
                    {
                        icon: "/public/food/indonesia/nisa/lunch/3.svg",
                        description: "She purchases meatball soup from street vendor"
                    },
                    {
                        icon: CommonData.nothingIcon,
                        description: "She skips lunch to check out the new clothing store that just opened"
                    }
                ]                
            ],
            // Hassan
            [
                [
                    {
                        icon: "/public/food/indonesia/hassan/lunch/1.svg",
                        description: " Maize or rice and beans (supplied by local farmers and prepared by parents)"
                    },
                    {
                        icon: "/public/food/indonesia/hassan/lunch/2.svg",
                        description: "Fried noodles, a piece of fried chicken (brought from home)"
                    },
                    {
                        icon: "/public/food/indonesia/hassan/lunch/3.svg",
                        description: "Meatball soup with noodles from street vendor",
                        easterEgg: "He doesn't have enough time to leave school for lunch"
                    },
                    {
                        icon: CommonData.nothingIcon,
                        description: "He skips so he can play football with his friends"
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
                        icon: "/public/food/nordics/elias/lunch/1.svg",
                        description: "Rice with chicken stew, carrot salad and crispy whole grain bread"
                    },
                    {
                        icon: "/public/food/nordics/elias/lunch/2.svg",
                        description: "Pasta with veggie bolognese and a green pea salad"
                    },
                    {
                        icon: "/public/food/nordics/elias/lunch/3.svg",
                        description: "Fish-patties with potato and a green side salad",
                    },
                    {
                        icon: "/public/food/nordics/elias/lunch/4.svg",
                        description: "Karelian Pies, made with rye flour and filled with potatoes, rice or carrots"
                    }
                ],
                [
                    {
                        icon: CommonData.appleJuice,
                        description: "Apple juice",
                        easterEgg: "Only water and milk are served for school lunch in Elias’s school, some schools also serve plant-based milk alternatives. This is a way to help reduce the intake of drinks high in sugars."
                    },
                    {
                        icon: "/public/food/nordics/elias/snacks/6.svg",
                        description: "Glass of oat milk"
                    },
                    {
                        icon: CommonData.waterGlass,
                        description: "Water"
                    },
                    {
                        icon: CommonData.nothingIcon,
                        description: "Nothing"
                    }
                ]
            ],
            // Amena
            [
                [
                    {
                        icon: "/public/food/nordics/amena/lunch/1.svg",
                        description: "Quorn filet in red pepper sauce, couscous salad with oven baked zucchini and aubergine"
                    },
                    {
                        icon: "/public/food/nordics/amena/lunch/2.svg",
                        description: "Potato and onion soup topped with green kale crispy chips and rye bread"
                    },
                    {
                        icon: "/public/food/nordics/amena/lunch/3.svg",
                        description: "Vegetarian lasagna (with soy-meat) and vegetables",
                    },
                    {
                        icon: "/public/food/nordics/amena/lunch/4.svg",
                        description: "Oven baked white cabbage with oven baked vegan cheese"
                    }
                ],
                [
                    {
                        icon: CommonData.waterBottle,
                        description: "Water",
                    },
                    {
                        icon: CommonData.appleJuice,
                        description: "Apple juice",
                        easterEgg: "Only water is served for school lunch in Amena's school as a way to promote a reduction in the intake of sugary drinks. Sometimes schools also have milk or enriched plant-based alternatives (such as oat milk)"
                    },
                    {
                        icon: CommonData.waterSparkling,
                        description: "Sparkling water"
                    },
                    {
                        icon: CommonData.nothingIcon,
                        description: "Nothing"
                    }
                ]
            ],
            // Lisen
            [
                [
                    {
                        icon: "/public/food/nordics/lisen/lunch/1.svg",
                        description: "Medister sausage with mustard stewed potatoes, cabbage, and beets"
                    },
                    {
                        icon: "/public/food/nordics/lisen/lunch/2.svg",
                        description: "Cauliflower tart with puff pastry, organic eggs, thyme and parsley pesto"
                    },
                    {
                        icon: "/public/food/nordics/lisen/lunch/3.svg",
                        description: "Salad of green and red cabbage with cherries and soft cheese in brine",
                    },
                    {
                        icon: "/public/food/nordics/lisen/lunch/4.svg",
                        description: "BBQ glazed pork with marinated kale, soft pumpkin mash gratin with North Sea cheese"
                    }
                ],
                [
                    {
                        icon: CommonData.appleJuice,
                        description: "Apple juice",
                    },
                    {
                        icon: CommonData.waterSparkling,
                        description: "Sparkling water"
                    },
                    {
                        icon: CommonData.coffeeWithMilk,
                        description: "Coffee with milk"
                    },
                    {
                        icon: CommonData.waterGlass,
                        description: "Tap water"
                    }
                ]
            ]
        ]
    ];
}

export class LunchData {
    public static getQuestions(region: Region, character: Character): IChoiceItem[][] {
        return Private.questions[region][character];
    }
}
