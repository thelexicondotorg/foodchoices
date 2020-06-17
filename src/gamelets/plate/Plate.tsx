
import * as React from "react";
import { Gamelet } from "../Gamelet";
import { PlateItems } from "./PlateItems";
import { PlateItem } from "./PlateItem";
import { IPoint, Region, IndonesiaCharacters, BrazilCharacters } from "../../Types";
import { Objective } from "../../story/Objective";
import { PlateObjectives } from "./PlateObjectives";
import { EasterEgg } from "../../story/EasterEgg";
import { CharacterData } from "../../data/CharacterData";
import "./plate.css";
import { PlateUtils } from "./PlateUtils";
import { Utils } from "../../common/Utils";

interface IPlateProps {
    choiceMade: (questionIndex: number, answerIndex: number) => void;
}

export class Plate extends Gamelet<IPlateProps> {

    private _currentItem: PlateItem | null = null;
    private _initialTouchPos: IPoint = { x: 0, y: 0 };
    private _items!: PlateItems;
    private _question = 0;
    private _objectives!: PlateObjectives;
    private _easterEggScreen!: EasterEgg;
    private _firstProteinPicked = false;

    public componentDidMount() {
        this._items.transitionIn(this._question, this.props.region, this.props.character);
    }

    public render() {
        const { region, character } = this.props;
        const characterData = CharacterData.get(region, character);

        const onDrag = (cx: number, cy: number) => {
            const x = cx - this._initialTouchPos.x;            
            const y = cy - this._initialTouchPos.y;
            // Take header into account
            const rc = this._root.getBoundingClientRect();
            this._items.move(this._currentItem as PlateItem, x, y + rc.top);
        };

        const endDrag = (cx: number, cy: number) => {
            if (this._currentItem) {
                const isInPlate = this._items.isPointInPlate(cx, cy);
                let itemIndex = this._items.getIndex(this._currentItem);
                const data = PlateUtils.getData(region, character);
                const items = data.getItems()[this._question];
                const slots = this._items;
                let firstSlot = slots.count - items.length;

                // only use the last slot if there are 6 items
                if (items.length < 6) {
                    firstSlot--;
                }

                itemIndex -= firstSlot;
                const easterEgg = items[itemIndex].easterEgg;

                if (isInPlate) {

                    if (easterEgg) {
                        const forbiddenFood = this._currentItem.foodUrl;
                        const item = this._currentItem;
                        this.fadeOut()
                            .then(() => item.resetParent())
                            .then(() => {
                                this._easterEggScreen.setState({
                                    info: {
                                        backgroundColor: "#DAE7FC",
                                        icon: forbiddenFood,
                                        message: easterEgg.replace("${name}", characterData.name)
                                    }
                                });
                            });
                    } else {
                        this.props.choiceMade(this._question, itemIndex);

                        // drop in plate
                        this._items.dropInPlate(this._currentItem as PlateItem);
                        
                        // Neesa gets 2 proteins
                        const extraSlot = region === Region.Indonesia && character === IndonesiaCharacters.Neesa;
                        const neesaExtra = extraSlot && !this._firstProteinPicked;
                        if (neesaExtra) {
                            this._firstProteinPicked = true;
                            this._objectives.animate();
                        }

                        if (!neesaExtra) {
                            this._items.transitionOut()
                                .then(() => {
                                    this._objectives.setState({ currentObjective: this._question + 1 });
                                    if (this._question < 2) {
                                        this._question++;
                                        this._items.transitionIn(this._question, region, character);
                                    } else {
                                        setTimeout(() => this.complete(0), 500);
                                    }
                                });
                        }
                    }
                    
                } else {
                    this._currentItem.resetParent();
                }

                this._currentItem = null;
            }
        };

        return (
            <div>
                <div
                    className="fadeIn gamelet"
                    style={{
                        position: "relative",
                        overflow: Utils.isMobile() ? undefined : "hidden"
                    }}
                    ref={e => this._root = e as HTMLDivElement}
                    onMouseMove={e => {
                        if (this._currentItem) {
                            e.preventDefault();
                            onDrag(e.clientX, e.clientY);
                        }
                    }}
                    onMouseUp={e => endDrag(e.clientX, e.clientY)}
                    onMouseLeave={e => endDrag(e.clientX, e.clientY)}
                    onTouchMove={e => {
                        if (this._currentItem) {
                            e.preventDefault();
                            const touch = e.changedTouches[0];
                            if (touch) {
                                onDrag(touch.clientX, touch.clientY);
                            }
                        }
                    }}
                    onTouchEnd={e => {
                        const touch = e.changedTouches[0];
                        if (touch) {
                            endDrag(touch.clientX, touch.clientY);
                        }

                    }}
                    onTouchCancel={e => {
                        const touch = e.changedTouches[0];
                        if (touch) {
                            endDrag(touch.clientX, touch.clientY);
                        }
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            right: "0px",
                            overflow: "hidden",
                            height: "100%"
                        }}
                    >
                        <div
                            style={{
                                textAlign: "right"
                            }}
                        >
                            <img
                                src={characterData.iconSecondary}
                                style={{
                                    maxWidth: "none",
                                    height: "100vh",
                                    marginTop: "30%",
                                    marginRight: "-20%"
                                }}
                            />
                        </div>
                    </div>
                    <div
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            overflow: "hidden"
                        }}
                    >
                        <PlateItems
                            ref={e => this._items = e as PlateItems}
                            onPressed={(x, y, item) => {
                                this._initialTouchPos.x = x;                                
                                this._initialTouchPos.y = y;
                                this._currentItem = item;
                            }}
                            extraSlot={region === Region.Indonesia && character === IndonesiaCharacters.Neesa}
                        />
                    </div>
                    <div
                        className="plate-objectives-appear"
                        style={{
                            position: "absolute",
                            top: window.innerWidth > 1100 ? "calc(8vh + 30px)" : "30px",
                            right: window.innerWidth > 1100 ? "70px" : "0px",
                            width: window.innerWidth > 1100 ? "260px" : "210px",
                            transform: "translate(500px, 0px)"
                        }}
                    >
                        <PlateObjectives 
                            ref={e => this._objectives = e as PlateObjectives} 
                            region={region}
                            character={character}
                        />
                    </div>
                    <div
                        style={{
                            position: "absolute",
                            right: "40px",
                            top: window.innerWidth > 1100 ? "8vh" : undefined
                        }}
                    >                        
                        <Objective 
                            message={(() => {
                                if (region === Region.Brazil) {
                                    if (character === BrazilCharacters.Maria) {
                                        return "What does the family eat for dinner?";
                                    }
                                }
                                return `Helping ${characterData.name} make a dinner plate`;
                            })()} 
                        />
                    </div>
                </div>
                <EasterEgg
                    ref={e => this._easterEggScreen = e as EasterEgg}
                    character={characterData}
                    manualMode={true}
                    onRepick={() => {
                        this.fadeIn();
                    }}
                />
            </div>
        );
    }
}
