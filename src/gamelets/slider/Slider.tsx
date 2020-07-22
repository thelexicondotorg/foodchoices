
import * as React from "react";
import { Gamelet, IGameletProps } from "../Gamelet";
import { SliderItem } from "./SliderItem";
import { SliderData } from "../../data/SliderData";
import { Button } from "@material-ui/core";
import { IEasterEgg } from "../../Types";
import { EasterEgg } from "../../story/EasterEgg";
import "./slider.css";
import { Objective } from "../../story/Objective";
import { CharacterData } from "../../data/CharacterData";
import { Utils } from "../../common/Utils";
import { Config } from "../../Config";

interface ISliderState {
    cartX: number;
    cartY: number;
    cartAngle: number;
    revealed: boolean[];
    selection?: number;
    easterEgg?: IEasterEgg;
    draggingStarted: boolean;
}

namespace Private {
    const radiansToDegrees = 57.29579143; // 180.0 / Math.PI
    const degreesToRadians = 0.017453288; // Math.PI / 180
    export const radius = 30;
    export const baseY = 80;
    export function toDegrees(angle: number) { return angle * radiansToDegrees; }
    export function toRadians(angle: number) { return angle * degreesToRadians; }
    export const itemAngles = [
        { item: 1, angle: 13 },
        { item: 0, angle: 45 },
        { item: 2, angle: 140 },
        { item: 3, angle: 160 }
    ];
}

export class Slider extends Gamelet<{}, ISliderState> {

    private _isDragging = false;
    private _cart!: HTMLDivElement;
    private _potentialSelection?: number;
    private _items: SliderItem[] = [];

    constructor(props: {} & IGameletProps) {
        super(props);
        this.state = {
            cartX: 50 - Private.radius, // 50 is the center of the screen
            cartY: Private.baseY,
            cartAngle: -80,
            revealed: [false, false, false, false],
            draggingStarted: false
        };
    }

    public componentDidMount() {
        this._cart.ontouchstart = e => {
            e.preventDefault();
            const touch = e.changedTouches[0];
            if (touch) {
                this.startDrag();
            }
        };
    }

    public render() {
        const { region, character } = this.props;
        const { cartX, cartY, cartAngle, revealed, selection, easterEgg, draggingStarted } = this.state;
        const items = SliderData.getQuestions(region, character);
        const characterData = CharacterData.get(region, character);

        const onDrag = (x: number, y: number) => {
            y = y - Config.headerHeight;
            const centerX = this._root.clientWidth / 2;
            const centerY = this._root.clientHeight * (Private.baseY / 100);
            const toPointX = x - centerX;
            const toPointY = y - centerY;
            const radius = this._root.clientWidth * (Private.radius / 100);
            const toPointLen = Math.sqrt(toPointX * toPointX + toPointY * toPointY);
            const toPointNormX = toPointX / toPointLen;
            const toPointNormY = toPointY / toPointLen;
            const newPosX = centerX + toPointNormX * radius;
            const newPosY = centerY + toPointNormY * radius;
            const newPosPercentX = newPosX / this._root.clientWidth * 100;
            const newPosPercentY = newPosY / this._root.clientHeight * 100;
            const angle = Private.toDegrees(Math.atan2(-toPointNormY, -toPointNormX));
            this.setState({
                cartX: newPosPercentX,
                cartY: newPosPercentY,
                cartAngle: angle - 90,
                draggingStarted: true
            });
            const closestItem = Private.itemAngles.sort((a, b) => {
                return Math.abs(a.angle - angle) - Math.abs(b.angle - angle);
            })[0];
            const toClosest = Math.abs(angle - closestItem.angle);
            const threshold = 60;
            if (toClosest < threshold) {
                if (!this.state.revealed[closestItem.item]) {
                    const newState = this.state.revealed.slice();
                    newState[closestItem.item] = true;
                    this.setState({ revealed: newState });
                } else {
                    if (closestItem.item !== this._potentialSelection) {
                        this._items[closestItem.item].animate();
                    }
                }
                this._potentialSelection = closestItem.item;
            }
        };

        const endDrag = () => {
            if (this._isDragging) {
                this._isDragging = false;
                if (this._potentialSelection !== undefined) {
                    // snap to selection
                    const centerX = this._root.clientWidth / 2;
                    const centerY = this._root.clientHeight * (Private.baseY / 100);
                    const radius = this._root.clientWidth * (Private.radius / 100);
                    const item = Private.itemAngles.find(i => i.item === this._potentialSelection);
                    if (item) {
                        const angle = Private.toRadians(item.angle);
                        const newPosX = centerX - radius * Math.cos(angle);
                        const newPosY = centerY - radius * Math.sin(angle);
                        const newPosPercentX = newPosX / this._root.clientWidth * 100;
                        const newPosPercentY = newPosY / this._root.clientHeight * 100;
                        this._cart.classList.add("slider-transition");
                        this.setState({
                            cartX: newPosPercentX,
                            cartY: newPosPercentY,
                            selection: this._potentialSelection
                        });
                        delete this._potentialSelection;
                    }
                }
            }
        };

        return (
            <div>
                <div
                    className="fadeIn gamelet"
                    ref={e => this._root = e as HTMLDivElement}
                    style={{
                        position: "relative",
                        overflow: "hidden"
                    }}
                    onMouseMove={e => {
                        if (this._isDragging) {
                            e.preventDefault();
                            e.stopPropagation();
                            onDrag(e.clientX, e.clientY);
                        }
                    }}
                    onMouseUp={e => {
                        e.preventDefault();
                        e.stopPropagation();
                        endDrag();
                    }}
                    onMouseLeave={e => {
                        e.preventDefault();
                        e.stopPropagation();
                        endDrag();
                    }}
                    onTouchMove={e => {
                        if (this._isDragging) {
                            e.preventDefault();
                            e.stopPropagation();
                            const touch = e.changedTouches[0];
                            if (touch) {
                                onDrag(touch.clientX, touch.clientY);
                            }
                        }
                    }}
                    onTouchEnd={endDrag}
                    onTouchCancel={endDrag}
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
                        <div
                            style={{
                                fontSize: "20px",
                                maxWidth: "400px",
                                margin: "0 auto",
                                transform: "translate(0px, -20px)"
                            }}
                        >
                            {SliderData.getTitle(region, character)}
                        </div>
                        <div
                            style={{
                                width: "78vh",
                                maxWidth: "800px",
                                margin: "0 auto"
                            }}
                        >
                            <img
                                style={{
                                    height: "70%",
                                    width: "auto"
                                }}
                                src={characterData.iconSecondary}
                            />
                        </div>
                    </div>
                    {/* <div
                        style={{
                            position: "absolute",
                            left: "0px",
                            top: "0px"
                        }}
                    >
                        <img src="/public/gamelets/slider/cartpath.svg" />
                    </div> */}
                    <div
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "85%",
                            left: "0px",
                            top: "15%"
                        }}
                    >
                        <div
                            className="slider-container"
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr 1fr",
                                position: "relative",
                                height: "100%"
                            }}
                        >
                            <div
                                style={{
                                    textAlign: "center",
                                    position: "relative"
                                }}
                            >
                                <SliderItem
                                    ref={e => this._items[0] = e as SliderItem}
                                    icon={items[0].icon}
                                    description={Utils.resolve(items[0].description, characterData)}
                                    customStyle={{
                                        paddingLeft: "150px",
                                        opacity: `${revealed[0] ? 1 : 0}`
                                    }}
                                />
                                <SliderItem
                                    ref={e => this._items[1] = e as SliderItem}
                                    icon={items[1].icon}
                                    description={Utils.resolve(items[1].description, characterData)}
                                    customStyle={{
                                        marginLeft: "-50px",
                                        opacity: `${revealed[1] ? 1 : 0}`
                                    }}
                                />
                            </div>
                            <div />
                            <div
                                style={{
                                    textAlign: "center",
                                    position: "relative"
                                }}
                            >
                                <SliderItem
                                    ref={e => this._items[2] = e as SliderItem}
                                    icon={items[2].icon}
                                    description={Utils.resolve(items[2].description, characterData)}
                                    customStyle={{
                                        paddingRight: "150px",
                                        opacity: `${revealed[2] ? 1 : 0}`
                                    }}
                                />
                                <SliderItem
                                    ref={e => this._items[3] = e as SliderItem}
                                    icon={items[3].icon}
                                    description={Utils.resolve(items[3].description, characterData)}
                                    customStyle={{
                                        marginRight: "-50px",
                                        opacity: `${revealed[3] ? 1 : 0}`
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        ref={e => this._cart = e as HTMLDivElement}
                        className={`${draggingStarted ? "clickable" : ""}`}
                        style={{
                            position: "absolute",
                            marginLeft: "-25px",
                            marginBottom: "-25px",
                            left: `${cartX}%`,
                            top: `${cartY}%`,
                            cursor: draggingStarted ? "" : "pointer"
                        }}
                        onMouseDown={e => {
                            e.preventDefault();
                            e.stopPropagation();
                            this.startDrag();
                        }}
                    >
                        <img
                            className={draggingStarted ? "" : "slider-animation"}
                            style={{
                                transform: `rotate(${cartAngle}deg)`
                            }}
                            src="/public/gamelets/slider/cart.svg"
                        />
                        <div
                            style={{
                                position: "absolute",
                                minWidth: "300px",
                                textAlign: "center",
                                left: "-120px",
                                top: "-50px",
                                display: draggingStarted ? "none" : "block"
                            }}
                        >
                            Drag the cart to choose
                        </div>
                    </div>
                    <div
                        className="enter-button"
                        style={{
                            position: "absolute",
                            right: "50%",
                            bottom: "2vh",
                            opacity: selection !== undefined ? 1 : 0,
                            pointerEvents: selection !== undefined ? "auto" : "none",
                            transform: "translate(108px, 0px)"
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
                                const item = items[this.state.selection as number];
                                if (item.easterEgg) {
                                    this.fadeOut()
                                        .then(() => this.setState({
                                            easterEgg: {
                                                backgroundColor: "#DAE7FC",
                                                icon: item.icon,
                                                message: item.easterEgg as string
                                            }
                                        }));
                                } else {
                                    this.complete(this.state.selection as number);
                                }
                            }}
                        >
                            Enter
                        </Button>
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

    private startDrag() {
        this._isDragging = true;
        this._cart.classList.remove("slider-transition");
    }
}
