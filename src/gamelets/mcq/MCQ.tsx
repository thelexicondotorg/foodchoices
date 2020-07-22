
import * as React from "react";
import { Gamelet, IGameletProps } from "../Gamelet";
import { MCQData } from "../../data/MCQData";
import { TimeItem } from "../time/TimeItem";
import { EasterEgg } from "../../story/EasterEgg";
import { IEasterEgg, IChoiceItem } from "../../Types";
import { CharacterData } from "../../data/CharacterData";
import { Utils } from "../../common/Utils";

interface IMCQState {
    question: number;
    animPrefix: string;
    easterEgg?: IEasterEgg;    
}

interface IMCQProps {
    customQuestions?: IChoiceItem[][];
    choiceMade: (question: number, answer: number) => void;
}

export class MCQ extends Gamelet<IMCQProps, IMCQState> {

    private _items: TimeItem[] = [];

    constructor(props: IMCQProps & IGameletProps) {
        super(props);
        this.state = {
            question: 0,
            animPrefix: "mcq-item-intro"
        };
    }

    public render() {
        const { region, character, customQuestions } = this.props;
        const { question, animPrefix, easterEgg } = this.state;
        const allQuestions = customQuestions || MCQData.getQuestions(region, character);
        const items = allQuestions[question];
        const characterData = CharacterData.get(region, character);
        return (
            <div>
                <div
                    className="fadeIn gamelet bg-color-transition"
                    style={{
                        backgroundColor: (() => {
                            if (question === 1) {
                                return "#F5CFB3";
                            }
                            return "white";
                        })()
                    }}
                    ref={e => this._root = e as HTMLDivElement}
                >
                    <div
                        className="bg-color-transition"
                        style={{
                            height: "100%",
                            overflow: Utils.isMobile() ? undefined : "hidden",
                            position: "relative"
                        }}
                    >
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                height: "100%",
                                maxWidth: "1400px",
                                margin: "0 auto"
                            }}
                        >
                            <div
                                className="gamelet-text"
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-around",
                                    padding: "25px"
                                }}
                            >
                                {
                                    items.map((item, index) => (
                                        <TimeItem
                                            ref={e => this._items[index] = e as TimeItem}
                                            invert={true}
                                            iconClass="mcq-icon"
                                            animPrefix={`${animPrefix}${index + 1}-slide`}
                                            key={index}
                                            icon={item.icon}
                                            description={item.description}
                                            onClick={() => {
                                                if (item.easterEgg) {
                                                    this.fadeOut()
                                                        .then(() => {
                                                            this.setState({
                                                                easterEgg: {
                                                                    backgroundColor: "#FEEFC4",
                                                                    icon: item.icon,
                                                                    message: item.easterEgg as string
                                                                }
                                                            });
                                                            this._items[index].reset();
                                                        });
                                                    return;
                                                }
                                                this.props.choiceMade(question, index);
                                                if (question + 1 < allQuestions.length) {
                                                    this._items[index].reset();
                                                    this.setState({ animPrefix: "mcq-item-outro" });
                                                    setTimeout(() => this.setState({
                                                        question: question + 1,
                                                        animPrefix: "mcq-item-intro"
                                                    }), 300);
                                                } else {
                                                    this.complete(0);
                                                }
                                            }}
                                        />
                                    ))
                                }
                            </div>
                            <div
                                style={{
                                    height: "100%",
                                    overflow: "visible",
                                    position: "relative"
                                }}
                            >
                                <img
                                    style={{
                                        width: "auto",
                                        height: "80%",
                                        position: "absolute",
                                        left: "0px",
                                        bottom: "0px"
                                    }}
                                    src={characterData.iconSecondary}
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
}
