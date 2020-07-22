
import * as React from "react";
import { Gamelet, IGameletProps } from "../Gamelet";
import { TimeItem } from "./TimeItem";
import { TimeData } from "../../data/TimeData";
import { EasterEgg } from "../../story/EasterEgg";
import { IEasterEgg } from "../../Types";
import { CharacterData } from "../../data/CharacterData";
import { Utils } from "../../common/Utils";

interface ITimeState {
    easterEgg?: IEasterEgg;
}

export class Time extends Gamelet<{}, ITimeState> {

    constructor(props: {} & IGameletProps) {
        super(props);
        this.state = {};
    }

    public render() {
        const { easterEgg } = this.state;
        const { region, character } = this.props;

        const items = TimeData.getQuestions(region, character);
        const characterData = CharacterData.get(region, character);
        return (
            <div>
                <div
                    className="fadeIn gamelet"
                    ref={e => this._root = e as HTMLDivElement}
                >
                    <div
                        style={{
                            height: "100%",
                            overflow: Utils.isMobile() ? undefined : "hidden",
                            position: "relative"
                        }}
                    >
                        <div
                            style={{
                                maxWidth: "1400px",
                                width: "100%",
                                position: "relative",
                                height: "100%",
                                margin: "0 auto"
                            }}
                        >
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    height: "100%"
                                }}
                            >
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
                                            right: "0px",
                                            bottom: "0px"
                                        }}
                                        src={characterData.iconMain}
                                    />
                                </div>
                                <div
                                    className="gamelet-text"
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-around",
                                        paddingRight: "10px",
                                        position: "relative"
                                    }}
                                >
                                    {
                                        items.map((item, index) => (
                                            <TimeItem
                                                animPrefix={`time-item${index + 1}-slidein`}
                                                iconClass="time-icon"
                                                key={index}
                                                icon={item.icon}
                                                description={item.description.replace(
                                                    "${subjectPronoun}",
                                                    characterData.subjectPronoun
                                                )}
                                                onClick={() => {
                                                    if (item.easterEgg) {
                                                        this.fadeOut()
                                                            .then(() => this.setState({
                                                                easterEgg: {
                                                                    backgroundColor: "#FEEFC4",
                                                                    icon: item.icon,
                                                                    message: item.easterEgg as string
                                                                }
                                                            }));
                                                        return;
                                                    }
                                                    this.complete(index);
                                                }}
                                            />
                                        ))
                                    }
                                </div>
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
