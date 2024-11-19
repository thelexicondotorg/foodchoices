import { IScoreData, Region, CanadaCharacters, BrazilCharacters, OutcomeType } from "../../Types";
import { BrazilQuestions } from "../../score/ScoreTypes";
import { TimeData } from "../TimeData";
import { MCQData } from "../MCQData";
import { LunchData } from "../LunchData";
import { SliderData } from "../SliderData";
import { YesNoSocialData } from "../YesNoSocialData";
import { BrazilGabrielPlateData } from "./BrazilGrabrielPlateData";
import { StackingData } from "../../gamelets/stacking/StackingData";

// tslint:disable:object-literal-key-quotes max-line-length
namespace Private {
    export const scores: {
        [questionId: string]: IScoreData[]
    } = {
        [BrazilQuestions.Breakfast]: [
            {
                "outcome": "While it is common for teens to skip breakfast, it's not a healthy practice.",
                "scores": {
                    "Environment": 0,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": -1,
                    "Climate": 0
                },
                icon: TimeData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[0].icon,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Balanced Meal",
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/balanced-meal-importance/"
            },
            {
                "outcome": "This meal is free of ultra-processed products. Sounds like a good choice!",
                "scores": {
                    "Environment": 0,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 2,
                    "Climate": 0
                },
                icon: TimeData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[1].icon,
                outcomeDesc: "Ultra-processed foods",
                outcomeType: OutcomeType.Health,
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/minimally-processed-vs-processed/"
            },
            {
                "outcome": "This breakfast is not the best choice as it is made up of ultra-processed food products.",
                "scores": {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": -1
                },
                icon: TimeData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[2].icon,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Ultra-processed foods",
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/minimally-processed-vs-processed/"
            },
            // easter egg
            {
                "outcome": "Although it is a very healthy meal, this meal is not usually part of Brazilian culture!",
                "scores": {
                    "Environment": 0,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 0,
                    "Climate": 0
                }
            }
        ],
        [BrazilQuestions.Snacks1]: [
            // easter egg
            {
                "scores": {
                    "Environment": 0,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 0,
                    "Climate": 0
                },
            },
            {
                "outcome": "A chicken drumstick may or may not be ultra-processed–that depends on how it's made– but fried foods should not be eaten to excess. And the soda is definitely not the best choice!",
                "scores": {
                    "Environment": 0,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: MCQData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[0][1].icon,
                outcomeDesc: "Fried foods",
                outcomeType: OutcomeType.Health,
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/fried-food/"
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
                icon: MCQData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[0][2].icon,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Sugar",
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/sugar/"
            },
            {
                "outcome": "Good choice! In Brazil, an important public policy called PNAE insures that students are served healthy meals under the supervision of trained nutritionists.",
                "scores": {
                    "Environment": -1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": -1
                },
                icon: MCQData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[0][3].icon,
                outcomeDesc: "Brazil food policy initiatives",
                outcomeType: OutcomeType.Culture,
                link: "https://greenbrownblue.kinsta.cloud/food-and-culture-explained/pnae/"
            }
        ],
        [BrazilQuestions.Lunch1]: [
            {
                "outcome": "Good choice! This traditional Brazilian dish is free from ultra-processed ingredients, and it gets an extra point for not having meat! The guava desert, called 'Romeu e Julieta', is a typical dessert from Gabriel's mother's state, Minas Gerais. It can be a good choice as long as it is consumed moderately.",
                "scores": {
                    "Environment": 0,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 0
                },
                icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[0][0].icon,
                outcomeType: OutcomeType.Culture,
                outcomeDesc: "Traditional Brazilian Food",
                link: "https://greenbrownblue.kinsta.cloud/food-and-culture-explained/prato-feito/"
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
                icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[0][1].icon,
                outcomeDesc: "Diet and obesity",
                outcomeType: OutcomeType.Health,
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/weight-gain/"
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
                icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[0][2].icon,
                outcomeDesc: "Diverse diet",
                outcomeType: OutcomeType.Health,
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/diverse-diets/"
            },
            // Easter egg
            {
                "outcome": "There's nothing ultra-processed in this dish and there is a lot of color. But it is not an ordinary everyday meal for a middle-income family",
                "scores": {
                    "Environment": 0,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 0,
                    "Climate": 0
                }
            }
        ],
        [BrazilQuestions.Lunch1Drinks]: [
            {
                "outcome": "Soft drinks are ultra-processed beverages with lots of added sugar, sodium, flavoring and coloring.",
                "scores": {
                    "Environment": 0,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": 0
                },
                icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[1][0].icon,
                outcomeDesc: "soft drinks",
                outcomeType: OutcomeType.Health,
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/drink-less-soda/"
            },
            {
                "outcome": "Powdered juice, as well as soda, is ultra-processed and full of sugar, sodium, flavoring and coloring.",
                "scores": {
                    "Environment": 0,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": 0
                },
                icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[1][1].icon,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "soft drinks",
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/drink-less-soda/"
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
                },
                icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[1][2].icon
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
                icon: LunchData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[1][3].icon,
                outcomeDesc: "Drinking water",
                outcomeType: OutcomeType.Environment,
                link: "https://greenbrownblue.kinsta.cloud/food-and-environment-explained/safe-drinking-water/"
            }
        ],
        // Stacking
        [BrazilQuestions.Lunch2]: [
            {
                "outcome": "Sharing meals with your family is very important and even helps you to eat healthier.",
                "scores": {
                    "Environment": 0,
                    "Health": 1,
                    "Healthcare": 0,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: StackingData.getOutcomeIcon(),
                outcomeDesc: "Eating with others",
                outcomeType: OutcomeType.Culture,
                link: "https://greenbrownblue.kinsta.cloud/food-and-culture-explained/eating-together-2/"
            },
            {
                "outcome": "Not a good choice. It is best to focus on your food during mealtime. ",
                "scores": {
                    "Environment": 0,
                    "Health": -1,
                    "Healthcare": 0,
                    "Culture": -2,
                    "Climate": 0
                },
                icon: StackingData.getOutcomeIcon(),
                outcomeDesc: "Mindful Eating",
                outcomeType: OutcomeType.Health,
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/mindful-eating-healthy-weight/"
            },
            {
                "outcome": "Not a good choice. It is best to focus on your food during mealtime. ",
                "scores": {
                    "Environment": 0,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": -1,
                    "Climate": 0
                },
                icon: StackingData.getOutcomeIcon(),
                outcomeDesc: "Mindful Eating",
                outcomeType: OutcomeType.Health,
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/mindful-eating-healthy-weight/"
            }
        ],
        [BrazilQuestions.Groceries]: [
            {
                outcome: "Shopping at a local farmers market is a good way to support local farmers. It's a good idea to bring a shopping list." ,
                scores: {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: SliderData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[0].icon,
                outcomeType: OutcomeType.Culture,
                outcomeDesc: "food skills",
                link: "https://greenbrownblue.kinsta.cloud/food-and-culture-explained/fewer-know-how-to-cook/"
            },
            {
                "outcome": "Hypermarkets often have prepackaged meals. It's a good idea to bring a grocery list and buy the freshest ingredients you can.",
                "scores": {
                    "Environment": 0,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": 0
                },
                icon: SliderData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[1].icon,
                outcomeType: OutcomeType.Culture,
                outcomeDesc: "food skills",
                link: "https://greenbrownblue.kinsta.cloud/food-and-culture-explained/fewer-know-how-to-cook/"
            },
            {
                "outcome": "Family meals should be a responsability shared by the whole family, including Gabriel, not just done by Gabriel's mother.",
                "scores": {
                    "Environment": 0,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": -1,
                    "Climate": 0
                },
                icon: SliderData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[2].icon,
                outcomeType: OutcomeType.Culture,
                outcomeDesc: "Shopping",
                link: "https://greenbrownblue.kinsta.cloud/food-and-culture-explained/food-retail/"
            },
            {
                "outcome": "Online supermarkets are usually more expensive.",
                "scores": {
                    "Environment": -1,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 2,
                    "Climate": -1
                },
                icon: SliderData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[3].icon,
                outcomeType: OutcomeType.Culture,
                outcomeDesc: "Shopping",
                link: "https://greenbrownblue.kinsta.cloud/food-and-culture-explained/food-retail/"
            }
        ],
        [BrazilQuestions.Dinner1]: [
            {
                "outcome": "None of these ultra-processed convenience foods is a good choice.",
                "scores": {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": -1
                },
                icon: YesNoSocialData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[0].icon,
                outcomeDesc: "Fast food",
                outcomeType: OutcomeType.Culture,
                link: "https://greenbrownblue.kinsta.cloud/food-and-culture-explained/foodservice-sector/"
            }
        ],
        // Easter egg
        [BrazilQuestions.Dinner2]: [
            {
                "outcome": "Fancy restaurants often serve healthy dishes. But Gabriel and his teenager friends do not always have money to attend these places.",
                "scores": {
                    "Environment": 0,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": -1,
                    "Climate": 0
                }
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
                icon: YesNoSocialData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[2].icon,
                outcomeType: OutcomeType.Culture,
                outcomeDesc: "Cooking skills",
                link: "https://greenbrownblue.kinsta.cloud/food-and-culture-explained/cooking-skills/"
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
                icon: YesNoSocialData.getQuestions(Region.Brazil, BrazilCharacters.Gabriel)[3].icon,
                outcomeDesc: "Fast food",
                outcomeType: OutcomeType.Health,
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/eating-fast-food/"
            }
        ],
        [BrazilQuestions.DinnerProtein]: [
            {
                "outcome": "Fresh fish, yummy! Fish are rich in high-quality protein, a high proportion of healthy fats (unsaturated fats), and many vitamins and minerals. Similar to vegetables, they are excellent substitutes for red meats. However, remember you shouldn't eat too much animal protein. And always prefer fish that are harvested sustainably.",
                "scores": {
                    "Environment": -1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 1,
                    "Climate": -1
                },
                icon: BrazilGabrielPlateData.getItems()[0][0].foodInfo.content,
                outcomeType: OutcomeType.Environment,
                outcomeDesc: "Sustainable fishing",
                link: "https://greenbrownblue.kinsta.cloud/food-and-environment-explained/seafood-climate-change/"
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
                icon: BrazilGabrielPlateData.getItems()[0][1].foodInfo.content,
                outcomeDesc: "Red meat",
                outcomeType: OutcomeType.Health,
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/red-meat/"
            },
            {
                "outcome": "These chicken nuggets are fried and ultra-processed, and not very healthy.",
                "scores": {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": -1
                },
                icon: BrazilGabrielPlateData.getItems()[0][2].foodInfo.content,
                outcomeDesc: "Saturated and trans fats",
                outcomeType: OutcomeType.Health,
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/saturated-trans-fats/"
            }
        ],
        [BrazilQuestions.DinnerGrains]: [
            {
                "outcome": "Good choice! Rice is a real food and it's typical in Brazilian dishes. While white and brown rice are the same grain, the most nutritious parts (the bran and germ) are removed from white rice. Try brown rice for a higher fibre grain!",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: BrazilGabrielPlateData.getItems()[1][0].foodInfo.content,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "whole grains",
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/whole-grain-meaning/"
            },
            {
                "outcome": "Brown rice is unprocessed and rich in fibre. You rock!",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 0,
                    "Climate": 2
                },
                icon: BrazilGabrielPlateData.getItems()[1][1].foodInfo.content,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "whole grains",
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/whole-grain-meaning/"
            },
            {
                "outcome": "Instant noodles are an ultra-processed unhealthy meal that's high in refined carbohydrates and sodium.",
                "scores": {
                    "Environment": 0,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": 0
                },
                icon: BrazilGabrielPlateData.getItems()[1][2].foodInfo.content,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Instant noodles",
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/instant-noodles-vs-spaghetti/"
            },
            {
                "outcome": "When Gabriel's mom doesn't have much time to cook, she prepares pasta with Bolognese sauce.  Sauces that include more ingredients will provide Gabriel's family with better nutrition. Gabriel and his sister could work with their mother in the kitchen, making dishes that require more steps. When tasks are divided, no one gets overwhelmed.",
                "scores": {
                    "Environment": 0,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: BrazilGabrielPlateData.getItems()[1][3].foodInfo.content,
                outcomeDesc: "Importance of Eating with others",
                outcomeType: OutcomeType.Culture,
                link: "https://greenbrownblue.kinsta.cloud/food-and-culture-explained/brazilians-eat-with-others/"
            }
        ],
        [BrazilQuestions.DinnerVeggies]: [
            {
                "outcome": "Wonderful choice! This okra is local, unprocessed, healthy.",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: BrazilGabrielPlateData.getItems()[2][0].foodInfo.content,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Fruits and vegetables",
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/vegetables-fruits/"
            },
            {
                "outcome": "Good choice! Make sure to wash the lettuce leaves before eating them to remove any dirt or food-borne illnesses.",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: BrazilGabrielPlateData.getItems()[2][1].foodInfo.content,
                outcomeDesc: "Washing vegetables",
                outcomeType: OutcomeType.Health,
                link: "https://greenbrownblue.kinsta.cloud/food-and-healthcare-explained/washing-vegetables/"
            },
            {
                "outcome": "Ultra-processed mayonnaise is bad for you.",
                "scores": {
                    "Environment": 0,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": -1,
                    "Climate": 0
                },
                icon: BrazilGabrielPlateData.getItems()[2][2].foodInfo.content,
                outcomeDesc: "Ultra-processed foods",
                outcomeType: OutcomeType.Health,
                link: "https://greenbrownblue.kinsta.cloud/food-and-health-explained/minimally-processed-vs-processed/"
            }
        ]
    };
}

export class BrazilGabrielScoreData {
    public static get() {
        return Private.scores;
    }
}
