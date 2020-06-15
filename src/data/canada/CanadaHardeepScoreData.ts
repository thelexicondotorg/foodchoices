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
                "outcome": "Bacon and eggs are both animal-source foods, which makes them among the greatest contributors to greenhouse gas emissions.",
                "scores": {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": 1,
                    "Climate": -2
                },
                icon: TimeData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[0].icon
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
                icon: TimeData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[1].icon
            },
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
                icon: TimeData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[3].icon
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
                icon: MCQData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[0][0].icon
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
                icon: MCQData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[0][1].icon
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
                icon: MCQData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[0][2].icon
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
                icon: MCQData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[0][3].icon
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
                icon: MCQData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[1][0].icon
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
                icon: MCQData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[1][1].icon
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
                icon: MCQData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[1][2].icon
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
                icon: MCQData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[1][3].icon
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
                icon: LunchData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[0][0].icon
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
                icon: LunchData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[0][1].icon
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
                icon: LunchData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[0][2].icon
            },
            {
                "outcome": "Hardeep doesn't usually have the groceries to make up a healthy lunch.",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 1,
                    "Climate": 2
                },
                icon: LunchData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[0][3].icon
            }
        ],
        [CanadaQuestions.Lunch2]: CanadaSylviaScoreData.get()[CanadaQuestions.Lunch2],
        [CanadaQuestions.Groceries]: [
            {
                "outcome": "Community-supported agriculture is increasingly being used to link producers (farmers) to consumers (you!). This type of shopping will decrease the environmental and climate impact of fresh food purchases. Check out CSA efforts in your area!",
                "scores": {
                    "Environment": -1,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 0,
                    "Climate": -1
                },
                icon: SliderData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[0].icon
            },
            {
                "outcome": "Hardeep doesn't know where the local farmer's market is! ",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: SliderData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[1].icon
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
                icon: SliderData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[2].icon
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
                icon: SliderData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[3].icon
            }
        ],
        [CanadaQuestions.Dinner1]: [
            {
                "outcome": "In most developed countries, ultra-processed and packaged foods make up more than 50% of the typical diet - and are associated with lower diet quality and increased health risks compared to diets that are higher in whole foods.",
                "scores": {
                    "Environment": -1,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 0,
                    "Climate": -1
                },
                icon: YesNoSocialData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[0].icon
            }
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
                icon: YesNoSocialData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[1].icon
            }
        ],
        [CanadaQuestions.Dinner3]: [
            {
                "outcome": "Eating in front of a screen may discourage social interaction and mindful eating, and can also lead to overindulging, which contributes to obesity.",
                "scores": {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": -2
                },
                icon: YesNoSocialData.getQuestions(Region.Canada, CanadaCharacters.Hardeep)[2].icon
            }
        ],
        [CanadaQuestions.DinnerProtein]: [
            {
                "outcome": "While often consumed as a part of vegetarian eating patterns and a good source of protein, eggs are still an animal-source food with a higher climate impact that plant-based proteins!",
                "scores": {
                    "Environment": -1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 2,
                    "Climate": -1
                },
                icon: CanadaHardeepPlateData.getItems()[0][0].foodInfo.content
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
                icon: CanadaHardeepPlateData.getItems()[0][1].foodInfo.content
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
                icon: CanadaHardeepPlateData.getItems()[0][2].foodInfo.content
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
                icon: CanadaHardeepPlateData.getItems()[0][3].foodInfo.content
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
                icon: CanadaHardeepPlateData.getItems()[1][0].foodInfo.content
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
                icon: CanadaHardeepPlateData.getItems()[1][1].foodInfo.content
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
                icon: CanadaHardeepPlateData.getItems()[1][2].foodInfo.content
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
                icon: CanadaHardeepPlateData.getItems()[1][3].foodInfo.content
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
                icon: CanadaHardeepPlateData.getItems()[2][0].foodInfo.content
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
                icon: CanadaHardeepPlateData.getItems()[2][1].foodInfo.content
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
                icon: CanadaHardeepPlateData.getItems()[2][2].foodInfo.content
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
                icon: CanadaHardeepPlateData.getItems()[2][3].foodInfo.content
            }
        ]
    };
}

export class CanadaHardeepScoreData {
    public static get() {
        return Private.scores;
    }
}
