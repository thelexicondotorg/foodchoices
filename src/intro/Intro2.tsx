
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

        return (
            <div
                className="intro-fade-in"
            >
                <div className="character-layer">
                    <img
                        style={{
                            maxWidth: "73%"
                        }}
                        src="/public/intro/intro-characters.svg"
                    />
                </div>
                <div
                    style={{
                        position: "absolute",
                        bottom: "0px",
                        textAlign: "center"
                    }}
                >
                    <div
                        // className="intro-vertical-slide-3"
                    >
                        <img
                            style={{
                                maxWidth: "76%"
                            }}
                            src="/public/intro/foodplay.svg"
                        />
                    </div>
                    <div
                        // className="intro-vertical-slide-2"
                        style={{
                            marginTop: "30px"
                        }}
                    >
                        <img
                            style={{
                                maxWidth: "26vh",
                                minWidth: "150px"
                            }}
                            src="/public/intro/play-button.svg"
                            className={`${this.state.playClicked ? "selected" : "clickable"}`}
                            onClick={() => {
                                if (this.state.playClicked) {
                                    return;
                                }
                                this.setState({ playClicked: true });
                                setTimeout(() => {
                                    this.props.onPlay();
                                }, Config.clickAcceptDelay);
                            }}
                        />
                    </div>
                    <div
                        // className="intro-vertical-slide-1"
                        style={{
                            marginTop: "40px",
                            marginBottom: "40px"
                        }}
                    >
                        <img
                            style={{
                                maxWidth: "73%"
                            }}
                            src="/public/intro/title.svg"
                        />
                    </div>
                </div>
            </div>
        );
    }
}
