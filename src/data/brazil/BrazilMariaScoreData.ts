import { IScoreData, Region, CanadaCharacters, BrazilCharacters, OutcomeType } from "../../Types";
import { BrazilQuestions } from "../../score/ScoreTypes";
import { TimeData } from "../TimeData";
import { MCQData } from "../MCQData";
import { LunchData } from "../LunchData";
import { SliderData } from "../SliderData";
import { YesNoSocialData } from "../YesNoSocialData";
import { BrazilMariaPlateData } from "./BrazilMariaPlateData";
import { StackingData } from "../../gamelets/stacking/StackingData";

// tslint:disable:object-literal-key-quotes
// tslint:disable:max-line-length
namespace Private {
  export const scores: {
    [questionId: string]: IScoreData[]
  } = {
    [BrazilQuestions.Breakfast]: [
      {
        "outcome": "Although it is a traditional breakfast, children under 2 years can not eat any sugar and ultra-processed foods (such as margarine). Try another option.",
        "scores": {
          "Environment": 1,
          "Health": 1,
          "Healthcare": 1,
          "Culture": 1,
          "Climate": 1
        },
        icon: TimeData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[0].icon,
        outcomeDesc: "breastfeeding",
        outcomeType: OutcomeType.Health,
        link: "https://www.greenbrownblue.com/food-and-health-explained/breastfeeding-formulas/"
      },
      {
        "outcome": "Great choice! Breast milk remains an important food and should be offered until 2 years of age, whenever the child wants.",
        "scores": {
          "Environment": 2,
          "Health": 2,
          "Healthcare": 2,
          "Culture": 2,
          "Climate": 2
        },
        icon: TimeData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[1].icon,
        outcomeDesc: "breastfeeding",
        outcomeType: OutcomeType.Health,
        link: "https://www.greenbrownblue.com/food-and-health-explained/breastfeeding-formulas/"
      },
      // Easter egg
      {
        "outcome": "Children at Maria's age should not eat added sugar foods. Select another option!",
        "scores": {
          "Environment": 0,
          "Health": 0,
          "Healthcare": 0,
          "Culture": 0,
          "Climate": 0
        }
      },
      {
        "outcome": "Infant formulas are ultra-processed foods that should only be offered in specific cases, such as when the mother can no longer breastfeed. Breast milk is the best choice for Maria's health and the planet's health!",
        "scores": {
          "Environment": -1,
          "Health": 0,
          "Healthcare": 0,
          "Culture": -2,
          "Climate": -1
        },
        icon: TimeData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[3].icon,
        outcomeDesc: "breastfeeding",
        outcomeType: OutcomeType.Health,
        link: "https://www.greenbrownblue.com/food-and-health-explained/breastfeeding-formulas/"
      }
    ],
    [BrazilQuestions.Snacks1]: [
      {
        "outcome": "Ultra-processed foods (such as breakfast cereals with added sugar and food additives) should not be offered to children under 2 years.",
        "scores": {
          "Environment": -2,
          "Health": -2,
          "Healthcare": -2,
          "Culture": -2,
          "Climate": -2
        },
        icon: MCQData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[0][0].icon,
        outcomeDesc: "ultra-processed foods",
        outcomeType: OutcomeType.Health,
        link: "https://www.greenbrownblue.com/food-and-health-explained/minimally-processed-vs-processed/"
      },
      {
        "outcome": "Colored and artifically flavored yogurts that have added sugar are ultra-processed foods and should not be offered to children under 2 years.",
        "scores": {
          "Environment": -2,
          "Health": -2,
          "Healthcare": -2,
          "Culture": -2,
          "Climate": -2
        },
        icon: MCQData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[0][1].icon,
        outcomeDesc: "Plastics and packaging",
        outcomeType: OutcomeType.Environment,
        link: "https://www.greenbrownblue.com/food-and-environment-explained/plastic-waste/"
      },
      {
        "outcome": "Good choice! In addition to being healthy, it is more economical to eat fruits from the family's yard.",
        "scores": {
          "Environment": 2,
          "Health": 2,
          "Healthcare": 2,
          "Culture": 2,
          "Climate": 2
        },
        icon: MCQData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[0][2].icon,
        outcomeDesc: "Seasonal foods",
        outcomeType: OutcomeType.Climate,
        link: "https://www.greenbrownblue.com/food-and-climate-explained/buy-local-climate/"
      },
      {
        "outcome": "Salted package crackers (plain or stuffed) are ultra-processed foods. Although they contain cereals, they should not be offered to children because of their unhealthy characteristics. Also, their industrialized mass production and plastic package may be detrimental to the planet's health.",
        "scores": {
          "Environment": -2,
          "Health": -2,
          "Healthcare": -2,
          "Culture": -2,
          "Climate": -2
        },
        icon: MCQData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[0][3].icon,
        outcomeDesc: "sodium",
        outcomeType: OutcomeType.Health,
        link: "https://www.greenbrownblue.com/food-and-health-explained/salt/"
      }
    ],
    [BrazilQuestions.Lunch1]: [
      {
        "outcome": "Best choice! Healthy meals made from fresh or minimally processed foods, seasoned with natural seasonings and without added sugar are the best options. Eating with her family at the table is great and distractions during meals should be avoided.",
        "scores": {
          "Environment": 1,
          "Health": 2,
          "Healthcare": 2,
          "Culture": 2,
          "Climate": 1
        },
        icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[0][0].icon,
        outcomeDesc: "Balanced meal",
        outcomeType: OutcomeType.Health,
        link: "https://www.greenbrownblue.com/food-and-health-explained/balanced-meal-importance/"
      },
      {
        "outcome": "Not a good choice! Avoid feeding children ultra-processed foods. Healthy homemade meals and fruits and vegetables are much better options.",
        "scores": {
          "Environment": -1,
          "Health": -1,
          "Healthcare": -1,
          "Culture": -1,
          "Climate": -1
        },
        icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[0][1].icon,
        outcomeDesc: "ultra-processed foods",
        outcomeType: OutcomeType.Health,
        link: "https://www.greenbrownblue.com/food-and-health-explained/minimally-processed-vs-processed/"
      },
      {
        "outcome": "Homemade soups are healthy but not needed at this stage. Jello is an ultra-processed dessert and should not be part of a child's healthy diet.",
        "scores": {
          "Environment": 0,
          "Health": -1,
          "Healthcare": -1,
          "Culture": -1,
          "Climate": 0
        },
        icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[0][2].icon,
        outcomeDesc: "Food Choices",
        outcomeType: OutcomeType.Health,
        link: "https://www.greenbrownblue.com/food-and-health-explained/meat-alternatives/"
      },
      {
        "outcome": "Instant flour (with sugar and food additives) is an ultra-processed food and should not be offered to children under 2 years. They are not only unhealthy, but their industrialized mass production and plastic package has a negative impact the planet's health. Distractions during meals should also be avoided.",
        "scores": {
          "Environment": -2,
          "Health": -2,
          "Healthcare": -2,
          "Culture": -2,
          "Climate": -2
        },
        icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[0][3].icon,
        outcomeDesc: "Tech, time, cost and other determinants of food choices",
        outcomeType: OutcomeType.Culture,
        link: "https://www.greenbrownblue.com/food-and-culture-explained/busy-lifestyles-impact/"
      }
    ],
    [BrazilQuestions.Lunch1Drinks]: [
      // Easter egg
      {
        "scores": {
          "Environment": 0,
          "Health": 0,
          "Healthcare": 0,
          "Culture": 0,
          "Climate": 0
        }
      },
      {
        "outcome": "Sodas and artifical juices are full of sugar and should not be offered to children at this age.",
        "scores": {
          "Environment": -2,
          "Health": -2,
          "Healthcare": -2,
          "Culture": -2,
          "Climate": -2
        },
        icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[1][1].icon,
        outcomeDesc: "soda",
        outcomeType: OutcomeType.Healthcare,
        link: "https://www.greenbrownblue.com/food-and-health-explained/drink-less-soda/"
      },
      {
        "outcome": "Great choice! Water is the always the best option to quench thirst. In addition to breast milk, it is very important for a baby of Maria's age to drink clean water throughout the day.",
        "scores": {
          "Environment": 2,
          "Health": 2,
          "Healthcare": 2,
          "Culture": 2,
          "Climate": 2
        },
        icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[1][2].icon,
        outcomeDesc: "Drinking water",
        outcomeType: OutcomeType.Environment,
        link: "https://www.greenbrownblue.com/food-and-environment-explained/safe-drinking-water/"
      },
      {
        "outcome": "Sodas and artifical juices are full of sugar and should not be offered to children at this age.",
        "scores": {
          "Environment": -2,
          "Health": -2,
          "Healthcare": -2,
          "Culture": -2,
          "Climate": -2
        },
        icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[1][3].icon,
        outcomeDesc: "sugar",
        outcomeType: OutcomeType.Health,
        link: "https://www.greenbrownblue.com/food-and-health-explained/sugar/"
      }
    ],
    // Stacking
    [BrazilQuestions.Lunch2]: [
      {
        "outcome": " In addition to what you eat, it's important to watch how you eat. Eating together with the family is an important social act for the baby.",
        "scores": {
          "Environment": 1,
          "Health": 1,
          "Healthcare": 0,
          "Culture": 1,
          "Climate": 0
        },
        icon: StackingData.getOutcomeIcon(),
        outcomeDesc: "Eating with others",
        outcomeType: OutcomeType.Culture,
        link: "https://www.greenbrownblue.com/food-and-culture-explained/eating-together-2/"
      },
      {
        "outcome": "A baby at Maria's age can already eat by herself (with a spoon or with her hands), so she can eat sitting in the baby highchair, but her parents should be eat the table with her.",
        "scores": {
          "Environment": 0,
          "Health": -1,
          "Healthcare": 0,
          "Culture": 0,
          "Climate": 0
        },
        icon: StackingData.getOutcomeIcon(),
        outcomeDesc: "Eating with others",
        outcomeType: OutcomeType.Culture,
        link: "https://www.greenbrownblue.com/food-and-culture-explained/eating-together-2/"
      },
      {
        "outcome": "Distractions during meals (such as cell phone, television, etc.) can lead to less healthy eating habits. Avoid whenever possible!",
        "scores": {
          "Environment": 0,
          "Health": -1,
          "Healthcare": 0,
          "Culture": -1,
          "Climate": 0
        },
        icon: StackingData.getOutcomeIcon(),
        outcomeDesc: "Eating with others",
        outcomeType: OutcomeType.Health,
        link: "https://www.greenbrownblue.com/food-and-culture-explained/brazilians-eat-with-others/"      
      },
      {
        "outcome": "Eating regular meals is important, especially for a growing baby.",
        "scores": {
          "Environment": 0,
          "Health": -2,
          "Healthcare": 0,
          "Culture": -1,
          "Climate": 0
        },
        icon: StackingData.getOutcomeIcon(),
        outcomeDesc: "Tech, time, cost and other determinants of food choices",
        outcomeType: OutcomeType.Culture,
        link: "https://www.greenbrownblue.com/food-and-culture-explained/busy-lifestyles-impact/"      
      },
    ],
    [BrazilQuestions.Groceries]: [
      {
        outcome: "Nowadays producing your own food is a revolutionary act! So it's great for Maria's family to grow their own food and raise some animals to feed the family. Food exchanges between neighbors is also very cool. In addition to tightening social relationships, it is a great way to ensure healthy food at fair prices for all families.",
        scores: {
          "Environment": 2,
          "Health": 2,
          "Healthcare": 1,
          "Culture": 2,
          "Climate": 1
        },
        icon: SliderData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[0].icon,
        outcomeDesc: "Locally grown food",
        outcomeType: OutcomeType.Culture,
        link: "https://www.greenbrownblue.com/food-and-culture-explained/eating-locally/"
      },
      {
        "outcome": "Food is the responsibility of the whole family, so everyone should participate in this task. Dividing tasks when preparing food is important, makes work easier, and enables the family to cook healthy foods quickly.",
        "scores": {
          "Environment": -1,
          "Health": -1,
          "Healthcare": -1,
          "Culture": -1,
          "Climate": -1
        },
        icon: SliderData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[1].icon,
        outcomeDesc: "Food marketing",
        outcomeType: OutcomeType.Culture,
        link: "https://www.greenbrownblue.com/food-and-culture-explained/food-marketing/"
      },
      {
        "outcome": "Ultra-processed foods (such as meat sold already seasoned with ultra-processed spice mix, sausages, nuggets, crackers, pastries, instant noodles, packet breads) are unhealthy and should not be part of children's diet.",
        "scores": {
          "Environment": -2,
          "Health": -2,
          "Healthcare": -2,
          "Culture": -1,
          "Climate": -2
        },
        icon: SliderData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[2].icon,
        outcomeDesc: "Food Access",
        outcomeType: OutcomeType.Culture,
        link: "https://www.greenbrownblue.com/food-and-healthcare-explained/food-security/"
      },
      {
        "outcome": "Food is the responsibility of the whole family, so everyone should participate in this task. Dividing tasks when preparing food is important, makes work easier, and enables the family to cook healthy foods quickly.",
        "scores": {
          "Environment": -1,
          "Health": -1,
          "Healthcare": -1,
          "Culture": 1,
          "Climate": -1
        },
        icon: SliderData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[3].icon,
        outcomeDesc: "shopping",
        outcomeType: OutcomeType.Culture,
        link: "https://www.greenbrownblue.com/food-and-culture-explained/food-retail/"
      }
    ],
    [BrazilQuestions.Dinner1]: [
      {
        "outcome": "Pastel de feira' with sugar cane juice is a typical Brazilian snack. However, the pastry is fried and the juice is full of sugar…this is not the best choice for a baby meal.",
        "scores": {
          "Environment": 1,
          "Health": -2,
          "Healthcare": -2,
          "Culture": 1,
          "Climate": 1
        },
        icon: YesNoSocialData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[0].icon,
        outcomeDesc: "Fried foods",
        outcomeType: OutcomeType.Health,
        link: "https://www.greenbrownblue.com/food-and-health-explained/fried-food/"
      }
    ],
    [BrazilQuestions.Dinner2]: [
      {
        "outcome": "Not a good choice. It is better to avoid ultra-processed meals!",
        "scores": {
          "Environment": -2,
          "Health": -2,
          "Healthcare": -2,
          "Culture": -2,
          "Climate": -2
        },
        icon: YesNoSocialData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[1].icon,
        outcomeDesc: "Fast food",
        outcomeType: OutcomeType.Healthcare,
        link: "https://www.greenbrownblue.com/food-and-healthcare-explained/obesity-fast-food/"
      }
    ],
    // Easter egg
    [BrazilQuestions.Dinner3]: [
      {
        "outcome": "Fancy restaurants often serve healthy dishes. But Maria's family do not have money enough to attend these places. Choose another option!",
        "scores": {
          "Environment": 0,
          "Health": 0,
          "Healthcare": 0,
          "Culture": 0,
          "Climate": 0
        },
      }
    ],
    [BrazilQuestions.Dinner4]: [
      {
        "outcome": "Great option! Homemade healthy meals are always the best choice for Maria and her family.",
        "scores": {
          "Environment": 2,
          "Health": 2,
          "Healthcare": 2,
          "Culture": 2,
          "Climate": 2
        },
        icon: YesNoSocialData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[3].icon,
        outcomeDesc: "Cooking skills",
        outcomeType: OutcomeType.Culture,
        link: "https://www.greenbrownblue.com/food-and-culture-explained/cooking-skills/"
      }
    ],
    [BrazilQuestions.DinnerProtein]: [
      {
        "outcome": "Eggs from the backyard, yummy! This is a great choice for Maria's health and the planet's health!",
        "scores": {
          "Environment": 1,
          "Health": 2,
          "Healthcare": 2,
          "Culture": 2,
          "Climate": 1
        },
        icon: BrazilMariaPlateData.getItems()[0][0].foodInfo.content,
        outcomeType: OutcomeType.Culture,
        outcomeDesc: "Locally grown food",
        link: "https://www.greenbrownblue.com/food-and-culture-explained/eating-locally/"
      },
      {
        "outcome": "Be careful! If the tomato souce is fresh, this is just fine, but beef has a large carbon footprint and should be consumed with moderation.",
        "scores": {
          "Environment": -1,
          "Health": 1,
          "Healthcare": 1,
          "Culture": 1,
          "Climate": -1
        },
        icon: BrazilMariaPlateData.getItems()[0][1].foodInfo.content,
        outcomeDesc: "Carbon Footprint",
        outcomeType: OutcomeType.Climate,
        link: "https://www.greenbrownblue.com/food-and-climate-explained/carbon-footprint/"
      },
      {
        "outcome": "Not a good choice...hot dogs are ultra-processed! They are not the best choice for Maria's health or the planet's health!",
        "scores": {
          "Environment": -2,
          "Health": -2,
          "Healthcare": -2,
          "Culture": -2,
          "Climate": -2
        },
        icon: BrazilMariaPlateData.getItems()[0][2].foodInfo.content,
        outcomeType: OutcomeType.Climate,
        outcomeDesc: "Carbon Footprint",
        link: "https://www.greenbrownblue.com/food-and-climate-explained/carbon-footprint/"
      }
    ],
    [BrazilQuestions.DinnerGrains]: [
      {
        "outcome": "Good choice! This is typical in Brazilian dishes. It's real food!",
        "scores": {
          "Environment": 1,
          "Health": 2,
          "Healthcare": 2,
          "Culture": 2,
          "Climate": 1
        },
        icon: BrazilMariaPlateData.getItems()[1][0].foodInfo.content,
        outcomeDesc: "Whole grains",
        outcomeType: OutcomeType.Health,
        link: "https://www.greenbrownblue.com/food-and-health-explained/whole-grain-meaning/"
      },
      {
        "outcome": "Brown rice is unprocessed and rich in fiber. You rock!",
        "scores": {
          "Environment": 2,
          "Health": 2,
          "Healthcare": 2,
          "Culture": 1,
          "Climate": 2
        },
        icon: BrazilMariaPlateData.getItems()[1][1].foodInfo.content,
        outcomeDesc: "Whole grains",
        outcomeType: OutcomeType.Health,
        link: "https://www.greenbrownblue.com/food-and-health-explained/whole-grain-meaning/"
      },
      {
        "outcome": "Instant noodles are ultra-processed and unhealthy. They are an especially bad choice when eaten alone and not paired with healthier foods such as legumes and vegetables. ",
        "scores": {
          "Environment": -2,
          "Health": -2,
          "Healthcare": -2,
          "Culture": -2,
          "Climate": -2
        },
        icon: BrazilMariaPlateData.getItems()[1][2].foodInfo.content,
        outcomeDesc: "Instant noodles",
        outcomeType: OutcomeType.Health,
        link: "https://www.greenbrownblue.com/food-and-health-explained/instant-noodles-vs-spaghetti/"
      },
      {
        "outcome": "Pasta with sauce is fast and easy to make. Include vegetables in your sauce! Homemade tomato sauce is a healthy option.",
        "scores": {
          "Environment": 1,
          "Health": 1,
          "Healthcare": 1,
          "Culture": 1,
          "Climate": 1
        },
        icon: BrazilMariaPlateData.getItems()[1][3].foodInfo.content,
        outcomeDesc: "Cooking skills",
        outcomeType: OutcomeType.Culture,
        link: "https://www.greenbrownblue.com/food-and-culture-explained/cooking-skills/"
      }
    ],
    [BrazilQuestions.DinnerVeggies]: [
      {
        "outcome": "Wonderful choice! Eating food from your backyard is as local as you can get and vegetables are full of healthy nutrients.",
        "scores": {
          "Environment": 2,
          "Health": 2,
          "Healthcare": 2,
          "Culture": 2,
          "Climate": 2
        },
        icon: BrazilMariaPlateData.getItems()[2][0].foodInfo.content,
        outcomeDesc: "Locally grown food",
        outcomeType: OutcomeType.Culture,
        link: "https://www.greenbrownblue.com/food-and-culture-explained/eating-locally/"
      },
      {
        "outcome": "Good choice! Remember that it is important corretly wash these leaves before eating.",
        "scores": {
          "Environment": 2,
          "Health": 2,
          "Healthcare": 2,
          "Culture": 2,
          "Climate": 2
        },
        icon: BrazilMariaPlateData.getItems()[2][1].foodInfo.content,
        outcomeType: OutcomeType.Healthcare,
        outcomeDesc: "Washing vegetables",
        link: "https://www.greenbrownblue.com/food-and-healthcare-explained/washing-vegetables/"
      },
      {
        "outcome": "Ultra-processed foods should not be offered to children. Next time try to eat some fresh organic vegetables from the family's yard.",
        "scores": {
          "Environment": -2,
          "Health": -2,
          "Healthcare": -2,
          "Culture": -2,
          "Climate": -2
        },
        icon: BrazilMariaPlateData.getItems()[2][2].foodInfo.content,
        outcomeDesc: "Saturated and trans fats",
        outcomeType: OutcomeType.Health,
        link: "https://www.greenbrownblue.com/food-and-health-explained/saturated-trans-fats/"
      }
    ]
  };
}

export class BrazilMariaScoreData {
  public static get() {
    return Private.scores;
  }
}
