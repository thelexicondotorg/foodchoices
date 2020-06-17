import { IScoreData, Region, CanadaCharacters, OutcomeType } from "../../Types";
import { CanadaQuestions } from "../../score/ScoreTypes";
import { TimeData } from "../TimeData";
import { MCQData } from "../MCQData";
import { LunchData } from "../LunchData";
import { SliderData } from "../SliderData";
import { YesNoSocialData } from "../YesNoSocialData";
import { CanadaHardeepPlateData } from "./CanadaHardeepPlateData";
import { CanadaSylviaScoreData } from "./CanadaSylviaScoreData";

// tslint:disable:object-literal-key-quotes
namespace Private {
    export const scores: {
        [questionId: string]: IScoreData[]
    } = {
        [CanadaQuestions.Breakfast]: [
            {
                "outcome": "Eggs are animal-sourced foods. They don't contribute to greenhouse gas emissions as much as most meats, but they still do contribute.",
                "scores": {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": 1,
                    "Climate": -2
                },
                icon: TimeData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[0].icon,
                outcomeDesc: "Carbon Footprint",
                outcomeType: OutcomeType.Climate,
                link: "https://www.greenbrownblue.com/food-and-climate-explained/carbon-footprint/"
            },
            {
                "outcome": "The World Health Organization suggests that you limit your intake of 'free sugars' (any sugar that is added to foods, like table sugar, honey, or fruit juice) to no more than 12 teaspoons per day. A bowl of sugary cereal usually contains around 2-3 teaspoons!",
                "scores": {
                    "Environment": 2,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": -1,
                    "Climate": 0
                },
                icon: TimeData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[1].icon,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Sugar",
                link: "https://www.greenbrownblue.com/food-and-health-explained/sugar/"
            },
            // Easter egg
            {
                "outcome": "Hardeep doesn't know how to make porridge from scratch, and doesn't have the ingredients!",
                "scores": {
                    "Environment": 1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 1
                },
                icon: TimeData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[2].icon
            },
            {
                "outcome": "Historically, coffee production has been associated with deforestation and poor working conditions for coffee growers. Make sure your coffee is sustainably produced!",
                "scores": {
                    "Environment": -1,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": -2,
                    "Climate": -1
                },
                icon: TimeData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[3].icon,
                outcomeDesc: "Coffee and Deforestation",
                outcomeType: OutcomeType.Environment,
                link: "https://www.greenbrownblue.com/food-and-environment-explained/coffee-impact/"
            }
        ],
        [CanadaQuestions.Snacks1]: [
            {
                "outcome": "Ultra-processed potato chips, which are typically high in calories, fat and sodium, are considered 'other foods' thatshould be eaten less often and in smaller amounts.",
                "scores": {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": 0
                },
                icon: MCQData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[0][0].icon,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Food processing",
                link: "https://www.greenbrownblue.com/food-and-health-explained/minimally-processed-vs-processed/"
            },
            {
                "outcome": "While an excellent source of calcium, the animal-source dairy in a yogurt and granola parfait make this snack a less climate-friendly choice",
                "scores": {
                    "Environment": 0,
                    "Health": 1,
                    "Healthcare": 0,
                    "Culture": 1,
                    "Climate": -1
                },
                icon: MCQData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[0][1].icon,
                outcomeDesc: "Dairy products",
                outcomeType: OutcomeType.Climate,
                link: "https://www.greenbrownblue.com/food-and-climate-explained/dairy-climate/"
            },
            {
                "outcome": "Local food usually, but not always, has less impact on greenhouse gas emissions. Get to know the farmers in your area and learn more about the types of farming they support!",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 0,
                    "Culture": 2,
                    "Climate": 0
                },
                icon: MCQData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[0][2].icon,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Pesticides",
                link: "https://www.greenbrownblue.com/food-and-health-explained/organic-vs-conventional/"
            },
            {
                "outcome": "While not the largest contributor to greenhouse gas emissions, the 'food miles' on imported foods contributes upwards of 10% of the overall greenhouse gas emissions produced by foods. Buy local!",
                "scores": {
                    "Environment": 1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: MCQData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[0][3].icon,
                outcomeDesc: "Local Food",
                outcomeType: OutcomeType.Climate
            }
        ],
        [CanadaQuestions.Snacks2]: [
            {
                "outcome": "Sugary sodas are among the largest contributors to sugar intake in many countries globally, and higher consumption is associated with type 2 diabetes, weight gain, and tooth decay.",
                "scores": {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": -1
                },
                icon: MCQData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[1][0].icon,
                outcomeType: OutcomeType.Healthcare,
                outcomeDesc: "Sugar",
                link: "https://www.greenbrownblue.com/food-and-health-explained/drink-less-soda/"
            },
            {
                "outcome": "Most plastic water bottles are made from polyethylene terephthalate, which is comprised of non-renewable fossil fuels. Each year in the US alone, 38 billion water bottles end up in landfills. Reach for a reusable water bottle!",
                "scores": {
                    "Environment": -1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 1,
                    "Climate": -2
                },
                icon: MCQData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[1][1].icon,
                outcomeDesc: "Single-Use Plastices",
                outcomeType: OutcomeType.Environment,
                link: "https://www.greenbrownblue.com/food-and-environment-explained/plastic-waste/"
            },
            {
                "outcome": "A glass of tap water is many times less expensive than bottled water, not to mention having vastly fewer environmental and climate impacts.",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: MCQData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[1][2].icon,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Drinking Water",
                link: "https://www.greenbrownblue.com/food-and-environment-explained/safe-drinking-water/"
            },
            {
                "outcome": "More than 200L of water are used to prepare a latte, not to mention the environmental impact of 'to-go' cups that are thrown in the garbage every day.",
                "scores": {
                    "Environment": -2,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 0,
                    "Climate": -2
                },
                icon: MCQData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[1][3].icon,
                outcomeDesc: "Water usage",
                outcomeType: OutcomeType.Environment,
                link: "https://www.greenbrownblue.com/food-and-environment-explained/water-food-production/"
            }
        ],
        [CanadaQuestions.Lunch1]: [
            {
                "outcome": "Consuming food from restaurants and fast food outlets is linked with higher intakes of calories and sodium and negative health outcomes like weight gain.",
                "scores": {
                    "Environment": -2,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": -2
                },
                icon: LunchData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[0][0].icon,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Fast Food",
                link: "https://www.greenbrownblue.com/food-and-health-explained/eating-fast-food/"
            },
            {
                "outcome": "Whole grains typically have more fibre than refined grains like white flour, and may lower your risk of cardiovascular disease, type 2 diabetes, and some types of cancer.",
                "scores": {
                    "Environment": -2,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": -2,
                    "Climate": 0
                },
                icon: LunchData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[0][1].icon,
                outcomeDesc: "Retail environments",
                outcomeType: OutcomeType.Culture,
                link: "https://www.greenbrownblue.com/food-and-culture-explained/food-retail/"
            },
            {
                "outcome": "Ordering food from an app is increasingly common - but the environmental impact of all the packaging adds up. Look for companies that offer sustainable packaging solutions!",
                "scores": {
                    "Environment": -1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 1,
                    "Climate": -1
                },
                icon: LunchData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[0][2].icon,
                outcomeType: OutcomeType.Climate,
                outcomeDesc: "Processed Foods",
                link: "https://www.greenbrownblue.com/food-and-climate-explained/food-processing-climate/"
            },
            // Easter egg
            {
                "outcome": "Hardeep doesn't usually have the groceries to make up a healthy lunch.",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 1,
                    "Climate": 2
                }
            }
        ],
        // Stacking
        [CanadaQuestions.Lunch2]: CanadaSylviaScoreData.get()[CanadaQuestions.Lunch2],
        [CanadaQuestions.Groceries]: [
            // easter egg
            {
                "outcome": "Hardeep doesn't know where the local farmer's market is! ",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
            },
            {
                "outcome": "Grocery stores can increase access to healthy, fresh foods in grocery stores - but also increase access to less healthy foods.",
                "scores": {
                    "Environment": -1,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 0,
                    "Climate": -1
                },
                icon: SliderData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[1].icon,
                outcomeDesc: "Supermarket access",
                outcomeType: OutcomeType.Culture,
                link: "https://www.greenbrownblue.com/food-and-culture-explained/grocery-stores-better-diets/"
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
                icon: SliderData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[2].icon,
                outcomeDesc: "Food Access",
                outcomeType: OutcomeType.Culture,
                link: "https://www.greenbrownblue.com/food-and-healthcare-explained/food-security/"
            },
            {
                "outcome": "Consuming food from restaurants and fast food outlets is linked with higher intakes of calories and sodium and negative health outcomes like weight gain.",
                "scores": {
                    "Environment": -2,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": 0
                },
                icon: SliderData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[3].icon,
                outcomeDesc: "Fast food",
                outcomeType: OutcomeType.Culture,
                link: "https://www.greenbrownblue.com/food-and-culture-explained/foodservice-sector/"
            }
        ],
        [CanadaQuestions.Dinner1]: [
            {
                // Easter egg
                "outcome": "In most developed countries, ultra-processed and packaged foods make up more than 50% of the typical diet - and are associated with lower diet quality and increased health risks compared to diets that are higher in whole foods.",
                "scores": {
                    "Environment": -1,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 2,
                    "Climate": -1
                }
            },
            // No 
            {
                "outcome": "In most developed countries, ultra-processed and packaged foods make up more than 50% of typical diets and are associated with increased health risks compared to diets higher in whole foods.",
                "scores": {
                    "Environment": 1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 1,
                    "Climate": 1
                },
                icon: YesNoSocialData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[0].icon,
                outcomeType: OutcomeType.Culture,
                outcomeDesc: "Food skills",
                link: "https://www.greenbrownblue.com/food-and-culture-explained/fewer-know-how-to-cook/"
            },
        ],
        [CanadaQuestions.Dinner2]: [
            {
                "outcome": "When people eat with others, meals tend to be healthier. Consider inviting others to join in a meal once or twice a week.",
                "scores": {
                    "Environment": 0,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 0
                },
                icon: YesNoSocialData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[1].icon,
                link: "https://www.greenbrownblue.com/food-and-culture-explained/cooking-skills/",
                outcomeDesc: "Cooking skills",
                outcomeType: OutcomeType.Culture
            },
            // No
            {
                "outcome": "When people eat with others, meals tend to be healthier. Consider inviting others to join in a meal once or twice a week.",
                "scores": {
                    "Environment": 0,
                    "Health": -1,
                    "Healthcare": 0,
                    "Culture": -1,
                    "Climate": 1
                },
                icon: YesNoSocialData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[1].icon,
                link: "https://www.greenbrownblue.com/food-and-culture-explained/cooking-skills/",
                outcomeDesc: "Cooking skills",
                outcomeType: OutcomeType.Culture
            }
        ],
        [CanadaQuestions.Dinner3]: [
            {
                "outcome": "Eating in front of a screen may discourage social interaction and mindful eating, and can also lead to overindulging, which contributes to obesity.",
                "scores": {
                    "Environment": 1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 1,
                    "Climate": 1
                },
                icon: YesNoSocialData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[2].icon,
                link: "https://www.greenbrownblue.com/food-and-culture-explained/eating-together-2/",
                outcomeDesc: "Eating with others",
                outcomeType: OutcomeType.Health
            },
            // No
            {
                "outcome": "Eating in front of a screen may discourage social interaction and mindful eating, and can also lead to overindulging, which contributes to obesity.",
                "scores": {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": -2
                },
                icon: YesNoSocialData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[2].icon,
                link: "https://www.greenbrownblue.com/food-and-culture-explained/eating-together-2/",
                outcomeDesc: "Eating with others",
                outcomeType: OutcomeType.Health
            }
        ],
        [CanadaQuestions.DinnerProtein]: [
            {
                "outcome": "Often consumed as a part of a vegetarian diet, eggs are a good source of protein, but as an animal-source food it also comes with a higher climate impact than plant-based proteins!",
                "scores": {
                    "Environment": -1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 2,
                    "Climate": -1
                },
                icon: CanadaHardeepPlateData.getItems()[0][0].foodInfo.content,
                outcomeType: OutcomeType.Climate,
                outcomeDesc: "Eggs",
                link: "https://www.greenbrownblue.com/food-and-environment-explained/egg-environmental-impact/"
            },
            {
                "outcome": "Canada's Food Guide recommends plant-based proteins like beans and lentils as alternatives to animal-source proteins. These choices have benefits for health, the environment and the climate.",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: CanadaHardeepPlateData.getItems()[0][1].foodInfo.content,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Plant-forward diet",
                link: "https://www.greenbrownblue.com/food-and-health-explained/plant-forward-diet/"
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
                icon: CanadaHardeepPlateData.getItems()[0][2].foodInfo.content,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Meat Alternative",
                link: "https://www.greenbrownblue.com/food-and-health-explained/meat-alternatives/"
            },
            {
                "outcome": "Greater consumption of ultra-processed foods is linked with weight gain, poorer diet quality, and overall health. Eating whole, unprocessed foods with fewer additives is an important part of a healthy diet. ",
                "scores": {
                    "Environment": -1,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": -2,
                    "Climate": -1
                },
                icon: CanadaHardeepPlateData.getItems()[0][3].foodInfo.content,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Whole Foods",
                link: "https://www.greenbrownblue.com/food-and-health-explained/whole-foods-meaning/"
            }            
        ],
        [CanadaQuestions.DinnerGrains]: [
            {
                "outcome": "Rice is the world's most widely consumed staple food. White and brown rice are the same grain, but the most nutritious parts (the bran and germ) are removed from white rice. Try brown rice for a higher fibre grain!",
                "scores": {
                    "Environment": 1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 2,
                    "Climate": 1
                },
                icon: CanadaHardeepPlateData.getItems()[1][0].foodInfo.content,
                outcomeDesc: "Brown vs White rice",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/whole-grain-meaning/"
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
                icon: CanadaHardeepPlateData.getItems()[1][1].foodInfo.content,
                outcomeDesc: "Rice and Greenhouse gas",
                outcomeType: OutcomeType.Climate,
                link: "https://www.greenbrownblue.com/food-and-climate-explained/rice-climate-footprint/"
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
                icon: CanadaHardeepPlateData.getItems()[1][2].foodInfo.content,
                outcomeDesc: "Sodium",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/salt/"
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
                icon: CanadaHardeepPlateData.getItems()[1][3].foodInfo.content,
                outcomeDesc: "Indigenous foods",
                outcomeType: OutcomeType.Culture,
                link: "https://www.greenbrownblue.com/food-and-culture-explained/indigenous-food/"
            }
        ],
        [CanadaQuestions.DinnerVeggies]: [
            {
                "outcome": "Salad kits often come in non-recyclable packaging and have high levels of waste along the supply chain. If a salad kit is your only option, skip fat- and salt-laden creamy dressings and toss with oil and vinegar.",
                "scores": {
                    "Environment": -1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 1,
                    "Climate": -1
                },
                icon: CanadaHardeepPlateData.getItems()[2][0].foodInfo.content,
                link: "https://www.greenbrownblue.com/food-and-climate-explained/food-processing-climate/",
                outcomeType: OutcomeType.Climate,
                outcomeDesc: "Processed Foods"
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
                icon: CanadaHardeepPlateData.getItems()[2][1].foodInfo.content,
                link: "https://www.greenbrownblue.com/food-and-environment-explained/palm-oil/",
                outcomeDesc: "Palm-Oil",
                outcomeType: OutcomeType.Environment
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
                icon: CanadaHardeepPlateData.getItems()[2][2].foodInfo.content,
                link: "https://www.greenbrownblue.com/food-and-health-explained/which-vegetables/",
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Leafy Greens"
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
                icon: CanadaHardeepPlateData.getItems()[2][3].foodInfo.content,
                link: "https://www.greenbrownblue.com/food-and-climate-explained/food-ghg/",
                outcomeDesc: "Greenhouse gas",
                outcomeType: OutcomeType.Climate
            }
        ]
    };
}

export class CanadaHardeepScoreData {
    public static get() {
        return Private.scores;
    }
}
