import { IScoreData, Region, CanadaCharacters, NordicCharacters, OutcomeType } from "../../Types";
import { NordicQuestions } from "../../score/ScoreTypes";
import { TimeData } from "../TimeData";
import { MCQData } from "../MCQData";
import { LunchData } from "../LunchData";
import { YesNoSocialData } from "../YesNoSocialData";
import { NordicsAmenaPlateData } from "./NordicsAmenaPlateData";

// tslint:disable:object-literal-key-quotes max-line-length
namespace Private {
    export const scores: {
        [questionId: string]: IScoreData[]
    } = {
        [NordicQuestions.Breakfast]: [
            {
                "outcome": "Whole grains contain a high amount of fiber, keeping you feeling fuller for longer. Some wholegrain cereals can contain suprisingly high amounts of sugar, so be sure to choose one that has a low sugar content.",
                "scores": {
                    "Environment": 1,
                    "Health": 2,
                    "Healthcare": 0,
                    "Culture": 1,
                    "Climate": 2
                },
                icon: TimeData.getQuestions(Region.Nordics, NordicCharacters.Amena)[0].icon,
                outcomeDesc: "blood sugar regulation",
                outcomeType: OutcomeType.Health,
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/blood-sugar-levels/"              
            },
            {
                "outcome": "Not all teabags are created the same. Nylon mesh teabags have been found to leech microplastic particles into tea water. Use loose leaf tea instead.",
                "scores": {
                    "Environment": -1,
                    "Health": 1,
                    "Healthcare": 0,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: TimeData.getQuestions(Region.Nordics, NordicCharacters.Amena)[1].icon,
                outcomeDesc: "plastics and packaging",
                outcomeType: OutcomeType.Environment,
                link: "https://greenbrownblue.kinsta.cloud/food-and-environment-explained/plastic-waste/"               
            },
            {
                "outcome": "Infrequent meals can lead to insulin spikes and erratic blood sugar levels, which can affect alertness and energy",
                "scores": {
                    "Environment": 0,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 0,
                    "Climate": 0
                },
                icon: TimeData.getQuestions(Region.Nordics, NordicCharacters.Amena)[2].icon,
                outcomeDesc: "Blood sugar regulation",
                outcomeType: OutcomeType.Health,
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/blood-sugar-levels/"               
            },
            {
                "outcome": "Foul Mudammas is a classic fava bean dish that's commonly eaten for breakfast in the Middle East. Products derived from animals, like cheese, require significantly more land to produce than protein-rich plant-based foods like fava beans.",
                "scores": {
                    "Environment": 0,
                    "Health": 1,
                    "Healthcare": 0,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: TimeData.getQuestions(Region.Nordics, NordicCharacters.Amena)[3].icon,
                outcomeDesc: "Meat alternatives",
                outcomeType: OutcomeType.Health,
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/meat-alternatives/"                
            }
        ],
        [NordicQuestions.Snacks1]: [
            {
                "outcome": "Nuts like hazelnuts and walnuts contain dietary fibre and micronutrients. They also contain unsaturated fat (the heathlier kind of fat), which is important for overall body function. As dried fruits are naturally sweet, opt for snacks with dried fruit that does not contain added sugar.",
                "scores": {
                    "Environment": -1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 0,
                    "Climate": -2
                },
                icon: MCQData.getQuestions(Region.Nordics, NordicCharacters.Amena)[0][0].icon,
                outcomeDesc: "unsaturated fat",
                outcomeType: OutcomeType.Health,
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/saturated-trans-fats/"               
            },
            {
                "outcome": "Fruit is an important source of dietary fiber, vitamins and fibre. Packing a piece of fruit for work is a perfect snack and can keep you going until lunchtime",
                "scores": {
                    "Environment": -1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 0,
                    "Climate": -2
                },
                icon: MCQData.getQuestions(Region.Nordics, NordicCharacters.Amena)[0][1].icon,
                outcomeDesc: "Micronutrients",
                outcomeType: OutcomeType.Health,
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/vegetables-nutrition/"              
            },
            {
                "outcome": "Avoid making coffee from disposible capsules or buying coffee in a single use cup. Instead, try to make a habit of bringing your own resuable cup when heading to the coffee shop",
                "scores": {
                    "Environment": -1,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 0,
                    "Climate": -1
                },
                icon: MCQData.getQuestions(Region.Nordics, NordicCharacters.Amena)[0][2].icon,
                outcomeDesc: "Processed foods",
                outcomeType: OutcomeType.Climate,
                link: "https://greenbrownblue.kinsta.cloud/food-and-climate-explained/food-processing-climate/"               
            },
            {
                "outcome": "It's perfectly fine to not have a snack between breakfast and lunch. Fiber-rich breakfasts can help keep you feeling fuller longer, and help you to stay away from unhealthy snack foods between mealtimes",
                "scores": {
                    "Environment": 0,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 0,
                    "Climate": 0
                },
                icon: MCQData.getQuestions(Region.Nordics, NordicCharacters.Amena)[0][3].icon,
                outcomeDesc: "Mindful eating",
                outcomeType: OutcomeType.Culture,
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/mindful-eating-healthy-weight/"               
            }
        ],
        [NordicQuestions.Lunch1]: [
            {
                "outcome": "Quorn is a plant-based meat subsitute that replicates the texture of meat",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 1,
                    "Climate": 1
                },
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Amena)[0][0].icon,
                outcomeDesc: "Protein",
                outcomeType: OutcomeType.Health,
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/plant-based-proteins/"               
            },
            {
                "outcome": "Dishes like this can help you to reach your daily intake of vegetables. According to the Danish dietary guidelines, you should be eating 300g of vegetables per day",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 1,
                    "Climate": 2
                },
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Amena)[0][1].icon,
                outcomeDesc: "Dietary Guidelines",
                outcomeType: OutcomeType.Health,
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/dietary-guidelines-importance/"               
            },
            {
                "outcome": "Swapping the meat in lasagna for something plant-based is a healthy and more environmentally-friendly choice.",
                "scores": {
                    "Environment": 1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 1,
                    "Climate": 1
                },
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Amena)[0][2].icon,
                outcomeDesc: "Plant forward diet",
                outcomeType: OutcomeType.Health,
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/plant-forward-diet/"               
            },
            {
                "outcome": "Vegan cheese, available in larger supermarket stores in Umeå where Amena lives, is made from coconut fat. Because it's vegan it has no dairy, and since animal products are associated with higher green-house gas emissions this is a better alternative from a climate perspective. Nutrition wise this cheese does not contain any protein so make sure you have proteins from other parts of your daily diet, for example by eating more pulses. This cheese come from the brand 'Astrid och aporna' and the product is called Jeezly original. The full list of ingredients: Water, coconut oil (23%), modified potato and corn starch, potato starch, sea salt, vegan flavorings, acidity regulators: (citric acid), preservative: (sorbic acid), dye: (beta carotene).",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 1,
                    "Climate": 2
                },
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Amena)[0][3].icon,
                outcomeDesc: "Green House Gas",
                outcomeType: OutcomeType.Climate,
                link: "https://greenbrownblue.kinsta.cloud/food-and-climate-explained/food-ghg/"              
            }
        ],
        [NordicQuestions.Lunch1Drinks]: [
            {
                "outcome": "According to the Nordic Nutrition Recommendations, the average adult should drink between 1-1.5 L of water per day.",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Amena)[1][0].icon,
                outcomeDesc: "Drinking water",
                outcomeType: OutcomeType.Environment,
                link: "https://greenbrownblue.kinsta.cloud/food-and-environment-explained/safe-drinking-water/"              
            },
            // easter egg
            {
                "scores": {
                    "Environment": 1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 1,
                    "Climate": 2
                }
            },
            {
                "outcome": "Sparkling water is a great way to jazz up your water. Skip the single-use plastic bottle and make sure to bring your own re-useable bottle with you wherever you go!",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 1,
                    "Climate": 2
                },
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Amena)[1][2].icon,
                outcomeDesc: "Plastics and packaging",
                outcomeType: OutcomeType.Environment,
                link: "https://greenbrownblue.kinsta.cloud/food-and-environment-explained/plastic-waste/"
            },
            {
                "outcome": "Keep a reusable bottle close to you throughout the day to keep you hydrated. Dehydration can cause headaches and dizziness.",
                "scores": {
                    "Environment": 0,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 0,
                    "Climate": 0
                },
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Amena)[1][3].icon,
                outcomeDesc: "Drinking water",
                outcomeType: OutcomeType.Environment,
                link: "https://greenbrownblue.kinsta.cloud/food-and-environment-explained/safe-drinking-water/"
            }
        ],
        [NordicQuestions.Dinner1]: [
            {
                "outcome": "This meal is in line with the Nordic Nutrition Recommendations",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: YesNoSocialData.getQuestions(Region.Nordics, NordicCharacters.Amena)[0].icon,
                outcomeDesc: "Nordic Food Initiatives",
                outcomeType: OutcomeType.Culture,
                link: "https://greenbrownblue.kinsta.cloud/food-and-culture-explained/nordic-diet-measures/"               
            }
        ],
        [NordicQuestions.Dinner2]: [
            {
                "outcome": "Try to add some more vegetables to complement the dish",
                "scores": {
                    "Environment": 1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 1,
                    "Climate": 2
                },
                icon: YesNoSocialData.getQuestions(Region.Nordics, NordicCharacters.Amena)[1].icon,
                outcomeDesc: "Chicken",
                outcomeType: OutcomeType.Climate,
                link: "https://greenbrownblue.kinsta.cloud/food-and-climate-explained/chicken-beef/"               
            }
        ],
        // easter egg
        [NordicQuestions.Dinner3]: [
            {
                "outcome": "Amena and her family are not yet sure of all the food labels and can thus not choose a sustainably sourced option. In Sweden MSC, ASC and Krav are some of the most common labels for sustainble fish and WWF Sweden has developed a specific fish-gide to help consumers.",
                "scores": {
                    "Environment": 0,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 0,
                    "Climate": 0
                }
            }
        ],
        [NordicQuestions.Dinner4]: [
            {
                "outcome": "Cauliflower is a traditional vegetable used throughout the Nordic countries. It is part of the wild cabbage family but has a milder taste. It is very rich in vitamin C and folic acid and has very few calories. In 2015 it was named the most trendy vegetable in Sweden",
                "scores": {
                    "Environment": 1,
                    "Health": 2,
                    "Healthcare": 1,
                    "Culture": 2,
                    "Climate": 1
                },
                icon: YesNoSocialData.getQuestions(Region.Nordics, NordicCharacters.Amena)[3].icon,
                outcomeDesc: "Nordic food",
                outcomeType: OutcomeType.Culture,
                link: "https://greenbrownblue.kinsta.cloud/food-and-culture-explained/traditional-nordic-cuisine/"               
            }
        ],
        [NordicQuestions.DinnerProtein]: [
            {
                "outcome": "Because of the negative climate, environment and health impact, the Nordic nutrition recommendations recommend limited intake of red and processed meat. Sweden recommends a maximum intake of no more than 500 grams of red and processed meat a week. Only a small amount of this should be processed meat.",
                "scores": {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": 2,
                    "Climate": -2
                },
                icon: NordicsAmenaPlateData.getItems()[0][0].foodInfo.content,
                outcomeDesc: "Beef",
                outcomeType: OutcomeType.Climate,
                link: "https://greenbrownblue.kinsta.cloud/food-and-climate-explained/beef-climate-change/"               
            },
            {
                "outcome": "Products derived from animals, like cheese, require significantly more land to produce than protein-rich plant-based foods like fava beans.",
                "scores": {
                    "Environment": -1,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 0,
                    "Climate": -2
                },
                icon: NordicsAmenaPlateData.getItems()[0][1].foodInfo.content,
                outcomeDesc: "Dairy",
                outcomeType: OutcomeType.Climate,
                link: "https://greenbrownblue.kinsta.cloud/food-and-climate-explained/dairy-climate/"               
            },
            {
                "outcome": "White fish, if sustainble sourced, is a good protein option.",
                "scores": {
                    "Environment": -1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 0
                },
                icon: NordicsAmenaPlateData.getItems()[0][2].foodInfo.content,
                outcomeDesc: "Nordic food ",
                outcomeType: OutcomeType.Culture,
                link: "https://greenbrownblue.kinsta.cloud/food-and-culture-explained/traditional-nordic-cuisine/"               
            },
            {
                "outcome": "Salmon, if sustainably sourced, is a healthy protein option that also provides a lot of good omega 3 fatty acids. If from aquaculture production however, be aware that sometimes the salmon may be fed on fishmeal (making it a very resource intense production) and sometimes the feed is soy which if not certified, is implicated in deforestation.",
                "scores": {
                    "Environment": -1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": -1
                },
                icon: NordicsAmenaPlateData.getItems()[0][3].foodInfo.content,
                outcomeDesc: "tofu",
                outcomeType: OutcomeType.Environment,
                link: "https://greenbrownblue.kinsta.cloud/food-and-environment-explained/soybean-impact/"               
            }
        ],
        [NordicQuestions.DinnerGrains]: [
            {
                "outcome": "Potato is culturally an important staple in the Nordics, and an important part of many traditional dishes. As the food culture is globalized, the Nordic population is however eating less and less potato.",
                "scores": {
                    "Environment": 2,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 2,
                    "Climate": 1
                },
                icon: NordicsAmenaPlateData.getItems()[1][0].foodInfo.content,
                outcomeDesc: "Food marketing",
                outcomeType: OutcomeType.Culture,
                link: "https://greenbrownblue.kinsta.cloud/food-and-culture-explained/food-marketing/"               
            },
            {
                "outcome": "Buckwheat is a healthy grain that has seen a revival in the Nordics in the past 10 years.",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: NordicsAmenaPlateData.getItems()[1][1].foodInfo.content,
                outcomeDesc: "Whole grains",
                outcomeType: OutcomeType.Health,
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/whole-grain-meaning/"               
            },
            {
                "outcome": "Potato is culturally an important staple in the Nordics, and an important part of many traditional dishes. As the food culture is globalized, the Nordic population is however eating less and less potato.",
                "scores": {
                    "Environment": 2,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 2,
                    "Climate": 1
                },
                icon: NordicsAmenaPlateData.getItems()[1][2].foodInfo.content,
                outcomeDesc: "Food marketing",
                outcomeType: OutcomeType.Culture,
                link: "https://greenbrownblue.kinsta.cloud/food-and-culture-explained/food-marketing/"               
            },
            {
                "outcome": "Whole grain bread has a lot of dietary fibers which promotes digestive health and is a healthy choice if you want to have a side-snack in your meal.",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: NordicsAmenaPlateData.getItems()[1][3].foodInfo.content,
                outcomeDesc: "Whole grains",
                outcomeType: OutcomeType.Health,
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/whole-grain-meaning/"               
            }
        ],
        [NordicQuestions.DinnerVeggies]: [
            {
                "outcome": "Broccoli is a superfood - it is not only healthy (with high concentration of vitamins K and C, folate or folic acid as well as potassium, fiber and iron) but also because it generally has a low carbon footprint.",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: NordicsAmenaPlateData.getItems()[2][0].foodInfo.content,
                outcomeDesc: "Leafy greens",
                outcomeType: OutcomeType.Health,
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/which-vegetables/"               
            },
            {
                "outcome": "Spinach is a good complement to other types of salad greens as it often includes more calcium, vintamin A and C and iron. During the summer spinach grows well also in the Nordic region.",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: NordicsAmenaPlateData.getItems()[2][1].foodInfo.content,
                outcomeDesc: "Local food",
                outcomeType: OutcomeType.Culture,
                link: "https://greenbrownblue.kinsta.cloud/food-and-culture-explained/eating-locally/"               
            },
            {
                "outcome": "Green peas are truly a great staple to have in the fridge. If you do, you can without much effort add some healthy vegetables to your meal. Because they are frozen, you might also reduce the risk of food waste since many other greens are more easily perishable when fresh.",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: NordicsAmenaPlateData.getItems()[2][2].foodInfo.content,
                outcomeDesc: "Food waste",
                outcomeType: OutcomeType.Environment,
                link: "https://greenbrownblue.kinsta.cloud/food-and-climate-explained/food-waste-climate/"               
            },
            {
                "outcome": "Did you know that Fennel is a flowering plant species in the carrot family? This is a veggie that helps add a lot of flavour (anis-like) to any dish. It is seen as an important food  in the Nordic diet.",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: NordicsAmenaPlateData.getItems()[2][3].foodInfo.content,
                outcomeDesc: "Food diversity",
                outcomeType: OutcomeType.Health,
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/diverse-diets/"              
            }
        ]
    };
}

export class NordicsAmenaScoreData {
    public static get() {
        return Private.scores;
    }
}
