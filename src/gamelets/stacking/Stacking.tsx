
import * as React from "react";
import { Gamelet, IGameletProps } from "../Gamelet";
import { StackItem } from "./StackItem";
import { StackItems } from "./StackItems";
import { Button } from "@material-ui/core";
import { IPoint, IEasterEgg } from "../../Types";
import { Objective } from "../../story/Objective";
import { CharacterData } from "../../data/CharacterData";
import "./stacking.css";
import { EasterEgg } from "../../story/EasterEgg";
import { StackingData } from "./StackingData";
import { Utils } from "../../common/Utils";
import { Config } from "../../Config";

// tslint:disable:max-line-length

interface IStackingState {
    choiceMade: boolean;
    easterEgg?: IEasterEgg;
}

export class Stacking extends Gamelet<{}, IStackingState> {

    private _movingItem?: StackItem;
    private _initialTouchPos: IPoint = { x: 0, y: 0 };
    private _items!: StackItems;

    constructor(props: {} & IGameletProps) {
        super(props);
        this.state = {
            choiceMade: false
        };
    }

    public render() {
        const { region, character } = this.props;
        const { choiceMade } = this.state;
        const characterData = CharacterData.get(region, character);

        const onDrag = (cx: number, cy: number) => {
            const x = cx - this._initialTouchPos.x;
            const y = cy - this._initialTouchPos.y;
            this._items.move(this._movingItem as StackItem, x, y);
        };

        const endDrag = () => {
            if (this._movingItem) {
                this._items.resetItem(this._movingItem);
                delete this._movingItem;
                if (!this.state.choiceMade) {
                    this.setState({ choiceMade: true });
                }
            }
        };

        const makeEnterButton = () => {
            return (
                <Button
                    className="button"
                    color="primary"
                    variant="contained"
                    style={{
                        borderRadius: "40px",
                        margin: "8px",
                    }}
                    onClick={() => {
                        const index = this._items.getTopIndex();
                        const easterEgg = StackingData.getEasterEggs(index, region, character);
                        if (easterEgg) {
                            setTimeout(
                                () => {
                                    this.setState({
                                        easterEgg: {
                                            message: easterEgg
                                        }
                                    });
                                },
                                Config.clickAcceptDelay
                            );
                        } else {
                            this.complete(this._items.getTopIndex());
                        }
                    }}
                >
                    Enter
                </Button>
            );
        };

        return (
            <div
                className="fadeIn gamelet"
                ref={e => this._root = e as HTMLDivElement}
                style={{
                    position: "relative",
                    overflow: Utils.isMobile() ? undefined : "hidden"
                }}
                onMouseMove={e => {
                    if (this._movingItem) {
                        e.preventDefault();
                        onDrag(e.clientX, e.clientY);
                    }
                }}
                onMouseUp={endDrag}
                onMouseLeave={endDrag}
                onTouchMove={e => {
                    if (this._movingItem) {
                        e.preventDefault();
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
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        maxWidth: "1400px",
                        margin: "0 auto",
                        height: "100%",
                        // backgroundColor: "grey"
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            position: "relative",
                            textAlign: "center",
                            display: "grid",
                            alignItems: "center"
                        }}
                    >
                        <img
                            style={{
                                maxHeight: "100%",
                                margin: "0 auto"
                            }}
                            src={characterData.iconSecondary}
                        />
                        <div
                            style={{
                                position: "absolute",
                                left: "0px",
                                bottom: "20px",
                                width: "100%",
                                textAlign: "center"
                            }}
                        >
                            {makeEnterButton()}
                        </div>
                    </div>
                    <div
                        style={{
                            paddingTop: "20px"
                        }}
                    >
                        <div
                            style={{
                                width: "100%",
                                height: "100%",
                                position: "relative",
                                // overflow: "visible"
                            }}
                        >
                            <div
                                className="stacking-objective unselectable"
                                style={{
                                    textAlign: "center",
                                    padding: "20px"
                                }}
                            >
                                {Utils.resolve(StackingData.getTitle(region, character), characterData)}<br />
                                Place {characterData.possessivePronoun} options in the right order, with the best on top!
                            </div>
                            <StackItems
                                region={region}
                                character={character}
                                ref={e => this._items = e as StackItems}
                                onPressed={(x: number, y: number, item: StackItem) => {
                                    this._movingItem = item;
                                    this._initialTouchPos.x = x;
                                    this._initialTouchPos.y = y;
                                }}
                            />                            
                        </div>
                    </div>
                </div>                
                <EasterEgg
                    info={this.state.easterEgg}
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
