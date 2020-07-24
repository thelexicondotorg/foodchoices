
import * as React from "react";
import "./slideindicator.css";
import { Config } from "../Config";

interface ISliderElem {
    value: number;
    caption?: string;
}

interface ISlideIndicatorProps {
    low: ISliderElem;
    mid: ISliderElem;
    high: ISliderElem;
    current: number;
    showValues: boolean;
    backgroundColor: string;
    color: { property: string; value: string; };
    balloon?: string;
    styleOverride?: object;
    globalGradient?: boolean;
    staticSize?: boolean;
    onPressed?: (touchX: number) => void;
}

interface ISlideIndicatorState {
    percent: number;
}

export class SlideIndicator extends React.Component<ISlideIndicatorProps, ISlideIndicatorState> {

    private _root!: HTMLDivElement;
    private _bar!: HTMLDivElement;
    private _balloon!: HTMLDivElement;
    private _canvas!: HTMLCanvasElement;
    private _canvasContext!: CanvasRenderingContext2D;
    private _circle!: HTMLDivElement;
    private _mounted = false;

    public get width() { return this._root.clientWidth; }

    constructor(props: ISlideIndicatorProps) {
        super(props);
        this.state = {
            percent: 0
        };
    }

    public enableTransitions(enable: boolean) {
        if (enable) {
            this._bar.classList.add("width-transition");
            this._balloon.classList.add("left-transition");
        } else {
            this._bar.classList.remove("width-transition");
            this._balloon.classList.remove("left-transition");
        }
    }

    public componentDidMount() {
        setTimeout(
            () => {
                const { current, low, high } = this.props;
                this.setState({
                    percent: (current - low.value) / (high.value - low.value) * 100
                });
            },
            Config.fadeDuration
        );

        if (this.props.globalGradient) {
            this._canvasContext = this._canvas.getContext("2d") as CanvasRenderingContext2D;
            const grd = this._canvasContext.createLinearGradient(0, 0, 512, 0);
            grd.addColorStop(0, "red");
            grd.addColorStop(0.5, "yellow");
            grd.addColorStop(1, "green");
            this._canvasContext.fillStyle = grd;
            this._canvasContext.fillRect(0, 0, 512, 50);

            this._mounted = true;
            requestAnimationFrame(() => this.refreshCircleColor());
        }        

        if (this._balloon) {
            this._balloon.ontouchstart = e => {
                e.preventDefault();
                const { onPressed } = this.props;
                if (!onPressed) {
                    return;
                }
                const touch = e.changedTouches[0];
                if (touch) {
                    onPressed(touch.clientX);
                    this.enableTransitions(false);
                }
            };
        }

        this.onResize = this.onResize.bind(this);
        window.addEventListener("resize", this.onResize);
    }

    public componentWillUnmount() {
        this._mounted = false;
        window.removeEventListener("resize", this.onResize);
    }

    public componentDidUpdate() {
        const { current, low, high } = this.props;
        const newPercent = (current - low.value) / (high.value - low.value) * 100;
        if (newPercent !== this.state.percent) {
            this.setState({
                percent: newPercent
            });
        }
    }

    public render() {
        const { 
            low, 
            mid, 
            high, 
            current, 
            color, 
            backgroundColor, 
            showValues, 
            balloon, 
            styleOverride,
            globalGradient,
            onPressed
        } = this.props;
        const { percent } = this.state;
        const _styleOverride = styleOverride || {};

        return (
            <div
                ref={e => this._root = e as HTMLDivElement}
                className="slide-bg"
                style={{
                    backgroundColor,
                    position: "relative",
                    ..._styleOverride
                }}
            >
                {
                    !globalGradient
                    &&
                    <div
                        ref={e => this._bar = e as HTMLDivElement}
                        className="width-transition slide-bg"
                        style={{
                            [color.property]: globalGradient ? undefined : color.value,
                            width: `${percent}%`,
                            overflow: "hidden",
                            ..._styleOverride
                        }}
                    />
                }
                {
                    globalGradient
                    &&
                    // <div
                    //     style={{
                    //         [color.property]: color.value,
                    //         width: "512px",
                    //         height: "3vh",
                    //         ..._styleOverride
                    //     }}
                    // />
                    <canvas
                        ref={e => this._canvas = e as HTMLCanvasElement}
                        width="512px"
                        height="3vh"
                        style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "25px",
                            ..._styleOverride
                        }}
                    />
                }
                {
                    showValues
                    &&
                    <div
                        style={{
                            position: "absolute",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            height: "100%",
                            width: "100%",
                            marginTop: "-3vh"
                        }}
                    >
                        <span>{low.value !== undefined ? low.value : " "}</span>
                        <span>{mid.value !== undefined ? mid.value : " "}</span>
                        <span>{high.value !== undefined ? high.value : " "}</span>
                    </div>
                }
                {
                    balloon
                    &&
                    (() => {
                        const width = this.props.staticSize ? 52 : Math.min(52, window.innerHeight / 20);
                        const height = width / (52 / 63);
                        return (
                            <div
                                ref={e => this._balloon = e as HTMLDivElement}
                                className={`left-transition ${onPressed ? "clickable" : ""}`}
                                style={{
                                    left: `${percent}%`,
                                    position: "absolute",
                                    backgroundImage: `url(/public/common/${balloon}.svg)`,
                                    backgroundSize: "cover",
                                    top: `-${height}px`,
                                    width: `${width}px`,
                                    height: `${height}px`,
                                    textAlign: "center",
                                    display: "grid",
                                    alignItems: "center",
                                    transform: `translateX(-${width / 2}px)`
                                }}
                                onMouseDown={e => {
                                    if (onPressed) {
                                        e.preventDefault();
                                        onPressed(e.clientX);
                                        this.enableTransitions(false);
                                    }
                                }}
                            >
                                {showValues && <span>{current}</span>}
                            </div>
                        );
                    })()
                }
                {
                    !balloon
                    &&
                    <div
                        ref={e => this._circle = e as HTMLDivElement}
                        className={`left-transition`}
                        style={{
                            left: `calc(${percent}% - 25px)`,
                            position: "absolute",
                            width: "40px",
                            height: "40px",
                            top: "-9px",
                            borderRadius: "50%",
                            boxShadow: "rgba(0, 0, 0, .5) 1px 1px 4px",
                            backgroundColor: "red",
                            border: "4px solid white"
                        }}
                    />
                }
                <div
                    style={{
                        position: "absolute",
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        top: "3.1vh"
                    }}
                >
                    <div>
                        {low.caption !== undefined ? low.caption : " "}
                    </div>
                    <div>
                        {mid.caption !== undefined ? mid.caption : " "}
                    </div>
                    <div>
                        {high.caption !== undefined ? high.caption : " "}
                    </div>
                </div>
            </div>
        );
    }

    public getColor(factor: number) {
        const circleRect = this._circle.getBoundingClientRect();
        const gradientData = this._canvasContext.getImageData(0, 0, this._canvas.width, this._canvas.height).data;
        const pixel = Math.max(Math.floor(factor * (this._canvas.width - 1)) - circleRect.width / 2, 0);
        const r = gradientData[pixel * 4];
        const g = gradientData[pixel * 4 + 1];
        const b = gradientData[pixel * 4 + 2];
        return `rgb(${r}, ${g}, ${b})`;
    }

    private refreshCircleColor() {
        if (!this._mounted) {
            return;
        }

        const circleRect = this._circle.getBoundingClientRect();
        const canvasRect = this._canvas.getBoundingClientRect();
        const circleCenterX = circleRect.left + circleRect.width / 2;
        const colorFactor = Math.min(Math.max((circleCenterX - canvasRect.left) / canvasRect.width, 0), 1);
        this._circle.style.backgroundColor = this.getColor(colorFactor);
        requestAnimationFrame(() => this.refreshCircleColor());
    }

    private onResize() {
        this.forceUpdate();
    }
}
