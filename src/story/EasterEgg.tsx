
import * as React from "react";
import { Button } from "@material-ui/core";
import { IEasterEgg, ICharacterData } from "../Types";
import { Config } from "../Config";
import "./easteregg.css";
import { Utils } from "../common/Utils";

interface IEasterEggProps {
    info?: IEasterEgg;
    manualMode?: boolean;
    character: ICharacterData;
    onRepick: () => void;
    onAccept?: () => void;
}

interface IEasterEggState {
    info?: IEasterEgg;
}

export class EasterEgg extends React.Component<IEasterEggProps, IEasterEggState> {

    public static getDerivedStateFromProps(props: IEasterEggProps, state: IEasterEggState) {
        const { manualMode } = props;
        if (manualMode !== true) {
            return { info: props.info };
        } else {
            return state;
        }
    }

    private _root!: HTMLDivElement;
    private _exclamation!: HTMLImageElement;

    constructor(props: IEasterEggProps) {
        super(props);
        this.state = {};
    }

    public componentDidUpdate() {
        this.handleAnimations();
    }

    public render() {
        const { manualMode, character } = this.props;
        const { info } = this.state;
        if (!info) {
            return null;
        }
        const { backgroundColor, icon, message, pickMessage } = info;
        return (
            <div
                style={{
                    position: "absolute",
                    left: "0px",
                    top: "0px",
                    height: "100%",
                    width: "100%",
                    overflow: "auto",
                    backgroundColor: backgroundColor ?? "#FEEFC4"
                }}
            >
                <div
                    ref={e => this._root = e as HTMLDivElement}
                    className="fadeIn"
                    style={{
                        display: "grid",
                        alignItems: "center",
                        height: "100%"                        
                    }}
                >
                    <div>
                        {
                            icon
                            &&
                            <div
                                style={{
                                    width: "60%",
                                    height: "50vh",
                                    maxWidth: "600px",
                                    maxHeight: "500px",
                                    margin: "0 auto",
                                    position: "relative",
                                    textAlign: "center"
                                }}
                            >
                                <img
                                    src={icon}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        opacity: .6
                                    }}
                                />
                                <img
                                    ref={e => this._exclamation = e as HTMLImageElement}
                                    src="/public/story/ExclamationPoint.png"
                                    style={{
                                        height: "100%",
                                        position: "absolute",
                                        left: "50%",
                                        marginLeft: "-32px",
                                        top: "0px",
                                        opacity: 0
                                    }}
                                />
                            </div>
                        }
                        <div className="easter-egg-desc">
                            {Utils.resolve(message, character)}
                        </div>
                        <div
                            style={{
                                textAlign: "center"
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
                                    setTimeout(
                                        () => {
                                            this._root.classList.replace("screen-shake", "fadeOut");
                                            setTimeout(
                                                () => {
                                                    if (manualMode) {
                                                        this.setState({ info: undefined });
                                                    }
                                                    this.props.onRepick();
                                                },
                                                Config.fadeDuration
                                            );
                                        },
                                        Config.clickAcceptDelay
                                    );
                                }}
                            >
                                {pickMessage || <span>Pick another option</span>}
                            </Button>
                            {
                                this.props.onAccept
                                &&
                                (this.props.info as IEasterEgg).canContinue
                                &&
                                <Button
                                    className="button"
                                    color="secondary"
                                    variant="contained"
                                    style={{
                                        borderRadius: "40px",
                                        margin: "8px",
                                    }}
                                    onClick={() => {
                                        setTimeout(
                                            () => {
                                                this._root.classList.replace("screen-shake", "fadeOut");
                                                setTimeout(
                                                    () => {
                                                        if (manualMode) {
                                                            this.setState({ info: undefined });
                                                        }
                                                        if (this.props.onAccept) {
                                                            this.props.onAccept();
                                                        }
                                                    },
                                                    Config.fadeDuration
                                                );
                                            },
                                            Config.clickAcceptDelay
                                        );
                                    }}
                                >
                                    Continue with this option
                                </Button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private handleAnimations() {
        const { info } = this.state;
        if (info) {
            if (this._exclamation) {
                this._exclamation.classList.remove("appear");
                this._exclamation.style.opacity = "0";
            }
            setTimeout(
                () => {
                    this._root.classList.replace("fadeIn", "screen-shake");
                    if (this._exclamation) {
                        this._exclamation.classList.add("appear");
                    }
                },
                400
            );
        }
    }
}
