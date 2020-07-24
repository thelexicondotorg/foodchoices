import { IScoreData, Region, BrazilCharacters, OutcomeType } from "../../Types";
import { BrazilQuestions } from "../../score/ScoreTypes";
import { TimeData } from "../TimeData";
import { MCQData } from "../MCQData";
import { LunchData } from "../LunchData";
import { YesNoSocialData } from "../YesNoSocialData";
import { BrazilSandraPlateData } from "./BrazilSandraPlateData";
import { SliderData } from "../SliderData";
import { StackingData } from "../../gamelets/stacking/StackingData";

// tslint:disable:object-literal-key-quotes max-line-length
namespace Private {
    export const scores: {
        [questionId: string]: IScoreData[]
    } = {
        [BrazilQuestions.Breakfast]: [
            // Easter egg
            {
                "outcome": "Be careful about the brand's claim (light/diet), be critical sense. These are ultraprocessed food",
                "scores": {
                    "Environment": 0,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": 0
                }
            },
            {
                "outcome": "Try to avoid ultra-processed foods as they are nutritionally unbalanced.",
                "scores": {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": 0
                },
                icon: TimeData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[1].icon,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Processed foods",
                link: "https://www.greenbrownblue.com/food-and-health-explained/minimally-processed-vs-processed/"
            },
            {
                "outcome": "It is important to eat regularly and with attention.",
                "scores": {
                    "Environment": 0,
                    "Health": -1,
                    "Healthcare": -2,
                    "Culture": -1,
                    "Climate": 0
                },
                icon: TimeData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[2].icon,
                outcomeDesc: "Blood sugar regulation",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/blood-sugar-levels/"
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
                icon: TimeData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[3].icon,
                outcomeDesc: "Cooking skills",
                outcomeType: OutcomeType.Culture,
                link: "https://www.greenbrownblue.com/food-and-culture-explained/cooking-skills/"
            }
        ],
        [BrazilQuestions.Snacks1]: [
            {
                "outcome": "This is an ultra-processed food that is full of sugar. Do not forget to read the label.",
                "scores": {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": -1
                },
                icon: MCQData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[0][0].icon,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Sugar",
                link: "https://www.greenbrownblue.com/food-and-health-explained/sugar/"
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
                icon: MCQData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[0][1].icon,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "vegetables and fruit",
                link: "https://www.greenbrownblue.com/food-and-health-explained/vegetables-fruits/"
            },
            {
                "outcome": "There is evidence that artificially sweetened beverages (ASBs) should not be promoted as part of a healthy diet. Higher intakes of ASBs have been associated with increased risk of some chronic diseases.",
                "scores": {
                    "Environment": -1,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": -2,
                    "Climate": 0
                },
                icon: MCQData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[0][2].icon,
                outcomeDesc: "Sugar",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/sugar/"
            },
            {
                "outcome": "Not a good choice. The cracker and coffee sweetener are both ultra-processed foods. Natural, minimally processed foods are more healthy.",
                "scores": {
                    "Environment": 0,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": 0
                },
                icon: MCQData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[0][3].icon,
                outcomeType: OutcomeType.Environment,
                outcomeDesc: "Coffee",
                link: "https://www.greenbrownblue.com/food-and-environment-explained/coffee-impact/"
            }
        ],
        [BrazilQuestions.Lunch1]: [
            {
                "outcome": "Good choice! Preferably choose places that make fresh meals.",
                "scores": {
                    "Environment": 1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[0][0].icon,
                outcomeDesc: "food diversity",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/diverse-diets/"
            },
            {
                "outcome": "Although fast food can be very convenient, it is ultraprocessed and usually unhealthy.",
                "scores": {
                    "Environment": 0,
                    "Health": -1,
                    "Healthcare": -2,
                    "Culture": -1,
                    "Climate": 0
                },
                icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[0][1].icon,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "fast food",
                link: "https://www.greenbrownblue.com/food-and-health-explained/eating-fast-food/"
            },
            {
                "outcome": "Good idea! Making meals from home and eating them at the office is often healthier and more affordable.",
                "scores": {
                    "Environment": 0,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 1
                },
                icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[0][2].icon,
                outcomeDesc: "Eating with others",
                outcomeType: OutcomeType.Culture,
                link: "https://www.greenbrownblue.com/food-and-culture-explained/brazilians-eat-with-others/"
            },
            {
                "outcome": "Eating less meat at a vegan restauarant is a good way to adopt environmentally friendly practices.",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[0][3].icon,
                outcomeDesc: "Meat alternatives",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/meat-alternatives/"
            }
        ],
        [BrazilQuestions.Lunch1Drinks]: [
            {
                "outcome": "It's important to stay hydrated throughout the day. The best way to do this is to bring a reusable water bottle from home.",
                "scores": {
                    "Environment": 0,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 0,
                    "Climate": 0
                },
                icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[1][0].icon,
                outcomeDesc: "Drinking water",
                outcomeType: OutcomeType.Environment,
                link: "https://www.greenbrownblue.com/food-and-environment-explained/safe-drinking-water/"
            },
            {
                "outcome": "Eating the whole fruit is the best way to get more fiber. Water is the best thing to drink when you are thirsty.",
                "scores": {
                    "Environment": 0,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 0,
                    "Climate": 0
                },
                icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[1][1].icon,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Whole Foods",
                link: "https://www.greenbrownblue.com/food-and-health-explained/whole-foods-meaning/"
            },
            // Easter egg
            {
                "outcome": "Ultra-processed no! Powder juice, as well as sodas, are sugary drinks rich in sugar, sodium, flavoring and coloring.",
                "scores": {
                    "Environment": 0,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": 0
                }
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
                icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[1][3].icon,
                outcomeDesc: "Drinking water",
                outcomeType: OutcomeType.Environment,
                link: "https://www.greenbrownblue.com/food-and-environment-explained/safe-drinking-water/"
            }
        ],
        // Stacking
        [BrazilQuestions.Lunch2]: [
            {
                "outcome": "Sharing meals with others is very important and even helps you to eat healthier.",
                "scores": {
                    "Environment": 0,
                    "Health": 0,
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
                "outcome": "There is some evidence that taking breaks at work to socialize and relax has mental health benefits, and may contribute to mindful eating practices.",
                "scores": {
                    "Environment": 0,
                    "Health": 0,
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
                "outcome": "Taking time to eat with others can help support mindful eating habits, and help you to recognize your body's cues that you are hungry or full.",
                "scores": {
                    "Environment": 0,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 0,
                    "Climate": 0
                },
                icon: StackingData.getOutcomeIcon(),
                outcomeDesc: "Mindful eating",
                outcomeType: OutcomeType.Culture,
                link: "https://www.greenbrownblue.com/food-and-health-explained/mindful-eating-healthy-weight/"
            },
            {
                "outcome": "A nutritious diet with variety is important. Skipping lunch increases the chance of snacking on unhealthy processed foods later.",
                "scores": {
                    "Environment": 0,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": 0
                },
                icon: StackingData.getOutcomeIcon(),
                outcomeDesc: "Mindful eating",
                outcomeType: OutcomeType.Culture,
                link: "https://www.greenbrownblue.com/food-and-health-explained/mindful-eating-healthy-weight/"
            },
        ],
        [BrazilQuestions.Groceries]: [
            {
                outcome: "Supermarkets don't always offer fresh or minimally processed foods. Make sure that these foods are offered where you shop.",
                scores: {
                    "Environment": -1,
                    "Health": 0,
                    "Healthcare": -1,
                    "Culture": -1,
                    "Climate": -2
                },
                icon: SliderData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[0].icon,
                outcomeDesc: "Shopping",
                outcomeType: OutcomeType.Culture,
                link: "https://www.greenbrownblue.com/food-and-culture-explained/food-retail/"
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
                icon: SliderData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[1].icon,
                outcomeDesc: "Food",
                outcomeType: OutcomeType.Culture,
                link: "https://www.greenbrownblue.com/food-and-culture-explained/grocery-stores-better-diets/"
            },
            {
                "outcome": "It is best to shop in places that offer fresh or minimally processed varieties of food. It is better to share shopping and cooking responsibilities with all of the family.",
                "scores": {
                    "Environment": -1,
                    "Health": 0,
                    "Healthcare": -1,
                    "Culture": -1,
                    "Climate": -2
                },
                icon: SliderData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[2].icon,
                outcomeDesc: "Shopping",
                outcomeType: OutcomeType.Culture,
                link: "https://www.greenbrownblue.com/food-and-culture-explained/food-retail/"
            },
            {
                "outcome": "Shopping at the local farmers market is a good way to support local farmers.",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: SliderData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[3].icon,
                outcomeDesc: "Shopping",
                outcomeType: OutcomeType.Culture,
                link: "https://www.greenbrownblue.com/food-and-culture-explained/food-retail/"
            }
        ],
        [BrazilQuestions.Dinner1]: [
            {
                "outcome": "Pizza can be ultra-processed and isn't a balanced meal. Pair your pizza with vegetables and proteins.",
                "scores": {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": -1
                },
                icon: YesNoSocialData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[0].icon,
                outcomeDesc: "fast food",
                outcomeType: OutcomeType.Healthcare,
                link: "https://www.greenbrownblue.com/food-and-healthcare-explained/obesity-fast-food/"
            }
        ],
        [BrazilQuestions.Dinner2]: [
            {
                "outcome": "Cool! Remember to choose a tasty and balanced meal option!",
                "scores": {
                    "Environment": 0,
                    "Health": 1,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 1
                },
                icon: YesNoSocialData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[1].icon,
                outcomeDesc: "Balanced meal",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/balanced-meal-importance/"
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
                icon: YesNoSocialData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[2].icon,
                outcomeDesc: "fast food",
                outcomeType: OutcomeType.Healthcare,
                link: "https://www.greenbrownblue.com/food-and-healthcare-explained/obesity-fast-food/"
            }
        ],
        [BrazilQuestions.Dinner4]: [
            {
                "outcome": "Good choice! Developing and sharing cooking skills its good way to eat healthy food.",
                "scores": {
                    "Environment": 1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 1
                },
                icon: YesNoSocialData.getQuestions(Region.Brazil, BrazilCharacters.Sandra)[3].icon,
                outcomeDesc: "cooking skills",
                outcomeType: OutcomeType.Culture,
                link: "https://www.greenbrownblue.com/food-and-culture-explained/cooking-skills/"
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
                outcomeDesc: "Noodles",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/dietary-guidelines-personal-health/#instant-noodles-vs-spaghetti"
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
                outcomeDesc: "Vegetables and fruit",
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
