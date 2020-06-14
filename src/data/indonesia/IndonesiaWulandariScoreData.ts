import { IScoreData, Region, IndonesiaCharacters, OutcomeType } from "../../Types";
import { IndonesiaQuestions } from "../../score/ScoreTypes";
import { TimeData } from "../TimeData";
import { MCQData } from "../MCQData";
import { LunchData } from "../LunchData";
import { SliderData } from "../SliderData";
import { YesNoSocialData } from "../YesNoSocialData";
import { IndonesiaWulandariPlateData } from "./IndonesiaWulandariPlateData";
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
        "outcome": "The fortified milk provides good nutrition for growth; however, rice has a low nutritional value and contributes the bulk of GHG emissions from food in Indonesia, dairy also has a high climate footprint",
        "scores": {
          "Environment": -1,
          "Health": 1,
          "Healthcare": 1,
          "Culture": 1,
          "Climate": -1
        },
        icon: TimeData.getQuestions(Region.Indonesia, IndonesiaCharacters.Wulandari)[0].icon
      },
      {
        "outcome": "Good source of micronutrients and affordable; although low in protein.",
        "scores": {
          "Environment": 2,
          "Health": 1,
          "Healthcare": 2,
          "Culture": 1,
          "Climate": 2
        },
        icon: TimeData.getQuestions(Region.Indonesia, IndonesiaCharacters.Wulandari)[1].icon
      },
      {
        "outcome": "Cheap and easy to prepare but lacking protein and micronutrients and high in fat and salt.",
        "scores": {
          "Environment": 0,
          "Health": -1,
          "Healthcare": -1,
          "Culture": 1,
          "Climate": 0
        },
        icon: TimeData.getQuestions(Region.Indonesia, IndonesiaCharacters.Wulandari)[2].icon
      },
      {
        "outcome": "Even though this is a healthy option, meat is expensive to purchase.",
        "scores": {
          "Environment": 0,
          "Health": 0,
          "Healthcare": 0,
          "Culture": 0,
          "Climate": 0
        },
        icon: TimeData.getQuestions(Region.Indonesia, IndonesiaCharacters.Wulandari)[3].icon
      }
    ],
    [IndonesiaQuestions.Snacks1]: [
      {
        "outcome": "Healthy option. It is recommended that mothers breastfeed up to 24 months to supplement during the weaning period.",
        "scores": {
          "Environment": 0,
          "Health": 2,
          "Healthcare": 2,
          "Culture": 2,
          "Climate": 0
        },
        icon: MCQData.getQuestions(Region.Indonesia, IndonesiaCharacters.Wulandari)[0][0].icon
      },
      {
        "outcome": "Dairy is an important source of protein and nutrients for young children, but also has a high GHG impact",
        "scores": {
          "Environment": -1,
          "Health": 2,
          "Healthcare": 1,
          "Culture": 1,
          "Climate": -1
        },
        icon: MCQData.getQuestions(Region.Indonesia, IndonesiaCharacters.Wulandari)[0][1].icon
      },
      {
        "outcome": "Even though this is a healthy option, eggs are expensive to purchase, and their few hens do not lay eggs daily.",
        "scores": {
          "Environment": 0,
          "Health": 0,
          "Healthcare": 0,
          "Culture": 0,
          "Climate": 0
        },
        icon: MCQData.getQuestions(Region.Indonesia, IndonesiaCharacters.Wulandari)[0][2].icon
      },
      {
        "outcome": "Excess sugar is detrimental to health and growth; it replaces more nutrient dense foods especially for small children who eat smaller portions; juice packets also contribute to packaging waste",
        "scores": {
          "Environment": -1,
          "Health": -2,
          "Healthcare": -2,
          "Culture": -1,
          "Climate": 0
        },
        icon: MCQData.getQuestions(Region.Indonesia, IndonesiaCharacters.Wulandari)[0][3].icon
      }
    ],
    [IndonesiaQuestions.Lunch1]: [
      {
        "outcome": "Tofu is a good souce of protein, is affordable and better for climate and environment (some tofu is imported, however)",
        "scores": {
          "Environment": 1,
          "Health": 1,
          "Healthcare": 1,
          "Culture": 2,
          "Climate": 0
        },
        icon: LunchData.getQuestions(Region.Indonesia, IndonesiaCharacters.Wulandari)[0][0].icon
      },
      {
        "outcome": "In Indonesia, some types of fish (snapper, grouper) are at risk of overfishing; aquaculture has environmental issues related to fish feed, used of antibiotics and chemicals",
        "scores": {
          "Environment": -1,
          "Health": 1,
          "Healthcare": 1,
          "Culture": 2,
          "Climate": -1
        },
        icon: LunchData.getQuestions(Region.Indonesia, IndonesiaCharacters.Wulandari)[0][1].icon
      },
      {
        "outcome": "Spinach is locally grown and does not require a lot of inputs; it is good source of micronutrients yet insufficient calories and protein.",
        "scores": {
          "Environment": 2,
          "Health": 1,
          "Healthcare": 1,
          "Culture": 1,
          "Climate": 2
        },
        icon: LunchData.getQuestions(Region.Indonesia, IndonesiaCharacters.Wulandari)[0][2].icon
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
        icon: LunchData.getQuestions(Region.Indonesia, IndonesiaCharacters.Wulandari)[0][3].icon
      }
    ],
    [IndonesiaQuestions.LunchSnack]: [
      {
        "outcome": "Although it is tasty and inexpensive, excess sugar is detrimental to health and growth; it replaces more nutrient dense foods especially for small children who eat smaller portions.",
        "scores": {
          "Environment": 0,
          "Health": -1,
          "Healthcare": -1,
          "Culture": 1,
          "Climate": 0
        },
        icon: LunchSnackData.getQuestions(IndonesiaCharacters.Wulandari)[0][0].icon
      },
      {
        "outcome": "Though these crackers are made locally and inexpensive, they are very oily and provide very little nutrition",
        "scores": {
          "Environment": 0,
          "Health": -1,
          "Healthcare": -1,
          "Culture": 1,
          "Climate": 0
        },
        icon: LunchSnackData.getQuestions(IndonesiaCharacters.Wulandari)[0][1].icon
      },
      {
        "outcome": "Excess sugar is detrimental to health and growth; it replaces more nutrient dense foods especially for small children who eat smaller portions; juice packets also contribute to packaging waste",
        "scores": {
          "Environment": -1,
          "Health": -2,
          "Healthcare": -2,
          "Culture": -1,
          "Climate": 0
        },
        icon: LunchSnackData.getQuestions(IndonesiaCharacters.Wulandari)[0][2].icon
      },
      {
        "outcome": "Good source of micronutrients; low cost and locally grown.",
        "scores": {
          "Environment": 1,
          "Health": 2,
          "Healthcare": 2,
          "Culture": 0,
          "Climate": 1
        },
        icon: LunchSnackData.getQuestions(IndonesiaCharacters.Wulandari)[0][3].icon
      }
    ],
    [IndonesiaQuestions.Groceries]: [
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
        "outcome": "Local markets supply fresh produce with less packaging, but often fewer choices beyond produce.",
        "scores": {
          "Environment": 1,
          "Health": 1,
          "Healthcare": 1,
          "Culture": 2,
          "Climate": 1
        },
        icon: SliderData.getQuestions(Region.Indonesia, IndonesiaCharacters.Wulandari)[1].icon
      },
      {        
        "scores": {
          "Environment": 0,
          "Health": -1,
          "Healthcare": -1,
          "Culture": -1,
          "Climate": -1
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
        icon: SliderData.getQuestions(Region.Indonesia, IndonesiaCharacters.Wulandari)[3].icon
      }
    ],
    [IndonesiaQuestions.GroceriesShopping]: [
      {
        outcome: "By purchasing more expensive ingredients, she can only buy small portions for her large family and does not have enough extra money to buy fruit or other supplies",
        scores: {
          "Environment": -2,
          "Health": -1,
          "Healthcare": -1,
          "Culture": 0,
          "Climate": -2
        },
        outcomeType: OutcomeType.Culture,
        outcomeDesc: "Food security",
        link: "https://www.greenbrownblue.com/food-and-healthcare-explained/food-security/",
        icon: GroceriesShoppingData.getQuestions(IndonesiaCharacters.Wulandari)[0].icon
      },
      // Easter egg
      {
        scores: {
          "Environment": -2,
          "Health": -1,
          "Healthcare": -1,
          "Culture": 0,
          "Climate": -2
        },
      },
      {        
        outcome: "She purchases only a half portion of rice and sugar today but affords healthy protein and nutrients for her family",
        scores: {
          "Environment": -1,
          "Health": 1,
          "Healthcare": 0,
          "Culture": 1,
          "Climate": 0
        },
        outcomeType: OutcomeType.Health,
        outcomeDesc: "Protein and growth",
        link: "https://www.greenbrownblue.com/food-and-health-explained/protein-needs-in-children/",
        icon: GroceriesShoppingData.getQuestions(IndonesiaCharacters.Wulandari)[2].icon
      },
      {
        outcome: "Good choice! By purchasing lower cost proteins and vegetables and skipping the sugar and rice, she can afford milk for Centia and have extra to spare!",
        scores: {
          "Environment": 0,
          "Health": 1,
          "Healthcare": 1,
          "Culture": 1,
          "Climate": 0
        },
        outcomeType: OutcomeType.Culture,
        outcomeDesc: "Food Insecurity and health outcomes",
        link: "https://www.greenbrownblue.com/food-and-healthcare-explained/food-security/",
        icon: GroceriesShoppingData.getQuestions(IndonesiaCharacters.Wulandari)[3].icon
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
        outcomeDesc: "Local Food"
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
    //         icon: YesNoSocialData.getQuestions(Region.Indonesia, IndonesiaCharacters.Wulandari)[0].icon
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
    //         icon: YesNoSocialData.getQuestions(Region.Indonesia, IndonesiaCharacters.Wulandari)[1].icon
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
    //         icon: YesNoSocialData.getQuestions(Region.Indonesia, IndonesiaCharacters.Wulandari)[2].icon
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
    //         icon: YesNoSocialData.getQuestions(Region.Indonesia, IndonesiaCharacters.Wulandari)[3].icon
    //     }
    // ],
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
        icon: IndonesiaWulandariPlateData.getItems()[0][0].foodInfo.content
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
        icon: IndonesiaWulandariPlateData.getItems()[0][1].foodInfo.content
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
        icon: IndonesiaWulandariPlateData.getItems()[0][2].foodInfo.content
      }
    ],
    [IndonesiaQuestions.DinnerGrains]: [
      {
        "outcome": "High consumption of rice comes at the expense of nutrient diversity; rice is also a contributor of GHG emissions.",
        "scores": {
          "Environment": -1,
          "Health": -1,
          "Healthcare": -1,
          "Culture": 2,
          "Climate": -1
        },
        icon: IndonesiaWulandariPlateData.getItems()[1][0].foodInfo.content
      },
      {
        "outcome": "High consumption of staples come at the expense of nutrient diversity.",
        "scores": {
          "Environment": 0,
          "Health": -1,
          "Healthcare": -1,
          "Culture": 1,
          "Climate": 0
        },
        icon: IndonesiaWulandariPlateData.getItems()[1][1].foodInfo.content
      }
    ],
    [IndonesiaQuestions.DinnerVeggies]: [
        {
            "outcome": "Petai is indiginous to Indonesia and contain protein, vitamins and fiber.",
            "scores": {
                "Environment": 2,
                "Health": 2,
                "Healthcare": 2,
                "Culture": 1,
                "Climate": 2
            },
            icon: IndonesiaWulandariPlateData.getItems()[2][0].foodInfo.content
        },
        {
            "outcome": "Kangkung is rich in Vitamins A and C, and antioxidants. It is a popular local vegetable that is inexpensive.",
            "scores": {
                "Environment": 2,
                "Health": 2,
                "Healthcare": 2,
                "Culture": 1,
                "Climate": 2
            },
            icon: IndonesiaWulandariPlateData.getItems()[2][1].foodInfo.content
        },
        {
            "outcome": "Vegetables provide micronutrients and complement a balanced meal with enough protein.",
            "scores": {
                "Environment": 1,
                "Health": 2,
                "Healthcare": 2,
                "Culture": 1,
                "Climate": 1
            },
            icon: IndonesiaWulandariPlateData.getItems()[2][2].foodInfo.content
        }
    ]
  };
}

export class IndonesiaWulandariScoreData {
  public static get() {
    return Private.scores;
  }
}
