import { IScoreData, Region, CanadaCharacters, NordicCharacters } from "../../Types";
import { NordicQuestions } from "../../score/ScoreTypes";
import { TimeData } from "../TimeData";
import { MCQData } from "../MCQData";
import { LunchData } from "../LunchData";
import { SliderData } from "../SliderData";
import { YesNoSocialData } from "../YesNoSocialData";
import { PlateDataNordics } from "./PlateDataNordics";

// tslint:disable:object-literal-key-quotes max-line-length
namespace Private {
    export const scores: {
        [questionId: string]: IScoreData[]
    } = {
        [NordicQuestions.Breakfast]: [
            {
                "outcome": "Whole grains contain a high amount of fiber, keeping you feeling fuller for longer. Some wholegrain cereals can contain suprisingly high amounts of sugar, so be sure to choose one that has a low sugar content.",
                "scores": {
                    "Environment": 1,
                    "Health": 2,
                    "Healthcare": 0,
                    "Culture": 1,
                    "Climate": 2
                },
                icon: TimeData.getQuestions(Region.Nordics, NordicCharacters.Amena)[0].icon
            },
            {
                "outcome": "Not all teabags are created the same. Nylon mesh teabags have been found to leech microplastic particles into tea water. Use loose leaf tea instead.",
                "scores": {
                    "Environment": -1,
                    "Health": 1,
                    "Healthcare": 0,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: TimeData.getQuestions(Region.Nordics, NordicCharacters.Amena)[1].icon
            },
            {
                "outcome": "Infrequent meals can lead to insulin spikes and erratic blood sugar levels, which can affect alertness and energy",
                "scores": {
                    "Environment": 0,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 0,
                    "Climate": 0
                },
                icon: TimeData.getQuestions(Region.Nordics, NordicCharacters.Amena)[2].icon
            },
            {
                "outcome": "Foul Mudammas is a classic fava bean dish that's commonly eaten for breakfast in the Middle East. Products derived from animals, like cheese, require significantly more land to produce than protein-rich plant-based foods like fava beans.",
                "scores": {
                    "Environment": 0,
                    "Health": 1,
                    "Healthcare": 0,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: TimeData.getQuestions(Region.Nordics, NordicCharacters.Amena)[3].icon
            }
        ],
        [NordicQuestions.Snacks1]: [
            {
                "outcome": "Nuts like hazelnuts and walnuts contain dietary fibre and micronutrients. They also contain unsaturated fat (the heathlier kind of fat), which is important for overall body function. As dried fruits are naturally sweet, opt for snacks with dried fruit that does not contain added sugar.",
                "scores": {
                    "Environment": -1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 0,
                    "Climate": -2
                },
                icon: MCQData.getQuestions(Region.Nordics, NordicCharacters.Amena)[0][0].icon
            },
            {
                "outcome": "Fruit is an important source of dietary fiber, vitamins and fibre. Packing a piece of fruit for work is a perfect snack and can keep you going until lunchtime",
                "scores": {
                    "Environment": -1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 0,
                    "Climate": -2
                },
                icon: MCQData.getQuestions(Region.Nordics, NordicCharacters.Amena)[0][1].icon
            },
            {
                "outcome": "Avoid making coffee from disposible capsules or buying coffee in a single use cup. Instead, try to make a habit of bringing your own resuable cup when heading to the coffee shop",
                "scores": {
                    "Environment": -1,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 0,
                    "Climate": -1
                },
                icon: MCQData.getQuestions(Region.Nordics, NordicCharacters.Amena)[0][2].icon
            },
            {
                "outcome": "It's perfectly fine to not have a snack between breakfast and lunch. Fiber-rich breakfasts can help keep you feeling fuller longer, and help you to stay away from unhealthy snack foods between mealtimes",
                "scores": {
                    "Environment": 0,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 0,
                    "Climate": 0
                },
                icon: MCQData.getQuestions(Region.Nordics, NordicCharacters.Amena)[0][3].icon
            }
        ],
        [NordicQuestions.Lunch1]: [
            {
                "outcome": "Quorn is a plant-based meat subsitute that replicates the texture of meat",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 1,
                    "Climate": 1
                },
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Amena)[0][0].icon
            },
            {
                "outcome": "Dishes like this can help you to reach your daily intake of vegetables. According to the Danish dietary guidelines, you should be eating 300g of vegetables per day",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 1,
                    "Climate": 2
                },
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Amena)[0][1].icon
            },
            {
                "outcome": "Swapping the meat in lasagna for something plant-based is a healthy and more environmentally-friendly choice.",
                "scores": {
                    "Environment": 1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 1,
                    "Climate": 1
                },
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Amena)[0][2].icon
            },
            {
                "outcome": "Vegan cheese, available in larger supermarket stores in Umeå where Amena lives, is made from coconut fat. Because it's vegan it has no dairy, and since animal products are associated with higher green-house gad emissions this is a better alternative from a climate perspective. Nutrition wise this cheese does not contain any protein so make sure you have proteins from other parts of your daily diet, for example by eating more pulses. This cheese come from the brand 'Astrid och aporna' and the product is called Jeezly original. The full list of ingredients: Water, coconut oil (23%), modified potato and corn starch, potato starch, sea salt, vegan flavorings, acidity regulators: (citric acid), preservative: (sorbic acid), dye: (beta carotene)",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 1,
                    "Climate": 2
                },
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Amena)[0][3].icon
            }
        ],
        // Removed from game
        /*[NordicQuestions.Lunch2]: [
            {
                "outcome": "According to the Nordic Nutrition Recommendations, the average adult should drink between 1-1.5 L of water per day.",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Amena)[1][0].icon
            },
            {
                "outcome": "Only water is served for school lunch in Amena's school as a way to promote a reduction in the intake of sugary drinks. Sometimes schools also have milk or enriched plant-based alternatives (such as oat milk).",
                "scores": {
                    "Environment": 0,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 0,
                    "Climate": 0
                },
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Amena)[1][1].icon
            },
            {
                "outcome": "Sparkling water is a great way to jazz up your water. Skip the single-use plastic bottle and make sure to bring your own re-useable bottle with you wherever you go!",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Amena)[1][2].icon
            },
            {
                "outcome": "Keep a reusable bottle close to you throughout the day to keep you hydrated. Dehydration can cause headaches and dizziness.",
                "scores": {
                    "Environment": 0,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 0,
                    "Climate": 0
                },
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Amena)[1][3].icon
            }
        ],*/
        /*[NordicQuestions.Groceries]: [
            {
                scores: {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": 1,
                    "Climate": -2
                },
                icon: SliderData.getQuestions(Region.Nordics, NordicCharacters.Amena)[1].icon
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
                icon: SliderData.getQuestions(Region.Nordics, NordicCharacters.Amena)[1].icon
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
                icon: SliderData.getQuestions(Region.Nordics, NordicCharacters.Amena)[2].icon
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
                icon: SliderData.getQuestions(Region.Nordics, NordicCharacters.Amena)[3].icon
            }
        ],*/
        [NordicQuestions.Dinner1]: [
            {
                "outcome": "This meal is in line with the Nordic Nutrition Recommendations",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: YesNoSocialData.getQuestions(Region.Nordics, NordicCharacters.Amena)[0].icon
            }
        ],
        [NordicQuestions.Dinner2]: [
            {
                "outcome": "Try to add some more vegetables to complement the dish",
                "scores": {
                    "Environment": 1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 1,
                    "Climate": 2
                },
                icon: YesNoSocialData.getQuestions(Region.Nordics, NordicCharacters.Amena)[1].icon
            }
        ],
        [NordicQuestions.Dinner3]: [
            {
                "outcome": "Amena and her family are not yet sure of all the food labels and can thus not choose a sustainably sourced option. In Sweden MSC, ASC and Krav are some of the most common labels for sustainble fish and WWF Sweden has developed a specific fish-gide to help consumers.",
                "scores": {
                    "Environment": 0,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 0,
                    "Climate": 0
                },
                icon: YesNoSocialData.getQuestions(Region.Nordics, NordicCharacters.Amena)[2].icon
            }
        ],
        [NordicQuestions.Dinner4]: [
            {
                "outcome": "Cauliflower is a traditional vegetable used throughout the Nordic countries. It is part of the wild cabbage family but has a milder taste. It is very rich in vitamin C and folic acid and has very few calories. In 2015 it was named the most trendy vegetable in Sweden",
                "scores": {
                    "Environment": 0,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 0,
                    "Climate": 0
                },
                icon: YesNoSocialData.getQuestions(Region.Nordics, NordicCharacters.Amena)[3].icon
            }
        ],
        /*[NordicQuestions.DinnerProtein]: [
            {
                "outcome": "Greater consumption of ultra-processed foods is linked with weight gain, poorer diet quality, and overall health. Eating whole, unprocessed foods with fewer additives is an important part of a healthy diet.",
                "scores": {
                    "Environment": -2,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": -2,
                    "Climate": -1
                },
                icon: PlateDataNordics.getItems()[0][0].foodInfo.content
            },
            {
                "outcome": "The Nordic Nutrition Recommendations recommends plant-based proteins like beans and lentils as alternatives to animal-source proteins. These choices have benefits for health, the environment and the climate.",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: PlateDataNordics.getItems()[0][1].foodInfo.content
            },
            {
                "outcome": "Tofu is often used as a dairy-free alternative to animal-source proteins like beef, chicken and fish.",
                "scores": {
                    "Environment": 0,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: PlateDataNordics.getItems()[0][2].foodInfo.content
            },
            {
                "outcome": "While grass-fed beef can have a smaller climate impact than conventionally-raised grain fed beef, it depends on how the grasslands are managed. Grass-fed beef still has a higher climate impact than plant-based proteins.",
                "scores": {
                    "Environment": -1,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 2,
                    "Climate": -1
                },
                icon: PlateDataNordics.getItems()[0][3].foodInfo.content
            }
        ],
        [NordicQuestions.DinnerGrains]: [
            {
                "outcome": "Rice is the world's most widely consumed staple food. White and brown rice are the same grain, but the most nutritious parts (the bran and germ) are removed from white rice. Try brown rice for a higher fibre grain!",
                "scores": {
                    "Environment": 1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 2,
                    "Climate": 1
                },
                icon: PlateDataNordics.getItems()[1][0].foodInfo.content
            },
            {
                "outcome": "Rice is the world's most widely consumed staple food. White and brown rice are the same grain, but the most nutritious parts (the bran and germ) are removed from white rice. Try brown rice for a higher fibre grain!",
                "scores": {
                    "Environment": 0,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: PlateDataNordics.getItems()[1][1].foodInfo.content
            },
            {
                "outcome": "Ultra-processed rice dishes are often high in sodium. Check the nutrition label of products to help you identify healthier options!",
                "scores": {
                    "Environment": -1,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": -2,
                    "Climate": -1
                },
                icon: PlateDataNordics.getItems()[1][2].foodInfo.content
            },
            {
                "outcome": "Wild rice is actually a species of grass that is native to North America. With more fibre than brown rice, it is a healthy whole-grain alternative!",
                "scores": {
                    "Environment": 0,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 0
                },
                icon: PlateDataNordics.getItems()[1][3].foodInfo.content
            }
        ],
        [NordicQuestions.DinnerVeggies]: [
            {
                "outcome": "Salad kits often come in non-recyclable packaging and have high levels of waste along the supply chain. If a salad kit is your only option, skip fat- and salt-laden creamy dressings and toss with oil and vinegar.",
                "scores": {
                    "Environment": -1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 1,
                    "Climate": -1
                },
                icon: PlateDataNordics.getItems()[2][0].foodInfo.content
            },
            {
                "outcome": "Pre-packaged french fries are often made from palm oil, which is harmful to health and the environment.",
                "scores": {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -1,
                    "Climate": -1
                },
                icon: PlateDataNordics.getItems()[2][1].foodInfo.content
            },
            {
                "outcome": "Only one-quarter of Canadians eat the recommended amount of fruits and vegetables, and leafy green consumption makes up only a small part despite its many nutritional benefits. Look for exciting types of dark greens varieties like spinach, kale, and arugula!",
                "scores": {
                    "Environment": 1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: PlateDataNordics.getItems()[2][2].foodInfo.content
            },
            {
                "outcome": "Cheese has a relatively large carbon footprint, as it usually comes from dairy milk which has all the same climate challenges as eating beef. Decreasing animal-source foods overall (not just meat but dairy and eggs too!) is likely to have a greater overall impact than vegetarian diets that eat milk and eggs!",
                "scores": {
                    "Environment": 1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 2,
                    "Climate": 0
                },
                icon: PlateDataNordics.getItems()[2][3].foodInfo.content
            }
        ]*/
    };
}

export class NordicsAmenaScoreData {
    public static get() {
        return Private.scores;
    }
}
