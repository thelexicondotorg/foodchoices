import { IScoreData, Region, CanadaCharacters, BrazilCharacters } from "../../Types";
import { BrazilQuestions } from "../../score/ScoreTypes";
import { TimeData } from "../TimeData";
import { MCQData } from "../MCQData";
import { LunchData } from "../LunchData";
import { SliderData } from "../SliderData";
import { YesNoSocialData } from "../YesNoSocialData";
import { BrazilGabrielPlateData } from "./BrazilGrabrielPlateData";

// tslint:disable:object-literal-key-quotes max-line-length
namespace Private {
    export const scores: {
        [questionId: string]: IScoreData[]
    } = {
        [BrazilQuestions.Breakfast]: [
            {
                "outcome": "It is very common for teens to skip breakfast, but it is not a very healthy practice.",
                "scores": {
                    "Environment": 0,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": -1,
                    "Climate": 0
                },
                icon: TimeData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[0].icon
            },
            {
                "outcome": "Sounds like a good choice! This is a meal free of ultra-processed products.",
                "scores": {
                    "Environment": 0,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 2,
                    "Climate": 0
                },
                icon: TimeData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[1].icon
            },
            {
                "outcome": "Not a good choice, as it is a meal made up of ultra-processed products only.",
                "scores": {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": -1
                },
                icon: TimeData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[2].icon
            },
            {
                "outcome": "Although it is a very healthy meal, this meal is not usually part of Brazilian culture!",
                "scores": {
                    "Environment": 0,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 0,
                    "Climate": 0
                },
                icon: TimeData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[3].icon
            }
        ],
        [BrazilQuestions.Snacks1]: [
            {
                "outcome": "It is a good option! But, unfortunately, it is not that easy to find fruits around schools in Brazil.",
                "scores": {
                    "Environment": 0,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 0,
                    "Climate": 0
                },
                icon: MCQData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[0][0].icon
            },
            {
                "outcome": "Chicken drumstick may or may not be an ultra-processed food – it depends on how it is made. But it is a fried food that should not be eaten in excess. Soda is definitely a bad choice!",
                "scores": {
                    "Environment": 0,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: MCQData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[0][1].icon
            },
            {
                "outcome": "Not a good choice. They are all ultra-processed foods, rich in sugar and fat. Low sodium does not make it a good food.",
                "scores": {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": -1
                },
                icon: MCQData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[0][2].icon
            },
            {
                "outcome": "Good choice! In Brazil there is an important public policy called PNAE that protects students' eating habits. All served meals are supervised by nutritionists.",
                "scores": {
                    "Environment": -1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": -1
                },
                icon: MCQData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[0][3].icon
            }
        ],
        [BrazilQuestions.Lunch1]: [
            {
                "outcome": "Good choice! That's Brazilian traditional dish and free of ultra-processed ingredients. And an extra point for not having meat!",
                "scores": {
                    "Environment": 0,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 0
                },
                icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[0][0].icon
            },
            {
                "outcome": "Ultra-processed no! Beware of this choice. Light and diet foods are mostly ultra-processed products.",
                "scores": {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": -1
                },
                icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[0][1].icon
            },
            {
                "outcome": "There's nothing ultra-processed on this plate. But there is no diversity either, right? Gabriel's plate could be more diverse and colorful",
                "scores": {
                    "Environment": -2,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -1,
                    "Climate": -2
                },
                icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[0][2].icon
            },
            {
                "outcome": "There's nothing ultra-processed in this dish and there is a lot of color. But it is not an ordinary everyday meal for a middle-income family",
                "scores": {
                    "Environment": 0,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 0,
                    "Climate": 0
                },
                icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[0][3].icon
            }
        ],
        [BrazilQuestions.Lunch2]: [
            {
                "outcome": "Good choice!",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[1][0].icon
            },
            {
                "outcome": "Ultra-processed no! Soft drinks have lots of sugar, sodium, flavorings and colorings.",
                "scores": {
                    "Environment": 0,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": 0
                },
                icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[1][1].icon
            },
            {
                "outcome": "Ultra-processed no! Powder juice, as well as sodas, are sugary drinks rich in sugar, sodium, flavoring and coloring.",
                "scores": {
                    "Environment": 0,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": 0
                },
                icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[1][2].icon
            },
            {
                "outcome": "Whole grape juice is not an ultra-processed drink and can be taken occasionally. But it's an expensive choice. And to quench our thirst there is nothing better than water!",
                "scores": {
                    "Environment": 0,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 0,
                    "Climate": 0
                },
                icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[1][3].icon
            }
        ],
        /*[BrazilQuestions.Groceries]: [
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
                icon: SliderData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[1].icon
            },
            {
                "outcome": "Food deserts, or areas where there is little access to healthy, unprocessed foods like vegetables, fruits and whole grains, are often found in low-income areas, and have been linked with poorer quality diets.",
                "scores": {
                    "Environment": 0,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": -1,
                    "Climate": -1
                },
                icon: SliderData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[2].icon
            },
            {
                "outcome": "1 in 5 Canadians have used a foodbank at some point in their lives, and almost 1 million use them every month, typically because they don't make enough money to cover their expenses. Almost 1/3 of food bank users are children.",
                "scores": {
                    "Environment": -1,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": -2,
                    "Climate": 0
                },
                icon: SliderData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[3].icon
            }
        ],*/
        [BrazilQuestions.Dinner1]: [
            {
                "outcome": "Not a good choice. Escape the ultra-processed!",
                "scores": {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": 0,
                    "Climate": -1
                },
                icon: YesNoSocialData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[0].icon
            }
        ],
        [BrazilQuestions.Dinner2]: [
            {
                "outcome": "Fancy restaurants often serve healthy dishes. But Gabriel and his teenager friends do not always have money to attend these places.",
                "scores": {
                    "Environment": 0,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": -1,
                    "Climate": 0
                },
                icon: YesNoSocialData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[1].icon
            }
        ],
        [BrazilQuestions.Dinner3]: [
            {
                "outcome": "It would be a great option! For this, Gabriel and his friends need to develop their cooking skills!",
                "scores": {
                    "Environment": 0,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 0
                },
                icon: YesNoSocialData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[2].icon
            }
        ],
        [BrazilQuestions.Dinner4]: [
            {
                "outcome": "In bakeries and some snack bars, Gabriel and his friends can find non-ultra-processed snack options.",
                "scores": {
                    "Environment": -1,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 1,
                    "Climate": -1
                },
                icon: YesNoSocialData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[3].icon
            }
        ],
        [BrazilQuestions.DinnerProtein]: [
            {
                "outcome": "Fresh fish, yummy! Good choice! But remember you shouldn't eat too much meat! Mother Earth says tank you!",
                "scores": {
                    "Environment": -1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 1,
                    "Climate": -1
                },
                icon: BrazilGabrielPlateData.getItems()[0][0].foodInfo.content
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
                icon: BrazilGabrielPlateData.getItems()[0][1].foodInfo.content
            },
            {
                "outcome": "No, dude! This is ultra-processed!",
                "scores": {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": -1
                },
                icon: BrazilGabrielPlateData.getItems()[0][2].foodInfo.content
            }
        ],
        [BrazilQuestions.DinnerGrains]: [
            {
                "outcome": "Good choice! This is typical in Brazilian dishes. It's real food!",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: BrazilGabrielPlateData.getItems()[1][0].foodInfo.content
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
                icon: BrazilGabrielPlateData.getItems()[1][1].foodInfo.content
            },
            {
                "outcome": "Usually, when one eats instant noodles, eats only that. So, double trouble: you eat an ultra-processed unhealthy meal and don't eat other foods that could be healthier.",
                "scores": {
                    "Environment": 0,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": 0
                },
                icon: BrazilGabrielPlateData.getItems()[1][2].foodInfo.content
            },
            {
                "outcome": "Pasta with Bolognese sauce It's a good choice when Gabriel's mom doesn't have much time to cook. However, there is not much diversity of ingredients in this dish, right? It would be nice if Gabriel and his sister could work with their mother in the kitchen, making dishes that require more steps. When tasks are divided, no one gets overwhelmed.",
                "scores": {
                    "Environment": 0,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: BrazilGabrielPlateData.getItems()[1][3].foodInfo.content
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
                icon: BrazilGabrielPlateData.getItems()[2][0].foodInfo.content
            },
            {
                "outcome": "Good choice! Wash these leaves before eating, OK?",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: BrazilGabrielPlateData.getItems()[2][1].foodInfo.content
            },
            {
                "outcome": "No, no, no! Ultra-processed mayonnaise is bad for you!",
                "scores": {
                    "Environment": 0,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 0,
                    "Climate": 0
                },
                icon: BrazilGabrielPlateData.getItems()[2][2].foodInfo.content
            }
        ]
    };
}

export class BrazilGabrielScoreData {
    public static get() {
        return Private.scores;
    }
}
