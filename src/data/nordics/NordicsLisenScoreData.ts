import { IScoreData, Region, NordicCharacters, OutcomeType } from "../../Types";
import { NordicQuestions } from "../../score/ScoreTypes";
import { TimeData } from "../TimeData";
import { MCQData } from "../MCQData";
import { LunchData } from "../LunchData";
import { SliderData } from "../SliderData";
import { YesNoSocialData } from "../YesNoSocialData";
import { NordicsLisenPlateData } from "./NordicsLisenPlateData";

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
                icon: TimeData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[0].icon,
                outcomeDesc: "Carbon Footprint",
                outcomeType: OutcomeType.Climate,
                link: "https://www.greenbrownblue.com/food-and-climate-explained/carbon-footprint/"              
            },
            {
                "outcome": "Rye bread is dense and fiber-rich. It can keep you feeling full for much longer than white bread. It's also healthier. Orange juice can often contain added sugar, so opt for eating an orange rather than drinking its juice.",
                "scores": {
                    "Environment": 0,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: TimeData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[1].icon,
                outcomeDesc: "Blood sugar",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/blood-sugar-levels/"               
            },
            {
                "outcome": "White bread has a significantly lower fibre content than wholegrain bread. White bread has a high glycemic index, meaning that your blood sugar levels rise quickly after eating it. Wholegrain bread, on the other hand, has a low glycemic index. Low glycemic foods can help to prevent and manage Type 2 Diabetes.",
                "scores": {
                    "Environment": 0,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: TimeData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[2].icon,
                outcomeDesc: "Diet and Diabetes",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/diet-prevent-diabetes/"                
            },
            {
                "outcome": "Unlike refined grains, which are stripped of valuable nutrients during the refining process, whole grains are full of nutrients including protein, fiber, B vitamins, antioxidants, and trace minerals (iron, zinc, copper, and magnesium). Dairy products should be consumed in moderation as farming livestock for meat, eggs and milk generates some 14.5% of total greenhouse gas emissions.",
                "scores": {
                    "Environment": 0,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 0,
                    "Climate": 0
                },
                icon: TimeData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[3].icon,
                outcomeDesc: "Whole grains",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/whole-grain-meaning/"              
            }
        ],
        [NordicQuestions.Snacks1]: [
            {
                "outcome": "In coffee growing regions of the world, millions of hectares of land have been deforested to make way for coffee plantations. The destruction of forests can dramatically reduce biodiversity.",
                "scores": {
                    "Environment": -1,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 0,
                    "Climate": -1
                },
                icon: MCQData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[0][0].icon,
                outcomeDesc: "Coffee",
                outcomeType: OutcomeType.Environment,
                link: "https://www.greenbrownblue.com/food-and-environment-explained/coffee-impact/"               
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
                icon: MCQData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[0][1].icon,
                outcomeDesc: "Fruits and vegetables",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/vegetables-fruits/"               
            },
            {
                "outcome": "Snacking has become a big part of modern food culture due to our busy lives. Not having a snack is perfectly fine, especially if you are not hungry.",
                "scores": {
                    "Environment": 0,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 0,
                    "Climate": 0
                },
                icon: MCQData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[0][2].icon,
                outcomeDesc: "Snacks",
                outcomeType: OutcomeType.Culture,                
                link: "https://www.greenbrownblue.com/food-and-culture-explained/snacking/"
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
                icon: MCQData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[0][3].icon,
                outcomeDesc: "Single-use plastic",
                outcomeType: OutcomeType.Environment,
                link: "https://www.greenbrownblue.com/food-and-environment-explained/plastic-waste/"               
            }
        ],
        [NordicQuestions.Lunch1]: [
            {
                "outcome": "Western-type dietary patterns characterized by the high consumption of processed meats and red meats (i.e., beef, pork, and lamb) are associated with adverse health effects and chronic diseases.",
                "scores": {
                    "Environment": -2,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 2,
                    "Climate": -1
                },
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[0][0].icon,
                outcomeDesc: "Nutrition related disease",
                outcomeType: OutcomeType.Healthcare,
                link: "https://www.greenbrownblue.com/food-and-healthcare-explained/food-is-medicine/"                               
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
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[0][1].icon,
                outcomeDesc: "Nordic foods",
                outcomeType: OutcomeType.Culture,
                link: "https://www.greenbrownblue.com/food-and-culture-explained/traditional-nordic-cuisine/"               
            },
            {
                "outcome": "Cabbage sales have increased in Denmark over the past 10 years. It's an affordable and versatile vegetable that keeps for a long time in the fridge. There are so many different kinds of cabbage - give them all a try!",
                "scores": {
                    "Environment": 1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 2,
                    "Climate": 1
                },
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[0][2].icon,
                outcomeDesc: "Food waste",
                outcomeType: OutcomeType.Climate,
                link: "https://www.greenbrownblue.com/food-and-climate-explained/food-waste-climate/"               
            },
            {
                "outcome": "The production of livestock like pigs for meat requires significant resources such as water and land to grow the soybeans and corn used for their feed.",
                "scores": {
                    "Environment": -2,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": 2,
                    "Climate": -1
                },
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[0][3].icon,
                outcomeDesc: "dairy",
                outcomeType: OutcomeType.Environment,
                link: "https://www.greenbrownblue.com/food-and-environment-explained/dairy-meat-environment/"                
            }
        ],   
        [NordicQuestions.Lunch1Drinks]: [
            {
                "outcome": "Apple juice can often contain added sugar. Apples are naturally sweet, so rather than drinking the juice try eating one. This way you will also get the benefits of eating the whole fruit, including dietary fibre",
                "scores": {
                    "Environment": 2,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 0,
                    "Climate": 2
                },
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Amena)[1][0].icon,
                outcomeDesc: "Whole foods",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/whole-foods-meaning/"            
            },
            {
                "outcome": "Sparkling water is a great way to jazz up your water. Skip the single-use plastic bottle and make sure to bring your own re-useable bottle with you wherever you go!",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 1,
                    "Climate": 2
                },
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Amena)[1][1].icon,
                outcomeDesc: "Single-use plastic",
                outcomeType: OutcomeType.Environment,
                link: "https://www.greenbrownblue.com/food-and-environment-explained/plastic-waste/"
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
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Amena)[1][2].icon,
                outcomeDesc: "Coffee",
                outcomeType: OutcomeType.Environment,
                link: "https://www.greenbrownblue.com/food-and-environment-explained/coffee-impact/" 
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
                icon: LunchData.getQuestions(Region.Nordics, NordicCharacters.Amena)[1][3].icon,
                outcomeDesc: "Drinking water",
                outcomeType: OutcomeType.Environment,
                link: "https://www.greenbrownblue.com/food-and-environment-explained/safe-drinking-water/"
            }
        ],     
        [NordicQuestions.Dinner1]: [
            {
                "outcome": "Aquaculture, or fish farming, has become much more common as many wild fish stocks are depleted. However, farmed fish require significant resources including feed. Farmed fish have also been associated with polluting the waters that surround them",
                "scores": {
                    "Environment": -2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": -1
                },
                icon: YesNoSocialData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[0].icon,
                outcomeDesc: "Sustainable Fishing",
                outcomeType: OutcomeType.Environment,
                link: "https://www.greenbrownblue.com/food-and-environment-explained/seafood-climate-change/"               
            }
        ],
        [NordicQuestions.Dinner2]: [
            {
                "outcome": "An increase in fish consumption is recommended because fish in general are a valuable source of vitamin D, selenium, iodine, and long-chain n-3 fatty acids. There are several nutritional reasons to promote increased fish consumption, but from a sustainability point of view there are also some doubts. Currently 80% of the wild fish populations are fully exploited or overexploited.",
                "scores": {
                    "Environment": 0,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 1
                },
                icon: YesNoSocialData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[1].icon,
                outcomeDesc: "Sustainable Fishing",
                outcomeType: OutcomeType.Environment,
                link: "https://www.greenbrownblue.com/food-and-environment-explained/seafood-climate-change/"              
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
                icon: YesNoSocialData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[2].icon,
                outcomeDesc: "Sustainable Fishing",
                outcomeType: OutcomeType.Environment,
                link: "https://www.greenbrownblue.com/food-and-environment-explained/seafood-climate-change/"              
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
                icon: YesNoSocialData.getQuestions(Region.Nordics, NordicCharacters.Lisen)[3].icon,
                outcomeDesc: "Nordic Nutrition Recommendations",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-culture-explained/nordic-diet-measures/"               
            }
        ],
        [NordicQuestions.DinnerProtein]: [
            {
                "outcome": "Because of the negative climate, environment and health impact, the Nordic nutrition recommendations recommend limited intake of red and processed meat. Sweden recommends a maximum intake of no more than 500 grams of red and processed meat a week. Only a small amount of this should be processed meat.",
                "scores": {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": 2,
                    "Climate": -2
                },
                icon: NordicsLisenPlateData.getItems()[0][0].foodInfo.content,
                outcomeDesc: "Beef",
                outcomeType: OutcomeType.Climate,
                link: "https://www.greenbrownblue.com/food-and-climate-explained/beef-climate-change/"               
            },
            {
                "outcome": "Products derived from animals, like cheese, require significantly more land to produce than protein-rich plant-based foods like fava beans.",
                "scores": {
                    "Environment": -1,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 0,
                    "Climate": -2
                },
                icon: NordicsLisenPlateData.getItems()[0][1].foodInfo.content,
                outcomeDesc: "Dairy",
                outcomeType: OutcomeType.Climate,
                link: "https://www.greenbrownblue.com/food-and-climate-explained/dairy-climate/"               
            },
            {
                "outcome": "White fish, if sustainble sourced, is a good protein option.",
                "scores": {
                    "Environment": -1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 0
                },
                icon: NordicsLisenPlateData.getItems()[0][2].foodInfo.content,
                outcomeDesc: "Nordic food ",
                outcomeType: OutcomeType.Culture,
                link: "https://www.greenbrownblue.com/food-and-culture-explained/traditional-nordic-cuisine/"               
            },
            {
                "outcome": "Salmon, if sustainably sourced, is a healthy protein option that also provides a lot of good omega 3 fatty acids. If from aquaculture production however, be aware that sometimes the salmon may be fed on fishmeal (making it a very resource intense production) and sometimes the feed is soy which if not certified, is implicated in deforestation.",
                "scores": {
                    "Environment": -1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": -1
                },
                icon: NordicsLisenPlateData.getItems()[0][3].foodInfo.content,
                outcomeDesc: "tofu",
                outcomeType: OutcomeType.Environment,
                link: "https://www.greenbrownblue.com/food-and-environment-explained/soybean-impact/"               
            }
        ],
        [NordicQuestions.DinnerGrains]: [
            {
                "outcome": "Potato is culturally an important staple in the Nordics, and an important part of many traditional dishes. As the food culture is globalized, the Nordic population is however eating less and less potato.",
                "scores": {
                    "Environment": 2,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 2,
                    "Climate": 1
                },
                icon: NordicsLisenPlateData.getItems()[1][0].foodInfo.content,
                outcomeDesc: "Globalization/food marketing",
                outcomeType: OutcomeType.Culture,
                link: "https://www.greenbrownblue.com/food-and-culture-explained/food-marketing/"               
            },
            {
                "outcome": "Buckwheat is a healthy grain that has seen a revival in the Nordics in the past 10 years.",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: NordicsLisenPlateData.getItems()[1][1].foodInfo.content,
                outcomeDesc: "Whole grains",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/whole-grain-meaning/"               
            },
            {
                "outcome": "Potato is culturally an important staple in the Nordics, and an important part of many traditional dishes. As the food culture is globalized, the Nordic population is however eating less and less potato.",
                "scores": {
                    "Environment": 2,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 2,
                    "Climate": 1
                },
                icon: NordicsLisenPlateData.getItems()[1][2].foodInfo.content,
                outcomeDesc: "Globalization/food marketing",
                outcomeType: OutcomeType.Culture,
                link: "https://www.greenbrownblue.com/food-and-culture-explained/food-marketing/"               
            },
            {
                "outcome": "Whole grain bread has a lot of dietary fibers which promotes digestive health and is a healthy choice if you want to have a side-snack in your meal.",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: NordicsLisenPlateData.getItems()[1][3].foodInfo.content,
                outcomeDesc: "Whole grains",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/whole-grain-meaning/"               
            }
        ],
        [NordicQuestions.DinnerVeggies]: [
            {
                "outcome": "Broccoli is a superfood - it is not only healthy (with high concentration of vitamins K and C, folate or folic acid as well as potassium, fiber and iron) but also because it generally has a low carbon footprint.",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: NordicsLisenPlateData.getItems()[2][0].foodInfo.content,
                outcomeDesc: "Leafy greens",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/which-vegetables/"               
            },
            {
                "outcome": "Spinach is a good complement to other types of salad greens as it often includes more calcium, vintamin A and C and iron. During the summer spinach grows well also in the Nordic region.",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: NordicsLisenPlateData.getItems()[2][1].foodInfo.content,
                outcomeDesc: "Local food",
                outcomeType: OutcomeType.Culture,
                link: "https://www.greenbrownblue.com/food-and-culture-explained/eating-locally/"               
            },
            {
                "outcome": "Green peas are truly a great staple to have in the fridge. If you do, you can without much effort add some healthy vegetables to your meal. Because they are frozen, you might also reduce the risk of food waste since many other greens are more easily perishable when fresh.",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: NordicsLisenPlateData.getItems()[2][2].foodInfo.content,
                outcomeDesc: "Food waste",
                outcomeType: OutcomeType.Environment,
                link: "https://www.greenbrownblue.com/food-and-climate-explained/food-waste-climate/"               
            },
            {
                "outcome": "Did you know that Fennel is a flowering plant species in the carrot family? This is a veggie that helps add a lot of flavour (anis-like) to any dish. It is seen as an important food  in the Nordic diet.",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: NordicsLisenPlateData.getItems()[2][3].foodInfo.content,
                outcomeDesc: "Food diversity",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/diverse-diets/"              
            }
        ]
    };
}

export class NordicsLisenScoreData {
    public static get() {
        return Private.scores;
    }
}
