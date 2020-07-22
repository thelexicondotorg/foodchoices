
import * as React from "react";
import { Config } from "../Config";
import { Utils } from "../common/Utils";

// tslint:disable:max-line-length

interface IOutcomeScoreProps {
    icon: string;
    description: string;
    score: number;
    maxScore: number;
    id: number;
    color: string;
    getColor: (factor: number) => string;
}

interface IOutcomeScoreState {
    scoreFactor: number;
}

namespace Private {
    export function toRadians(degrees: number) {
        return degrees * Math.PI / 180;
    }
}

export class OutcomeScore extends React.Component<IOutcomeScoreProps, IOutcomeScoreState> {

    private _previousTime = 0;
    private _timer = 0;
    private _circle!: SVGCircleElement;

    constructor(props: IOutcomeScoreProps) {
        super(props);
        this.state = {
            scoreFactor: 0
        };
    }

    public componentDidMount() {
        // setTimeout(
        //     () => {
        //         const { score } = this.props;
        //         const maxScore = Math.min(score / 20, 1);
        //         this.setState({
        //             scoreFactor: maxScore
        //         });
        //     },
        //     Config.fadeDuration
        // );
        this._previousTime = Date.now();
        this.animateSlider();
    }

    public render() {
        const { icon, description, score, maxScore, id } = this.props;
        const { scoreFactor } = this.state;
        // const circleFactor = scoreFactor * 70; // 70 is max
        // const circleFactorFinal = 330 - 330 * circleFactor / 100;

        const makePath = (factor: number, color: string, mask?: string) => {
            return (
                <path
                    strokeWidth="10"
                    fill="none"
                    stroke={color}
                    strokeLinecap="round"
                    mask={mask}
                    d={(() => {
                        // source: http://xahlee.info/js/svg_circle_arc.html                            
                        const cos = Math.cos;
                        const sin = Math.sin;
                        const matrixTimes = (([[a, b], [c, d]]: number[][], [x, y]: number[]) => [a * x + b * y, c * x + d * y]);
                        const rotationMatrix = ((x: number) => [[cos(x), -sin(x)], [sin(x), cos(x)]]);
                        const vectorAdd = (([a1, a2]: number[], [b1, b2]: number[]) => [a1 + b1, a2 + b2]);                       
                        const ellipseArc = (([cx, cy]: number[], [rx, ry]: number[], [t1, delta]: number[], phi: number) => {
                            delta = delta % (2 * Math.PI);
                            const rotMatrix = rotationMatrix(phi);
                            const [sX, sY] = (vectorAdd(matrixTimes(rotMatrix, [rx * cos(t1), ry * sin(t1)]), [cx, cy]));
                            const [eX, eY] = (vectorAdd(matrixTimes(rotMatrix, [rx * cos(t1 + delta), ry * sin(t1 + delta)]), [cx, cy]));
                            const fA = ((delta > Math.PI) ? 1 : 0);
                            const fS = ((delta > 0) ? 1 : 0);
                            return "M " + sX + " " + sY + " A " + [rx, ry, phi / (2 * Math.PI) * 360, fA, fS, eX, eY].join(" ");
                        });
                        return ellipseArc(
                            [65, 65],
                            [60, 60],
                            [0, Private.toRadians(180 * factor)],
                            Private.toRadians(180));
                    })()}
                />
            );
        };

        return (
            <div
                style={{
                    position: "relative",
                    minWidth: "128px"
                }}
            >
                <div>
                    <img
                        style={{
                            width: "auto",
                            height: "64px"
                        }}
                        src={icon}
                    />
                </div>
                <div
                    style={{
                        padding: "8px",
                        marginTop: "8px",
                        height: "14px",
                        display: "grid",
                        alignContent: "center",
                        backgroundColor: this.props.color,
                        borderRadius: "14px"
                    }}
                >
                    {Utils.sanitize(description, false)}
                </div>
                {/* <div>
                    {Math.round(score / maxScore * 100)}%
                </div> */}
                <svg
                    style={{
                        position: "absolute",
                        left: "50%",
                        top: "-30px",
                        transform: "translate(-65px, 0px)",
                        overflow: "visible"
                    }}
                    width="130px"
                    height="130px"
                >
                    {<defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop stopColor="red" />
                            <stop offset="50%" stopColor="yellow" />
                            <stop offset="100%" stopColor="green" />
                        </linearGradient>
                        {/* <mask id={`mask${id}`}>
                            {makePath(scoreFactor, "white")}
                        </mask> */}
                    </defs>}                    
                    {/* <circle 
                        cx="65" 
                        cy="65"
                        r="55" 
                        stroke={this.props.getColor(scoreFactor)}
                        strokeWidth="10" 
                        fill="none" 
                        strokeDasharray="330"
                        strokeDashoffset={circleFactorFinal}
                        strokeLinecap="round"
                        style={{
                            transform: "rotate(143deg)",
                            transformOrigin: "center",
                            transition: "stroke-dashoffset .8s, stroke .8s"
                        }}
                    /> */}
                    {/* <path                         
                        strokeWidth="10"
                        fill="none"
                        stroke="rgb(210, 227, 252)"
                        strokeLinecap="round"
                        d="M 5 65 A 60 60 180 0 1 125 65"
                    /> */}
                    {makePath(1, "url(#gradient)")}
                    <circle
                        ref={e => this._circle = e as SVGCircleElement}
                        cx="5"
                        cy="65" 
                        r="8" 
                        stroke="white" 
                        strokeWidth="2" 
                        fill="red"
                    />
                </svg>
            </div>
        );
    }

    private animateSlider() {
        const animDuration = 1;
        const currentTime = Date.now();
        const deltaTime = (currentTime - this._previousTime) / 1000;
        this._timer += deltaTime;
        this._previousTime = currentTime;
        const done = this._timer > animDuration;
        if (done) {
            this._timer = animDuration;
        }

        const { score, maxScore } = this.props;
        const maxScoreFactor = Math.min(score / maxScore, 1);
        const currentScoreFactor = maxScoreFactor * this._timer / animDuration;
        // this.setState({ scoreFactor: currentScoreFactor });

        const currentAngle = Private.toRadians(180 * (1 - currentScoreFactor)); // angle goes from 180 to 0
        const center = 65;
        const radius = 60;
        this._circle.setAttribute("cx", `${center + radius * Math.cos(currentAngle)}`);
        this._circle.setAttribute("cy", `${center - radius * Math.sin(currentAngle)}`);
        this._circle.setAttribute("fill", this.props.getColor(currentScoreFactor));

        if (!done) {
            requestAnimationFrame(() => this.animateSlider());
        }
    }
}
