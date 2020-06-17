import { IScoreData, Region, CanadaCharacters, IndonesiaCharacters, OutcomeType } from "../../Types";
import { IndonesiaQuestions } from "../../score/ScoreTypes";
import { TimeData } from "../TimeData";
import { MCQData } from "../MCQData";
import { LunchData } from "../LunchData";
import { SliderData } from "../SliderData";
import { YesNoSocialData } from "../YesNoSocialData";
import { IndonesiaWulandariPlateData } from "./IndonesiaWulandariPlateData";
import { IndonesiaNisaPlateData } from "./IndonesiaNisaPlateData";
import { IndonesiaWulandariScoreData } from "./IndonesiaWulandariScoreData";
import { LunchSnackData } from "./LunchSnackData";
import { FruitShoppingData } from "./FruitShoppingData";
import { GroceriesShoppingData } from "./GroceriesShoppingData";
import { IndonesiaHassanScoreData } from "./IndonesiaHassanScoreData";
import { StackingData } from "../../gamelets/stacking/StackingData";

// tslint:disable:object-literal-key-quotes
// tslint:disable:max-line-length
namespace Private {
    export const scores: {
        [questionId: string]: IScoreData[]
    } = {
        [IndonesiaQuestions.Breakfast]: [
            {
                "outcome": "Her breakfast lacks protein but contains vegetables; rice has a low nutrient content and contributes a bulk of GHG emissions from food in Indonesia",
                "scores": {
                    "Environment": 1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 2,
                    "Climate": 1
                },
                icon: TimeData.getQuestions(Region.Indonesia, IndonesiaCharacters.Neesa)[0].icon,
                outcomeDesc: "Carbon Footprint",
                outcomeType: OutcomeType.Climate,
                link: "https://www.greenbrownblue.com/food-and-climate-explained/carbon-footprint/"              
            },
            {
                "outcome": "Cheap and easy to prepare but lacking protein and micronutrients.",
                "scores": {
                    "Environment": 0,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: TimeData.getQuestions(Region.Indonesia, IndonesiaCharacters.Neesa)[1].icon,
                outcomeDesc: "Instant noodles",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/instant-noodles-vs-spaghetti/"               
            },
            {
                "outcome": "A favorite food but high in fat and salt! Beef has a high climate footprint.",
                "scores": {
                    "Environment": -1,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 2,
                    "Climate": -2
                },
                icon: TimeData.getQuestions(Region.Indonesia, IndonesiaCharacters.Neesa)[2].icon,
                outcomeDesc: "Beef",
                outcomeType: OutcomeType.Climate,
                link: "https://www.greenbrownblue.com/food-and-climate-explained/beef-climate-change/"                
            },
            {
                "outcome": "A nutritious diet with variety is important for a growing youth; skipping breakfast increases the chance of snacking on unhealthy processed foods later.",
                "scores": {
                    "Environment": 0,
                    "Health": -2,
                    "Healthcare": -1,
                    "Culture": -1,
                    "Climate": 0
                },
                icon: TimeData.getQuestions(Region.Indonesia, IndonesiaCharacters.Neesa)[3].icon,
                outcomeDesc: "Determinants of Food Choices",
                outcomeType: OutcomeType.Culture,
                link: "https://www.greenbrownblue.com/food-and-culture-explained/busy-lifestyles-impact/"               
            }
        ],
        [IndonesiaQuestions.Snacks1]: [
            {
                "outcome": "Excess sugar is detrimental to health and growth; it replaces more nutrient dense foods",
                "scores": {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -1,
                    "Climate": 0
                },
                icon: MCQData.getQuestions(Region.Indonesia, IndonesiaCharacters.Neesa)[0][0].icon,
                outcomeDesc: "Soft drinks",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/drink-less-soda/"               
            },
            {
                "outcome": "Excess sugar is detrimental to health and growth; it replaces more nutrient dense foods; juice packets also contribute to packaging waste",
                "scores": {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -1,
                    "Climate": -1
                },
                icon: MCQData.getQuestions(Region.Indonesia, IndonesiaCharacters.Neesa)[0][1].icon,
                outcomeDesc: "Sugar",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/sugar/"               
            },
            {
                "outcome": "Milk alternatives, such as soy, are expensive and lower in protein.",
                "scores": {
                    "Environment": 0,
                    "Health": -1,
                    "Healthcare": 0,
                    "Culture": -1,
                    "Climate": 0
                },
                icon: MCQData.getQuestions(Region.Indonesia, IndonesiaCharacters.Neesa)[0][2].icon,
                outcomeDesc: "Protein and growth",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/protein-needs-in-children/"               
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
                icon: MCQData.getQuestions(Region.Indonesia, IndonesiaCharacters.Neesa)[0][3].icon,
                outcomeDesc: "Processed Foods",
                outcomeType: OutcomeType.Climate,
                link: "https://www.greenbrownblue.com/food-and-climate-explained/food-processing-climate/"               
            }
        ],
        [IndonesiaQuestions.Lunch1]: [
            {
                "outcome": "Balanced meal with all groups in Dietary Guidelines, but rice lack nutrients and contributes a bulk of GHG emissions from food in Indonesia.",
                "scores": {
                    "Environment": 0,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: LunchData.getQuestions(Region.Indonesia, IndonesiaCharacters.Neesa)[0][0].icon,
                outcomeDesc: "Dietary Guidelines",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/dietary-guidelines-importance/"               
            },
            {
                "outcome": "Fast food has more salt, fat and sugar; diets high in red and processed meats are associated with NCD's. Beef has a large climate footprint",
                "scores": {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -1,
                    "Climate": -2
                },
                icon: LunchData.getQuestions(Region.Indonesia, IndonesiaCharacters.Neesa)[0][1].icon,
                outcomeDesc: "Fast Food",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/eating-fast-food/"               
            },
            {
                "outcome": "A favorite food but high in fat and salt! Beef has a high climate footprint.",
                "scores": {
                    "Environment": -1,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 2,
                    "Climate": -2
                },
                icon: LunchData.getQuestions(Region.Indonesia, IndonesiaCharacters.Neesa)[0][2].icon,
                outcomeDesc: "Meat",
                outcomeType: OutcomeType.Climate,
                link: "https://www.greenbrownblue.com/food-and-climate-explained/beef-climate-change/"               
            },
            {
                "outcome": "A nutritious diet with variety is important for a growing teen; skipping lunch puts Neesa at risk for missing important micronutrients and may cause her to snack more on unhealthy processed foods later",
                "scores": {
                    "Environment": 0,
                    "Health": -2,
                    "Healthcare": -1,
                    "Culture": -1,
                    "Climate": 0
                },
                icon: LunchData.getQuestions(Region.Indonesia, IndonesiaCharacters.Neesa)[0][3].icon,
                outcomeDesc: "Processed foods",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/minimally-processed-vs-processed/"               
            }
        ],
        [IndonesiaQuestions.LunchSnack]: [
            {
                "outcome": "Good source of micronutrients; locally grown",
                "scores": {
                    "Environment": 1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 0,
                    "Climate": 1
                },
                icon: LunchSnackData.getQuestions(IndonesiaCharacters.Neesa)[0][0].icon,
                outcomeDesc: "Local food",
                outcomeType: OutcomeType.Climate,
                link: "https://www.greenbrownblue.com/food-and-climate-explained/buy-local-climate/"               
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
                icon: LunchSnackData.getQuestions(IndonesiaCharacters.Neesa)[0][1].icon,
                outcomeDesc: "Eggs",
                outcomeType: OutcomeType.Environment,
                link: "https://www.greenbrownblue.com/food-and-environment-explained/egg-environmental-impact/"                              
            },
            {
                "outcome": "High in fat and sugar and extra calories, which contributes to obesity and NCDs",
                "scores": {
                    "Environment": -1,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 0,
                    "Climate": -1
                },
                icon: LunchSnackData.getQuestions(IndonesiaCharacters.Neesa)[0][2].icon,
                outcomeDesc: "Diet and Obesity",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/weight-gain/"               
            },
            {
                "outcome": "Fried foods have negative health impacts. There are environmental issues with increased poultry and feed production in Indonesia",
                "scores": {
                    "Environment": -1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 1,
                    "Climate": -1
                },
                icon: LunchSnackData.getQuestions(IndonesiaCharacters.Neesa)[0][3].icon,
                outcomeDesc: "Fast Food",
                outcomeType: OutcomeType.Healthcare,
                link: "https://www.greenbrownblue.com/food-and-healthcare-explained/obesity-fast-food/"               
            }
        ],
        // Slider game
        [IndonesiaQuestions.Groceries]: [
            // Easter egg
            {
                outcome: "Supermarkets stock a huge variety of foods and goods but minimal fresh produce and many packaged, ultra-processed foods.",
                scores: {
                    "Environment": -1,
                    "Health": -1,
                    "Healthcare": 0,
                    "Culture": -1,
                    "Climate": 0
                }
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
                icon: SliderData.getQuestions(Region.Indonesia, IndonesiaCharacters.Neesa)[1].icon,
                outcomeDesc: "Shopping",
                outcomeType: OutcomeType.Culture,
                link: "https://www.greenbrownblue.com/food-and-culture-explained/food-retail/"               
            },
            {
                "outcome": "Small grocers stock more variety but minimal fresh produce and more packaged, processed foods.",
                "scores": {
                    "Environment": -1,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": -1,
                    "Climate": -0
                },
                icon: SliderData.getQuestions(Region.Indonesia, IndonesiaCharacters.Neesa)[2].icon,
                outcomeDesc: "Food access",
                outcomeType: OutcomeType.Culture,
                link: "https://www.greenbrownblue.com/food-and-culture-explained/grocery-stores-better-diets/"               
            },
            {
                "outcome": "Supermarkets stock a huge variety of foods and goods but minimal fresh produce and many packaged, ultra-processed foods.",
                "scores": {
                    "Environment": -1,
                    "Health": -1,
                    "Healthcare": 0,
                    "Culture": -1,
                    "Climate": 0
                },
                icon: SliderData.getQuestions(Region.Indonesia, IndonesiaCharacters.Neesa)[3].icon,
                outcomeDesc: "Processed foods",
                outcomeType: OutcomeType.Climate,
                link: "https://www.greenbrownblue.com/food-and-climate-explained/food-processing-climate/"               
            }
        ],
        [IndonesiaQuestions.GroceriesShopping]: [
            {
                outcome: "Contains plenty of protein; however low in vegetables and dairy; sugar and rice lack micronutrients and along with animal products, rice contributes the bulk of GHG emissions from food In Indonesia.",
                scores: {
                    "Environment": -1,
                    "Health": 1,
                    "Healthcare": 0,
                    "Culture": 0,
                    "Climate": -1
                },
                outcomeType: OutcomeType.Climate,
                outcomeDesc: "Chicken",
                link: "https://www.greenbrownblue.com/food-and-climate-explained/chicken-beef/",
                icon: GroceriesShoppingData.getQuestions(IndonesiaCharacters.Neesa)[0].icon
            },
            {
                outcome: "Contains plenty of protein; however low in vegetables, and sugar and noodles lack micronutrients. Beef is expensive and also contributes more greenhouse gases than other meats.",
                scores: {
                    "Environment": -2,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 0,
                    "Climate": -2
                },
                outcomeType: OutcomeType.Climate,
                outcomeDesc: "Chicken",
                link: "https://www.greenbrownblue.com/food-and-climate-explained/chicken-beef/",
                icon: GroceriesShoppingData.getQuestions(IndonesiaCharacters.Neesa)[0].icon
            },
            {
                outcome: "Good Choice! She chose a variety of protein, dairy and vegetables and has enough leftover to buy some fruit; however rice as a staple lacks micronutrients and contributes the bulk of GHG emissions from food In Indonesia.",
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
                icon: GroceriesShoppingData.getQuestions(IndonesiaCharacters.Neesa)[2].icon
            },
            {
                outcome: "Most economical choice. She chose a variety of protein, dairy and vegetables and has enough leftover to buy extras however sugar and noodles provide very little nutrients.",
                scores: {
                    "Environment": 1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 1,
                    "Climate": 1
                },
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Healthy eating patterns",
                link: "https://www.greenbrownblue.com/food-choices-for-a-healthy-planet-explained/healthy-eating-pattern/",
                icon: GroceriesShoppingData.getQuestions(IndonesiaCharacters.Neesa)[3].icon
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
                icon: FruitShoppingData.getQuestions(IndonesiaCharacters.Neesa)[0][0].icon,
                outcomeDesc: "Fruits and vegetables",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/vegetables-nutrition/"
            },
            {
                "outcome": "Apples are imported and expensive. There are many nutritious local fruits available.",
                "scores": {
                    "Environment": -1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": -1,
                    "Climate": -1
                },
                icon: FruitShoppingData.getQuestions(IndonesiaCharacters.Neesa)[0][1].icon,
                outcomeType: OutcomeType.Climate,
                outcomeDesc: "Local Food",
                link: "https://www.greenbrownblue.com/food-and-climate-explained/buy-local-climate/"
            },
            {
                // Snake fruit easter egg
                "scores": {
                    "Environment": 1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 0,
                    "Climate": 1
                },
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
                outcomeDesc: "Local foods",
                outcomeType: OutcomeType.Culture,
                link: "https://www.greenbrownblue.com/food-and-culture-explained/eating-locally/"               
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
                outcomeDesc: "Saturated and trans fats (or processed foods)",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/saturated-trans-fats/"               
            },
            // easter egg
            {
                "scores": {
                    "Environment": -1,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 1,
                    "Climate": 0
                }
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
                icon: IndonesiaNisaPlateData.getItems()[0][0].foodInfo.content,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Protein",
                link: "https://www.greenbrownblue.com/food-and-health-explained/plant-based-proteins/"
            },
            {
                "outcome": "Tofu is an affordable source of protein and has a low climate footprint; however imported tofu must be packaged and transported.",
                "scores": {
                    "Environment": -1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 2,
                    "Climate": 1
                },
                icon: IndonesiaNisaPlateData.getItems()[0][1].foodInfo.content,
                outcomeDesc: "Tofu",
                outcomeType: OutcomeType.Environment,
                link: "https://www.greenbrownblue.com/food-and-environment-explained/soybean-impact/"
            },
            {
                "outcome": "Eggs are a good source of protein and nutrition, but expensive to purchase for whole family.",
                "scores": {
                    "Environment": 0,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: IndonesiaNisaPlateData.getItems()[0][2].foodInfo.content,
                outcomeType: OutcomeType.Environment,
                outcomeDesc: "Eggs",
                link: "https://www.greenbrownblue.com/food-and-environment-explained/egg-environmental-impact/"
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
                icon: IndonesiaNisaPlateData.getItems()[0][3].foodInfo.content,
                outcomeDesc: "Sustainable fishing",
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
                icon: IndonesiaNisaPlateData.getItems()[0][4].foodInfo.content,
                outcomeType: OutcomeType.Healthcare,
                outcomeDesc: "Nutrition related disease",
                link: "https://www.greenbrownblue.com/food-and-healthcare-explained/food-is-medicine/"
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
                icon: IndonesiaNisaPlateData.getItems()[0][5].foodInfo.content,
                outcomeDesc: "Fried foods",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/fried-food/"
            }
        ],
        [IndonesiaQuestions.DinnerGrains]: IndonesiaWulandariScoreData.get()[IndonesiaQuestions.DinnerGrains],
        [IndonesiaQuestions.DinnerVeggies]: IndonesiaWulandariScoreData.get()[IndonesiaQuestions.DinnerVeggies]
    };
}

export class IndonesiaNisaScoreData {
    public static get() {
        return Private.scores;
    }
}
