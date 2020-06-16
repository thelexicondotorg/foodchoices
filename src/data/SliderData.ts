import { Region, Character, IChoiceItem, NordicCharacters, IndonesiaCharacters, BrazilCharacters } from "../Types";
import { CharacterData } from "./CharacterData";
import { CommonData } from "./CommonData";

namespace Private {
    export const questions = [
        // Canada
        [
            // Sylvia
            [                
                {
                    icon: "/public/gamelets/slider/market.svg",
                    description: "She waits until the weekend to shop at a local farmer’s market, where she knows the vendors and buys what's in season"
                },
                {
                    icon: "/public/gamelets/slider/bigbox.svg",
                    description: "${subjectPronoun} stops at a big box grocery store",
                    easterEgg: "${name}'s budget doesn't allow her to shop at big grocery stores on a regular basis"
                },
                {
                    icon: "/public/gamelets/slider/shop.svg",
                    description: "${subjectPronoun} visits the convenience store close to ${possessivePronoun} house"
                },
                {
                    icon: "/public/gamelets/slider/foodbank.svg",
                    description: "${subjectPronoun} rearranges her schedule to get groceries from the food bank when its open"
                }
            ],
            // Esther
            [
                {
                    icon: "/public/gamelets/slider/market.svg",
                    description: "${subjectPronoun} waits until the weekend to shop at a local farmer's market, where ${subjectPronoun} knows all of the vendors and stops to say hello."
                },
                {
                    icon: "/public/gamelets/slider/bigbox.svg",
                    description: "${subjectPronoun} stops at a big box grocery store",
                    easterEgg: "Esther doesn’t have a car and can’t get to the major grocery stores without walking along a major highway. Choose another option!"
                },
                {
                    icon: "/public/gamelets/slider/shop.svg",
                    description: "${subjectPronoun} visits the convenience store close to ${possessivePronoun} house"
                },
                {
                    icon: "/public/gamelets/slider/foodbank.svg",
                    description: "${subjectPronoun} rearranges her schedule to get groceries from the food bank when it's open"
                }
            ],
            // Hardeep
            [
                {
                    icon: "/public/gamelets/slider/market.svg",
                    description: "He waits until the weekend to shop at a local farmer’s market, where he knows all of the vendors and stops to say hello.",
                    easterEgg: "Hardeep doesn't know where the local farmer's market is!"
                },
                {
                    icon: "/public/gamelets/slider/bigbox.svg",
                    description: "${subjectPronoun} stops at a big box grocery store"
                },
                {
                    icon: "/public/gamelets/slider/shop.svg",
                    description: "He visits the corner store close to his apartment"
                },
                {
                    icon: "/public/food/canada/restaurant.svg",
                    description: "Hardeep doesn't need groceries - he eats mostly at restaurants"                    
                }
            ]
        ],
        // Brazil
        [
            // Gabriel
            [
                {
                    icon: "/public/gamelets/slider/market.svg",
                    description: "Gabriel and his mother go to a local farmer's fair"
                },
                {
                    icon: "/public/gamelets/slider/bigbox.svg",
                    description: "The family goes together to a hypermarket. "
                },                
                {
                    icon: "/public/gamelets/slider/shop.svg",
                    description: "Gabriel’s mother goes alone to a mini-market."
                },
                {
                    icon: "/public/gamelets/slider/foodbank.svg",
                    description: "Gabriel's mother buys food online. "
                }
            ],
            // Sandra
            [
                {
                    icon: "/public/gamelets/slider/bigbox.svg",
                    description: "At a super market",
                    easterEgg: "Shop in places that offer fresh or minimally processed varieties of food."
                },
                {
                    icon: "/public/gamelets/slider/market.svg",
                    description: "A local farmer's market"                    
                },            
                {
                    icon: "/public/gamelets/slider/shop.svg",
                    description: "They buy all at grocery store."
                },
                {
                    icon: "/public/gamelets/slider/smallshop.svg",
                    description: "At a corner store close to her house"
                }
            ],
            // Maria
            [
                {
                    icon: "/public/gamelets/slider/bigbox.svg",
                    description: "Her mother does all alone. She goes to a supermarket"                    
                },
                {
                    icon: "/public/gamelets/slider/market.svg",
                    description: "The parents produce what they eat and exchange with other local farmers."
                },            
                {
                    icon: "/public/gamelets/slider/shop.svg",
                    description: "They don't plan. They buy all at a grocery store"
                },
                {
                    icon: "/public/gamelets/slider/foodbank.svg",
                    description: "Maria's mother does a grocery list and her father gets it from a supermarket."
                }
            ]
        ],
        // Indonesia
        [
            // Wulandari
            [
                {
                    icon: "/public/gamelets/slider/bigbox.svg",
                    description: "Supermarket",
                    easterEgg: "There are no grocery stores or supermarkets in walking distance of Wulandari's home. She must rely on small shops and outdoor markets"
                },
                {
                    icon: "/public/gamelets/slider/outdoor_market.svg",
                    description: "Local outdoor market"
                },            
                {
                    icon: "/public/gamelets/slider/shop.svg",
                    description: "Grocery store",
                    easterEgg: "There are no grocery stores or supermarkets in walking distance of Wulandari's home. She must rely on small shops and outdoor markets"
                },
                {
                    icon: "/public/gamelets/slider/neighbor_store.svg",
                    description: "Neighbor's small convenience shop"
                }
            ],
            // Neesa
            [
                {
                    icon: "/public/gamelets/slider/bigbox.svg",
                    description: "Supermarket"
                },
                {
                    icon: "/public/gamelets/slider/outdoor_market.svg",
                    description: "Local outdoor market",
                    easterEgg: "There is no local market in this urban setting"
                },            
                {
                    icon: "/public/gamelets/slider/shop.svg",
                    description: "Grocery store"                    
                },
                {
                    icon: "/public/gamelets/slider/neighbor_store.svg",
                    description: "Neighbor's small convenience shop"
                }
            ],
            // Hassan
            [
                {
                    icon: "/public/gamelets/slider/bigbox.svg",
                    description: "Supermarket",
                    easterEgg: "There is no supermarket in Hasan's rural community"
                },
                {
                    icon: "/public/gamelets/slider/outdoor_market.svg",
                    description: "Local outdoor market"
                },            
                {
                    icon: "/public/gamelets/slider/shop.svg",
                    description: "Grocery store"                    
                },
                {
                    icon: "/public/gamelets/slider/neighbor_store.svg",
                    description: "Neighbor's small convenience shop"
                }
            ]
        ],
        // Nordics
        [
            // Elias
            [
                {
                    icon: "/public/gamelets/slider/bigbox.svg",
                    description: "${subjectPronoun} stops at a big box grocery store",
                },
                {
                    icon: "/public/gamelets/slider/market.svg",
                    description: "${subjectPronoun} waits until the weekend to shop at a local farmer's market, where ${subjectPronoun} knows all of the vendors and stops to say hello."
                },            
                {
                    icon: "/public/gamelets/slider/shop.svg",
                    description: "${subjectPronoun} visits the convenience store close to ${possessivePronoun} house"
                },
                {
                    icon: "/public/gamelets/slider/foodbank.svg",
                    description: "${subjectPronoun} rearranges ${possessivePronoun} schedule to get groceries from the food bank when its open"
                }
            ],
            // Amena
            [
                {
                    icon: "/public/gamelets/slider/bigbox.svg",
                    description: "${subjectPronoun} stops at a big box grocery store",
                    easterEgg: "${name}'s budget doesn't allow ${possessivePronoun} to shop at big grocery stores on a regular basis"
                },
                {
                    icon: "/public/gamelets/slider/market.svg",
                    description: "${subjectPronoun} waits until the weekend to shop at a local farmer's market, where ${subjectPronoun} knows all of the vendors and stops to say hello."
                },            
                {
                    icon: "/public/gamelets/slider/shop.svg",
                    description: "${subjectPronoun} visits the convenience store close to ${possessivePronoun} house"
                },
                {
                    icon: "/public/gamelets/slider/foodbank.svg",
                    description: "${subjectPronoun} rearranges ${possessivePronoun} schedule to get groceries from the food bank when its open"
                }
            ],
            // Lisen
            [
                {
                    icon: "/public/gamelets/slider/bigbox.svg",
                    description: "${subjectPronoun} stops at a big box grocery store",
                    easterEgg: "${name}'s budget doesn't allow ${possessivePronoun} to shop at big grocery stores on a regular basis"
                },
                {
                    icon: "/public/gamelets/slider/market.svg",
                    description: "${subjectPronoun} waits until the weekend to shop at a local farmer's market, where ${subjectPronoun} knows all of the vendors and stops to say hello."
                },            
                {
                    icon: "/public/gamelets/slider/shop.svg",
                    description: "${subjectPronoun} visits the convenience store close to ${possessivePronoun} house"
                },
                {
                    icon: "/public/gamelets/slider/foodbank.svg",
                    description: "${subjectPronoun} rearranges ${possessivePronoun} schedule to get groceries from the food bank when its open"
                }
            ]
        ]
    ];
}

export class SliderData {
    public static getQuestions(region: Region, character: Character): IChoiceItem[] {
        return Private.questions[region][character];
    }

    public static getTitle(region: Region, character: Character) {
        const characterData = CharacterData.get(region, character);
        let isKid = false;
        if (region === Region.Nordics) {
            isKid = character === NordicCharacters.Elias || character === NordicCharacters.Amena;
        }
        
        const delegate = (() => {
            if (region === Region.Indonesia) {
                if (character === IndonesiaCharacters.Neesa) {
                    return "housekeeper";
                } else if (character === IndonesiaCharacters.Hassan) {
                    return "grandmother";
                }                
            } else if (region === Region.Brazil) {
                if (character === BrazilCharacters.Gabriel) {
                    return "mother";
                } else if (character === BrazilCharacters.Maria) {
                    return "parents";
                }
            }

            if (isKid) {
                return "family";
            } else {
                return null;
            }
        })();

        if (delegate) {
            return `Where does ${characterData.name}'s ${delegate} purchase groceries?`;
        } else {
            return `Where does ${characterData.name} purchase groceries?`;
        }
    }
}
