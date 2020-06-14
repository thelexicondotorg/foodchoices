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
                icon: TimeData.getQuestions(Region.Indonesia, IndonesiaCharacters.Neesa)[0].icon
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
                icon: TimeData.getQuestions(Region.Indonesia, IndonesiaCharacters.Neesa)[1].icon
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
                icon: TimeData.getQuestions(Region.Indonesia, IndonesiaCharacters.Neesa)[2].icon
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
                icon: TimeData.getQuestions(Region.Indonesia, IndonesiaCharacters.Neesa)[3].icon
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
                icon: MCQData.getQuestions(Region.Indonesia, IndonesiaCharacters.Neesa)[0][0].icon
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
                icon: MCQData.getQuestions(Region.Indonesia, IndonesiaCharacters.Neesa)[0][1].icon
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
                icon: MCQData.getQuestions(Region.Indonesia, IndonesiaCharacters.Neesa)[0][2].icon
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
                icon: MCQData.getQuestions(Region.Indonesia, IndonesiaCharacters.Neesa)[0][3].icon
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
                icon: LunchData.getQuestions(Region.Indonesia, IndonesiaCharacters.Neesa)[0][0].icon
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
                icon: LunchData.getQuestions(Region.Indonesia, IndonesiaCharacters.Neesa)[0][1].icon
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
                icon: LunchData.getQuestions(Region.Indonesia, IndonesiaCharacters.Neesa)[0][2].icon
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
                icon: LunchData.getQuestions(Region.Indonesia, IndonesiaCharacters.Neesa)[0][3].icon
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
                icon: LunchSnackData.getQuestions(IndonesiaCharacters.Neesa)[0][0].icon
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
                icon: LunchSnackData.getQuestions(IndonesiaCharacters.Neesa)[0][1].icon
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
                icon: LunchSnackData.getQuestions(IndonesiaCharacters.Neesa)[0][2].icon
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
                icon: LunchSnackData.getQuestions(IndonesiaCharacters.Neesa)[0][3].icon
            }
        ],
        [IndonesiaQuestions.Groceries]: [
            {
                outcome: "Supermarkets stock a huge variety of foods and goods but minimal fresh produce and many packaged, ultra-processed foods.",
                scores: {
                    "Environment": -1,
                    "Health": -1,
                    "Healthcare": 0,
                    "Culture": -1,
                    "Climate": 0
                },
                icon: SliderData.getQuestions(Region.Indonesia, IndonesiaCharacters.Neesa)[0].icon
            },
            {
                "outcome": "There is no local market in this urban setting",
                "scores": {
                    "Environment": 1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 2,
                    "Climate": 1
                },
                icon: SliderData.getQuestions(Region.Indonesia, IndonesiaCharacters.Neesa)[1].icon
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
                icon: SliderData.getQuestions(Region.Indonesia, IndonesiaCharacters.Neesa)[2].icon
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
                icon: SliderData.getQuestions(Region.Indonesia, IndonesiaCharacters.Neesa)[3].icon
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
                outcomeDesc: "Meat",
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
              outcomeDesc: "Food Choices",
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
              outcomeType: OutcomeType.Climate,
              outcomeDesc: "Local Food"
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
              outcomeDesc: "Local Food"
            },
            {
              // Snake fruit easter egg
              // "outcome": "Good source of micronutrients; locally grown.",
              "scores": {
                "Environment": 1,
                "Health": 2,
                "Healthcare": 2,
                "Culture": 0,
                "Climate": 1
              },
              // icon: FruitShoppingData.getQuestions(IndonesiaCharacters.Wulandari)[2].icon,
              outcomeType: OutcomeType.Culture,
              outcomeDesc: "Indigenous foods"
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
              outcomeType: OutcomeType.Health,
              outcomeDesc: "Fruits and vegetables"
            }
          ],
        // [IndonesiaQuestions.Dinner1]: [
        //     {
        //         "outcome": "In most developed countries, ultra-processed and packaged foods make up more than 50% of the typical diet - and are associated with lower diet quality and increased health risks compared to diets that are higher in whole foods.",
        //         "scores": {
        //             "Environment": -1,
        //             "Health": -1,
        //             "Healthcare": -1,
        //             "Culture": 0,
        //             "Climate": -1
        //         },
        //         icon: YesNoSocialData.getQuestions(Region.Indonesia, IndonesiaCharacters.Neesa)[0].icon
        //     }
        // ],
        // [IndonesiaQuestions.Dinner2]: [
        //     {
        //         "outcome": "Eating in front of a screen may discourage social interaction and mindful eating - which can lead to overindulging.",
        //         "scores": {
        //             "Environment": 0,
        //             "Health": 1,
        //             "Healthcare": 1,
        //             "Culture": -1,
        //             "Climate": 0
        //         },
        //         icon: YesNoSocialData.getQuestions(Region.Indonesia, IndonesiaCharacters.Neesa)[1].icon
        //     }
        // ],
        // [IndonesiaQuestions.Dinner3]: [
        //     {
        //         "outcome": "On any given day, more than one-third of Americans consume fast food, which is typically higher in calories, salt and fat than the same meal prepared at home from real, whole ingredients.",
        //         "scores": {
        //             "Environment": -1,
        //             "Health": -2,
        //             "Healthcare": -2,
        //             "Culture": -2,
        //             "Climate": -2
        //         },
        //         icon: YesNoSocialData.getQuestions(Region.Indonesia, IndonesiaCharacters.Neesa)[2].icon
        //     }
        // ],
        // [IndonesiaQuestions.Dinner4]: [
        //     {
        //         "outcome": "Globally, trends are shifting towards families rarely eating together anymore. The majority of American families report eating a single meal together less than five days a week.* Eating together as a family has many benefits, including fewer behavioral problems, better self-esteem and better grades at school.",
        //         "scores": {
        //             "Environment": 0,
        //             "Health": 2,
        //             "Healthcare": 2,
        //             "Culture": 2,
        //             "Climate": 0
        //         },
        //         icon: YesNoSocialData.getQuestions(Region.Indonesia, IndonesiaCharacters.Neesa)[3].icon
        //     }
        // ],
        [IndonesiaQuestions.DinnerProtein]: [
            {
                "outcome": "Good source of protein but fried foods have negative health impacts. There are environmental issues with increased poultry and feed production in Indonesia",
                "scores": {
                    "Environment": -1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 1,
                    "Climate": -1
                },
                icon: IndonesiaNisaPlateData.getItems()[0][0].foodInfo.content
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
                icon: IndonesiaNisaPlateData.getItems()[0][1].foodInfo.content
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
                icon: IndonesiaNisaPlateData.getItems()[0][2].foodInfo.content
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
                icon: IndonesiaNisaPlateData.getItems()[0][3].foodInfo.content
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
                icon: IndonesiaNisaPlateData.getItems()[0][4].foodInfo.content
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
