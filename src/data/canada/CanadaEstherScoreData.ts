import { IScoreData, Region, CanadaCharacters, OutcomeType } from "../../Types";
import { CanadaQuestions } from "../../score/ScoreTypes";
import { TimeData } from "../TimeData";
import { MCQData } from "../MCQData";
import { LunchData } from "../LunchData";
import { SliderData } from "../SliderData";
import { YesNoSocialData } from "../YesNoSocialData";
import { StackingData } from "../../gamelets/stacking/StackingData";
import { CanadaEstherPlateData } from "./CanadaEstherPlateData";

// tslint:disable:object-literal-key-quotes
namespace Private {
    export const scores: {
        [questionId: string]: IScoreData[]
    } = {
        [CanadaQuestions.Breakfast]: [
            {
                "outcome": "Bacon and eggs are both animal-source foods, which makes them among the greatest contributors to greenhouse gas emissions.",
                "scores": {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": 1,
                    "Climate": -2
                },
                icon: TimeData.getQuestions(Region.Canada, CanadaCharacters.Esther)[0].icon,
                outcomeType: OutcomeType.Climate,
                outcomeDesc: "Carbon Footprint",
                link: "https://www.greenbrownblue.com/food-and-climate-explained/carbon-footprint/"
            },
            {
                "outcome": "The World Health Organization suggests that you limit your intake of 'free sugars' (any sugar that is added to foods, like table sugar, honey, or fruit juice) to no more than 12 teaspoons per day. A bowl of sugary cereal usually contains around 2-3 teaspoons!",
                "scores": {
                    "Environment": 2,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": -1,
                    "Climate": 0
                },
                icon: TimeData.getQuestions(Region.Canada, CanadaCharacters.Esther)[1].icon,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Sugar",
                link: "https://www.greenbrownblue.com/food-and-health-explained/sugar/"
            },
            {
                "outcome": "Homemade porridge is high in fibre and protein and can be a healthier alternative to processed, sugary breakfast cereals",
                "scores": {
                    "Environment": 1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 1
                },
                icon: TimeData.getQuestions(Region.Canada, CanadaCharacters.Esther)[2].icon,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Blood sugar regulator",
                link: "https://www.greenbrownblue.com/food-and-health-explained/blood-sugar-levels/"
            },
            {
                "outcome": "Historically, coffee production has been associated with deforestation and poor working conditions for coffee growers. Make sure your coffee is sustainably produced!",
                "scores": {
                    "Environment": -1,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": -2,
                    "Climate": -1
                },
                icon: TimeData.getQuestions(Region.Canada, CanadaCharacters.Esther)[3].icon,
                outcomeType: OutcomeType.Environment,
                outcomeDesc: "Coffee Deforestation",
                link: "https://www.greenbrownblue.com/food-and-environment-explained/coffee-impact/"
            }
        ],
        [CanadaQuestions.Snacks1]: [
            {
                "outcome": "Ultra-processed potato chips, which are typically high in calories, fat and sodium, are considered 'other foods' thatshould be eaten less often and in smaller amounts.",
                "scores": {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": 0
                },
                icon: MCQData.getQuestions(Region.Canada, CanadaCharacters.Esther)[0][0].icon,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Ultra-processed food vs. minimally-Processed Foods",
                link: "https://www.greenbrownblue.com/food-and-health-explained/minimally-processed-vs-processed/"
            },
            {
                "outcome": "While an excellent source of calcium, the animal-source dairy in a yogurt and granola parfait make this snack a less climate-friendly choice",
                "scores": {
                    "Environment": 0,
                    "Health": 1,
                    "Healthcare": 0,
                    "Culture": 1,
                    "Climate": -1
                },
                icon: MCQData.getQuestions(Region.Canada, CanadaCharacters.Esther)[0][1].icon,
                outcomeType: OutcomeType.Climate,
                outcomeDesc: "Dairy products",
                link: "https://www.greenbrownblue.com/food-and-climate-explained/dairy-climate/"
            },
            {
                "outcome": "Local food usually, but not always, has less impact on greenhouse gas emissions. Get to know the farmers in your area and learn more about the types of farming they support!",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 0,
                    "Culture": 2,
                    "Climate": 0
                },
                icon: MCQData.getQuestions(Region.Canada, CanadaCharacters.Esther)[0][2].icon,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Pesticides",
                link: "https://www.greenbrownblue.com/food-and-health-explained/organic-vs-conventional/"
            },
            {
                "outcome": "While not the largest contributor to greenhouse gas emissions, the 'food miles' on imported foods contributes upwards of 10% of the overall greenhouse gas emissions produced by foods. Buy local!",
                "scores": {
                    "Environment": 1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: MCQData.getQuestions(Region.Canada, CanadaCharacters.Esther)[0][3].icon,
                outcomeType: OutcomeType.Climate,
                outcomeDesc: "Local food",
                link: "https://www.greenbrownblue.com/food-and-climate-explained/buy-local-climate/"
            }
        ],
        [CanadaQuestions.Snacks2]: [
            {
                "outcome": "Sugary sodas are among the largest contributors to sugar intake in many countries globally, and higher consumption is associated with type 2 diabetes, weight gain, and tooth decay.",
                "scores": {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": -1
                },
                icon: MCQData.getQuestions(Region.Canada, CanadaCharacters.Esther)[1][0].icon,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Diabetes",
                link: "https://www.greenbrownblue.com/food-and-health-explained/diet-prevent-diabetes/"
            },
            {
                "outcome": "Most plastic water bottles are made from polyethylene terephthalate, which is comprised of non-renewable fossil fuels. Each year in the US alone, 38 billion water bottles end up in landfills. Reach for a reusable water bottle!",
                "scores": {
                    "Environment": -1,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 1,
                    "Climate": -2
                },
                icon: MCQData.getQuestions(Region.Canada, CanadaCharacters.Esther)[1][1].icon,
                outcomeType: OutcomeType.Environment,
                outcomeDesc: "Plastics and Packaging",
                link: "https://www.greenbrownblue.com/food-and-environment-explained/plastic-waste/"
            },
            {
                "outcome": "A glass of tap water is many times less expensive than bottled water, not to mention having vastly fewer environmental and climate impacts.",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: MCQData.getQuestions(Region.Canada, CanadaCharacters.Esther)[1][2].icon,
                outcomeType: OutcomeType.Environment,
                outcomeDesc: "Drinking Tap Water",
                link: "https://www.greenbrownblue.com/food-and-environment-explained/safe-drinking-water/"
            },
            // Easter egg
            {
                "outcome": "Esther can't afford a latte",
                "scores": {
                    "Environment": -2,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 0,
                    "Climate": -2
                },
            }
        ],
        [CanadaQuestions.Lunch1]: [
            {
                "outcome": "Consuming food from restaurants and fast food outlets is linked with higher intakes of calories and sodium and negative health outcomes like weight gain.",
                "scores": {
                    "Environment": -2,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": -2
                },
                icon: LunchData.getQuestions(Region.Canada, CanadaCharacters.Esther)[0][0].icon,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Fast Food",
                link: "https://www.greenbrownblue.com/food-and-health-explained/eating-fast-food/"
            },
            {
                "outcome": "Whole grains typically have more fibre than refined grains like white flour, and may lower your risk of cardiovascular disease, type 2 diabetes, and some types of cancer.",
                "scores": {
                    "Environment": -2,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": -2,
                    "Climate": 0
                },
                icon: LunchData.getQuestions(Region.Canada, CanadaCharacters.Esther)[0][1].icon,
                outcomeType: OutcomeType.Culture,
                outcomeDesc: "Retail environments",
                link: "https://www.greenbrownblue.com/food-and-culture-explained/food-retail/"
            },
            {
                "outcome": "Bringing lunch from home can save money and help you eliminate the need to consume restaurant foods that are often less healthy. Look for reusable, environmentally-friends bags and containers!",
                "scores": {
                    "Environment": -1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 1,
                    "Climate": -1
                },
                icon: LunchData.getQuestions(Region.Canada, CanadaCharacters.Esther)[0][2].icon,
                outcomeType: OutcomeType.Environment,
                outcomeDesc: "Plastics and Packaging",
                link: "https://www.greenbrownblue.com/food-and-environment-explained/plastic-waste/"
            },
            {
                "outcome": "This meal is in line with Canada's Food Guide's recommendation to eat more plant-based proteins, vegetables and whole grains.",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 1,
                    "Climate": 2
                },
                icon: LunchData.getQuestions(Region.Canada, CanadaCharacters.Esther)[0][3].icon,
                outcomeType: OutcomeType.Healthcare,
                outcomeDesc: "Canada's Dietary Guidelines",
                link: "https://www.greenbrownblue.com/food-and-healthcare-explained/food-guide-canada/"
            }
        ],
        // Stacking
        [CanadaQuestions.Lunch2]: [
            {
                "outcome": "There is some evidence that taking breaks at work to socialize and relax provides an array of mental health benefits, and may even contribute to more mindful eating practices",
                "scores": {
                    "Environment": 0,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 1,
                    "Climate": 0
                },
                icon: StackingData.getOutcomeIcon(),
                outcomeDesc: "Mindful Eating",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/mindful-eating-healthy-weight/"
            },
            {
                "outcome": "There is some evidence that taking breaks at work to socialize and relax provides an array of mental health benefits, and may even contribute to more mindful eating practices",
                "scores": {
                    "Environment": 0,
                    "Health": 1,
                    "Healthcare": 0,
                    "Culture": 2,
                    "Climate": 0
                },
                icon: StackingData.getOutcomeIcon(),
                outcomeDesc: "Mindful Eating",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-health-explained/mindful-eating-healthy-weight/"
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
                outcomeDesc: "Eating with others",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-culture-explained/brazilians-eat-with-others/"
            },
            {
                "outcome": "Eating regular meals can help with blood sugar regulation, and can help from overeating at your next meal",
                "scores": {
                    "Environment": 0,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": 0
                },
                icon: StackingData.getOutcomeIcon(),
                outcomeDesc: "Busy lifestyles",
                outcomeType: OutcomeType.Health,
                link: "https://www.greenbrownblue.com/food-and-culture-explained/busy-lifestyles-impact/"
            }
        ],
        [CanadaQuestions.Groceries]: [            
            {
                "outcome": "Community-supported agriculture is increasingly being used to link producers (farmers) to consumers (you!). This type of shopping will decrease the environmental and climate impact of fresh food purchases. Check out CSA efforts in your area!",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: SliderData.getQuestions(Region.Canada, CanadaCharacters.Esther)[0].icon,
                outcomeType: OutcomeType.Culture,
                outcomeDesc: "Community Supported Agriculture",
                link: "https://www.greenbrownblue.com/food-and-culture-explained/eating-locally/"
            },
            // Easter egg
            {
                "outcome": "Esther doesn't have a car and can't get to the major grocery stores without walking along a major highway. Choose another option!",
                "scores": {
                    "Environment": -1,
                    "Health": 0,
                    "Healthcare": 0,
                    "Culture": 0,
                    "Climate": -1
                },
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
                icon: SliderData.getQuestions(Region.Canada, CanadaCharacters.Esther)[2].icon,
                outcomeType: OutcomeType.Culture,
                outcomeDesc: "Food Access",
                link: "https://www.greenbrownblue.com/food-and-healthcare-explained/food-security/"
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
                icon: SliderData.getQuestions(Region.Canada, CanadaCharacters.Esther)[3].icon,
                outcomeType: OutcomeType.Culture,
                outcomeDesc: "Food Bank",
                link: "https://www.greenbrownblue.com/food-and-culture-explained/food-banks/"
            }
        ],
        [CanadaQuestions.Dinner1]: [
            {
                "outcome": "In most developed countries, ultra-processed and packaged foods make up more than 50% of the typical diet - and are associated with lower diet quality and increased health risks compared to diets that are higher in whole foods.",
                "scores": {
                    "Environment": 1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 0,
                    "Climate": 1
                },
                icon: YesNoSocialData.getQuestions(Region.Canada, CanadaCharacters.Esther)[0].icon,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Whole Foods",
                link: "https://www.greenbrownblue.com/food-and-health-explained/whole-foods-meaning/"
            },
            // No
            {
                "outcome": "In most developed countries, ultra-processed and packaged foods make up more than 50% of the typical diet - and are associated with lower diet quality and increased health risks compared to diets that are higher in whole foods.",
                "scores": {
                    "Environment": -1,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 0,
                    "Climate": -1
                },
                icon: YesNoSocialData.getQuestions(Region.Canada, CanadaCharacters.Esther)[0].icon,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Whole Foods",
                link: "https://www.greenbrownblue.com/food-and-health-explained/whole-foods-meaning/"
            }
        ],
        [CanadaQuestions.Dinner2]: [
            {
                "outcome": "Globally, trends are shifting towards families rarely eating together anymore. The majority of American families report eating a single meal together less than five days a week.* Eating together as a family has many benefits, including fewer behavioral problems, better self-esteem and better grades at school.",
                "scores": {
                    "Environment": 0,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": -1,
                    "Climate": 0
                },
                icon: YesNoSocialData.getQuestions(Region.Canada, CanadaCharacters.Esther)[1].icon,
                outcomeType: OutcomeType.Culture,
                outcomeDesc: "Cooking Skills",
                link: "https://www.greenbrownblue.com/food-and-culture-explained/cooking-skills/"
            },
            // No
            {
                "outcome": "Globally, trends are shifting towards families rarely eating together anymore. The majority of American families report eating a single meal together less than five days a week.* Eating together as a family has many benefits, including fewer behavioral problems, better self-esteem and better grades at school.",
                "scores": {
                    "Environment": 0,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 0,
                    "Climate": 0
                },
                icon: YesNoSocialData.getQuestions(Region.Canada, CanadaCharacters.Esther)[1].icon,
                outcomeType: OutcomeType.Culture,
                outcomeDesc: "Cooking Skills",
                link: "https://www.greenbrownblue.com/food-and-culture-explained/cooking-skills/"
            }
        ],
        [CanadaQuestions.Dinner3]: [
            {
                "outcome": "Eating in front of a screen may discourage social interaction and mindful eating - which can lead to overindulging.",
                "scores": {
                    "Environment": 0,
                    "Health": 2,
                    "Healthcare": 1,
                    "Culture": 2,
                    "Climate": 1
                },
                icon: YesNoSocialData.getQuestions(Region.Canada, CanadaCharacters.Esther)[2].icon,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Eating with others",
                link: "https://www.greenbrownblue.com/food-and-culture-explained/eating-together-2/"
            },
            // No
            {
                "outcome": "Eating in front of a screen may discourage social interaction and mindful eating - which can lead to overindulging.",
                "scores": {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": -2
                },
                icon: YesNoSocialData.getQuestions(Region.Canada, CanadaCharacters.Esther)[2].icon,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Eating with others",
                link: "https://www.greenbrownblue.com/food-and-culture-explained/eating-together-2/"
            }
        ],
        [CanadaQuestions.DinnerProtein]: [
            {
                "outcome": "Greater consumption of ultra-processed foods has been linked to poorer diet quality, weight gain, increased risk for chronic diseases, and decreased overall health. A diet based on fresh or minimally processed foods is an essential part of any healthy diet.",
                "scores": {
                    "Environment": -2,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": -2,
                    "Climate": -1
                },
                icon: CanadaEstherPlateData.getItems()[0][0].foodInfo.content,
                outcomeType: OutcomeType.Environment,
                outcomeDesc: "Sustainable Fishing",
                link: "https://www.greenbrownblue.com/food-and-environment-explained/seafood-climate-change/"
            },
            {
                "outcome": "Canada's Food Guide recommends plant-based proteins like beans and lentils as alternatives to animal-source proteins. These choices benefit both personal health and the environment.",
                "scores": {
                    "Environment": 2,
                    "Health": 2,
                    "Healthcare": 2,
                    "Culture": 2,
                    "Climate": 2
                },
                icon: CanadaEstherPlateData.getItems()[0][1].foodInfo.content,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Plant-forward diet",
                link: "https://www.greenbrownblue.com/food-and-health-explained/plant-forward-diet/"
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
                icon: CanadaEstherPlateData.getItems()[0][2].foodInfo.content,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Meat Alternative",
                link: "https://www.greenbrownblue.com/food-and-health-explained/meat-alternatives/"
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
                icon: CanadaEstherPlateData.getItems()[0][3].foodInfo.content,
                outcomeType: OutcomeType.Environment,
                outcomeDesc: "Dairy/Meat",
                link: "https://www.greenbrownblue.com/food-and-environment-explained/dairy-meat-environment/"
            },
            {
                "outcome": "Ruminant animals like grain-fed cattle produce the highest levels of greenhouse gas emissions, with more than 10-times the impact of chicken, eggs or fish",
                "scores": {
                    "Environment": -2,
                    "Health": -1,
                    "Healthcare": -1,
                    "Culture": 2,
                    "Climate": -2
                },
                icon: CanadaEstherPlateData.getItems()[0][4].foodInfo.content,
                outcomeType: OutcomeType.Climate,
                outcomeDesc: "Beef",
                link: "https://www.greenbrownblue.com/food-and-climate-explained/beef-climate-change/"
            }
        ],
        [CanadaQuestions.DinnerGrains]: [
            {
                "outcome": "Rice is the world's most widely consumed staple food. White and brown rice are the same grain, but the most nutritious parts (the bran and germ) are removed from white rice. Try brown rice for a higher fibre grain!",
                "scores": {
                    "Environment": 1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 2,
                    "Climate": 1
                },
                icon: CanadaEstherPlateData.getItems()[1][0].foodInfo.content,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Brown vs. white rice",
                link: "https://www.greenbrownblue.com/food-and-health-explained/whole-grain-meaning/"
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
                icon: CanadaEstherPlateData.getItems()[1][1].foodInfo.content,
                outcomeType: OutcomeType.Climate,
                outcomeDesc: "Rice and Green House Gases",
                link: "https://www.greenbrownblue.com/food-and-climate-explained/rice-climate-footprint/"
            },
            {
                "outcome": "Ultra-processed rice dishes are often high in sodium. Check the nutrition label of products to help you identify healthier options!",
                "scores": {
                    "Environment": -1,
                    "Health": -2,
                    "Healthcare": -2,
                    "Culture": -2,
                    "Climate": -1
                },
                icon: CanadaEstherPlateData.getItems()[1][2].foodInfo.content,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Sodium",
                link: "https://www.greenbrownblue.com/food-and-health-explained/salt/"
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
                icon: CanadaEstherPlateData.getItems()[1][3].foodInfo.content,
                outcomeType: OutcomeType.Culture,
                outcomeDesc: "Indigenous foods",
                link: "https://www.greenbrownblue.com/food-and-culture-explained/indigenous-food/"
            }
        ],
        [CanadaQuestions.DinnerVeggies]: [
            {
                "outcome": "Salad kits often come in non-recyclable packaging and have high levels of waste along the supply chain. If a salad kit is your only option, skip fat- and salt-laden creamy dressings and toss with oil and vinegar.",
                "scores": {
                    "Environment": -1,
                    "Health": 1,
                    "Healthcare": 1,
                    "Culture": 1,
                    "Climate": -1
                },
                icon: CanadaEstherPlateData.getItems()[2][0].foodInfo.content,
                outcomeType: OutcomeType.Climate,
                outcomeDesc: "Processed foods",
                link: "https://www.greenbrownblue.com/food-and-climate-explained/food-processing-climate/"
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
                icon: CanadaEstherPlateData.getItems()[2][1].foodInfo.content,
                outcomeType: OutcomeType.Environment,
                outcomeDesc: "Plam Oil",
                link: "https://www.greenbrownblue.com/food-and-environment-explained/palm-oil/"
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
                icon: CanadaEstherPlateData.getItems()[2][2].foodInfo.content,
                outcomeType: OutcomeType.Health,
                outcomeDesc: "Leafy Greens",
                link: "https://www.greenbrownblue.com/food-and-health-explained/which-vegetables/"
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
                icon: CanadaEstherPlateData.getItems()[2][3].foodInfo.content,
                outcomeType: OutcomeType.Climate,
                outcomeDesc: "Green House Gas",
                link: "https://www.greenbrownblue.com/food-and-climate-explained/food-ghg/"
            }
        ]
    };
}

export class CanadaEstherScoreData {
    public static get() {
        return Private.scores;
    }
}
