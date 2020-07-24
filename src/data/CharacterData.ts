import { 
    CanadaCharacters, 
    ICharacterData,
    Region, 
    BrazilCharacters, 
    IndonesiaCharacters,
    NordicCharacters, 
    Character 
} from "../Types";

interface ICharacters {
    [character: string]: ICharacterData;
}

namespace Private {
    export const data: { [region: string]: ICharacters; } = {
        [Region.Canada]: {
            [CanadaCharacters.Sylvia]: {
                name: "Sylvia",
                possessivePronoun: "her",
                objectPronoun: "her",
                subjectPronoun: "she",
                selfPronoun: "herself",
                iconMain: "/public/character/sylvia.svg",
                iconSecondary: "/public/character/SylviaSingle.svg",
                iconOutcome: "/public/character/SylviaOutcome.svg",
                description: `Sylvia is a single mother with two kids, ages 8 and 10. She works in a clothing store and makes $35,000 per year, which is considered ‘low income'.
    Sylvia loves to cook and wants to eat healthy, but it's hard to find the time between work and her kids' homework and recreational activities.
    When Sylvia is shopping, she reads food labels and tries hard to eat a balanced diet – when she has time.
    She lives in a suburban neighbourhood, and has to drive to access a grocery store – there are no shops within walking distance.
    Her favourite meal is homemade meatloaf.`,
                age: 43,
                occupation: "Saleswoman",
                attributes: {
                    access: 1,
                    security: -1,
                    literacy: 2
                }
            },
    
            [CanadaCharacters.Esther]: {
                name: "Esther",
                possessivePronoun: "her",
                objectPronoun: "her",
                subjectPronoun: "she",
                selfPronoun: "herself",
                iconMain: "/public/character/esther.svg",
                iconSecondary: "/public/character/esther.svg",
                iconOutcome: "/public/character/esther-outcome.svg",
                description: `Esther is a French speaking Haitian who immigrated to Canada in 2015. She volunteers at the collective kitchen in her community. Esther's family doesn't have a car, so she walks or takes public transport. While she sees food sold everywhere in
                her community, most of it is culturally unfamiliar. Although she has been shopping and preparing food for her family for decades, her first trip to the grocery store in Canada was a real eye opener – she couldn't find any of the products she uses to make her favourite stewed conch!`,
                age: 65,
                occupation: "Retired",
                attributes: {
                    access: 0,
                    security: .5,
                    literacy: .5
                }
            },
    
            [CanadaCharacters.Hardeep]: {
                name: "Hardeep",
                possessivePronoun: "his",
                objectPronoun: "him",
                subjectPronoun: "he",
                selfPronoun: "himself",
                iconMain: "/public/character/hardeep.svg",
                iconSecondary: "/public/character/hardeep.svg",
                iconOutcome: "/public/character/hardeep-outcome.svg",
                description: `Hardeep is a single male living in downtown Toronto. He was born in Canada and is English speaking; his parents came from India in 1965. Hardeep never really learned to cook – his mom did most of the cooking growing up, and he never learned about nutrition in school. Hardeep's apartment is surrounded by all types of stores that sell food and restaurants, but mostly Hardeep uses food delivery apps for delicious meals that he posts on Instagram. He often eats in front of the TV while checking his social media feeds. Hardeep is a vegetarian, mostly as a result of his religious upbringing.`,
                age: 27,
                occupation: "Insurance Adjuster",
                attributes: {
                    access: 2,
                    security: 2,
                    literacy: -2
                }
            }
        },
        [Region.Brazil]: {
            [BrazilCharacters.Gabriel]: {
                name: "Gabriel",
                possessivePronoun: "his",
                objectPronoun: "him",
                subjectPronoun: "he",
                selfPronoun: "himself",
                iconMain: "/public/character/Brazil/Gabriel.svg",
                iconSecondary: "/public/character/Brazil/Gabriel.svg",
                iconOutcome: "/public/character/Brazil/gabriel-outcome.svg",
                description: "Gabriel is black and was born in Brazil. He lives in an apartment in the south side of the city of São Paulo, in southeast Brazil, with his mother and a younger sister (12 years old). He studies high school (3rd year) in a state public school. He goes to school alone, by bus, but there is a small distance (150 m) between the bus stop and the school, which he walks. His mother came from Minas Gerais, is a nursing technician and the family is middle-income (US $920/ month). He eats snacks with his friends at school and he enjoys watching videos on YouTube. He does not know how to cook and he only practices physical activities in physical education classes. He is a normal weight. Gabriel’s mother cooks dinner, and the family often eats dinner leftovers for lunch the next day.",
                age: 17,
                occupation: "Urban Teenager",
                attributes: {
                    access: .5,
                    security: 0,
                    literacy: -2
                }
            },
            [BrazilCharacters.Sandra]: {
                name: "Sandra",
                possessivePronoun: "her",
                objectPronoun: "her",
                subjectPronoun: "she",
                selfPronoun: "herself",
                iconMain: "/public/character/Brazil/Sandra.svg",
                iconSecondary: "/public/character/Brazil/Sandra.svg",
                iconOutcome: "/public/character/Brazil/sandra-outcome.svg",
                description: "Sandra lives with her husband and her 22-year-old daughter in a house in the center of Blumenau, a mid-sized city in the interior of the state of Santa Catarina, south Brazil. She studied Tourism at college and owns a travel agency. She works from Monday to Friday, 8 hours a day. Her family is middle-upper income (US$ 2,630/ month). She lives near her work and is sedentary. A cleaning lady cleans the family house twice a week. She smokes, has hypertension and is in menopause. In her free time, she likes to watch TV. She usually eats lunch in restaurants during the week. At night, she is responsible for the family dinner, but she doesn't like to cook every day, so sometimes she orders takeout food. Sandra was born in Brazil and is a German descendant.",
                age: 50,
                occupation: "Urban Executive",
                attributes: {
                    access: 2,
                    security: 2,
                    literacy: 2
                }
            },
            [BrazilCharacters.Maria]: {
                name: "Maria",
                possessivePronoun: "her",
                objectPronoun: "her",
                subjectPronoun: "she",
                selfPronoun: "herself",
                iconMain: "/public/character/Brazil/Maria.svg",
                iconSecondary: "/public/character/Brazil/Maria.svg",
                iconOutcome: "/public/character/Brazil/maria-outcome.svg",
                age: 9,
                occupation: "Rural Baby",
                attributes: {
                    access: 1,
                    security: 0,
                    literacy: -2
                },
                description: "Maria lives with her parents in a small house in the rural area of ​​Lagoa da Canoa, a small-sized city in the interior of the state of Alagoas, in northeast Brazil. Her parents work in the fields. They are small farmers and they produce most of the food the family eats using the mandala system (an agro ecological way of production where the chicken coop is in the center of the land and the food is planted around it, fertilized with chicken manure). Her mother stays at home, taking care of her and doing domestic activities. Maria was breastfed until six months. Her mother, who is primarily responsible for her food, cooks very well. Her parents only studied until elementary school. Her family is low-income (US$ 290/ month). Maria is a healthy baby, and has the weight and height expected for her age."
            }
        },
        [Region.Indonesia]: {
            [IndonesiaCharacters.Wulandari]: {
                name: "Wulandari and Centia",
                possessivePronoun: "their",
                objectPronoun: "her",
                subjectPronoun: "she",
                selfPronoun: "herself",
                iconMain: "/public/character/Indonesia/Wulandari.svg",
                iconSecondary: "/public/character/Indonesia/Wulandari.svg",
                iconOutcome: "/public/character/Indonesia/wulandari-outcome.svg",
                description: `Wulandari is a 25 year old mom of 3 children living in rural West Timor who completed only primary school. Her youngest daughter Centia is 18 months old. Wulandari sells vegetables in the informal market and farms a small subsistence plot with her husband and in-laws. Her income usually provides enough for her to buy basic supplies for their household. The family receives 15 kg of rice monthly and fortified milk from the government assistance program, RASTRA. Shortly after Centia was born, the family had a failed harvest, which further worsened their food security.`,
                age: 25,
                occupation: "Farmer",
                attributes: {
                    access: -1,
                    security: -2,
                    literacy: -1
                }
            },
            [IndonesiaCharacters.Neesa]: {
                name: "Neesa",
                possessivePronoun: "her",
                objectPronoun: "her",
                subjectPronoun: "she",
                selfPronoun: "herself",
                iconMain: "/public/character/Indonesia/Neesa.svg",
                iconSecondary: "/public/character/Indonesia/Neesa.svg",
                iconOutcome: "/public/character/Indonesia/neesa-outcome.svg",
                description: `Neesa is a 15 year old girl who lives in a in a wealthy, urban area of Jakarta. Though her family was poor in her first few years, her father's business recently became more successful, and they moved to a wealthier part of the city 5 years ago. Neesa is short in stature due to poor nutrition in early growth and development years, but she has good access to the foods she wants now. Neesa likes to hang with her friends in the city and loves to go to the movies and eat at the new fast food restaurants.`,
                age: 15,
                occupation: "Student",
                attributes: {
                    access: 2,
                    security: 1,
                    literacy: -1
                }
            },
            [IndonesiaCharacters.Hassan]: {
                name: "Hassan",
                possessivePronoun: "his",
                objectPronoun: "him",
                subjectPronoun: "he",
                selfPronoun: "himself",
                iconMain: "/public/character/Indonesia/Hassan.svg",
                iconSecondary: "/public/character/Indonesia/Hassan.svg",
                iconOutcome: "/public/character/Indonesia/hassan-outcome.svg",
                description: `Hasan is a 7 year old boy in a middle class, rural area of Bali. He and his sister attend school but are expected to help at home. Hasan enjoys football and plays with his friends as often as he can. His mother works as a nurse at the rural health clinic, and his father owns a small business. With his parents both working, they rely on their grandmother to do most of the cooking. She makes traditional meals heavy with rice and smaller amounts of vegetables, and seafood.`,
                age: 7,
                occupation: "Student",
                attributes: {
                    access: 1,
                    security: 1,
                    literacy: 0
                }
            }
        },
        [Region.Nordics]: {
            [NordicCharacters.Elias]: {
                name: "Elias",
                possessivePronoun: "his",
                objectPronoun: "him",
                subjectPronoun: "he",
                selfPronoun: "himself",
                iconMain: "/public/character/Nordics/Elias.svg",
                iconSecondary: "/public/character/Nordics/Elias.svg",
                iconOutcome: "/public/character/Nordics/elias-outcome.svg",
                description: `Elias is from a middle-income family and lives in an apartment in the city. His father is a musician and his mother works as an engineer for a new driverless car manufacturing company. The family buys most groceries in their local supermarket and rarely eat out. Elias receives a daily free school meal prepared according to the Nordic Nutrition Recommendations, twice a week this meal is vegetarian/vegan by default. In school Elias also recently started receiving food education, which has made him a bit more curious, and as his teacher puts it: a Gastronaut.`,
                age: 8,
                occupation: "Student",
                attributes: {
                    access: 2,
                    security: 2,
                    literacy: -1
                }
            },
            [NordicCharacters.Amena]: {
                name: "Amena",
                possessivePronoun: "her",
                objectPronoun: "her",
                subjectPronoun: "she",
                selfPronoun: "herself",
                iconMain: "/public/character/Nordics/Amena.svg",
                iconSecondary: "/public/character/Nordics/Amena.svg",
                iconOutcome: "/public/character/Nordics/amena-outcome.svg",
                description: `Amena is from a lower-income family and her parents have mid- to high-level education from their home country Syria as well as Sweden and the mom works as a caregiver for elderly people and the dad is a part-time English teacher. She receives free school lunch in her high school/upper secondary every day and has adopted flexitarianism for health and climate. She therefore chooses the vegetarian/vegan option every day. This option is available as the default meal for all students twice a week.`,
                age: 17,
                occupation: "Student",
                attributes: {
                    access: 2,
                    security: 1,
                    literacy: -1
                }
            },
            [NordicCharacters.Lisen]: {
                name: "Lisen",
                possessivePronoun: "her",
                objectPronoun: "her",
                subjectPronoun: "she",
                selfPronoun: "herself",
                iconMain: "/public/character/Nordics/Lisen.svg",
                iconSecondary: "/public/character/Nordics/Lisen.svg",
                iconOutcome: "/public/character/Nordics/lisen-outcome.svg",
                description: `A high income, highly educated millennial urban consumer. She works as an attorney, is married and a mother of three. She is interested in feeding her family a wholesome, organic and healthy diet, but she is not very knowledgeable (or otherwise interested in) food and cooking. She is working full time and have little energy for advanced, home-prepared meals. The family eats out once a week, and if they are in a hurry they go for a fast food restaurant but otherwise they prefer a restaurant with a child friendly atmosphere focused modern, new nordic food.`,
                age: 38,
                occupation: "Attorney",
                attributes: {
                    access: 2,
                    security: 2,
                    literacy: 0
                }
            }
        }
    };
}

export class CharacterData {
    public static get(region: Region, character: Character): ICharacterData {
        return Private.data[region][character];
    }

    public static getAll() {
        return [
            ...Object.entries(Private.data[Region.Canada]),
            ...Object.entries(Private.data[Region.Brazil]),
            ...Object.entries(Private.data[Region.Indonesia]),
            ...Object.entries(Private.data[Region.Nordics])
        ];
    }

    public static getAllForRegion(region: Region) {
        return Object.entries(Private.data[region]);
    }

    public static getTitle(region: Region, character: Character) {
        const { name, age, occupation } = CharacterData.get(region, character);
        if (age && occupation) {
            if (region === Region.Brazil) {
                if (character === BrazilCharacters.Maria) {
                    return `${name} ${age} months, ${occupation}`;
                }
            }
            return `${name} ${age}, ${occupation}`;
        } else {
            return name;
        }        
    }
}
