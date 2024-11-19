import { IScoreData, Region, CanadaCharacters, NordicCharacters, OutcomeType } from "../../Types";
import { NordicQuestions } from "../../score/ScoreTypes";
import { TimeData } from "../TimeData";
import { MCQData } from "../MCQData";
import { LunchData } from "../LunchData";
import { YesNoSocialData } from "../YesNoSocialData";
import { NordicsEliasPlateData } from "./NordicsEliasPlateData";

// tslint:disable:object-literal-key-quotes
// tslint:disable:max-line-length
namespace Private {
    export const scores: {
        [questionId: string]: IScoreData[]
    } = {
        [NordicQuestions.Breakfast]: [
            {
                "outcome": "The World Health Organization suggests that you limit your intake of 'free sugars' (any sugar that is added to foods, like table sugar, honey, or fruit juice) to no more than 12 teaspoons per day. A bowl of sugary cereal usually contains around 2-3 teaspoons!",
                "scores": {
                    "Environment": 0,
                    "Health": -1,
                    "Healthcare": 0,
                    "Culture": -1,
                    "Climate": -1
                },
                icon: TimeData.getQuestions(Region.Nordics, NordicCharacters.Elias)[0].icon,
                outcomeDesc: "sugar",
                outcomeType: OutcomeType.Health,
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/sugar/"               
            },
            {
                "outcome": "Homemade porridge is high in fibre and protein and can be a healthier alternative to processed, sugary breakfast cereals. Finland produces 13% of the oats grown in the European Union.",
                "scores": {
                    "Environment": 0,
                    "Health": 1,
                    "Healthcare": 0,
                    "Culture": 2,
                    "Climate": 1
                },
                icon: TimeData.getQuestions(Region.Nordics, NordicCharacters.Elias)[1].icon,
                outcomeDesc: "whole grain",
                outcomeType: OutcomeType.Health,
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/whole-grain-meaning/"               
            },
            // Easter egg
            {
                "outcome": "His parents don't allow him to have chocolate milk as it contains too much sugar",
                "scores": {
                    "Environment": 0,
                    "Health": -2,
                    "Healthcare": 0,
                    "Culture": 1,
                    "Climate": 0
                },
            },
            {
                "outcome": "Whole grains offer a “complete package” of health benefits, unlike refined grains, which are stripped of valuable nutrients during the refining process. Whole grains are full of nutrients including protein, fiber, B vitamins, antioxidants, and trace minerals (iron, zinc, copper, and magnesium). Dairy products should be consumed in moderation as farming livestock for meat, eggs and milk generates some 14.5% of total greenhouse gas emissions.",
                "scores": {
                    "Environment": 0,
                    "Health": 1,
                    "Healthcare": 0,
                    "Culture": 1,
                    "Climate": -1
                },
                icon: TimeData.getQuestions(Region.Nordics, NordicCharacters.Elias)[3].icon,
                outcomeDesc: "whole grains",
                outcomeType: OutcomeType.Health,
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/whole-grain-meaning/"               
            }
        ],
        [NordicQuestions.Snacks1]: [
            {
                "outcome": "When choosing sandwhich toppings, and other foods to include in your everyday diet for that matter, try to avoid processed meats such as ham, salami, bacon and some sausages such as frankfurters and chorizo. These are types of meat that have been transformed through salting, curing, fermentation, smoking or other processes to enhance flavour or improve preservation. Research evidence shows that it can be high in fat and salt and eating it is a cause of bowel cancer. Use alternatives to ham in your sandwiches, why not try boiled eggs, low-fat houmous or cream cheese?",
                "scores": {
                    "Environment": 2,
                    "Health": 1,
                    "Healthcare": -2,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: MCQData.getQuestions(Region.Nordics, NordicCharacters.Elias)[0][0].icon,
                outcomeDesc: "Sodium",
                outcomeType: OutcomeType.Health,
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/salt/"              
            },
            {
                "outcome": "Great choice! One apple provides at least 10 percent of the recommended daily amount of vitamin C and fiber. It also has a lot of dietary fiber that can act in several ways to lower cancer risk.",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 0,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: MCQData.getQuestions(Region.Nordics, NordicCharacters.Elias)[0][1].icon,
                outcomeDesc: "Nutrition related diseases",
                outcomeType: OutcomeType.Healthcare,
                link: "https://greenbrownblue.kinsta.cloud/food-and-healthcare-explained/food-is-medicine/"              
            },
            // easter egg
            {
                "outcome": "Local food usually, but not always, has less impact on greenhouse gas emissions. Get to know the farmers in your area and learn more about the types of farming they support!",
                "scores": {
                    "Environment": 2,
                    "Health": 1,
                    "Healthcare": 0,
                    "Culture": 1,
                    "Climate": 0
                }
            },
            {
                "outcome": "Not everyone can afford to buy snacks throughout the day. If you do find yourself getting hungry between meals but can't afford buying food outside the home, try bringing a healthy snack from home.",
                "scores": {
                    "Environment": 2,
                    "Health": 1,
                    "Healthcare": 0,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: MCQData.getQuestions(Region.Nordics, NordicCharacters.Elias)[0][3].icon,
                outcomeDesc: "food insecurity",
                outcomeType: OutcomeType.Culture,
                link: "https://greenbrownblue.kinsta.cloud/food-and-culture-explained/food-access-challenges/"                              
            }
        ],
        [NordicQuestions.Lunch1]: [
            {
                "outcome": "Rice is the nutritious staple crop for more than half of the world's people, but growing rice produces methane, a greenhouse gas more than 30 times as potent as carbon dioxide.",
                "scores": {
                    "Environment": -1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 1,
                    "Climate": -1
                },
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Elias)[0][0].icon,
                outcomeDesc: "Rice and methane",
                outcomeType: OutcomeType.Climate,
                link: "https://greenbrownblue.kinsta.cloud/food-and-climate-explained/rice-climate-footprint/"
            },
            {
                "outcome": "Subsituting the meat in bolognese with vegetables can be a great way to reduce your consumption of meat. Try adding mushrooms for texture and flavor.",
                "scores": {
                    "Environment": 1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 1,
                    "Climate": 2
                },
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Elias)[0][1].icon,
                outcomeDesc: "protein",
                outcomeType: OutcomeType.Health,
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/plant-based-proteins/"               
            },
            {
                "outcome": "Fatty fish is important source of healthy fats. However, overfishing means that 50% of the world's fisheries are no longer sustainable. Be sure to choose sustainably caught or farmed fish. Organizations such as the World Wildlife Foundation and the Marine Stewardship Council offer great guides to help you choose which fish you should eat.",
                "scores": {
                    "Environment": -1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 1,
                    "Climate": 2
                },
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Elias)[0][2].icon,
                outcomeDesc: "Sustainable fishing",
                outcomeType: OutcomeType.Environment,
                link: "https://greenbrownblue.kinsta.cloud/food-and-environment-explained/seafood-climate-change/"              
            },
            {
                "outcome": "Karelian Pies are a traditional dish from Finland. These are commonly served for lunch. Did you know that Finland is the first country in the world to serve a free, healthy school lunch to every student?",
                "scores": {
                    "Environment": 1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Elias)[0][3].icon,
                outcomeDesc: "Traditional ",
                outcomeType: OutcomeType.Culture,
                link: "https://greenbrownblue.kinsta.cloud/food-and-culture-explained/traditional-nordic-cuisine/"               
            }
        ],
        [NordicQuestions.Lunch1Drinks]: [
            // easter eggs
            {
                "outcome": "Rice is the nutritious staple crop for more than half of the world's people, but growing rice produces methane, a greenhouse gas more than 30 times as potent as carbon dioxide.",
                "scores": {
                    "Environment": -1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 1,
                    "Climate": -1
                },
            },
            {
                "outcome": "Subsituting the meat in bolognese with vegetables can be a great way to reduce your consumption of meat. Try adding mushrooms for texture and flavor.",
                "scores": {
                    "Environment": 1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 1,
                    "Climate": 2
                },
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Elias)[1][1].icon,
                outcomeDesc: "Dairy",
                outcomeType: OutcomeType.Climate,
                link: ""               
            },
            {
                "outcome": "Fatty fish is important source of healthy fats. However, overfishing means that 50% of the world's fisheries are no longer sustainable. Be sure to choose sustainably caught or farmed fish. Organizations such as the World Wildlife Foundation and the Marine Stewardship Council offer great guides to help you choose which fish you should eat.",
                "scores": {
                    "Environment": -1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 1,
                    "Climate": 2
                },
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Elias)[1][2].icon,
                outcomeDesc: "Drinking Water",
                outcomeType: OutcomeType.Environment,
                link: ""               
            },
            {
                "outcome": "Karelian Pies are a traditional dish from Finland. These are commonly served for lunch. Did you know that Finland is the first country in the world to serve a free, healthy school lunch to every student?",
                "scores": {
                    "Environment": 1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Elias)[1][3].icon,
                outcomeDesc: "Drinking Water",
                outcomeType: OutcomeType.Environment,
                link: ""                              
            }
        ],        
        [NordicQuestions.Dinner1]: [
            {
                "outcome": "The production of beef cattle is associated with some of the highest environmental and climate impacts associated with any food. On top of this, processed foods like fast-food hamburgers and soda are associated with obesity, diabetes and other lifestyle diseases.",
                "scores": {
                    "Environment": -2,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": -2
                },
                icon: YesNoSocialData.getQuestions(Region.Nordics, NordicCharacters.Elias)[0].icon,
                outcomeDesc: "Fast Food",
                outcomeType: OutcomeType.Healthcare,
                link: "https://greenbrownblue.kinsta.cloud/food-and-healthcare-explained/obesity-fast-food/"              
            }
        ],
        [NordicQuestions.Dinner2]: [
            {
                "outcome": "REKO is a food network (ring) where local, organic producers and consumers connect to sell and buy food. REKO was founded in Finland, but has now spread to Denmark, Sweden and Norway.",
                "scores": {
                    "Environment": 2,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: YesNoSocialData.getQuestions(Region.Nordics, NordicCharacters.Elias)[1].icon,
                outcomeDesc: "Pesticides",
                outcomeType: OutcomeType.Environment,
                link: "https://greenbrownblue.kinsta.cloud/food-and-environment-explained/organic-foods/"               
            }
        ],
        [NordicQuestions.Dinner3]: [
            {
                "outcome": "Pancakes as a special treat for dinner every now and then are fine, but a better meal should consist of vegetables. Try savory crëpes with a mushroom and spinach filling instead",
                "scores": {
                    "Environment": 1,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 2,
                    "Climate": 0
                },
                icon: YesNoSocialData.getQuestions(Region.Nordics, NordicCharacters.Elias)[2].icon,
                outcomeDesc: "fruits and vegetables",
                outcomeType: OutcomeType.Health,
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/vegetables-fruits/"               
            }
        ],
        [NordicQuestions.Dinner4]: [
            {
                "outcome": "Some of the most highly processed foods found in the freezer aisle are often pre-made meals including frozen pizza and microwaveable dinners. Processed foods are high in unhealthy fats, sugar and sodium. Skip the frozen pizza and turn the cabbage salad side dish into a main course by adding some more ingredients.",
                "scores": {
                    "Environment": -1,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 0,
                    "Climate": -1
                },
                icon: YesNoSocialData.getQuestions(Region.Nordics, NordicCharacters.Elias)[3].icon,
                outcomeDesc: "processed foods",
                outcomeType: OutcomeType.Health,
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/minimally-processed-vs-processed/"               
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
                icon: NordicsEliasPlateData.getItems()[0][0].foodInfo.content,
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
                icon: NordicsEliasPlateData.getItems()[0][1].foodInfo.content,
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
                icon: NordicsEliasPlateData.getItems()[0][2].foodInfo.content,
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
                icon: NordicsEliasPlateData.getItems()[0][3].foodInfo.content,
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
                icon: NordicsEliasPlateData.getItems()[1][0].foodInfo.content,
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
                icon: NordicsEliasPlateData.getItems()[1][1].foodInfo.content,
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
                icon: NordicsEliasPlateData.getItems()[1][2].foodInfo.content,
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
                icon: NordicsEliasPlateData.getItems()[1][3].foodInfo.content,
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
                icon: NordicsEliasPlateData.getItems()[2][0].foodInfo.content,
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
                icon: NordicsEliasPlateData.getItems()[2][1].foodInfo.content,
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
                icon: NordicsEliasPlateData.getItems()[2][2].foodInfo.content,
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
                icon: NordicsEliasPlateData.getItems()[2][3].foodInfo.content,
                outcomeDesc: "Food diversity",
                outcomeType: OutcomeType.Health,
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/diverse-diets/"              
            }
        ]
    };
}

export class NordicsEliasScoreData {
    public static get() {
        return Private.scores;
    }
}
