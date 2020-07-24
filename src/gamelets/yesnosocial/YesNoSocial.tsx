
import * as React from "react";
import { Gamelet, IGameletProps } from "../Gamelet";
import { YesNoSocialData } from "../../data/YesNoSocialData";
import { SlideIndicator } from "../../common/SlideIndicator";
import { Utils } from "../../common/Utils";
import { Button } from "@material-ui/core";
import { Config } from "../../Config";
import { IEasterEgg } from "../../Types";
import { EasterEgg } from "../../story/EasterEgg";
import { CharacterData } from "../../data/CharacterData";
import "./yesnosocial.css";

interface IYesNoSocialState {
    question: number;
    percent: number;
    answers: Array<string | undefined>;
    easterEgg?: IEasterEgg;
    // tslint:disable-next-line
    scores?: any;
}

interface IYesNoSocialProps {
    onYesPicked: (questionIndex: number) => void;
    onNoPicked: (questionIndex: number) => void;
}

export class YesNoSocial extends Gamelet<IYesNoSocialProps, IYesNoSocialState> {

    private _slider!: SlideIndicator;
    private _controls!: HTMLDivElement;
    private _isDragging = false;
    private _initialTouchX = 0;
    private _initialPercent = 0;

    constructor(props: IYesNoSocialProps & IGameletProps) {
        super(props);
        this.state = {
            question: 0,
            percent: 50,
            answers: [undefined, undefined, undefined, undefined]
        };
    }

    public componentDidMount() {
        this.updateScores(this.state.question);
    }

    public render() {
        const { region, character } = this.props;
        const { question, answers, easterEgg, scores, percent } = this.state;
        const items = YesNoSocialData.getQuestions(region, character);
        const item = items[question];
        const characterData = CharacterData.get(region, character);

        let ratio = 0;
        if (scores) {
            const type = percent === 0 ? "No" : (percent === 100 ? "Yes" : null);
            if (type) {
                ratio = Math.floor(scores[type] * 100);
            }
        }

        const startDrag = (touchX: number) => {
            this._initialTouchX = touchX;
            this._initialPercent = this.state.percent;
            this._isDragging = true;
        };

        const onDrag = (touchX: number) => {
            const deltaX = touchX - this._initialTouchX;
            const newPercent = this._initialPercent + (deltaX / this._slider.width * 100);
            this.setState({ percent: Utils.clamp(newPercent, 0, 100) });
        };

        const endDrag = () => {
            if (this._isDragging) {
                this._slider.enableTransitions(true);
                const threshold = 50;
                const rounded = this.state.percent < threshold ? 0 : 100;
                const newAnswers = answers.slice();
                newAnswers[question] = rounded > 50 ? "yes" : "no";
                this.setState({
                    percent: rounded,
                    answers: newAnswers
                });
                this._isDragging = false;
            }
        };

        return (
            <div>
                <div
                    className="fadeIn gamelet"                    
                    ref={e => this._root = e as HTMLDivElement}
                    onMouseMove={e => {
                        if (this._isDragging) {
                            e.preventDefault();
                            onDrag(e.clientX);
                        }
                    }}
                    onMouseUp={endDrag}
                    onMouseLeave={endDrag}
                    onTouchMove={e => {
                        if (this._isDragging) {
                            e.preventDefault();
                            const touch = e.changedTouches[0];
                            if (touch) {
                                onDrag(touch.clientX);
                            }
                        }
                    }}
                    onTouchEnd={endDrag}
                    onTouchCancel={endDrag}
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
                            style={{
                                overflow: "hidden"
                            }}
                        >
                            <img
                                style={{
                                    height: "120vh",
                                    marginTop: "5%"
                                }}
                                src={characterData.iconMain}
                            />
                        </div>
                        <div
                            style={{
                                overflow: "visible",
                                // height: "calc(100% - 40px)",
                                padding: "10px 80px 10px 10px"
                            }}
                        >
                            <div
                                ref={e => this._controls = e as HTMLDivElement}
                                style={{
                                    position: "relative",
                                    height: "100%"
                                }}
                            >
                                <div
                                    className="yesno-icon"
                                    style={{
                                        textAlign: "center",
                                        position: "relative"
                                    }}
                                >
                                    <div
                                        style={{
                                            height: "80%",
                                            position: "relative"
                                        }}
                                    >
                                        <img
                                            style={{
                                                height: "100%"
                                            }}
                                            src={item.icon}
                                        />
                                    </div>
                                    <div
                                        className="yesno-description"
                                        style={{
                                            maxWidth: "400px",
                                            margin: "0 auto",
                                            padding: "10px",
                                            height: "20%"
                                        }}
                                    >
                                        {Utils.resolve(item.description, characterData)}
                                    </div>
                                </div>
                                <div
                                    style={{
                                        marginTop: "63px"
                                    }}
                                >
                                    <SlideIndicator
                                        ref={e => this._slider = e as SlideIndicator}
                                        low={{
                                            value: 0,
                                            caption: "NO"
                                        }}
                                        mid={{
                                            value: 50
                                        }}
                                        high={{
                                            value: 100,
                                            caption: "YES"
                                        }}
                                        backgroundColor="#D2E3FC"
                                        color={{
                                            property: "backgroundImage",
                                            value: "linear-gradient(to right, white, rgb(66, 133, 244))"
                                        }}
                                        current={this.state.percent}
                                        balloon="BalloonBlue"
                                        onPressed={startDrag}
                                        showValues={false}
                                    />
                                    {
                                        // !Utils.isMobile()
                                        // &&
                                        <div
                                            className="opacity-transition"
                                            style={{
                                                marginTop: "40px",
                                                textAlign: "center",
                                                opacity: (() => {
                                                    if (!scores) {
                                                        return 0;
                                                    }
                                                    // tslint:disable-next-line
                                                    return (this.state.percent === 100 || this.state.percent === 0) ? 1 : 0;
                                                })()
                                            }}
                                        >
                                            {ratio}% of respondents think this is the correct answer
                                        </div>
                                    }
                                </div>
                                <div
                                    style={{
                                        textAlign: "center",
                                        position: "relative"
                                    }}
                                >
                                    <div
                                        className="enter-button"
                                        style={{
                                            opacity: answers[question] !== undefined ? 1 : 0,
                                            pointerEvents: answers[question] !== undefined ? "auto" : "none"
                                        }}
                                    >
                                        <Button
                                            className="button"
                                            color="primary"
                                            variant="contained"
                                            style={{
                                                borderRadius: "40px",
                                                margin: "8px",
                                            }}
                                            onClick={() => {
                                                const yesPicked = this.state.percent === 100;
                                                if (item.easterEgg) {
                                                    if (yesPicked) {
                                                        this.fadeOut()
                                                            .then(() => this.setState({
                                                                easterEgg: {
                                                                    backgroundColor: "#ffccff",
                                                                    icon: item.icon,
                                                                    message: item.easterEgg as string,
                                                                    canContinue: item.easterEggCanContinue
                                                                }
                                                            }));
                                                        return;
                                                    }
                                                }
                                                
                                                if (yesPicked) {
                                                    this.props.onYesPicked(question);
                                                } else {
                                                    this.props.onNoPicked(question);
                                                }

                                                if (question < items.length - 1) {
                                                    setTimeout(
                                                        () => {
                                                            this._controls.classList.remove("fadeIn");
                                                            this._controls.classList.add("fadeOut");
                                                            setTimeout(
                                                                () => {
                                                                    this._slider.enableTransitions(false);
                                                                    const currentQuestion = this.state.question;
                                                                    this.setState({
                                                                        scores: null,
                                                                        question: currentQuestion + 1,
                                                                        percent: 50
                                                                    });
                                                                    this.updateScores(currentQuestion + 1);
                                                                    setTimeout(
                                                                        // tslint:disable-next-line
                                                                        () => this._controls.classList.replace("fadeOut", "fadeIn"),
                                                                        60
                                                                    );
                                                                },
                                                                Config.fadeDuration
                                                            );
                                                        },
                                                        Config.clickAcceptDelay
                                                    );
                                                } else {
                                                    // dummy answer index
                                                    this.complete(0);
                                                }
                                            }}
                                        >
                                            Enter
                                        </Button>
                                    </div>
                                    {/* <div
                                        className="yesno-question"
                                        style={{
                                            position: "absolute",
                                            width: "100%",
                                            top: "0px",
                                            display: questionAnswered ? "none" : undefined
                                        }}
                                    >
                                        What will {characterData.name} get for Dinner?
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <EasterEgg
                    info={easterEgg}
                    character={characterData}
                    onRepick={() => {
                        const newAnswers = answers.slice();
                        newAnswers[question] = undefined;
                        this.setState({
                            easterEgg: undefined,
                            answers: newAnswers,
                            percent: 50
                        });
                        this.fadeIn();
                    }}
                    onAccept={() => {
                        this.setState({ easterEgg: undefined });

                        const yesPicked = this.state.percent === 100;
                        if (yesPicked) {
                            this.props.onYesPicked(question);
                        }

                        if (question < items.length - 1) {
                            this._slider.enableTransitions(false);
                            const currentQuestion = this.state.question;
                            this.setState({
                                scores: null,
                                question: currentQuestion + 1,
                                percent: 50
                            });
                            this.updateScores(currentQuestion + 1);
                            this.fadeIn();
                        } else {
                            // dummy answer index
                            this.complete(0);
                        }
                    }}
                />
            </div>
        );
    }

    private updateScores(question: number) {
        fetch(`/api/scores/yesNo/dinner${question + 1}`)
            .then(response => response.json())
            .then(scores => {
                this.setState({ scores });
            });
    }
}
