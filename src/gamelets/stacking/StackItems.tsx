
import * as React from "react";
import { StackItem } from "./StackItem";
import { Region, Character } from "../../Types";
import { StackingData } from "./StackingData";
import { Utils } from "../../common/Utils";
import { CharacterData } from "../../data/CharacterData";

export interface IStackItemsProps {
    region: Region;
    character: Character;
    onPressed: (x: number, y: number, item: StackItem) => void;
}

export class StackItems extends React.Component<IStackItemsProps> {
    private _items: StackItem[] = [];
    private _slots: SVGGElement[] = [];
    private _frontSlot!: SVGGElement;
    private _currentTarget: SVGGElement | null = null;
    private _lastValidTarget: SVGGElement | null = null;

    public componentDidMount() {

        const itemPressed = (x: number, y: number, item: StackItem) => {
            this._currentTarget = item.parentSlot;
            this._lastValidTarget = this._currentTarget;
            const index = this._slots.indexOf(item.parentSlot);
            this._frontSlot.setAttribute("transform", `translate(${0}, ${index * 150})`);
            item.setParent(this._frontSlot);
            this.props.onPressed(x, y, item);
        };

        const { region, character } = this.props;
        const characterData = CharacterData.get(region, character);
        const items = StackingData.getItems(region, character);
        const desc = (index: number) => Utils.resolve(items[index], characterData);

        const colors = [
            ["#EA8602", "white"],
            ["#E94334", "white"],
            ["#4285F4", "white"],
            ["#ABCA54", "black"]
        ];

        for (let i = 0; i < items.length; ++i) {
            this._items[i] = new StackItem(
                this._slots[i],
                colors[i][0],
                i,
                desc(i),
                StackingData.getFontSize(i, region, character),
                itemPressed,
                colors[i][1]
            );
            this._slots[i].style.display = "inline";
        }

        // if less items than slots, hide extra slots
        for (let i = items.length; i < this._slots.length; ++i) {
            this._slots[i].style.display = "none";
        }        
    }

    public render() {
        return (
            <svg
                viewBox="0 0 600 720"
                preserveAspectRatio="xMidYMin meet"
                style={{
                    width: "100%",
                    height: "calc(100% - 80px)",
                    overflow: "visible"
                }}
            >
                <g transform="translate(10, 0) rotate(1)" ref={e => this._slots[0] = e as SVGGElement} />
                <g transform="translate(-6, 150) rotate(0)" ref={e => this._slots[1] = e as SVGGElement} />
                <g transform="translate(0, 300) rotate(1)" ref={e => this._slots[2] = e as SVGGElement} />
                <g transform="translate(14, 450) rotate(-1)" ref={e => this._slots[3] = e as SVGGElement} />
                <g ref={e => this._frontSlot = e as SVGGElement} />
            </svg>
        );
    }

    public resetItem(item: StackItem) {
        if (this._lastValidTarget) {
            const itemSlotIndex = this._slots.indexOf(item.parentSlot);
            const absoluteY = 150 * itemSlotIndex + item.y;
            const slotIndex = this._slots.indexOf(this._lastValidTarget);
            const slotY = 150 * slotIndex;
            const localY = absoluteY - slotY;
            item.setParent(this._lastValidTarget, true);
            item.setPosition(item.x, localY);
            item.setPosition(0, 0, true);
            this._lastValidTarget = null;
        }
    }

    public getTopIndex() {
        const topItem = this._items.find(i => i.parentSlot === this._slots[0]) as StackItem;
        return topItem.index;
    }

    public move(item: StackItem, x: number, y: number) {
        item.setPosition(x, y);

        const overlaps: Array<{ slot: SVGGElement, area: number }> = [];
        this._slots.forEach((slot, slotIndex) => {
            if (slot.style.display === "none") {
                return;
            }
            const slotY = 150 * slotIndex;
            const itemSlot = item.parentSlot;
            const itemSlotIndex = this._slots.indexOf(itemSlot);
            const localY = 150 * itemSlotIndex + y;
            const deltaY = localY - slotY;
            const overlapY = Math.abs(deltaY) < 150;
            if (overlapY) {
                const minY = Math.max(localY, slotY);
                const maxY = Math.min(localY + 150, slotY + 150);
                overlaps.push({
                    slot,
                    area: maxY - minY
                });
            }
        });

        let target = null;
        if (overlaps.length > 0) {
            if (overlaps.length > 1) {
                overlaps.sort((a, b) => b.area - a.area);
            }
            target = overlaps[0].slot;
        }

        if (target !== this._currentTarget) {            
            this._currentTarget = target;
            if (target) {
                // rearragne items in slot
                if (target.children.length > 0) {
                    // find a new parent 
                    const slotIndex = this._slots.indexOf(target);
                    let moveDown: boolean | null = null;
                    if (slotIndex === 0) {
                        moveDown = true;
                    } else if (slotIndex === this._slots.length - 1) {
                        moveDown = false;
                    } else {
                        const previousSlot = this._slots[slotIndex - 1];
                        const nextSlot = this._slots[slotIndex + 1];
                        const previousSlotEmpty = previousSlot.children.length === 0;
                        const nextSlotEmpty = nextSlot.children.length === 0;
                        if (previousSlotEmpty) {
                            moveDown = false;
                        } else if (nextSlotEmpty) {
                            moveDown = true;
                        } else {
                            let emptySlotUpwards = false;
                            for (let i = slotIndex - 1; i >= 0; --i) {
                                const emptySlot = this._slots[i].children.length === 0;
                                if (emptySlot) {
                                    emptySlotUpwards = true;
                                    break;
                                }
                            }
                            moveDown = !emptySlotUpwards;
                        }
                    }

                    if (moveDown) {
                        for (let i = slotIndex; i < this._slots.length - 1; ++i) {
                            const nextSlot = this._slots[i + 1];
                            const emptySlot = nextSlot.children.length === 0;
                            const _item = this._items
                                .filter(j => j !== item)
                                .find(j => j.parentSlot === this._slots[i]) as StackItem;
                            _item.setParent(nextSlot, true);
                            _item.setPosition(0, -150);
                            _item.setPosition(0, 0, true);
                            if (emptySlot) {
                                break;
                            }
                        }
                    } else {
                        for (let i = slotIndex; i > 0; --i) {
                            const nextSlot = this._slots[i - 1];
                            const emptySlot = nextSlot.children.length === 0;
                            const _item = this._items
                                .filter(j => j !== item)
                                .find(j => j.parentSlot === this._slots[i]) as StackItem;
                            _item.setParent(nextSlot, true);
                            _item.setPosition(0, 150);
                            _item.setPosition(0, 0, true);
                            if (emptySlot) {
                                break;
                            }
                        }
                    }
                }
                this._lastValidTarget = target;
            }
        }
    }
}
