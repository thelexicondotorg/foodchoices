import { IScoreData, Region, CanadaCharacters, BrazilCharacters } from "../../Types";
import { BrazilQuestions } from "../../score/ScoreTypes";
import { TimeData } from "../TimeData";
import { MCQData } from "../MCQData";
import { LunchData } from "../LunchData";
import { YesNoSocialData } from "../YesNoSocialData";
import { BrazilSandraPlateData } from "./BrazilSandraPlateData";
import { SliderData } from "../SliderData";

// tslint:disable:object-literal-key-quotes max-line-length
namespace Private {
    export const scores: {
        [questionId: string]: IScoreData[]
    } = {
        [BrazilQuestions.Breakfast]: [
            {
                "outcome": "Be careful about the brand's claim (light/diet), be critical sense. These are ultraprocessed food",
                "scores": {
                    "Environment": 0,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": 0
                },
                icon: TimeData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[0].icon
            },
            {
                "outcome": "No! Avoid ultra-processed food, they are nutritionally unbalanced",
                "scores": {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": 0
                },
                icon: TimeData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[1].icon
            },
            {
                "outcome": "Pay attention! Eat regularly and with attention, in appropriate places and when its possible with company.",
                "scores": {
                    "Environment": 0,
                    "Health": -1,
                    "Healthcare": -2,
                    "Culture": -1,
                    "Climate": 0
                },
                icon: TimeData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[2].icon
            },
            {
                "outcome": "Good choice! Enjoy typical meals from brazilian culture.",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: TimeData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[3].icon
            }
        ],
        [BrazilQuestions.Snacks1]: [
            {
                "outcome": "This is an Ultra-processed foods that pretend to be good, but is full of sugar. Do not forget to read the label.",
                "scores": {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": -1
                },
                icon: MCQData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[0][0].icon
            },
            {
                "outcome": "Good choice! Make unprocessed and minimally processed foods the basis of your food.",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: MCQData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[0][1].icon
            },
            {
                "outcome": "Pay attention! The lack of studies on other long-term effects on health strengthen the position that artificially sweetened beverages(ASBs) should not be promoted as part of a healthy diet",
                "scores": {
                    "Environment": -1,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": -2,
                    "Climate": 0
                },
                icon: MCQData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[0][2].icon
            },
            {
                "outcome": "Not a good choice. The cracker and sweetened are ultra-processed foods. To have a healthy food you should prefer in natura e minimally processed foods.",
                "scores": {
                    "Environment": 0,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": 0
                },
                icon: MCQData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[0][3].icon
            }
        ],
        [BrazilQuestions.Lunch1]: [
            {
                "outcome": "Good choice! Preferably choose places that make fresh meals.",
                "scores": {
                    "Environment": 1,
                    "Health": 1,
                    "Healthcare": 2,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[0][0].icon
            },
            {
                "outcome": "not good !Eat regularly and attention, in appropriate places and when its possible with company. Avoid ultra-processed foods.",
                "scores": {
                    "Environment": 0,
                    "Health": -1,
                    "Healthcare": -2,
                    "Culture": -1,
                    "Climate": 0
                },
                icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[0][1].icon
            },
            {
                "outcome": "Good idea! Plan the use of time to make healthy eating.",
                "scores": {
                    "Environment": 0,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 1
                },
                icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[0][2].icon
            },
            {
                "outcome": "Nice pick! Eat less meat its a good way to adopt of environmentally friendly practices.",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[0][3].icon
            }
        ],
        [BrazilQuestions.Lunch2]: [
            {
                // "outcome": "ok",
                "scores": {
                    "Environment": 0,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 0,
                    "Climate": 0
                },
                // icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[1][0].icon
            },
            {
                "outcome": "Be carefully! Eating the whole fruit is the best way to intake more fiber. For thirst prefer water!",
                "scores": {
                    "Environment": 0,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 0,
                    "Climate": 0
                },
                icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[1][1].icon
            },
            {
                "outcome": "Watch out! Sugar beverages are associated with noncommunicable chronic diseases. Avoid ultra-processed foods.",
                "scores": {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": -2
                },
                icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[1][2].icon
            },
            {
                "outcome": "Good choice!",
                "scores": {
                    "Environment": 0,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 0,
                    "Climate": 0
                },
                icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[1][3].icon
            }
        ],
        [BrazilQuestions.Groceries]: [
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
                icon: SliderData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[1].icon
            },
            {
                "outcome": "Shop in places that offer fresh or minimally processed varieties of food",
                "scores": {
                    "Environment": -1,
                    "Health": 0,
                    "Healthcare": -1,
                    "Culture": -1,
                    "Climate": 0
                },
                icon: SliderData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[2].icon
            },
            {
                "outcome": "Share the responsibilities of the food with family",
                "scores": {
                    "Environment": 0,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 0
                },
                icon: SliderData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[3].icon
            }
        ],
        [BrazilQuestions.Dinner1]: [
            {
                "outcome": "Bad idea! Avoid ultra-processed foods.",
                "scores": {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": -1
                },
                icon: YesNoSocialData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[0].icon
            }
        ],
        [BrazilQuestions.Dinner2]: [
            {
                "outcome": "Cool! Enjoy typical meals from brazilian culture",
                "scores": {
                    "Environment": 0,
                    "Health": 1,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 1
                },
                icon: YesNoSocialData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[1].icon
            }
        ],
        [BrazilQuestions.Dinner3]: [
            {
                "outcome": "Bad idea! Avoid ultra-processed foods.",
                "scores": {
                    "Environment": -2,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": -1
                },
                icon: YesNoSocialData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[2].icon
            }
        ],
        [BrazilQuestions.Dinner4]: [
            {
                "outcome": "Good choice! To develop, to exercise and share cooking skills its good way to have a healthy food.",
                "scores": {
                    "Environment": 0,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 1
                },
                icon: YesNoSocialData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[3].icon
            }
        ],
        [BrazilQuestions.DinnerProtein]: [
            {
                "outcome": "Should consume with moderation",
                "scores": {
                    "Environment": -1,
                    "Health": 1,
                    "Healthcare": 0,
                    "Culture": 1,
                    "Climate": -2
                },
                icon: BrazilSandraPlateData.getItems()[0][0].foodInfo.content
            },
            {
                "outcome": "Its a tradicional meat from South, but you should consume with moderation",
                "scores": {
                    "Environment": -1,
                    "Health": 0,
                    "Healthcare": 1,
                    "Culture": 1,
                    "Climate": -2
                },
                icon: BrazilSandraPlateData.getItems()[0][1].foodInfo.content
            },
            {
                "outcome": "Nice pick! Eat less meat its a good way to adopt of environmentally friendly practices.",
                "scores": {
                    "Environment": -2,
                    "Health": 1,
                    "Healthcare": 2,
                    "Culture": 0,
                    "Climate": -2
                },
                icon: BrazilSandraPlateData.getItems()[0][2].foodInfo.content
            },
            {
                "outcome": "Pay attention, Ultraprocessed food!Try to read the label if you do not recogonize lots of words, its not a good ideia for dinner.",
                "scores": {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": -1
                },
                icon: BrazilSandraPlateData.getItems()[0][3].foodInfo.content
            }
        ],
        [BrazilQuestions.DinnerGrains]: [
            {
                "outcome": "Good choice! its tradicional food from Brazil",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: BrazilSandraPlateData.getItems()[1][0].foodInfo.content
            },
            {
                "outcome": "Pay attention, Ultraprocessed food!Try to read the label if you do not recogonize lots of words, its not a good ideia for dinner.",
                "scores": {
                    "Environment": 0,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": 0
                },
                icon: BrazilSandraPlateData.getItems()[1][1].foodInfo.content
            },
            {
                "outcome": "Nice Pick! Be in natura and minimally processed food most part of you meal",
                "scores": {
                    "Environment": 1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: BrazilSandraPlateData.getItems()[1][2].foodInfo.content
            }
        ],
        [BrazilQuestions.DinnerVeggies]: [
            {
                "outcome": "Good choice! This is typical in Brazilian dishes. It's real food!",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: BrazilSandraPlateData.getItems()[2][0].foodInfo.content
            },
            {
                "outcome": "Good choice! This is typical in Brazilian dishes. It's real food!",
                "scores": {
                    "Environment": 0,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 1
                },
                icon: BrazilSandraPlateData.getItems()[2][1].foodInfo.content
            },
            {
                "outcome": "Watch out! The sauce will screw up your vegetable.",
                "scores": {
                    "Environment": 0,
                    "Health": -1,
                    "Healthcare": -2,
                    "Culture": -1,
                    "Climate": 0
                },
                icon: BrazilSandraPlateData.getItems()[2][2].foodInfo.content
            }
        ]
    };
}

export class BrazilSandraScoreData {
    public static get() {
        return Private.scores;
    }
}
