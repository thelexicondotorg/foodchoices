
import * as React from "react";
import { Section, GameletType, Character, Region, NordicCharacters, IndonesiaCharacters, BrazilCharacters } from "../Types";
import { Objective } from "../story/Objective";
import { CharacterData } from "../data/CharacterData";
import { Utils } from "./Utils";

interface IHeaderProps {
    section: Section;
    gamelet: GameletType;
    region?: Region;
    character?: Character;
    gameletIntro: boolean;
}

export class Header extends React.Component<IHeaderProps> {
    public render() {

        const isMobile = Utils.isMobile();
        const paddingLeft = isMobile ? "20px" : "54px";
        const { section, region, gamelet, character, gameletIntro } = this.props;
        const alignRight = 
            gamelet === GameletType.MCQ 
            || gamelet === GameletType.Slider
            || gamelet === GameletType.LunchSnack;

        if (section === Section.RegionSelect
        || section === Section.Outcome
        || section === Section.CharacterSelect
        // || window.innerHeight < 900 // Screen too small, don't show the header
        ) {
            return null;
        }

        const message = (() => {
            if (region === undefined || character === undefined) {
                return null;
            }
            const characterData = CharacterData.get(region, character);

            let isKid = false;
            switch (region) {
                case Region.Nordics:
                    isKid = character === NordicCharacters.Amena || character === NordicCharacters.Elias;
                    break;
            }

            switch (gamelet) {
                case GameletType.Time:
                    if (region === Region.Indonesia) {
                        if (character === IndonesiaCharacters.Wulandari) {
                            return `Helping ${characterData.name} start their day`;
                        }
                    }
                    if (region === Region.Brazil) {
                        if (character === BrazilCharacters.Maria) {
                            return "What is Maria's first meal?";
                        }
                    }
                    return `Helping ${characterData.name} start ${characterData.possessivePronoun} day`;
                case GameletType.MCQ:
                    if (region === Region.Indonesia) {
                        if (character === IndonesiaCharacters.Neesa
                            || character === IndonesiaCharacters.Hassan) {
                            return `Helping ${characterData.name} pick a beverage`;
                        }
                    }
                    if (region === Region.Brazil) {
                        if (character === BrazilCharacters.Maria) {
                            return "What does she eat for her morning snack?";
                        }
                    }
                    return `Helping ${characterData.name} pick a morning snack`;
                case GameletType.Lunch:
                    return `Helping ${characterData.name} get lunch`;
                case GameletType.Slider: {

                        if (region === Region.Indonesia) {
                            if (character === IndonesiaCharacters.Wulandari) {
                                return `Helping Wulandari shop for groceries`;
                            }
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
                            return `Helping ${characterData.name}'s ${delegate} shop for groceries`;
                        } else {
                            return `Helping ${characterData.name} shop for groceries`;
                        }
                    }              
                case GameletType.GroceriesShopping:
                    if (character === IndonesiaCharacters.Wulandari) {
                        return (
                            <React.Fragment>
                                Wulandari and Centia have 40,000rpa<br />
                                Help them with their shopping list
                            </React.Fragment>
                        );
                    } else if (character === IndonesiaCharacters.Hassan) {
                        return (
                            <React.Fragment>
                                Hassan and his mother have 70,000rpa<br />
                                Help them with their shopping list
                            </React.Fragment>
                        );
                    }
                    return `Help ${characterData.name} with ${characterData.possessivePronoun} shopping list`;
                case GameletType.FruitShopping:
                    if (region === Region.Indonesia) {
                        if (character === IndonesiaCharacters.Wulandari) {
                            return `Help Wulandari buy fruit for dessert`;
                        }
                        return `Help ${characterData.name} buy fruit for dessert`;
                    }                    
                case GameletType.LunchSnack:
                    if (region === Region.Indonesia) {
                        if (character === IndonesiaCharacters.Wulandari) {
                            return (
                                <React.Fragment>
                                    Wulandari stops by a street cart on the way to the market.<br />
                                    What does she buy for Centia?
                                </React.Fragment>
                            );
                        } else if (character === IndonesiaCharacters.Hassan) {
                            return (
                                <React.Fragment>
                                    Hassan grabs a snack on his way home from school.<br />
                                    Can you help him choose?
                                </React.Fragment>
                            );
                        } else {
                            return (
                                <React.Fragment>
                                    School's out.<br />
                                    Neesa stops to get a snack<br />
                                    as she walks home with her friends.<br />
                                    Can you help her choose?"
                                </React.Fragment>
                            );
                        }
                    }                    
                case GameletType.YesNoSocial:
                    if (region === Region.Brazil) {
                        if (character === BrazilCharacters.Maria) {
                            return "What do Maria's family often eat for dinner?";
                        } else if (character === BrazilCharacters.Gabriel) {
                            return "What does Gabriel often eat for dinner?";
                        } else if (character === BrazilCharacters.Sandra) {
                            return "What do Sandra and her family usually eat for dinner?";
                        }
                    }
                    if (region === Region.Nordics) {
                        if (character === NordicCharacters.Elias) {
                            return "What do Elias and his family often eat for dinner?";
                        } else if (character === NordicCharacters.Amena) {
                            return "What meals does Amena often eat for dinner?";
                        } else {
                            return "What do Lisen and her family often eat for dinner?";
                        }
                    }
                    if (isKid) {
                        return `${characterData.name}'s family is having dinner`;
                    } else {
                        return `Helping ${characterData.name} get dinner`;
                    }
                default: return null;
            }
        })();

        return (
            <div
                style={{
                    position: "absolute",
                    padding: "20px",
                    paddingTop: "14px",
                    paddingBottom: "10px",
                    paddingLeft,
                    top: "0px",
                    right: alignRight ? "0px" : undefined,
                    pointerEvents: "none"
                }}
            >
                <div>
                    {                        
                        <div
                            style={{
                                marginBottom: "4px",
                                textAlign: alignRight ? "right" : undefined
                            }}
                        >
                            <img
                                style={{
                                    maxWidth: "100%"
                                }}
                                src="/public/Header.svg"
                            />
                        </div>
                    }
                    {
                        message
                        && 
                        !gameletIntro
                        &&
                        <Objective message={message} />
                    }
                </div>
            </div>
        );
    }
}
