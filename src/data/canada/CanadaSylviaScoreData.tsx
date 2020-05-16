import * as React from "react";

import { IScoreData, Region, CanadaCharacters, OutcomeType } from "../../Types";
import { CanadaQuestions } from "../../score/ScoreTypes";
import { TimeData } from "../TimeData";
import { MCQData } from "../MCQData";
import { LunchData } from "../LunchData";
import { SliderData } from "../SliderData";
import { YesNoSocialData } from "../YesNoSocialData";
import { PlateDataCanada } from "./PlateDataCanada";

// tslint:disable:object-literal-key-quotes max-line-length
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
                icon: TimeData.getQuestions(Region.Canada, CanadaCharacters.Sylvia)[0].icon,
                outcomeType: OutcomeType.Climate,
                outcomeDesc: "Green House Gas"                
            },
            {
                scores: {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": 1,
                    "Climate": -2
                }
            },
            {
                "outcome": "Homemade porridge is high in fibre and protein and can be a healthier alternative to processed, sugary breakfast cereals",
                "scores": {
                    "Environment": 1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 1
                },
                icon: TimeData.getQuestions(Region.Canada, CanadaCharacters.Sylvia)[2].icon,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Oats"
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
                icon: TimeData.getQuestions(Region.Canada, CanadaCharacters.Sylvia)[3].icon,
                outcomeType: OutcomeType.Environment,
                outcomeDesc: "Coffee Deforestation"
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
                icon: MCQData.getQuestions(Region.Canada, CanadaCharacters.Sylvia)[0][0].icon,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Portion Size"
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
                icon: MCQData.getQuestions(Region.Canada, CanadaCharacters.Sylvia)[0][1].icon,
                outcomeType: OutcomeType.Climate,
                outcomeDesc: "Dairies"
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
                icon: MCQData.getQuestions(Region.Canada, CanadaCharacters.Sylvia)[0][2].icon,
                outcomeType: OutcomeType.Environment,
                outcomeDesc: "Pesticides"
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
                icon: MCQData.getQuestions(Region.Canada, CanadaCharacters.Sylvia)[0][3].icon,
                outcomeType: OutcomeType.Climate,
                outcomeDesc: "Food miles"
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
                icon: MCQData.getQuestions(Region.Canada, CanadaCharacters.Sylvia)[1][0].icon,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Diet and Type II Diabetes"
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
                icon: MCQData.getQuestions(Region.Canada, CanadaCharacters.Sylvia)[1][1].icon,
                outcomeType: OutcomeType.Environment,
                outcomeDesc: "Single-Use Plastic Bottles"
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
                icon: MCQData.getQuestions(Region.Canada, CanadaCharacters.Sylvia)[1][2].icon,
                outcomeType: OutcomeType.Environment,
                outcomeDesc: "Drinking Tap Water"
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
                icon: MCQData.getQuestions(Region.Canada, CanadaCharacters.Sylvia)[1][3].icon,
                outcomeType: OutcomeType.Environment,
                outcomeDesc: "Water Usage and Consumer Waste"
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
                icon: LunchData.getQuestions(Region.Canada, CanadaCharacters.Sylvia)[0][0].icon,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Diet and Obesity"
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
                icon: LunchData.getQuestions(Region.Canada, CanadaCharacters.Sylvia)[0][1].icon,
                outcomeType: OutcomeType.Healthcare,
                outcomeDesc: "Whole grains and diabetes"
            },
            {
                scores: {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": 1,
                    "Climate": -2
                }
            },
            {
                "outcome": "This meal is in line with Canada's Food Guide's recommendation to eat more plant-based proteins, vegetables and whole grains.",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 1,
                    "Climate": 2
                },
                icon: LunchData.getQuestions(Region.Canada, CanadaCharacters.Sylvia)[0][3].icon,
                outcomeType: OutcomeType.Healthcare,
                outcomeDesc: "Canada's Dietary Guidelines"
            }
        ],
        [CanadaQuestions.Lunch2]: [
            {
                "outcome": "There is some evidence that taking breaks at work to socialize and relax has mental health benefits, and may contribute to mindful eating practices",
                "scores": {
                    "Environment": 0,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 1,
                    "Climate": 0
                }
            },
            {
                "outcome": "There is some evidence that taking breaks at work to socialize and relax has mental health benefits, and may contribute to mindful eating practices",
                "scores": {
                    "Environment": 0,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 2,
                    "Climate": 0
                }
            },
            {
                "outcome": "Taking time to eat with others can help support mindful eating habits, and help you to recognize your body's cues that you are hungry or full.",
                "scores": {
                    "Environment": 0,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 0,
                    "Climate": 0
                }
            },
            {
                "outcome": "Eating regular meals can help with blood sugar regulation, and can help from overeating at your next meal",
                "scores": {
                    "Environment": 0,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": 0
                }
            }
        ],
        [CanadaQuestions.Groceries]: [
            {
                scores: {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": 1,
                    "Climate": -2
                }
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
                icon: SliderData.getQuestions(Region.Canada, CanadaCharacters.Sylvia)[1].icon,
                outcomeType: OutcomeType.Culture,
                outcomeDesc: "Community Supported Agriculture"
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
                icon: SliderData.getQuestions(Region.Canada, CanadaCharacters.Sylvia)[2].icon,
                outcomeType: OutcomeType.Culture,
                outcomeDesc: "Food Insecurity"
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
                icon: SliderData.getQuestions(Region.Canada, CanadaCharacters.Sylvia)[3].icon,
                outcomeType: OutcomeType.Healthcare,
                outcomeDesc: "Food Insecurity and Health Outcomesk"
            }
        ],
        [CanadaQuestions.Dinner1]: [
            {
                "outcome": "In most developed countries, ultra-processed and packaged foods make up more than 50% of the typical diet - and are associated with lower diet quality and increased health risks compared to diets that are higher in whole foods.",
                "scores": {
                    "Environment": 1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 1,
                    "Climate": 1
                },
                icon: YesNoSocialData.getQuestions(Region.Canada, CanadaCharacters.Sylvia)[0].icon,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Whole Foods"                
            }
        ],
        [CanadaQuestions.Dinner2]: [
            {
                "outcome": "On any given day, more than one-third of Americans consume fast food, which is typically higher in calories, salt and fat than the same meal prepared at home from real, whole ingredients.",
                "scores": {
                    "Environment": 0,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 2,
                    "Climate": 0
                },
                icon: YesNoSocialData.getQuestions(Region.Canada, CanadaCharacters.Sylvia)[1].icon,
                outcomeType: OutcomeType.Culture,
                outcomeDesc: "Cooking Skills"                
            }
        ],
        [CanadaQuestions.Dinner3]: [
            {
                "outcome": "Eating together as a family can help everyone make healthier food choices and learn about food traditions.",
                "scores": {
                    "Environment": 0,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 2,
                    "Climate": 0
                },
                icon: YesNoSocialData.getQuestions(Region.Canada, CanadaCharacters.Sylvia)[2].icon,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Eating as a Family"
            }
        ],
        [CanadaQuestions.DinnerProtein]: [
            {
                "outcome": "Greater consumption of ultra-processed foods is linked with weight gain, poorer diet quality, and overall health. Eating whole, unprocessed foods with fewer additives is an important part of a healthy diet.",
                "scores": {
                    "Environment": -2,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": -2,
                    "Climate": -1
                },
                icon: PlateDataCanada.getItems()[0][0].foodInfo.content,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Minimally Processed Foods"
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
                icon: PlateDataCanada.getItems()[0][1].foodInfo.content,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Plant-based Diet"
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
                icon: PlateDataCanada.getItems()[0][2].foodInfo.content,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Plant-based Diet"
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
                icon: PlateDataCanada.getItems()[0][3].foodInfo.content,
                outcomeType: OutcomeType.Environment,
                outcomeDesc: "Grass-fed Beef"
            },
            {
                "outcome": "Ruminant meats like grain-fed cattle produce the highest levels of greenhouse gas emissions, with more than 10-times the impact of chicken, eggs or fish",
                "scores": {
                    "Environment": -2,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 2,
                    "Climate": -2
                },
                icon: PlateDataCanada.getItems()[0][4].foodInfo.content,
                outcomeType: OutcomeType.Climate,
                outcomeDesc: "Beef"
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
                icon: PlateDataCanada.getItems()[1][0].foodInfo.content,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Brown vs. White Rice"
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
                icon: PlateDataCanada.getItems()[1][1].foodInfo.content,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Brown vs. White Rice"
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
                icon: PlateDataCanada.getItems()[1][2].foodInfo.content,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Ultra-processed Food"
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
                icon: PlateDataCanada.getItems()[1][3].foodInfo.content,
                outcomeType: OutcomeType.Culture,
                outcomeDesc: "Indigenous Foods"
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
                icon: PlateDataCanada.getItems()[2][0].foodInfo.content,
                outcomeType: OutcomeType.Environment,
                outcomeDesc: "Single-Use Plastics"
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
                icon: PlateDataCanada.getItems()[2][1].foodInfo.content,
                outcomeType: OutcomeType.Environment,
                outcomeDesc: "Palm Oil"
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
                icon: PlateDataCanada.getItems()[2][2].foodInfo.content,
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
                icon: PlateDataCanada.getItems()[2][3].foodInfo.content,
                outcomeType: OutcomeType.Climate,
                outcomeDesc: "Carbon Footprint"
            }
        ]
    };
}

export class CanadaSylviaScoreData {
    public static get() {
        return Private.scores;
    }
}
