
import * as React from "react";
import "./intro2.css";
import { Config } from "../Config";

interface IIntroProps {
    onPlay: () => void;
}

interface IIntroState {
    playClicked: boolean;
}

export class Intro2 extends React.Component<IIntroProps, IIntroState> {
    constructor(props: IIntroProps) {
        super(props);
        this.state = {
            playClicked: false
        };
    }

    public render() {

        const makeCharacter = (name: string, maxWidth: number) => {
            return (
                <img
                    style={{
                        maxWidth: `${maxWidth}%`,                        
                        position: "relative"
                    }}
                    src={`/public/intro/${name}.svg`}
                />
            );
        };

        return (
            <div>
                <div className="character-layer">
                    {makeCharacter("left-group", 33)}
                    {makeCharacter("center-group", 33)}
                    {makeCharacter("right-group", 33)}
                </div>
                <div className="character-layer">
                    {makeCharacter("sylvia-intro", 20)}
                    {makeCharacter("boy-intro", 20)}
                    {makeCharacter("wulandari-intro", 20)}
                    {makeCharacter("man-intro", 20)}
                    {makeCharacter("woman-intro", 20)}
                </div>                
                <div
                    style={{
                        position: "absolute",
                        bottom: "0px",
                        textAlign: "center"
                    }}
                >
                    <div>
                        <img
                            style={{
                                maxWidth: "90%"
                            }}
                            src="/public/intro/foodplay.svg"
                        />
                    </div>
                    <div
                        style={{
                            marginTop: "60px"
                        }}
                    >
                        <img
                            style={{
                                maxWidth: "26vh",
                                minWidth: "300px"
                            }}
                            src="/public/intro/play-button.svg"
                            className={`${this.state.playClicked ? "selected" : "clickable"}`}
                            onClick={() => {
                                this.setState({ playClicked: true });
                                setTimeout(() => {
                                    this.props.onPlay();
                                }, Config.clickAcceptDelay);
                            }}
                        />
                    </div>
                    <div
                        style={{
                            marginTop: "60px",
                            marginBottom: "20px"
                        }}
                    >
                        <img
                            style={{
                                maxWidth: "90%"
                            }}
                            src="/public/intro/title.svg"
                        />
                    </div>
                </div>
            </div>
        );
    }
}
