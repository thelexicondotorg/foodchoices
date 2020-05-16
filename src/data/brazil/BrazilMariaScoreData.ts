import { IScoreData, Region, CanadaCharacters, BrazilCharacters } from "../../Types";
import { BrazilQuestions } from "../../score/ScoreTypes";
import { TimeData } from "../TimeData";
import { MCQData } from "../MCQData";
import { LunchData } from "../LunchData";
import { SliderData } from "../SliderData";
import { YesNoSocialData } from "../YesNoSocialData";
import { BrazilGabrielPlateData } from "./BrazilGrabrielPlateData";
import { BrazilMariaPlateData } from "./BrazilMariaPlateData";

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
                icon: TimeData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[0].icon
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
                icon: TimeData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[1].icon
              },
              {
                // tslint:disable-next-line
                "outcome": "Children at Maria's age should not eat added sugar foods. Select another option!",
                "scores": {
                  "Environment": 0,
                  "Health": 0,
                  "Healthcare": 0,
                  "Culture": 0,
                  "Climate": 0
                },
                icon: TimeData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[2].icon
              },
              {
                "outcome": "Infant formulas are ultra-processed foods that should only be offered in specific cases, for example when the mother can no longer breastfeed. Breast milk remains the best choice for Maria's and the planet health!",
                "scores": {
                  "Environment": -1,
                  "Health": 0,
                  "Healthcare": 0,
                  "Culture": -2,
                  "Climate": -1
                },
                icon: TimeData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[3].icon
              }
        ],
        [BrazilQuestions.Snacks1]: [
            {
                "outcome": "Ultra-processed foods (such as breakfast cereals with added sugar and food additives) should not be offered to children under 2 years.Their intrinsic unhealthy characteristics, industrialized mass production and plastic package may impact the people's and planet health.",
                "scores": {
                  "Environment": -2,
                  "Health": -2,
                  "Healthcare": -2,
                  "Culture": -2,
                  "Climate": -2
                },
                icon: MCQData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[0][0].icon
              },
              {
                "outcome": "Yogurt added sugar (colored and artificially flavored) are ultra-processed foods and should not be offered to children under 2 years.",
                "scores": {
                  "Environment": -2,
                  "Health": -2,
                  "Healthcare": -2,
                  "Culture": -2,
                  "Climate": -2
                },
                icon: MCQData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[0][1].icon
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
                icon: MCQData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[0][2].icon
              },
              {
                "outcome": "Salted package crackers (plain or stuffed) are ultra-processed foods. Although they contain cereals, they should not be offered to children because of their intrinsic unhealthy characteristics. Also, their industrialized mass production and plastic package may impact the planet's health.",
                "scores": {
                  "Environment": -2,
                  "Health": -2,
                  "Healthcare": -2,
                  "Culture": -2,
                  "Climate": -2
                },
                icon: MCQData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[0][3].icon
              }
        ],
        [BrazilQuestions.Lunch1]: [
            {
                "outcome": "Best choice! Healthy meals made from fresh or minimally processed foods, seasoned with natural seasonings and no added sugar are the best options. Eating with her family at the table is great. Distractions during meals should be avoided.",
                "scores": {
                  "Environment": 1,
                  "Health": 2,
                  "Healthcare": 2,
                  "Culture": 2,
                  "Climate": 1
                },
                icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[0][0].icon
              },
              {
                "outcome": "Not a good choice! Avoid to feed children with ultra-processed foods. Healthy homemade meals and fruits are the best options for children's and planet health.",
                "scores": {
                  "Environment": -1,
                  "Health": -1,
                  "Healthcare": -1,
                  "Culture": -1,
                  "Climate": -1
                },
                icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[0][1].icon
              },
              {
                "outcome": "Homemade soups are healthy foods, however, liquefied foods are not indicated at this stage. Ultra-processed desserts, such as chocolates and gelatin, should not be part of a child's complementary healthy diet. Distractions during meals should be avoided.",
                "scores": {
                  "Environment": -1,
                  "Health": -1,
                  "Healthcare": -1,
                  "Culture": -1,
                  "Climate": -1
                },
                icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[0][2].icon
              },
              {
                "outcome": "Instant flour (with sugar and food additives) are ultra-processed foods and should not be offered to children under 2 years. Besides their intrinsic unhealthy characteristics, their industrialized mass production and plastic package may impact the planet's health. Distractions during meals should be avoided.",
                "scores": {
                  "Environment": -2,
                  "Health": -2,
                  "Healthcare": -2,
                  "Culture": -2,
                  "Climate": -2
                },
                icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[0][3].icon
              }
        ],
        [BrazilQuestions.Lunch2]: [
            {
                "outcome": "Remember that Maria is only 9 months old and it is not recommended to offer fruit juice to children under 1 year old, even one made with fruit only. Choose another option!",
                "scores": {
                  "Environment": 0,
                  "Health": 0,
                  "Healthcare": 0,
                  "Culture": 0,
                  "Climate": 0
                },
                icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[1][0].icon
              },
              {
                "outcome": "Choose another option! No sugary drinks (like ultra-processed artificial juices and sodas) should be offered to children at this age.",
                "scores": {
                  "Environment": -2,
                  "Health": -2,
                  "Healthcare": -2,
                  "Culture": -2,
                  "Climate": -2
                },
                icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[1][1].icon
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
                icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[1][2].icon
              },
              {
                "outcome": "Choose another option! No sugary drinks (like ultra-processed artificial juices and sodas) should be offered to children at this age.",
                "scores": {
                  "Environment": -2,
                  "Health": -2,
                  "Healthcare": -2,
                  "Culture": -2,
                  "Climate": -2
                },
                icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[1][3].icon
              }
        ],
        [BrazilQuestions.Groceries]: [
            {
                outcome: "Food is the responsibility of the whole family, so everyone should participate in this task! As Maria's parents are family farmers, to grow their own food is the best option to ensure healthy food at fair prices.",
                scores: {
                    "Environment": -1,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": -1,
                    "Climate": -1
                },
                icon: SliderData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[0].icon
            },
            {
                "outcome": "Best choice! Producing your own food is a revolutionary act! Food exchanges between neighbors is also very cool! It is a great way to ensure healthy food at fair prices for Maria's family.",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: SliderData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[1].icon
            },
            {
                "outcome": "Food is the responsibility of the whole family, so everyone should participate in this task! As Maria's parents are family farmers, to grow their own food is the best option to ensure healthy food at fair prices.",
                "scores": {
                    "Environment": -2,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": 1,
                    "Climate": -2
                },
                icon: SliderData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[2].icon
            },
            {
                "outcome": "Food is the responsibility of the whole family, so everyone should participate in this task! As Maria's parents are family farmers, to grow their own food is the best option to ensure healthy food at fair prices.",
                "scores": {
                    "Environment": -1,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": -1,
                    "Climate": -1
                },
                icon: SliderData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[3].icon
            }
        ],
        [BrazilQuestions.Dinner1]: [
            {
                "outcome": "'Pastel de feira' with sugar cane juice is a typical Brazilian snack, however, the pastry is fried (this kind of cooking technique is fat excessively) and the juice is full of sugar…this is not the best choice for a baby meal.",
                "scores": {
                    "Environment": 1,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 2,
                    "Climate": 1
                },
                icon: YesNoSocialData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[0].icon
            }
        ],
        [BrazilQuestions.Dinner2]: [
            {
                "outcome": "Not a good choice. Escape the ultra-processed meals!",
                "scores": {
                    "Environment": -2,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": -2
                },
                icon: YesNoSocialData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[1].icon
            }
        ],
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
                icon: YesNoSocialData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[2].icon
            }
        ],
        [BrazilQuestions.Dinner4]: [
            {
                "outcome": "Bringing a lunch box is a great option! Homemade healthy meals are always the best choice for Maria and her family. For safe transport of the lunch box, always carry in cool boxes, as this keeps the ideal temperature.",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: YesNoSocialData.getQuestions(Region.Brazil, BrazilCharacters.Maria)[3].icon
            }
        ],
        [BrazilQuestions.DinnerProtein]: [
            {
                "outcome": "Eggs from the backyard, yummy! Great choice for Maria's and the panet health!",
                "scores": {
                    "Environment": 1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 1
                },
                icon: BrazilMariaPlateData.getItems()[0][0].foodInfo.content
            },
            {
                "outcome": "Be careful! If the tomato souce is fresh, this is just fine. But about the beef... well... not everyday, OK?",
                "scores": {
                    "Environment": -1,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 1,
                    "Climate": -1
                },
                icon: BrazilMariaPlateData.getItems()[0][1].foodInfo.content
            },
            {
                "outcome": "Not a good choice...this is ultra-processed foods! It is not the best choice for Maria's and the planet health!",
                "scores": {
                    "Environment": -2,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": -2
                },
                icon: BrazilMariaPlateData.getItems()[0][2].foodInfo.content
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
                icon: BrazilMariaPlateData.getItems()[1][0].foodInfo.content
            },
            {
                "outcome": "Unprocessed and rich in fiber. You rock!",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 0,
                    "Climate": 2
                },
                icon: BrazilMariaPlateData.getItems()[1][1].foodInfo.content
            },
            {
                "outcome": "Usually, when one eats instant noodles, eats only that. So, double trouble: a baby eating an ultra-processed unhealthy meal and doesn't eating other foods that could be healthier. Bad choice...",
                "scores": {
                    "Environment": -2,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": -2
                },
                icon: BrazilMariaPlateData.getItems()[1][2].foodInfo.content
            },
            {
              "outcome": "Pasta with sauce it's a quick and good choice. However it is important the sauce to be healthy (as homemade tomato sauce).",
              "scores": {
                  "Environment": 1,
                  "Health": 1,
                  "Healthcare": 1,
                  "Culture": 1,
                  "Climate": 1
              },
              icon: BrazilMariaPlateData.getItems()[1][3].foodInfo.content
          }
        ],
        [BrazilQuestions.DinnerVeggies]: [
            {
                "outcome": "Wonderful choice! This is local food, unprocessed, healthy!",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: BrazilMariaPlateData.getItems()[2][0].foodInfo.content
            },
            {
                "outcome": "No, no, no! Ultra-processed foods should not be offered to children! Next time try some fresh organic vegetables from the family's yard!",
                "scores": {
                  "Environment": -2,
                  "Health": -2,
                  "Healthcare": -2,
                  "Culture": -2,
                  "Climate": -2
                },
                icon: BrazilMariaPlateData.getItems()[2][1].foodInfo.content
            }            
        ]
    };
}

export class BrazilMariaScoreData {
    public static get() {
        return Private.scores;
    }
}
