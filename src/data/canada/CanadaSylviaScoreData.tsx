import * as React from "react";

import { IScoreData, Region, CanadaCharacters, OutcomeType } from "../../Types";
import { CanadaQuestions } from "../../score/ScoreTypes";
import { TimeData } from "../TimeData";
import { MCQData } from "../MCQData";
import { LunchData } from "../LunchData";
import { SliderData } from "../SliderData";
import { YesNoSocialData } from "../YesNoSocialData";
import { PlateDataCanada } from "./PlateDataCanada";
import { StackingData } from "../../gamelets/stacking/StackingData";

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
                    "Culture": 2,
                    "Climate": -2
                },
                icon: TimeData.getQuestions(Region.Canada, CanadaCharacters.Sylvia)[0].icon,
                outcomeType: OutcomeType.Climate,
                outcomeDesc: "Carbon Footprint",
                link: "https://www.greenbrownblue.com/food-and-climate-explained/carbon-footprint/"
            },
            // easter egg
            {
                scores: {
                    "Environment": 2,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": -1,
                    "Climate": 0
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
                outcomeDesc: "Blood sugar regulator",
                link: "https://www.greenbrownblue.com/food-and-health-explained/blood-sugar-levels/"
            },
            {
                "outcome": "In some global regions, coffee production has been associated with deforestation and poor working conditions. Make sure your coffee is sustainably produced!",
                "scores": {
                    "Environment": -1,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": -2,
                    "Climate": -1
                },
                icon: TimeData.getQuestions(Region.Canada, CanadaCharacters.Sylvia)[3].icon,
                outcomeType: OutcomeType.Environment,
                outcomeDesc: "Coffee Deforestation",
                link: "https://www.greenbrownblue.com/food-and-environment-explained/coffee-impact/"
            }
        ],
        [CanadaQuestions.Snacks1]: [
            {
                "outcome": "Ultra-processed potato chips are typically high in calories, fat and sodium. Both their portion sizes and the frequency of their consumption should be limited.",
                "scores": {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": 0
                },
                icon: MCQData.getQuestions(Region.Canada, CanadaCharacters.Sylvia)[0][0].icon,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Food processing",
                link: "https://www.greenbrownblue.com/food-and-health-explained/minimally-processed-vs-processed/"
            },
            {
                "outcome": "While yogurt in general is an excellent source of calcium, animal-sourced dairy yogurt might make a less climate-friendly snack choice.",
                "scores": {
                    "Environment": 0,
                    "Health": 1,
                    "Healthcare": 0,
                    "Culture": 1,
                    "Climate": -1
                },
                icon: MCQData.getQuestions(Region.Canada, CanadaCharacters.Sylvia)[0][1].icon,
                outcomeType: OutcomeType.Climate,
                outcomeDesc: "Dairy products",
                link: "https://www.greenbrownblue.com/food-and-climate-explained/dairy-climate/"
            },
            {
                "outcome": "While local food travels less to reach your table, generally resulting in a smaller carbon footprint and economic benefits for a local economy, strawberries are considered one of the 'Dirty Dozen' crops that are sprayed with the most pesticides. To learn more about the benefits of local food, get to know the farmers in your area to discover the types of farming practices they support!",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 0,
                    "Culture": 2,
                    "Climate": 0
                },
                icon: MCQData.getQuestions(Region.Canada, CanadaCharacters.Sylvia)[0][2].icon,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Pesticides",
                link: "https://www.greenbrownblue.com/food-and-health-explained/organic-vs-conventional/"
            },
            {
                "outcome": "While not the largest contributor to greenhouse gas emissions, the 'food miles' on imported foods contributes upwards of 10% of the overall greenhouse gas emissions produced by foods. Buying local might help reduce these emissions.",
                "scores": {
                    "Environment": 1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: MCQData.getQuestions(Region.Canada, CanadaCharacters.Sylvia)[0][3].icon,
                outcomeType: OutcomeType.Climate,
                outcomeDesc: "Local Food",
                link: "https://www.greenbrownblue.com/food-and-climate-explained/buy-local-climate/"
            }
        ],
        [CanadaQuestions.Snacks2]: [
            {
                "outcome": "Soft drinks often have up to 12 packets of processed sugar in a single can. Over-consumption of these drinks is associated with type 2 diabetes, weight gain, and tooth decay.",
                "scores": {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": -1
                },
                icon: MCQData.getQuestions(Region.Canada, CanadaCharacters.Sylvia)[1][0].icon,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Sugary drinks",
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
                icon: MCQData.getQuestions(Region.Canada, CanadaCharacters.Sylvia)[1][1].icon,
                outcomeType: OutcomeType.Environment,
                outcomeDesc: "Single-Use Plastic Bottles",
                link: "https://www.greenbrownblue.com/food-and-environment-explained/plastic-waste/"
            },
            {
                "outcome": "In many areas where tap water can be safely consumed, it can be many times less expensive than bottled water alternatives, as well as having vastly fewer environmental and climate impacts.",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: MCQData.getQuestions(Region.Canada, CanadaCharacters.Sylvia)[1][2].icon,
                outcomeType: OutcomeType.Environment,
                outcomeDesc: "Drinking Tap Water",
                link: "https://www.greenbrownblue.com/food-and-environment-explained/safe-drinking-water/"
            },
            {
                "outcome": "It takes more than 200L of water to prepare a single caffe latte, not to mention the environmental impact of 'to-go' cups that end up in the garbage.",
                "scores": {
                    "Environment": -2,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 0,
                    "Climate": -2
                },
                icon: MCQData.getQuestions(Region.Canada, CanadaCharacters.Sylvia)[1][3].icon,
                outcomeType: OutcomeType.Environment,
                outcomeDesc: "Water Usage and Consumer Waste",
                link: "https://www.greenbrownblue.com/food-and-environment-explained/water-food-production/"
            }
        ],
        [CanadaQuestions.Lunch1]: [
            {
                "outcome": "A diet high in food consumed at restaurants and fast food outlets has been linked to the increased intake of calories and sodium; both can result in negative health outcomes, including increased weight.",
                "scores": {
                    "Environment": -2,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": -2
                },
                icon: LunchData.getQuestions(Region.Canada, CanadaCharacters.Sylvia)[0][0].icon,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Diet and Obesity",
                link: "https://www.greenbrownblue.com/food-and-health-explained/eating-fast-food/"
            },
            {
                "outcome": "The retail environment in which we live and work can influence our food choices - bringing lunch from home can help!",
                "scores": {
                    "Environment": -2,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": -2,
                    "Climate": 0
                },
                icon: LunchData.getQuestions(Region.Canada, CanadaCharacters.Sylvia)[0][1].icon,
                outcomeType: OutcomeType.Culture,
                outcomeDesc: "Retail environments",
                link: "https://www.greenbrownblue.com/food-and-culture-explained/food-retail/"
            },
            // easter egg
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
                outcomeDesc: "Canada's Dietary Guidelines",
                link: "https://www.greenbrownblue.com/food-and-healthcare-explained/food-guide-canada/"
            }
        ],
        // Stacking
        [CanadaQuestions.Lunch2]: [
            {
                "outcome": "There is some evidence that taking breaks at work to socialize and relax provides an array of mental health benefits, and may even contribute to more mindful eating practices",
                "scores": {
                    "Environment": 0,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: StackingData.getOutcomeIcon(),
                outcomeDesc: "Mindful Eating",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/mindful-eating-healthy-weight/"
            },
            {
                "outcome": "There is some evidence that taking breaks at work to socialize and relax provides an array of mental health benefits, and may even contribute to more mindful eating practices",
                "scores": {
                    "Environment": 0,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 2,
                    "Climate": 0
                },
                icon: StackingData.getOutcomeIcon(),
                outcomeDesc: "Mindful Eating",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/mindful-eating-healthy-weight/"
            },
            {
                "outcome": "Taking time to eat with others can help support mindful eating habits, and help you to recognize your body's cues that you are hungry or full.",
                "scores": {
                    "Environment": 0,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 0,
                    "Climate": 0
                },
                icon: StackingData.getOutcomeIcon(),
                outcomeDesc: "Eating with others",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-culture-explained/brazilians-eat-with-others/"
            },
            {
                "outcome": "Eating regular meals can help with blood sugar regulation, and can help from overeating at your next meal",
                "scores": {
                    "Environment": 0,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": 0
                },
                icon: StackingData.getOutcomeIcon(),
                outcomeDesc: "Busy lifestyles",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-culture-explained/busy-lifestyles-impact/"
            }
        ],
        [CanadaQuestions.Groceries]: [
            {
                "outcome": "Community-supported agriculture (CSA) links local food producers (farmers) to consumers (you!). This type of shopping will decrease the environmental and climate impact of most fresh food purchases. Check out CSA efforts in your area!",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: SliderData.getQuestions(Region.Canada, CanadaCharacters.Sylvia)[0].icon,
                outcomeType: OutcomeType.Culture,
                outcomeDesc: "Community Supported Agriculture",
                link: "https://www.greenbrownblue.com/food-and-culture-explained/csas/"
            },
            // easter egg
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
                "outcome": "Food deserts, or areas where there is little access to healthy, fresh or minimally processed foods like vegetables, fruits and whole grains, are often found in low-income areas, and have been linked with poorer quality diets and negative health outcomes",
                "scores": {
                    "Environment": 0,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": -1,
                    "Climate": -1
                },
                icon: SliderData.getQuestions(Region.Canada, CanadaCharacters.Sylvia)[2].icon,
                outcomeType: OutcomeType.Culture,
                outcomeDesc: "Food Access",
                link: "https://www.greenbrownblue.com/food-and-healthcare-explained/food-security/"
            },
            {
                "outcome": "1 in 5 Canadians have used a foodbank at some point in their lives, and almost 1 million use them every month, typically because they don't make enough money to cover their monthly expenses. Almost 1/3 of food bank users are children.",
                "scores": {
                    "Environment": -1,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": -2,
                    "Climate": 0
                },
                icon: SliderData.getQuestions(Region.Canada, CanadaCharacters.Sylvia)[3].icon,
                outcomeType: OutcomeType.Culture,
                outcomeDesc: "Food Banks",
                link: "https://www.greenbrownblue.com/food-and-culture-explained/food-banks/"
            }
        ],
        [CanadaQuestions.Dinner1]: [
            // Yes
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
                outcomeDesc: "Whole Foods",
                link: "https://www.greenbrownblue.com/food-and-health-explained/whole-foods-meaning/"
            },
            // No 
            {
                "outcome": "In most developed countries, ultra-processed and packaged foods make up more than 50% of the typical diet - and are associated with lower diet quality and increased health risks compared to diets that are higher in whole foods.",
                "scores": {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -1,
                    "Climate": -1
                },
                icon: YesNoSocialData.getQuestions(Region.Canada, CanadaCharacters.Sylvia)[0].icon,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Whole Foods",
                link: "https://www.greenbrownblue.com/food-and-health-explained/whole-foods-meaning/"
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
                outcomeDesc: "Cooking Skills",
                link: "https://www.greenbrownblue.com/food-and-culture-explained/cooking-skills/"
            },
            // No
            {
                "outcome": "On any given day, more than one-third of Americans consume fast food, which is typically higher in calories, salt and fat than the same meal prepared at home from real, whole ingredients.",
                "scores": {
                    "Environment": 0,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": -2,
                    "Climate": 0
                },
                icon: YesNoSocialData.getQuestions(Region.Canada, CanadaCharacters.Sylvia)[1].icon,
                outcomeType: OutcomeType.Culture,
                outcomeDesc: "Cooking Skills",
                link: "https://www.greenbrownblue.com/food-and-culture-explained/cooking-skills/"
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
                outcomeDesc: "Eating as a Family",
                link: "https://www.greenbrownblue.com/food-and-culture-explained/eating-together-2/"
            },
            // No
            {
                "outcome": "Eating together as a family can help everyone make healthier food choices and learn about food traditions.",
                "scores": {
                    "Environment": 0,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": -2,
                    "Climate": 0
                },
                icon: YesNoSocialData.getQuestions(Region.Canada, CanadaCharacters.Sylvia)[2].icon,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Eating as a Family",
                link: "https://www.greenbrownblue.com/food-and-culture-explained/eating-together-2/"
            }
        ],
        [CanadaQuestions.DinnerProtein]: [
            {
                "outcome": "Greater consumption of ultra-processed foods has been linked to poorer diet quality, weight gain, increased risk for chronic diseases, and decreased overall health. A diet based on fresh or minimally processed foods is an essential part of any healthy diet.",
                "scores": {
                    "Environment": -2,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": -2,
                    "Climate": -1
                },
                icon: PlateDataCanada.getItems()[0][0].foodInfo.content,
                outcomeType: OutcomeType.Environment,
                outcomeDesc: "Sustainable fishing",
                link: "https://www.greenbrownblue.com/food-and-environment-explained/seafood-climate-change/"
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
                outcomeDesc: "Plant-forward Diet",
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
                icon: PlateDataCanada.getItems()[0][2].foodInfo.content,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Meat Alternative",
                link: "https://www.greenbrownblue.com/food-and-health-explained/meat-alternatives/"
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
                outcomeDesc: "Dairy/ Meat",
                link: "https://www.greenbrownblue.com/food-and-environment-explained/dairy-meat-environment/"
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
                outcomeDesc: "Beef",
                link: "https://www.greenbrownblue.com/food-and-climate-explained/beef-climate-change/"
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
                outcomeDesc: "Brown vs. White Rice",
                link: "https://www.greenbrownblue.com/food-and-health-explained/whole-grain-meaning/"
            },
            {
                "outcome": "Despite coming from a plant, rice makes a huge contribution to greenhouse gas emissions globally",
                "scores": {
                    "Environment": 0,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: PlateDataCanada.getItems()[1][1].foodInfo.content,
                outcomeType: OutcomeType.Climate,
                outcomeDesc: "Rice and Green House Gases",
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
                icon: PlateDataCanada.getItems()[1][2].foodInfo.content,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Sodium",
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
                icon: PlateDataCanada.getItems()[1][3].foodInfo.content,
                outcomeType: OutcomeType.Culture,
                outcomeDesc: "Indigenous Foods",
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
                icon: PlateDataCanada.getItems()[2][0].foodInfo.content,
                outcomeType: OutcomeType.Environment,
                outcomeDesc: "Single-Use Plastics",
                link: "https://www.greenbrownblue.com/food-and-climate-explained/food-processing-climate/"
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
                outcomeDesc: "Palm Oil",
                link: "https://www.greenbrownblue.com/food-and-environment-explained/palm-oil/"
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
                outcomeDesc: "Leafy Greens",
                link: "https://www.greenbrownblue.com/food-and-health-explained/which-vegetables/"
            },
            {
                "outcome": "Cheese has a relatively large carbon footprint, as it is produced from dairy milk which has the same climate challenges as eating beef. Decreasing animal-source foods overall—not just meat but dairy and eggs too!—is likely to have a greater overall impact on reducing greenhosue gas emission than vegetarian diets that include milk and eggs!",
                "scores": {
                    "Environment": 1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 2,
                    "Climate": 0
                },
                icon: PlateDataCanada.getItems()[2][3].foodInfo.content,
                outcomeType: OutcomeType.Climate,
                outcomeDesc: "Carbon Footprint",
                link: "https://www.greenbrownblue.com/food-and-climate-explained/carbon-footprint/"
            }
        ]
    };
}

export class CanadaSylviaScoreData {
    public static get() {
        return Private.scores;
    }
}
