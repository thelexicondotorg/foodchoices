import { IScoreData, Region, BrazilCharacters, OutcomeType } from "../../Types";
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
                "outcome": "Chicken is better for the climate than beef, but eating any kind of meat is resource intensive. Consume with moderation.",
                "scores": {
                    "Environment": -1,
                    "Health": 1,
                    "Healthcare": 0,
                    "Culture": 1,
                    "Climate": -2
                },
                icon: BrazilSandraPlateData.getItems()[0][0].foodInfo.content,
                outcomeType: OutcomeType.Climate,
                outcomeDesc: "Chicken",
                link: "https://www.greenbrownblue.com/food-and-climate-explained/chicken-beef/"
            },
            {
                "outcome": "Kassler, a traditional german dish, is a popular meat dish in Blumenau, the town where Sandra is from. Blumenau is one of the largest Germen descendent communities in Brazil. You should consume meat in moderation.",
                "scores": {
                    "Environment": -1,
                    "Health": 0,
                    "Healthcare": 1,
                    "Culture": 1,
                    "Climate": -2
                },
                icon: BrazilSandraPlateData.getItems()[0][1].foodInfo.content,
                outcomeDesc: "Dairy/Meat",
                outcomeType: OutcomeType.Environment,
                link: "https://www.greenbrownblue.com/food-and-environment-explained/dairy-meat-environment/"
            },
            {
                "outcome": "Nice pick! Eating less meat its a good way to adopt environmentally friendly practices.",
                "scores": {
                    "Environment": -2,
                    "Health": 1,
                    "Healthcare": 2,
                    "Culture": 0,
                    "Climate": -2
                },
                icon: BrazilSandraPlateData.getItems()[0][2].foodInfo.content,
                outcomeType: OutcomeType.Environment,
                outcomeDesc: "Eggs",
                link: "https://www.greenbrownblue.com/food-and-environment-explained/egg-environmental-impact/"         
            },
            {
                "outcome": "Sausage is often ultraprocessed. Read the label before you buy, and if you don't recognize many of the ingredients, it's most likely not very healthy.",
                "scores": {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": -1
                },
                icon: BrazilSandraPlateData.getItems()[0][3].foodInfo.content,
                outcomeDesc: "Processed Foods",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/minimally-processed-vs-processed/"
            }
        ],
        [BrazilQuestions.DinnerGrains]: [
            {
                "outcome": "Good choice! White rice is a traditional side dish in Brazil.",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: BrazilSandraPlateData.getItems()[1][0].foodInfo.content,
                outcomeDesc: "Rice and methane",
                outcomeType: OutcomeType.Environment,
                link: "https://www.greenbrownblue.com/food-and-climate-explained/rice-climate-footprint/"
            },
            {
                "outcome": "Ready to eat foods are often ultraprocessed. Read the label before you buy, and if you don't recognize many of the ingredients, it's most likely not very healthy.",
                "scores": {
                    "Environment": 0,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": 0
                },
                icon: BrazilSandraPlateData.getItems()[1][1].foodInfo.content,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Sodium",
                link: "https://www.greenbrownblue.com/food-and-health-explained/salt/"
            },
            {
                "outcome": "Good choice! Spaetzl, a traditional german dish, is a popular food in Blumenau, the city where Sandra is from. Blumenau is one of the largest Germen descendent communities in Brazil.",
                "scores": {
                    "Environment": 1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 0
                },
                icon: BrazilSandraPlateData.getItems()[1][2].foodInfo.content,
                outcomeDesc: "Whole grain",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/whole-grain-meaning/"
            },
            {
                "outcome": "Nice Pick! Boiled corn is minimally processed.",
                "scores": {
                    "Environment": 1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 1
                },
                icon: BrazilSandraPlateData.getItems()[1][3].foodInfo.content,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Whole grain",
                link: "https://www.greenbrownblue.com/food-and-health-explained/whole-grain-meaning/"
            }
        ],
        [BrazilQuestions.DinnerVeggies]: [
            {
                "outcome": "Good choice! Fresh vegetables are healthy to consume and typical in Brazilian dishes.",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: BrazilSandraPlateData.getItems()[2][0].foodInfo.content,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Leafy greens",
                link: "https://www.greenbrownblue.com/food-and-health-explained/which-vegetables/"
            },
            {
                "outcome": "Sauerkraut is very healthy and full of nutrients such as Vitamin C.",
                "scores": {
                    "Environment": 0,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 1
                },
                icon: BrazilSandraPlateData.getItems()[2][1].foodInfo.content,
                outcomeDesc: "Vegetables and fruit",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/vegetables-fruits/"
            },
            {
                "outcome": "Watch out! Eating your vegetable with an ultraprocessed sauce is less healthy. ",
                "scores": {
                    "Environment": 0,
                    "Health": -1,
                    "Healthcare": -2,
                    "Culture": -1,
                    "Climate": 0
                },
                icon: BrazilSandraPlateData.getItems()[2][2].foodInfo.content,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Ultra-processed foods",
                link: "https://www.greenbrownblue.com/food-and-health-explained/vegetables-fruits/"
            }
        ]
    };
}

export class BrazilSandraScoreData {
    public static get() {
        return Private.scores;
    }
}
