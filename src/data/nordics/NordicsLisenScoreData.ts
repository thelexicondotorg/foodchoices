import { IScoreData, Region, NordicCharacters } from "../../Types";
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
                "outcome": "Oat production has a relatively low environmental footprint, especially when compared to other starches like rice.",
                "scores": {
                    "Environment": 0,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 1,
                    "Climate": 1
                },
                icon: TimeData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[0].icon
            },
            {
                "outcome": "Rye bread is dense and fiber-rich. It can keep you feeling full for much longer than white bread can. It's also healthier. Orange juice can often contain added sugar, so opt for eating an orange rather than drinking its juice.",
                "scores": {
                    "Environment": 0,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: TimeData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[1].icon
            },
            {
                "outcome": "White bread has a significantly lower fiber content than wholegrain bread. White bread has a high glyceamic index, meaning that your blood sugar levels rise quickly after eating it. Wholegrain bread, on the other hand, has a low glycaemic index. Low glycaemic foods can help to prevent and manage Type 2 Diabetes.",
                "scores": {
                    "Environment": 0,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: TimeData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[2].icon
            },
            {
                "outcome": "Whole grains offer a “complete package” of health benefits, unlike refined grains, which are stripped of valuable nutrients during the refining process. Whole grains are full of nutrients including protein, fiber, B vitamins, antioxidants, and trace minerals (iron, zinc, copper, and magnesium). Dairy products should be consumed in moderation as farming livestock for meat, eggs and milk generates some 14.5% of total greenhouse gas emissions.",
                "scores": {
                    "Environment": 0,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 0,
                    "Climate": 0
                },
                icon: TimeData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[3].icon
            }
        ],
        [NordicQuestions.Snacks1]: [
            {
                "outcome": "In coffee growing regions of the world, millions of hectares of land have been deforested to make way for coffee plantations. The distruction of forests can dramatically reduce biodiversity.",
                "scores": {
                    "Environment": -1,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 0,
                    "Climate": -1
                },
                icon: MCQData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[0][0].icon
            },
            {
                "outcome": "Smoothies can be a great way to increase your daily vegetable and fruit intake. The Danish Dietary Guidelines recommend 300g of fruit and 300g of vegetables per day (about 6 pieces of fruit and veggies per day).",
                "scores": {
                    "Environment": 1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 0,
                    "Climate": 2
                },
                icon: MCQData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[0][1].icon
            },
            {
                "outcome": "Snacking has become such a big part of modern food culture due to our busy lives. Not having a snack is perfectly fine, especially if you are not hungry.",
                "scores": {
                    "Environment": 0,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 0,
                    "Climate": 0
                },
                icon: MCQData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[0][2].icon
            },
            {
                "outcome": "Sparkling water is great way to perk up your water. By carbonating water yourself, you'll avoid single-use plastic bottles.",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 0,
                    "Climate": 2
                },
                icon: MCQData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[0][3].icon
            }
        ],
        [NordicQuestions.Lunch1]: [
            {
                "outcome": "Western-type dietary patterns that are characterized by high consumption of processed meats and red meats (i.e., beef, pork, and lamb) are associated with adverse health effects and chronic diseases.",
                "scores": {
                    "Environment": -2,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 2,
                    "Climate": -1
                },
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[0][0].icon
            },
            {
                "outcome": "This dish is in line with the Nordic Nutrition Recommendations",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[0][1].icon
            },
            {
                "outcome": "Cabbage sales have been increase in Denmark for the past 10 years. It's an affordable and versitle vegetable that keeps for a long time in the fridge. There are so many different kinds of cabbage - give them all a try!",
                "scores": {
                    "Environment": 1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 2,
                    "Climate": 1
                },
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[0][2].icon
            },
            {
                "outcome": "The production of livestock like pigs for meat requires significant resources such as water and land to grow the soybeans and corn that they eat as feed.",
                "scores": {
                    "Environment": -2,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": 2,
                    "Climate": -1
                },
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[0][3].icon
            }
        ],
        // Removed from game
        /*
        [NordicQuestions.Lunch2]: [
            {
                "outcome": "Apple juice can often contain added sugar. Apples are naturally sweet, so rather than drinking the juice try eating one. This way you will also get the benefits of eating the whole fruit like dietary fiber",
                "scores": {
                    "Environment": 2,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 0,
                    "Climate": 2
                },
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[1][0].icon
            },
            {
                "outcome": "Sparkling water is a great way to jazz up your water. Skip the single-use plastic bottle and make sure to bring your own re-useable bottle with you where every you go!",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[1][1].icon
            },
            {
                "outcome": "Historically, coffee production has been associated with deforestation and poor working conditions for coffee growers. Make sure your coffee is sustainably produced!",
                "scores": {
                    "Environment": -1,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 0,
                    "Climate": -1
                },
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[1][2].icon
            },
            {
                "outcome": "A glass of tap water is many times less expensive than bottled water, not to mention having vastly fewer environmental and climate impacts.",
                "scores": {
                    "Environment": 0,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 0,
                    "Climate": 0
                },
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[1][3].icon
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
                icon: SliderData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[1].icon
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
                icon: SliderData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[1].icon
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
                icon: SliderData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[2].icon
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
                icon: SliderData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[3].icon
            }
        ],*/
        [NordicQuestions.Dinner1]: [
            {
                "outcome": "Aquaculture, or fish farming, has become much more common as many wild fish stocks are no longer viable. However, farmed fish require significant resources like feed. Farmed fish have also associated with polluting the waters that surround them",
                "scores": {
                    "Environment": -2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": -1
                },
                icon: YesNoSocialData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[0].icon
            }
        ],
        [NordicQuestions.Dinner2]: [
            {
                "outcome": "An increase in fish consumption is recommended because fish in general is a valuable source of vitamin D, selenium, iodine, and long-chain n-3 fatty acids. There are several nutritional reasons to promote increased fish consumption, but from a sustainability point of view there are doubts. Wild fish in general are overexploited, and currently 80% of the fish populations are fully exploited or overexploited.",
                "scores": {
                    "Environment": 0,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 1
                },
                icon: YesNoSocialData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[1].icon
            }
        ],
        [NordicQuestions.Dinner3]: [
            {
                "outcome": "Approximately 55% of the world's shrimp are farmed. In some cases, ecologically-sensitive habitat has been cleared to create ponds for shrimp production. When purchasing seafood, check to see if it has been sustainably produced.",
                "scores": {
                    "Environment": 0,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 2,
                    "Climate": 0
                },
                icon: YesNoSocialData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[2].icon
            }
        ],
        [NordicQuestions.Dinner4]: [
            {
                "outcome": "This meal is in line with the Nordic Nutrition Recommendations,  but the tartlets may contain high levels of salt and fat so be sure to look at the package.",
                "scores": {
                    "Environment": 1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 1,
                    "Climate": 2
                },
                icon: YesNoSocialData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[3].icon
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

export class NordicsLisenScoreData {
    public static get() {
        return Private.scores;
    }
}
