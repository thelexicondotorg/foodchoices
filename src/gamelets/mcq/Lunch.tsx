
import * as React from "react";
import { Gamelet, IGameletProps } from "../Gamelet";
import { LunchData } from "../../data/LunchData";
import { MCQItem } from "./MCQItem";
import { EasterEgg } from "../../story/EasterEgg";
import { IEasterEgg, IChoiceItem, Region, BrazilCharacters } from "../../Types";
import { Objective } from "../../story/Objective";
import { CharacterData } from "../../data/CharacterData";
import "./lunch.css";
import { Utils } from "../../common/Utils";

interface ILunchState {
    question: number;
    animPrefix: string;
    easterEgg?: IEasterEgg;
}

interface ILunchProps {
    customQuestions?: IChoiceItem[];
    noTitle?: boolean;
    choiceMade: (question: number, answer: number) => void;
}

export class Lunch extends Gamelet<ILunchProps, ILunchState> {

    private _items: MCQItem[] = [];

    constructor(props: ILunchProps & IGameletProps) {
        super(props);
        this.state = {
            animPrefix: "mcq2-item-intro",
            question: 0
        };
    }

    public render() {
        const { region, character, customQuestions, noTitle } = this.props;
        const { question, easterEgg, animPrefix } = this.state;
        const items = customQuestions ?? LunchData.getQuestions(region, character)[question];
        const characterData = CharacterData.get(region, character);

        const customStyle = noTitle === true ? {
            iconHeight: "50%",
            textHeight: "50%"
        } : undefined;
        return (
            <div>
                <div
                    className="fadeIn gamelet"
                    ref={e => this._root = e as HTMLDivElement}
                    style={{
                        position: "relative",
                        overflow: "hidden"
                    }}
                >                    
                    <div
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            textAlign: "center",
                            top: "15%"
                        }}
                    >
                        {
                            noTitle !== true
                            &&
                            (
                                <div
                                    style={{
                                        fontSize: "4vh",
                                        marginBottom: "20px"
                                    }}
                                >
                                    {(() => {
                                        if (question === 0) {
                                            if (region === Region.Brazil) {
                                                if (character === BrazilCharacters.Maria) {
                                                    return "What does Maria's mom feed her for lunch?"
                                                }
                                            }
                                            return `What lunch will ${characterData.name} get?`;
                                        } else {
                                            if (region === Region.Brazil) {
                                                if (character === BrazilCharacters.Maria) {
                                                    return "When Maria is thirsty, what does she drink?";
                                                }
                                            }                                            
                                            return `What drink will ${characterData.name} get with ${characterData.possessivePronoun} lunch?`;
                                        }
                                    })()}
                                </div>
                            )
                        }                        
                        <div
                            style={{
                                width: "40vw",
                                maxWidth: "800px",
                                margin: "0 auto"
                            }}
                        >
                            <img src={characterData.iconSecondary} />
                        </div>
                    </div>
                    <div
                        style={{
                            position: "absolute",
                            width: "calc(100% - 80px)",
                            height: noTitle === true ? "90%" : "80%",
                            top: noTitle === true ? "10%" : "20%",
                            padding: "0px 40px 0px 40px"
                        }}
                    >
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr 1fr",
                                height: "100%",
                                position: "relative"
                            }}
                        >
                            <div
                                style={{
                                    textAlign: "right"
                                }}
                            >
                                <MCQItem
                                    ref={e => this._items[0] = e as MCQItem}
                                    animClass={`${animPrefix}1`}
                                    onClick={() => this.tryComplete(0)}
                                    icon={items[0].icon}
                                    description={items[0].description}
                                    descriptionElem={items[0].descriptionElem}
                                    descStyle={{ margin: "0px 0px 0px auto" }}
                                    customStyle={customStyle}
                                />
                                <MCQItem
                                    ref={e => this._items[1] = e as MCQItem}
                                    animClass={`${animPrefix}2`}
                                    onClick={() => this.tryComplete(1)}
                                    icon={items[1].icon}
                                    description={items[1].description}
                                    descriptionElem={items[1].descriptionElem}
                                    descStyle={{ margin: "0px 0px 0px auto" }}
                                    customStyle={customStyle}
                                />
                            </div>
                            <div 
                                // style={{ backgroundColor: "black" }} 
                            />
                            <div>
                                <MCQItem
                                    ref={e => this._items[2] = e as MCQItem}
                                    animClass={`${animPrefix}3`}
                                    onClick={() => this.tryComplete(2)}
                                    icon={items[2].icon}
                                    description={items[2].description}
                                    descriptionElem={items[2].descriptionElem}
                                    descStyle={{}}
                                    customStyle={customStyle}
                                />
                                <MCQItem
                                    ref={e => this._items[3] = e as MCQItem}
                                    animClass={`${animPrefix}4`}
                                    onClick={() => this.tryComplete(3)}
                                    icon={items[3].icon}
                                    description={items[3].description}
                                    descriptionElem={items[3].descriptionElem}
                                    descStyle={{}}
                                    customStyle={customStyle}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <EasterEgg
                    info={easterEgg}
                    character={characterData}
                    onRepick={() => {
                        this.setState({ easterEgg: undefined });
                        this.fadeIn();
                    }}
                />
            </div>
        );
    }

    private tryComplete(index: number) {
        const { question } = this.state;
        const { region, character, customQuestions } = this.props;
        const allQuestions = customQuestions
            ? [customQuestions as IChoiceItem[]]
            : LunchData.getQuestions(region, character);
        const items = allQuestions[question];
        const item = items[index];
        if (item.easterEgg) {
            this.fadeOut()
                .then(() => {
                    this.setState({
                        easterEgg: {
                            backgroundColor: "#FCE9E7",
                            icon: item.icon,
                            message: item.easterEgg as string
                        }
                    });
                    this._items[index].reset();
                });
        } else {
            this.props.choiceMade(question, index);
            if (question + 1 < allQuestions.length) {
                this.setState({ animPrefix: "mcq2-item-outro" });
                setTimeout(() => this.setState({
                    question: question + 1,
                    animPrefix: "mcq2-item-intro"
                }), 300);
                this._items[index].reset();
            } else {
                this.complete(0);
            }
        }
    }
}
