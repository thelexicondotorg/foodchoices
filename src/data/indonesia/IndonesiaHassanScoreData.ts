import { IScoreData, Region, IndonesiaCharacters } from "../../Types";
import { IndonesiaQuestions } from "../../score/ScoreTypes";
import { TimeData } from "../TimeData";
import { MCQData } from "../MCQData";
import { LunchData } from "../LunchData";
import { SliderData } from "../SliderData";
import { YesNoSocialData } from "../YesNoSocialData";
import { IndonesiaWulandariScoreData } from "./IndonesiaWulandariScoreData";
import { IndonesiaHassanPlateData } from "./IndonesiaHassanPlateData";
import { LunchSnackData } from "./LunchSnackData";

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
                icon: TimeData.getQuestions(Region.Indonesia, IndonesiaCharacters.Hassan)[0].icon
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
                icon: TimeData.getQuestions(Region.Indonesia, IndonesiaCharacters.Hassan)[1].icon
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
                icon: TimeData.getQuestions(Region.Indonesia, IndonesiaCharacters.Hassan)[2].icon
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
                icon: TimeData.getQuestions(Region.Indonesia, IndonesiaCharacters.Hassan)[3].icon
            }
        ],
        [IndonesiaQuestions.Snacks1]: [
            {
                "outcome": "The street cart doesn't have soda today.",
                "scores": {
                    "Environment": 0,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 0,
                    "Climate": 0
                },
                icon: MCQData.getQuestions(Region.Indonesia, IndonesiaCharacters.Hassan)[0][0].icon
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
                icon: MCQData.getQuestions(Region.Indonesia, IndonesiaCharacters.Hassan)[0][1].icon
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
                icon: MCQData.getQuestions(Region.Indonesia, IndonesiaCharacters.Hassan)[0][2].icon
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
                icon: MCQData.getQuestions(Region.Indonesia, IndonesiaCharacters.Hassan)[0][3].icon
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
                icon: LunchData.getQuestions(Region.Indonesia, IndonesiaCharacters.Hassan)[0][0].icon
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
                icon: LunchData.getQuestions(Region.Indonesia, IndonesiaCharacters.Hassan)[0][1].icon
            },
            {
                "outcome": "He doesn't have enough time to leave school for lunch",
                "scores": {
                    "Environment": 0,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 0,
                    "Climate": 0
                },
                icon: LunchData.getQuestions(Region.Indonesia, IndonesiaCharacters.Hassan)[0][2].icon
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
                icon: LunchData.getQuestions(Region.Indonesia, IndonesiaCharacters.Hassan)[0][3].icon
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
                icon: LunchSnackData.getQuestions(IndonesiaCharacters.Hassan)[0][0].icon
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
                icon: LunchSnackData.getQuestions(IndonesiaCharacters.Hassan)[0][1].icon
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
                icon: LunchSnackData.getQuestions(IndonesiaCharacters.Hassan)[0][2].icon
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
                icon: LunchSnackData.getQuestions(IndonesiaCharacters.Hassan)[0][3].icon
            }
        ],
        [IndonesiaQuestions.Groceries]: [
            {
                scores: {
                    "Environment": -1,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": -1,
                    "Climate": 0
                },
                icon: SliderData.getQuestions(Region.Indonesia, IndonesiaCharacters.Hassan)[0].icon
            },
            {
                "outcome": "Local markets supply fresh produce with less packaging, but often fewer choices beyond produce.",
                "scores": {
                    "Environment": 1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 2,
                    "Climate": 1
                },
                icon: SliderData.getQuestions(Region.Indonesia, IndonesiaCharacters.Hassan)[1].icon
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
                icon: SliderData.getQuestions(Region.Indonesia, IndonesiaCharacters.Hassan)[2].icon
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
                icon: SliderData.getQuestions(Region.Indonesia, IndonesiaCharacters.Hassan)[3].icon
            }
        ],
        [IndonesiaQuestions.FruitShopping]: IndonesiaWulandariScoreData.get()[IndonesiaQuestions.FruitShopping],
        [IndonesiaQuestions.Dinner]: [
            {
                "outcome": "Traditional meals contain more vegetables and fresh ingredients.",
                "scores": {
                    "Environment": 1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 2,
                    "Climate": 0
                }
            },
            {
                "outcome": "Street food is often deep fried and less nutritious.",
                "scores": {
                    "Environment": -1,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 1,
                    "Climate": 0
                }
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
        //         icon: YesNoSocialData.getQuestions(Region.Indonesia, IndonesiaCharacters.Hassan)[0].icon
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
        //         icon: YesNoSocialData.getQuestions(Region.Indonesia, IndonesiaCharacters.Hassan)[1].icon
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
        //         icon: YesNoSocialData.getQuestions(Region.Indonesia, IndonesiaCharacters.Hassan)[2].icon
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
        //         icon: YesNoSocialData.getQuestions(Region.Indonesia, IndonesiaCharacters.Hassan)[3].icon
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
                icon: IndonesiaHassanPlateData.getItems()[0][0].foodInfo.content
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
                icon: IndonesiaHassanPlateData.getItems()[0][1].foodInfo.content
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
                icon: IndonesiaHassanPlateData.getItems()[0][2].foodInfo.content
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
                icon: IndonesiaHassanPlateData.getItems()[0][3].foodInfo.content
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
                icon: IndonesiaHassanPlateData.getItems()[0][4].foodInfo.content
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
