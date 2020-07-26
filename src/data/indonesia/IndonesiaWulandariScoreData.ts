import { IScoreData, Region, IndonesiaCharacters, OutcomeType } from "../../Types";
import { IndonesiaQuestions } from "../../score/ScoreTypes";
import { TimeData } from "../TimeData";
import { MCQData } from "../MCQData";
import { LunchData } from "../LunchData";
import { SliderData } from "../SliderData";
import { IndonesiaWulandariPlateData } from "./IndonesiaWulandariPlateData";
import { LunchSnackData } from "./LunchSnackData";
import { FruitShoppingData } from "./FruitShoppingData";
import { GroceriesShoppingData } from "./GroceriesShoppingData";
import { StackingData } from "../../gamelets/stacking/StackingData";

// tslint:disable:object-literal-key-quotes
// tslint:disable:max-line-length
namespace Private {
  export const scores: {
    [questionId: string]: IScoreData[]
  } = {
    [IndonesiaQuestions.Breakfast]: [
      {
        "outcome": "The fortified milk provides good nutrition for growth; however, rice has a low nutritional value and contributes the bulk of GHG emissions from food in Indonesia. Dairy also has a high climate footprint",
        "scores": {
          "Environment": -1,
          "Health": 1,
          "Healthcare": 1,
          "Culture": 1,
          "Climate": -1
        },
        icon: TimeData.getQuestions(Region.Indonesia, IndonesiaCharacters.Wulandari)[0].icon,
        outcomeDesc: "Undernutrition",
        outcomeType: OutcomeType.Health,
        link: "https://www.greenbrownblue.com/food-and-health-explained/undernutrition-problem/"
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
        icon: TimeData.getQuestions(Region.Indonesia, IndonesiaCharacters.Wulandari)[1].icon,
        outcomeDesc: "Micronutrients",
        outcomeType: OutcomeType.Health,
        link: "https://www.greenbrownblue.com/food-and-health-explained/vegetables-nutrition/"
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
        icon: TimeData.getQuestions(Region.Indonesia, IndonesiaCharacters.Wulandari)[2].icon,
        outcomeDesc: "Instant Noodles",
        outcomeType: OutcomeType.Health,
        link: "https://www.greenbrownblue.com/food-and-health-explained/instant-noodles-vs-spaghetti/"
      },
      // Easter egg
      {
        "scores": {
          "Environment": 0,
          "Health": 0,
          "Healthcare": 0,
          "Culture": 0,
          "Climate": 0
        }
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
        icon: MCQData.getQuestions(Region.Indonesia, IndonesiaCharacters.Wulandari)[0][0].icon,
        outcomeDesc: "Breastfeeding",
        outcomeType: OutcomeType.Health,
        link: "https://www.greenbrownblue.com/food-and-health-explained/breastfeeding-formulas/"
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
        icon: MCQData.getQuestions(Region.Indonesia, IndonesiaCharacters.Wulandari)[0][1].icon,
        outcomeDesc: "Protein and growth",
        outcomeType: OutcomeType.Health,
        link: "https://www.greenbrownblue.com/food-and-health-explained/protein-needs-in-children/"
      },
      // Easter egg
      {
        "outcome": "Even though this is a healthy option, eggs are expensive to purchase, and their few hens do not lay eggs daily.",
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
          "Climate": 0
        },
        icon: MCQData.getQuestions(Region.Indonesia, IndonesiaCharacters.Wulandari)[0][3].icon,
        outcomeDesc: "Sugar sweetened beverages",
        outcomeType: OutcomeType.Health,
        link: "https://www.greenbrownblue.com/food-and-health-explained/drink-less-soda/"
      }
    ],
    [IndonesiaQuestions.Lunch1]: [
      {
        "outcome": "Tofu is a good souce of protein,  an local tofu is affordable and better for climate and environment; however, some tofu is imported.",
        "scores": {
          "Environment": 1,
          "Health": 1,
          "Healthcare": 1,
          "Culture": 2,
          "Climate": 0
        },
        icon: LunchData.getQuestions(Region.Indonesia, IndonesiaCharacters.Wulandari)[0][0].icon,
        outcomeDesc: "Tofu and tempeh",
        outcomeType: OutcomeType.Environment,
        link: "https://www.greenbrownblue.com/food-and-environment-explained/soybean-impact/"
      },
      {
        "outcome": "In Indonesia, some types of fish (snapper, grouper) are at risk of overfishing. Aquaculture also has environmental issues related to fish feed, use of antibiotics and chemicals.",
        "scores": {
          "Environment": -1,
          "Health": 1,
          "Healthcare": 1,
          "Culture": 2,
          "Climate": -1
        },
        icon: LunchData.getQuestions(Region.Indonesia, IndonesiaCharacters.Wulandari)[0][1].icon,
        outcomeDesc: "Sustainable fishing",
        outcomeType: OutcomeType.Environment,
        link: "https://www.greenbrownblue.com/food-and-environment-explained/seafood-climate-change/"
      },
      {
        "outcome": "Spinach is locally grown and does not require a lot of inputs; it is good source of micronutrients yet insufficient calories and protein on its own.",
        "scores": {
          "Environment": 2,
          "Health": 1,
          "Healthcare": 1,
          "Culture": 1,
          "Climate": 2
        },
        icon: LunchData.getQuestions(Region.Indonesia, IndonesiaCharacters.Wulandari)[0][2].icon,
        outcomeDesc: "Leafy greens",
        outcomeType: OutcomeType.Health,
        link: "https://www.greenbrownblue.com/food-and-health-explained/which-vegetables/"
      },
      {
        "outcome": "Although these are convenient and inexpensive, excess sugar is detrimental to health and growth, which replaces more nutrient dense foods especially for small children who eat smaller portions.",
        "scores": {
          "Environment": 0,
          "Health": -1,
          "Healthcare": -1,
          "Culture": 1,
          "Climate": 0
        },
        icon: LunchData.getQuestions(Region.Indonesia, IndonesiaCharacters.Wulandari)[0][3].icon,
        outcomeDesc: "Time, tech, determinants of food choices",
        outcomeType: OutcomeType.Culture,
        link: "https://www.greenbrownblue.com/food-and-culture-explained/busy-lifestyles-impact/"
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
        icon: LunchSnackData.getQuestions(IndonesiaCharacters.Wulandari)[0][0].icon,
        outcomeDesc: "Sugar",
        outcomeType: OutcomeType.Health,
        link: "https://www.greenbrownblue.com/food-and-health-explained/sugar/"
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
        icon: LunchSnackData.getQuestions(IndonesiaCharacters.Wulandari)[0][1].icon,
        outcomeDesc: "Food insecurity",
        outcomeType: OutcomeType.Culture,
        link: "https://www.greenbrownblue.com/food-choices-for-a-healthy-planet-explained/food-insecurity/"
      },
      {
        "outcome": "Excess sugar is detrimental to health and growth; it replaces more nutrient dense foods especially for small children who eat smaller portions. Juice packets also contribute to packaging waste",
        "scores": {
          "Environment": -1,
          "Health": -2,
          "Healthcare": -2,
          "Culture": -1,
          "Climate": 0
        },
        icon: LunchSnackData.getQuestions(IndonesiaCharacters.Wulandari)[0][2].icon,
        outcomeDesc: "Sugar",
        outcomeType: OutcomeType.Health,
        link: "https://www.greenbrownblue.com/food-and-health-explained/sugar/"
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
        icon: LunchSnackData.getQuestions(IndonesiaCharacters.Wulandari)[0][3].icon,
        outcomeDesc: "Micronutrients",
        outcomeType: OutcomeType.Health,
        link: "https://www.greenbrownblue.com/food-and-health-explained/vegetables-nutrition/"
      }
    ],
    [IndonesiaQuestions.Groceries]: [
      
      {
        "outcome": "Local markets supply fresh produce with less packaging, but often have fewer choices beyond produce.",
        "scores": {
          "Environment": 1,
          "Health": 1,
          "Healthcare": 1,
          "Culture": 2,
          "Climate": 1
        },
        icon: SliderData.getQuestions(Region.Indonesia, IndonesiaCharacters.Wulandari)[0].icon,
        outcomeDesc: "Local foods",
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
        icon: SliderData.getQuestions(Region.Indonesia, IndonesiaCharacters.Wulandari)[1].icon,
        outcomeDesc: "Shopping",
        outcomeType: OutcomeType.Culture,
        link: "https://www.greenbrownblue.com/food-and-culture-explained/food-retail/"
      },
      // easter egg
      {        
        "scores": {
          "Environment": 0,
          "Health": -1,
          "Healthcare": -1,
          "Culture": -1,
          "Climate": -1
        }
      },
      // easter rgg
      {
        scores: {
          "Environment": -1,
          "Health": -2,
          "Healthcare": -2,
          "Culture": 1,
          "Climate": -2
        }
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
        outcomeDesc: "Food insecurity and health outcomes",
        outcomeType: OutcomeType.Healthcare,
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
        outcomeType: OutcomeType.Health,
        outcomeDesc: "Micronutrients",
        link: "https://www.greenbrownblue.com/food-and-health-explained/vegetables-nutrition/"
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
        outcomeType: OutcomeType.Health,
        outcomeDesc: "Fruits and vegetables",
        link: "https://www.greenbrownblue.com/food-and-health-explained/vegetables-nutrition/"
      }
    ],
    // Stacking
    [IndonesiaQuestions.Dinner]: [
      {
        "outcome": "Centia shares food with family and learns about food choices while she experiences family interaction.",
        "scores": {
          "Environment": 0,
          "Health": 1,
          "Healthcare": 0,
          "Culture": 2,
          "Climate": 0
        },
        icon: StackingData.getOutcomeIcon(),
        outcomeDesc: "Eating with others",
        outcomeType: OutcomeType.Culture,
        link: "https://www.greenbrownblue.com/food-and-culture-explained/eating-together-2/"      
      },
      {
        "outcome": "Centia has less interaction and access to food choices.",
        "scores": {
          "Environment": 0,
          "Health": -1,
          "Healthcare": 0,
          "Culture": -1,
          "Climate": 0
        },
        icon: StackingData.getOutcomeIcon(),
        outcomeDesc: "Eating with others",
        outcomeType: OutcomeType.Culture,
        link: "https://www.greenbrownblue.com/food-and-culture-explained/eating-together-2/"
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
        icon: IndonesiaWulandariPlateData.getItems()[0][0].foodInfo.content,
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
        icon: IndonesiaWulandariPlateData.getItems()[0][1].foodInfo.content,
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
        icon: IndonesiaWulandariPlateData.getItems()[0][2].foodInfo.content,
        outcomeType: OutcomeType.Environment,
        outcomeDesc: "Eggs",
        link: "https://www.greenbrownblue.com/food-and-environment-explained/egg-environmental-impact/"
      }
    ],
    [IndonesiaQuestions.DinnerGrains]: [
      {        
        "outcome": "High consumption of rice comes at the expense of nutrient diversity; rice is also a contributor of greenhouse gas emissions.",
        "scores": {
          "Environment": -1,
          "Health": -1,
          "Healthcare": -1,
          "Culture": 2,
          "Climate": -1
        },
        icon: IndonesiaWulandariPlateData.getItems()[1][0].foodInfo.content,
        outcomeDesc: "Rice and methane",
        outcomeType: OutcomeType.Climate,
        link: "https://www.greenbrownblue.com/food-and-climate-explained/rice-climate-footprint/"
      },
      {
        "outcome": "Processed noodles are low in fiber, protein and micronutrients. High consumption of staples come at the expense of nutrient diversity.",
        "scores": {
          "Environment": 0,
          "Health": -1,
          "Healthcare": -1,
          "Culture": 1,
          "Climate": 0
        },
        icon: IndonesiaWulandariPlateData.getItems()[1][1].foodInfo.content,
        outcomeType: OutcomeType.Health,
        outcomeDesc: "Noodles",
        link: "https://www.greenbrownblue.com/food-and-health-explained/instant-noodles-vs-spaghetti/"
      }
    ],
    [IndonesiaQuestions.DinnerVeggies]: [
      {        
        "outcome": "Kangkung is rich in Vitamins A and C, and antioxidants. It is a popular local vegetable that is inexpensive.",
        "scores": {
          "Environment": 2,
          "Health": 2,
          "Healthcare": 2,
          "Culture": 1,
          "Climate": 2
        },
        icon: IndonesiaWulandariPlateData.getItems()[2][0].foodInfo.content,
        outcomeDesc: "Traditional foods",
        outcomeType: OutcomeType.Culture,
        link: "https://www.greenbrownblue.com/food-and-culture-explained/indonesia-imported-processed-foods/"
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
        icon: IndonesiaWulandariPlateData.getItems()[2][1].foodInfo.content,
        outcomeType: OutcomeType.Health,
        outcomeDesc: "Fruits and vegetables",
        link: "https://www.greenbrownblue.com/food-and-health-explained/vegetables-fruits/"
      },
      {
        "outcome": "Cassava leaves are highly nutritious and complement a balanced meal. It is a locally grown, inexpensive vegetable.",
        "scores": {
          "Environment": 2,
          "Health": 2,
          "Healthcare": 2,
          "Culture": 1,
          "Climate": 2
        },
        icon: IndonesiaWulandariPlateData.getItems()[2][2].foodInfo.content,
        outcomeDesc: "Agrobiodiversity",
        outcomeType: OutcomeType.Environment,
        link: "https://www.greenbrownblue.com/food-and-environment-explained/diversifying-diets/"
      },
      {
        "outcome": "Petai is indiginous to Indonesia and contain protein, vitamins and fiber.",
        "scores": {
          "Environment": 2,
          "Health": 2,
          "Healthcare": 2,
          "Culture": 1,
          "Climate": 2
        },
        icon: IndonesiaWulandariPlateData.getItems()[2][3].foodInfo.content,
        outcomeDesc: "Traditional foods",
        outcomeType: OutcomeType.Culture
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
        icon: IndonesiaWulandariPlateData.getItems()[2][4].foodInfo.content,
        outcomeDesc: "Fruits and vegetables",
        outcomeType: OutcomeType.Health,
        link: "https://www.greenbrownblue.com/food-and-health-explained/vegetables-fruits/"
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
        icon: IndonesiaWulandariPlateData.getItems()[2][5].foodInfo.content,
        outcomeDesc: "Fruits and vegetables",
        outcomeType: OutcomeType.Health,
        link: "https://www.greenbrownblue.com/food-and-health-explained/vegetables-fruits/"
      }
    ]
  };
}

export class IndonesiaWulandariScoreData {
  public static get() {
    return Private.scores;
  }
}
