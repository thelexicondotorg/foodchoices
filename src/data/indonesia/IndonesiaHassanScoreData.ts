import { IScoreData, Region, IndonesiaCharacters, OutcomeType } from "../../Types";
import { IndonesiaQuestions } from "../../score/ScoreTypes";
import { TimeData } from "../TimeData";
import { MCQData } from "../MCQData";
import { LunchData } from "../LunchData";
import { SliderData } from "../SliderData";
import { IndonesiaWulandariScoreData } from "./IndonesiaWulandariScoreData";
import { IndonesiaHassanPlateData } from "./IndonesiaHassanPlateData";
import { LunchSnackData } from "./LunchSnackData";
import { GroceriesShoppingData } from "./GroceriesShoppingData";
import { FruitShoppingData } from "./FruitShoppingData";
import { StackingData } from "../../gamelets/stacking/StackingData";

// tslint:disable:object-literal-key-quotes
// tslint:disable:max-line-length
namespace Private {
    export const scores: {
        [questionId: string]: IScoreData[]
    } = {
        [IndonesiaQuestions.Breakfast]: [
            {
                "outcome": "His breakfast lacks protein but contains vegetables; rice contributes the bulk of GHG emissions from food in Indonesia",
                "scores": {
                    "Environment": 1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 1,
                    "Climate": 1
                },
                icon: TimeData.getQuestions(Region.Indonesia, IndonesiaCharacters.Hassan)[0].icon,
                outcomeDesc: "Rice and Methane",
                outcomeType: OutcomeType.Climate,
                link: "https://www.greenbrownblue.com/food-and-climate-explained/rice-climate-footprint/"
            },
            {
                "outcome": "Milo contains dairy protein, but is high in sugar and contains palm oil which is responsible for enironmental degradation. Packaging detrimental to environment.",
                "scores": {
                    "Environment": -1,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 0,
                    "Climate": -1
                },
                icon: TimeData.getQuestions(Region.Indonesia, IndonesiaCharacters.Hassan)[1].icon,
                outcomeDesc: "Palm oil",
                outcomeType: OutcomeType.Environment,
                link: "https://www.greenbrownblue.com/food-and-environment-explained/palm-oil/"
            },
            {
                "outcome": "Good start to the day with protein rich breakfast though rice lacks micronutrients and contributes the bulk of GHG emissions from food.",
                "scores": {
                    "Environment": -1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 1,
                    "Climate": -1
                },
                icon: TimeData.getQuestions(Region.Indonesia, IndonesiaCharacters.Hassan)[2].icon,
                outcomeDesc: "Balanced meal",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/balanced-meal-importance/"
            },
            {
                "outcome": "A nutritious diet with variety is important for a growing youth; skipping breakfast puts Hasan at risk for undernutrition and increases the chance of snacking on unhealthy processed foods later",
                "scores": {
                    "Environment": 0,
                    "Health": -2,
                    "Healthcare": -1,
                    "Culture": -1,
                    "Climate": 0
                },
                icon: TimeData.getQuestions(Region.Indonesia, IndonesiaCharacters.Hassan)[3].icon,
                outcomeDesc: "Food diversity",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/diverse-diets/"
            }
        ],
        [IndonesiaQuestions.Snacks1]: [
            // easter egg
            {
                "outcome": "The street cart doesn't have soda today.",
                "scores": {
                    "Environment": 0,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 0,
                    "Climate": 0
                }
            },
            {
                "outcome": "Excess sugar is detrimental to health and growth; it replaces more nutrient dense foods especially for small children who eat smaller portions; juice packets also contribute to packaging waste",
                "scores": {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -1,
                    "Climate": -1
                },
                icon: MCQData.getQuestions(Region.Indonesia, IndonesiaCharacters.Hassan)[0][1].icon,
                outcomeDesc: "Soft drinks",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/drink-less-soda/"
            },
            {
                "outcome": "Over-use of small plastic packaging contribute to environmental degradation",
                "scores": {
                    "Environment": -1,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 0,
                    "Climate": -1
                },
                icon: MCQData.getQuestions(Region.Indonesia, IndonesiaCharacters.Hassan)[0][2].icon,
                outcomeDesc: "Plastics and packaging ",
                outcomeType: OutcomeType.Environment,
                link: "https://www.greenbrownblue.com/food-and-environment-explained/plastic-waste/"
            },
            {
                "outcome": "Although coconuts are widely available, this packaged item is imported and contributes to food package waste problem.",
                "scores": {
                    "Environment": -1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 0,
                    "Climate": 1
                },
                icon: MCQData.getQuestions(Region.Indonesia, IndonesiaCharacters.Hassan)[0][3].icon,
                outcomeDesc: "Plastics and packaging ",
                outcomeType: OutcomeType.Environment,
                link: "https://www.greenbrownblue.com/food-and-environment-explained/plastic-waste/"
            }
        ],
        [IndonesiaQuestions.Lunch1]: [
            {
                "outcome": "Hassan eats a balanced meal that has a positive impact on his school and community.",
                "scores": {
                    "Environment": 1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 1,
                    "Climate": 2
                },
                icon: LunchData.getQuestions(Region.Indonesia, IndonesiaCharacters.Hassan)[0][0].icon,
                outcomeDesc: "Balanced Meal",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/balanced-meal-importance/"
            },
            {
                "outcome": "Good source of protein but fried foods have negative health impacts. There are environmental issues with increased poultry and feed production in Indonesia",
                "scores": {
                    "Environment": -1,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: LunchData.getQuestions(Region.Indonesia, IndonesiaCharacters.Hassan)[0][1].icon,
                outcomeDesc: "Fried foods",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/fried-food/"
            },
            // easter egg
            {
                "outcome": "He doesn't have enough time to leave school for lunch",
                "scores": {
                    "Environment": 0,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 0,
                    "Climate": 0
                }
            },
            {
                "outcome": "A nutritious diet with variety is important for a growing youth; skipping lunch puts Hasan at risk for undernutrition and increases the chance of snacking on unhealthy processed foods later",
                "scores": {
                    "Environment": 0,
                    "Health": -2,
                    "Healthcare": -1,
                    "Culture": -1,
                    "Climate": 0
                },
                icon: LunchData.getQuestions(Region.Indonesia, IndonesiaCharacters.Hassan)[0][3].icon,
                outcomeDesc: "Processed foods",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/minimally-processed-vs-processed/"
            }
        ],
        [IndonesiaQuestions.LunchSnack]: [
            {
                "outcome": "Good source of micronutrients, locally grown",
                "scores": {
                    "Environment": 1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 0,
                    "Climate": 1
                },
                icon: LunchSnackData.getQuestions(IndonesiaCharacters.Hassan)[0][0].icon,
                outcomeDesc: "Local foods",
                outcomeType: OutcomeType.Culture,
                link: "https://www.greenbrownblue.com/food-and-culture-explained/eating-locally/"
            },
            {
                "outcome": "Provides quality protein; however, there are environmental issues with increased poultry and feed production in Indonesia",
                "scores": {
                    "Environment": -1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: LunchSnackData.getQuestions(IndonesiaCharacters.Hassan)[0][1].icon,
                outcomeDesc: "protein and growth",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/protein-needs-in-children/"
            },
            {
                "outcome": "Although it is tasty and inexpensive, excess sugar is detrimental to health and growth; it replaces more nutrient dense foods especially for small children who eat smaller portions.",
                "scores": {
                    "Environment": 0,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: LunchSnackData.getQuestions(IndonesiaCharacters.Hassan)[0][2].icon,
                outcomeDesc: "Sugar",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/sugar/"
            },
            {
                "outcome": "Though these crackers are made locally inexpensive, they are very oily and provide very little nutrition",
                "scores": {
                    "Environment": 0,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: LunchSnackData.getQuestions(IndonesiaCharacters.Hassan)[0][3].icon,
                outcomeDesc: "Saturated and trans fats",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/saturated-trans-fats/"
            }
        ],
        // Slider game
        [IndonesiaQuestions.Groceries]: [
            {
                outcome: "Local markets supply fresh produce with less packaging, but often fewer choices beyond produce.",
                scores: {
                    "Environment": 1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 2,
                    "Climate": 1
                },
                icon: SliderData.getQuestions(Region.Indonesia, IndonesiaCharacters.Hassan)[0].icon,
                outcomeDesc: "Locally grown foods",
                outcomeType: OutcomeType.Culture,
                link: "https://www.greenbrownblue.com/food-and-culture-explained/eating-locally/"
            },
            {
                "outcome": "Small shops stock more processed, packaged foods with very limited variety and a lack of fresh produce. It's a good place to meet your neighbors though!",
                "scores": {
                    "Environment": -1,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 1,
                    "Climate": -1
                },
                icon: SliderData.getQuestions(Region.Indonesia, IndonesiaCharacters.Hassan)[1].icon,
                outcomeDesc: "Food access",
                outcomeType: OutcomeType.Culture,
                link: "https://www.greenbrownblue.com/food-and-culture-explained/grocery-stores-better-diets/"
            },
            {
                "outcome": "Small grocers stock more variety but minimal fresh produce and more packaged, processed foods.",
                "scores": {
                    "Environment": -1,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": -1,
                    "Climate": 0
                },
                icon: SliderData.getQuestions(Region.Indonesia, IndonesiaCharacters.Hassan)[2].icon,
                outcomeDesc: "Processed food",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/minimally-processed-vs-processed/"
            },
            // easter egg
            {
                "outcome": "Small shops stock more processed, packaged foods with very limited variety and a lack of fresh produce. It's a good place to meet your neighbors though!",
                "scores": {
                    "Environment": -1,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 1,
                    "Climate": -1
                }
            }
        ],
        [IndonesiaQuestions.GroceriesShopping]: [
            {
                outcome: "Contains plenty of protein; however low in vegetables and dairy; sugar and rice lack micronutrients and along with animal products, rice contributes the bulk of GHG emissions from food In Indonesia.",
                scores: {
                    "Environment": -1,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 1,
                    "Climate": -1
                },
                outcomeType: OutcomeType.Climate,
                outcomeDesc: "Rice and Methane",
                link: "https://www.greenbrownblue.com/food-and-climate-explained/rice-climate-footprint/",
                icon: GroceriesShoppingData.getQuestions(IndonesiaCharacters.Hassan)[0].icon
            },
            {
                outcome: "This purchase contains plenty of protein but it is low in healthy fruits and vegetables. Beef  is expensive and also contributes to greenhouse gases.",
                scores: {
                    "Environment": -1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 0,
                    "Climate": -2
                },
                outcomeType: OutcomeType.Climate,
                outcomeDesc: "Beef",
                link: "https://www.greenbrownblue.com/food-and-climate-explained/beef-climate-change/",
                icon: GroceriesShoppingData.getQuestions(IndonesiaCharacters.Hassan)[1].icon
            },
            {
                outcome: "Good Choice! He chose a variety of protein, dairy and vegetables and has enough leftover to buy some fruit; however rice as a staple lacks micronutrients and contributes the bulk of GHG emissions from food In Indonesia.",
                scores: {
                    "Environment": 0,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 2,
                    "Climate": 0
                },
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Balanced Meal",
                link: "https://www.greenbrownblue.com/food-and-health-explained/balanced-meal-importance/",
                icon: GroceriesShoppingData.getQuestions(IndonesiaCharacters.Hassan)[2].icon
            },
            {
                outcome: "Most economical choice. He chose a variety of protein, dairy and vegetables and has enough leftover to buy extras however sugar and noodles provide very little nutrients.",
                scores: {
                    "Environment": 1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 1,
                    "Climate": 1
                },
                outcomeType: OutcomeType.Healthcare,
                outcomeDesc: "Food Insecurity and health outcomes",
                link: "https://www.greenbrownblue.com/food-and-healthcare-explained/food-security/",
                icon: GroceriesShoppingData.getQuestions(IndonesiaCharacters.Hassan)[3].icon
            }
        ],
        [IndonesiaQuestions.FruitShopping]: [
            {
                "outcome": "Good source of micronutrients; locally grown.",
                "scores": {
                    "Environment": 1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 0,
                    "Climate": 1
                },
                icon: FruitShoppingData.getQuestions(IndonesiaCharacters.Wulandari)[0][0].icon,
                outcomeType: OutcomeType.Climate,
                outcomeDesc: " Local Food",
                link: "https://www.greenbrownblue.com/food-and-climate-explained/buy-local-climate/"
            },
            {
                // Apple - Easter egg
                "scores": {
                    "Environment": 0,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 1,
                    "Climate": 0
                },
            },
            {
                "outcome": "Good source of micronutrients; locally grown.",
                "scores": {
                    "Environment": 1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 0,
                    "Climate": 1
                },
                icon: FruitShoppingData.getQuestions(IndonesiaCharacters.Wulandari)[0][2].icon,
                outcomeType: OutcomeType.Culture,
                outcomeDesc: "Indigenous foods",
                link: "https://www.greenbrownblue.com/food-and-culture-explained/indigenous-food/"
            },
            {
                "outcome": "Good source of micronutrients, locally grown.",
                "scores": {
                    "Environment": 1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 0,
                    "Climate": 1
                },
                icon: FruitShoppingData.getQuestions(IndonesiaCharacters.Wulandari)[0][3].icon,
                outcomeType: OutcomeType.Climate,
                outcomeDesc: "Local Food",
                link: "https://www.greenbrownblue.com/food-and-climate-explained/buy-local-climate/"
            }
        ],
        // Stacking game
        [IndonesiaQuestions.Dinner]: [
            {
                "outcome": "Traditional meals contain more vegetables and fresh ingredients.",
                "scores": {
                    "Environment": 1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 2,
                    "Climate": 0
                },
                icon: StackingData.getOutcomeIcon(),
                outcomeDesc: "Cooking skills",
                outcomeType: OutcomeType.Culture,
                link: "https://www.greenbrownblue.com/food-and-culture-explained/cooking-skills/"               
            },
            {
                "outcome": "Street food is often deep fried and less nutritious.",
                "scores": {
                    "Environment": -1,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: StackingData.getOutcomeIcon(),
                outcomeDesc: "Traditional Indonesian foods ",
                outcomeType: OutcomeType.Culture,
                link: "https://www.greenbrownblue.com/food-and-culture-explained/indonesia-imported-processed-foods/"               
            }
        ],
        [IndonesiaQuestions.DinnerProtein]: [
            {
                "outcome": "Tempeh is an affordable source of protein and has a low climate footprint",
                "scores": {
                    "Environment": 2,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 2,
                    "Climate": 1
                },
                icon: IndonesiaHassanPlateData.getItems()[0][0].foodInfo.content,
                outcomeDesc: "Carbon Footprint",
                outcomeType: OutcomeType.Climate,
                link: "https://www.greenbrownblue.com/food-and-climate-explained/carbon-footprint/"
            },
            {
                "outcome": "Eggs are a good source of protein and nutrition, but expensive to purchase eggs for whole family.",
                "scores": {
                    "Environment": 0,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: IndonesiaHassanPlateData.getItems()[0][1].foodInfo.content,
                outcomeDesc: "Undernutrition",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/protein-needs-in-children/"
            },
            {
                "outcome": "In Indonesia, some types of fish (snapper, grouper) are at risk of overfishing; aquaculture has environmental issues related to fish feed, used of antibiotics and chemicals; fish is a healthy protein, but deep frying reduced its nutritional value.",
                "scores": {
                    "Environment": -1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: IndonesiaHassanPlateData.getItems()[0][2].foodInfo.content,
                outcomeDesc: "Fishing",
                outcomeType: OutcomeType.Environment,
                link: "https://www.greenbrownblue.com/food-and-environment-explained/seafood-climate-change/"
            },
            {
                "outcome": "Diets high in red and processed meat are linked to NCDs; beef has a heavier impact on environment and climate",
                "scores": {
                    "Environment": -1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 1,
                    "Climate": -2
                },
                icon: IndonesiaHassanPlateData.getItems()[0][3].foodInfo.content,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Red Meat",
                link: "https://www.greenbrownblue.com/food-and-health-explained/red-meat/"
            },
            {
                "outcome": "A good source of protein but some practices in the shrimp industry neglect human rights.",
                "scores": {
                    "Environment": -1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: IndonesiaHassanPlateData.getItems()[0][4].foodInfo.content,
                outcomeDesc: "Human rights and workers rights",
                outcomeType: OutcomeType.Culture,
                link: "https://www.greenbrownblue.com/food-and-culture-explained/shrimp-industry/"
            },
            {
                "outcome": "Good source of protein but fried foods have negative health impacts. There are environmental issues with increased poultry and feed production in Indonesia",
                "scores": {
                    "Environment": -1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 1,
                    "Climate": -1
                },
                icon: IndonesiaHassanPlateData.getItems()[0][5].foodInfo.content,
                outcomeDesc: "Fried Foods",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/fried-food/"
            }
        ],
        [IndonesiaQuestions.DinnerGrains]: IndonesiaWulandariScoreData.get()[IndonesiaQuestions.DinnerGrains],
        [IndonesiaQuestions.DinnerVeggies]: IndonesiaWulandariScoreData.get()[IndonesiaQuestions.DinnerVeggies]
    };
}

export class IndonesiaHassanScoreData {
    public static get() {
        return Private.scores;
    }
}
