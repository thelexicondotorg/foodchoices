import { IScoreData, Region, CanadaCharacters, NordicCharacters } from "../../Types";
import { NordicQuestions } from "../../score/ScoreTypes";
import { TimeData } from "../TimeData";
import { MCQData } from "../MCQData";
import { LunchData } from "../LunchData";
import { SliderData } from "../SliderData";
import { YesNoSocialData } from "../YesNoSocialData";
import { PlateDataNordics } from "./PlateDataNordics";

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
                icon: TimeData.getQuestions(Region.Nordics, NordicCharacters.Elias)[0].icon
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
                icon: TimeData.getQuestions(Region.Nordics, NordicCharacters.Elias)[1].icon
            },
            {
                "outcome": "His parents don't allow him to have chocolate milk as it contains too much sugar",
                "scores": {
                    "Environment": 0,
                    "Health": -2,
                    "Healthcare": 0,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: TimeData.getQuestions(Region.Nordics, NordicCharacters.Elias)[2].icon
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
                icon: TimeData.getQuestions(Region.Nordics, NordicCharacters.Elias)[3].icon
            }
        ],
        // Missing in the Outcomes document
        // [NordicQuestions.Snacks1]: [
        //     {
        //         "outcome": "Ultra-processed potato chips, which are typically high in calories, fat and sodium, are considered 'other foods' thatshould be eaten less often and in smaller amounts.",
        //         "scores": {
        //             "Environment": -1,
        //             "Health": -2,
        //             "Healthcare": -2,
        //             "Culture": -2,
        //             "Climate": 0
        //         },
        //         icon: MCQData.getQuestions(Region.Nordics, NordicCharacters.Elias)[0][0].icon
        //     },
        //     {
        //         "outcome": "While an excellent source of calcium, the animal-source dairy in a yogurt and granola parfait make this snack a less climate-friendly choice",
        //         "scores": {
        //             "Environment": 0,
        //             "Health": 1,
        //             "Healthcare": 0,
        //             "Culture": 1,
        //             "Climate": -1
        //         },
        //         icon: MCQData.getQuestions(Region.Nordics, NordicCharacters.Elias)[0][1].icon
        //     },
        //     {
        //         "outcome": "Local food usually, but not always, has less impact on greenhouse gas emissions. Get to know the farmers in your area and learn more about the types of farming they support!",
        //         "scores": {
        //             "Environment": 2,
        //             "Health": 2,
        //             "Healthcare": 0,
        //             "Culture": 2,
        //             "Climate": 0
        //         },
        //         icon: MCQData.getQuestions(Region.Nordics, NordicCharacters.Elias)[0][2].icon
        //     },
        //     {
        //         "outcome": "While not the largest contributor to greenhouse gas emissions, the 'food miles' on imported foods contributes upwards of 10% of the overall greenhouse gas emissions produced by foods. Buy local!",
        //         "scores": {
        //             "Environment": 1,
        //             "Health": 2,
        //             "Healthcare": 2,
        //             "Culture": 1,
        //             "Climate": 0
        //         },
        //         icon: MCQData.getQuestions(Region.Nordics, NordicCharacters.Elias)[0][3].icon
        //     }
        // ],
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
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Elias)[0][0].icon
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
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Elias)[0][1].icon
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
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Elias)[0][2].icon
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
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Elias)[0][3].icon
            }
        ],
        // Removed from game
        /*[NordicQuestions.Lunch2]: [
            {
                "outcome": "Only water and milk are served for school lunch in Elias's school, some schools also serve plant-based milk alternatives. This is a way to help reduce the intak of drinks high in sugars.",
                "scores": {
                    "Environment": 2,
                    "Health": 1,
                    "Healthcare": 0,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Elias)[1][0].icon
            },
            {
                "outcome": "In general, oat milk is one of the most envrionmentally-friendly plant-based milks. Oats require less land and water and produce fewer green-house gases than rice or dairy milk.",
                "scores": {
                    "Environment": 0,
                    "Health": -1,
                    "Healthcare": 0,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Elias)[1][1].icon
            },
            {
                "outcome": "According to the Nordic Nutrition Recommendations, the average adult should drink between 1-1.5 L of water per day. Dehydration causes tiredness, dizziness and headaches.",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 0,
                    "Climate": 2
                },
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Elias)[1][2].icon
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
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Elias)[1][3].icon
            }
        ],*/
        // Missing in the document
        /*[NordicQuestions.Groceries]: [
            {
                scores: {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": 1,
                    "Climate": -2
                },
                icon: SliderData.getQuestions(Region.Nordics, NordicCharacters.Elias)[0].icon
            },
            {
                "outcome": "Community-supported agriculture is increasingly being used to link producers (farmers) to consumers (you!). This type of shopping will decrease the environmental and climate impact of fresh food purchases. Check out CSA efforts in your area!",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: SliderData.getQuestions(Region.Nordics, NordicCharacters.Elias)[1].icon
            },
            {
                "outcome": "Food deserts, or areas where there is little access to healthy, unprocessed foods like vegetables, fruits and whole grains, are often found in low-income areas, and have been linked with poorer quality diets.",
                "scores": {
                    "Environment": 0,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": -1,
                    "Climate": -1
                },
                icon: SliderData.getQuestions(Region.Nordics, NordicCharacters.Elias)[2].icon
            },
            {
                "outcome": "1 in 5 Canadians have used a foodbank at some point in their lives, and almost 1 million use them every month, typically because they don't make enough money to cover their expenses. Almost 1/3 of food bank users are children.",
                "scores": {
                    "Environment": -1,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": -2,
                    "Climate": 0
                },
                icon: SliderData.getQuestions(Region.Nordics, NordicCharacters.Elias)[3].icon
            }
        ],*/
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
                icon: YesNoSocialData.getQuestions(Region.Nordics, NordicCharacters.Elias)[0].icon
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
                icon: YesNoSocialData.getQuestions(Region.Nordics, NordicCharacters.Elias)[1].icon
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
                icon: YesNoSocialData.getQuestions(Region.Nordics, NordicCharacters.Elias)[2].icon
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
                icon: YesNoSocialData.getQuestions(Region.Nordics, NordicCharacters.Elias)[3].icon
            }
        ],
        // Missing in the document
        /*[NordicQuestions.DinnerProtein]: [
            {
                "outcome": "Greater consumption of ultra-processed foods is linked with weight gain, poorer diet quality, and overall health. Eating whole, unprocessed foods with fewer additives is an important part of a healthy diet.",
                "scores": {
                    "Environment": -2,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": -2,
                    "Climate": -1
                },
                icon: PlateDataNordics.getItems()[0][0].foodInfo.content
            },
            {
                "outcome": "The Nordic Nutrition Recommendations recommends plant-based proteins like beans and lentils as alternatives to animal-source proteins. These choices have benefits for health, the environment and the climate.",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: PlateDataNordics.getItems()[0][1].foodInfo.content
            },
            {
                "outcome": "Tofu is often used as a dairy-free alternative to animal-source proteins like beef, chicken and fish.",
                "scores": {
                    "Environment": 0,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: PlateDataNordics.getItems()[0][2].foodInfo.content
            },
            {
                "outcome": "While grass-fed beef can have a smaller climate impact than conventionally-raised grain fed beef, it depends on how the grasslands are managed. Grass-fed beef still has a higher climate impact than plant-based proteins.",
                "scores": {
                    "Environment": -1,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 2,
                    "Climate": -1
                },
                icon: PlateDataNordics.getItems()[0][3].foodInfo.content
            }
        ],
        [NordicQuestions.DinnerGrains]: [
            {
                "outcome": "Rice is the world's most widely consumed staple food. White and brown rice are the same grain, but the most nutritious parts (the bran and germ) are removed from white rice. Try brown rice for a higher fibre grain!",
                "scores": {
                    "Environment": 1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 2,
                    "Climate": 1
                },
                icon: PlateDataNordics.getItems()[1][0].foodInfo.content
            },
            {
                "outcome": "Rice is the world's most widely consumed staple food. White and brown rice are the same grain, but the most nutritious parts (the bran and germ) are removed from white rice. Try brown rice for a higher fibre grain!",
                "scores": {
                    "Environment": 0,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: PlateDataNordics.getItems()[1][1].foodInfo.content
            },
            {
                "outcome": "Ultra-processed rice dishes are often high in sodium. Check the nutrition label of products to help you identify healthier options!",
                "scores": {
                    "Environment": -1,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": -2,
                    "Climate": -1
                },
                icon: PlateDataNordics.getItems()[1][2].foodInfo.content
            },
            {
                "outcome": "Wild rice is actually a species of grass that is native to North America. With more fibre than brown rice, it is a healthy whole-grain alternative!",
                "scores": {
                    "Environment": 0,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 0
                },
                icon: PlateDataNordics.getItems()[1][3].foodInfo.content
            }
        ],
        [NordicQuestions.DinnerVeggies]: [
            {
                "outcome": "Salad kits often come in non-recyclable packaging and have high levels of waste along the supply chain. If a salad kit is your only option, skip fat- and salt-laden creamy dressings and toss with oil and vinegar.",
                "scores": {
                    "Environment": -1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 1,
                    "Climate": -1
                },
                icon: PlateDataNordics.getItems()[2][0].foodInfo.content
            },
            {
                "outcome": "Pre-packaged french fries are often made from palm oil, which is harmful to health and the environment.",
                "scores": {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -1,
                    "Climate": -1
                },
                icon: PlateDataNordics.getItems()[2][1].foodInfo.content
            },
            {
                "outcome": "Only one-quarter of Canadians eat the recommended amount of fruits and vegetables, and leafy green consumption makes up only a small part despite its many nutritional benefits. Look for exciting types of dark greens varieties like spinach, kale, and arugula!",
                "scores": {
                    "Environment": 1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: PlateDataNordics.getItems()[2][2].foodInfo.content
            },
            {
                "outcome": "Cheese has a relatively large carbon footprint, as it usually comes from dairy milk which has all the same climate challenges as eating beef. Decreasing animal-source foods overall (not just meat but dairy and eggs too!) is likely to have a greater overall impact than vegetarian diets that eat milk and eggs!",
                "scores": {
                    "Environment": 1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 2,
                    "Climate": 0
                },
                icon: PlateDataNordics.getItems()[2][3].foodInfo.content
            }
        ]*/
    };
}

export class NordicsEliasScoreData {
    public static get() {
        return Private.scores;
    }
}
