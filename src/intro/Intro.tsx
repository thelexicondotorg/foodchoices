
import * as React from "react";
import "./intro.css";
import { Config } from "../Config";
import { Utils } from "../common/Utils";

interface IIntroProps {
    onPlay: () => void;
}

export class Intro extends React.Component<IIntroProps> {

    private _root!: HTMLDivElement;
    private _playButton!: HTMLDivElement;
    private _playSpot: HTMLElement | null = null;
    private _previousSpot: HTMLElement | null = null;
    private _mounted = false;

    public componentDidMount() {
        this._mounted = true;
        const intro = () => {
            if (!this._mounted) {
                return;
            }
            this.updatePlayButton();
            requestAnimationFrame(intro);
        };
        intro();
    }    

    public componentWillUnmount() {
        this._mounted = false;
    }

    public render() {

        let key = 0;
        const iconElem = (url: string, backgroundColor?: string) => {
            return (
                <div
                    key={key++}
                    className="intro-circle"
                    style={{ backgroundColor }}
                >
                    <img
                        src={url}
                        style={{
                            margin: "0 auto"
                        }}
                    />
                </div>
            );
        };

        const textElem = (text: string, backgroundColor: string) => {
            return (
                <div
                    key={key++}
                    className="intro-circle"
                    style={{
                        backgroundColor
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            textAlign: "center",
                            fontSize: "30px",
                            color: "white"
                        }}
                    >
                        {text}
                    </div>
                </div>
            );
        };

        const row = (className: string, ...elems: JSX.Element[]) => {
            return (
                <div
                    className={`${className} intro-container`}
                    style={{
                        width: "100%",
                        height: "168px",
                        display: "grid",
                        overflow: "hidden"
                    }}
                >
                    {elems}
                </div>
            );
        };

        const disableSliding = Utils.isMobile();
        return (
            <div
                className="fadeIn"
                ref={e => this._root = e as HTMLDivElement}
                style={{
                    opacity: 0,
                    overflow: Utils.isMobile() ? undefined : "hidden",
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    // backgroundColor: "blue"
                }}
            >
                <div
                    style={{
                        position: "relative",
                        height: "100%",
                        overflow: "visible",
                        maxWidth: "1600px",
                        margin: "0 auto",
                        paddingTop: "10px"
                    }}
                >
                    {row(
                        disableSliding ? "" : "intro-slider-from-right",
                        iconElem("/public/intro/Sylvia.svg"),
                        textElem("Plant Forward", "#38A852"),
                        iconElem("/public/transition/banana.svg", "#38A852"),
                        iconElem("/public/intro/Guy.svg"),
                        textElem("Plant Forward", "#38A852"),
                        iconElem("/public/gamelets/plate/SteakGrain.svg", "#38A852")
                    )}
                    {row(
                        `intro-row-2 ${disableSliding ? "" : "intro-slider-from-left"}`,
                        iconElem("/public/gamelets/time/Coffee.svg", "#F9BD00"),
                        iconElem("/public/gamelets/mcq/Soda.svg", "#F9BD00"),
                        textElem("Climate Change", "#F9BD00"),
                        textElem("Organic", "#F9BD00"),
                        iconElem("/public/intro/Girl.svg"),
                        iconElem("/public/intro/Apple.svg", "#F9BD00")
                    )}
                    <div
                        className={`intro-logo-container ${disableSliding ? "" : "intro-slider-from-right"}`}
                        style={{                            
                            width: "100%",
                            height: "168px",
                            display: "grid",
                            overflow: "hidden"
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                position: "relative",
                                width: "466px",
                                margin: "0 auto"
                            }}
                        >
                            <div
                                style={{
                                    width: "100%",
                                    textAlign: "center",
                                    padding: "20px"
                                }}
                            >
                                <div>
                                    <img 
                                        src="/public/intro/Logo.svg" 
                                    />
                                </div>
                                <div
                                    style={{
                                        fontSize: "38px"
                                    }}
                                >
                                    The story of what we eat
                            </div>
                        </div>
                        </div>
                        {iconElem("/public/intro/Madam.svg")}
                        {textElem("Protein", "#4983F5")}
                        {iconElem("/public/intro/Man.svg")}
                        {textElem("Food is Medicine", "#4983F5")}
                    </div>
                    {row(
                        `intro-row-3 ${disableSliding ? "" : "intro-slider-from-left"}`,
                        iconElem("/public/intro/Girl2.svg"),
                        textElem("Sustainable", "#E84436"),
                        iconElem("/public/intro/Woman.svg"),
                        iconElem("/public/gamelets/time/Flakes.svg", "#E84436"),
                        iconElem("/public/gamelets/mcq2/VeggieWrap.svg", "#E84436"),
                        iconElem("/public/intro/Woman.svg")
                    )}
                </div>                
                <div
                    ref={e => this._playButton = e as HTMLDivElement}
                    style={{
                        position: "absolute",
                        left: "0px",
                        top: "0px",
                        overflow: "visible",
                        opacity: 0
                    }}
                >
                    <div
                        className="intro-button clickable"
                        style={{
                            position: "relative"
                        }}
                        onClick={() => {
                            this._root.classList.replace("fadeIn", "fadeOut");
                            setTimeout(() => this.props.onPlay(), Config.fadeDuration);
                        }}
                    >
                        <div
                            style={{
                                width: "100%",
                                textAlign: "center",
                                fontSize: "30px"
                            }}
                        >
                            Let's Play!
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private updatePlayButton() {
        const root = this._root.children[0];
        const rootRc = root.getBoundingClientRect();
        this._playSpot = null;

        this.updateRows();

        // Pick best spot for play button
        for (let i = root.children.length - 1; i >= 0; --i) {
            const row = root.children[i] as HTMLElement;            

            if (row.style.display === "none") {                
                continue;
            }

            let firstChild = row.children[0];
            if (!firstChild.classList.contains("intro-circle")) {
                firstChild = row.children[1];
            }
            const firstChildRc = firstChild.getBoundingClientRect();
            for (let j = row.children.length - 1; j >= 0; --j) {
                const elem = row.children[j] as HTMLElement;
                if (!elem.classList.contains("intro-circle")) {
                    break;
                }
                const elemRc = elem.getBoundingClientRect();
                if (elemRc.top > firstChildRc.top) {
                    continue;
                }
                if (elemRc.bottom < rootRc.bottom && elemRc.right < rootRc.right) {
                    this._playSpot = elem;
                    break;
                }
            }
            if (this._playSpot) {
                break;
            }
        }

        if (this._playSpot) {
            if (this._previousSpot) {
                this._previousSpot.style.opacity = "1";
            }
            const elemRc = this._playSpot.getBoundingClientRect();
            this._playButton.style.transform = `translate(${elemRc.left}px, ${elemRc.top - Config.headerHeight + window.scrollY}px)`;
            this._playButton.style.opacity = "1";
            this._playSpot.style.opacity = "0";
            this._previousSpot = this._playSpot ;
        }
    }

    private updateRows() {        
        // Hide rows depending on vertical space
        const root = this._root.children[0];
        for (let i = root.children.length - 1; i >= 0; --i) {
            const row = root.children[i] as HTMLElement;
            if (row.classList.contains("intro-row-2")) {
                row.style.display = (this._root.clientHeight < 584) ? "none" : "grid";
            } else if (row.classList.contains("intro-row-3")) {
                row.style.display = (this._root.clientHeight < 792) ? "none" : "grid";
            }
            if (row.style.display === "none") {
                row.classList.remove("intro-slider-from-left");
                row.classList.remove("intro-slider-from-right");
            }
        }
    }
}
