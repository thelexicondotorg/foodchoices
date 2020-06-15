import { Region, BrazilCharacters, NordicCharacters, IndonesiaCharacters, Character, IEasterEgg, CanadaCharacters } from "../../Types";

namespace Private {

    export const adultChoices = [
        "By ${selfPronoun} in the lunchroom",
        "With ${possessivePronoun} colleagues in the lunchroom",
        "By ${selfPronoun} in front of ${possessivePronoun} desk",
        "${name} gets busy and doesn't have time to eat"
    ];

    const kidChoices = [
        "By ${selfPronoun} in the canteen",
        "With ${possessivePronoun} classmates in the canteen",
        // "By ${selfPronoun} in front of ${possessivePronoun} desk",
        "Today, ${name} doesn't have time for lunch"
    ];

    export const choices: { [region: string]: { [character: string]: string[] } } = {
        [Region.Brazil]: {
            [BrazilCharacters.Maria]: [
                "With her parents at the table",
                "By herself at the table. Her mother watches her",
                "Her mother will feed her while she watches television",
                "Today Maria doesn't have time for lunch"
            ],
            [BrazilCharacters.Gabriel]: kidChoices
        },
        [Region.Nordics]: {
            [NordicCharacters.Elias]: kidChoices,
            [NordicCharacters.Amena]: kidChoices
        },
        [Region.Indonesia]: {
            [IndonesiaCharacters.Hassan]: [
                "Hasan's Grandma cooks at home using traditional methods",
                "Hasan's Mom brings food home from warung"
            ],
            [IndonesiaCharacters.Wulandari]: [
                "Centia eats with the family",
                "Centia eats separately from the family while her mom cooks"
            ],
            [IndonesiaCharacters.Neesa]: [
                "The family eats a  home prepared meal",
                "Her mom brings prepared food home from the market",
                "Neesa goes out to fast food with friends before going to the movies"
            ]
        },
        [Region.Canada]: {
            [CanadaCharacters.Sylvia]: [
              "by herself in the lunchroom",
              "with her colleagues in the lunchroom",
              "by herself in front of her desk",
              "Sylvia doesn’t have time for lunch today"
            ],
            [CanadaCharacters.Hardeep]: [
                "By himself in the lunchroom",
                "With his colleagues in the lunchroom",
                "By himself in front of his desk reading the news",
                "Today, Hardeep doesn’t have time for lunch"
            ],
            [CanadaCharacters.Esther]: [
                "She walks home and eats with her husband",
                "She sits and visits with community members who are sharing a meal",
                "She walks home and watches TV while she is eating",
                "Esther gets busy and doesn't have time to eat"
            ]
        }
    };
}

export class StackingData {
    public static getItems(region: Region, character: Character) {
        const regionData = Private.choices[region];
        const characterData = regionData ? regionData[character] : undefined;
        return characterData || Private.adultChoices;
    }

    public static getEasterEggs(answer: number, region: Region, character: Character): string | null {
        if (region === Region.Nordics) {
            if (character === NordicCharacters.Elias) {
                if (answer === 0 || answer === 2) {
                    return "All school children go to the school canteen with their teachers an every child has to try some of the food served that day!";
                }
            }
        } else if (region === Region.Indonesia) {
            if (character === IndonesiaCharacters.Neesa) {
                if (answer === 2) {
                    return "Mom says no; it's dinner at home and homework tonight!";
                }
            }
        }
        return null;
    }

    public static getFontSize(answer: number, region: Region, character: Character) {
        if (region === Region.Indonesia) {
            if (character === IndonesiaCharacters.Wulandari) {
                if (answer === 1) {
                    return "21px";
                }
            } else if (character === IndonesiaCharacters.Neesa) {
                if (answer === 1) {
                    return "23px";
                } else if (answer === 2) {
                    return "19px";
                }
            } else if (character === IndonesiaCharacters.Hassan) {
                if (answer === 0) {
                    return "22px";
                }
            }
        } else if (region === Region.Canada) {
            if (character === CanadaCharacters.Esther) {
                if (answer === 1) {
                    return "19px";
                }
            }
        }
        return "24px";
    }

    public static getTitle(region: Region, character: Character) {
        if (region === Region.Indonesia) {
            switch (character) {
                case IndonesiaCharacters.Wulandari:
                    return "When does Centia eat?";

                case IndonesiaCharacters.Hassan:
                    return "How is dinner prepared for Hasan and his sister?";                    

                case IndonesiaCharacters.Neesa:
                    return "What do Neesa's family do for dinner?";
            }
        }
        return "How would ${name} eat lunch?";
    }

    public static getOutcomeIcon() {
        return "/public/gamelets/stacking/stacking-outcome.png";
    }
}
