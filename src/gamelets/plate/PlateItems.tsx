
import * as React from "react";
import { PlateItem } from "./PlateItem";
import { PlateDataCanada } from "../../data/canada/PlateDataCanada";
import { Utils } from "../../common/Utils";
import { IPoint, Region, Character } from "../../Types";
import { Images } from "../../Images";
import { PlateUtils } from "./PlateUtils";
import { Config } from "../../Config";

export interface IPlateItemsProps {
    extraSlot: boolean;
    onPressed: (x: number, y: number, item: PlateItem) => void;
}

namespace Private {
    export const svgSize: IPoint = { x: 1400, y: 850 };
    export const svgRatio = svgSize.x / svgSize.y;

    export function getAbsolutePos(elem: SVGGElement) {
        const [elemX, elemY] = Utils.getSvgCoords(elem);
        const [parentX, parentY] = Utils.getSvgCoords(elem.parentNode as SVGGElement);
        return [parentX + elemX, parentY + elemY];
    }
}

export class PlateItems extends React.Component<IPlateItemsProps> {

    public get count() { return this._items.length; }

    private _items: PlateItem[] = [];
    private _slots: SVGGElement[] = [];
    private _plateSlots: Array<{
        slot: SVGGElement;
        contentUrl?: string;
    }> = [];
    private _frontSlot!: SVGGElement;
    private _svg!: SVGSVGElement;
    private _point!: SVGPoint;
    private _plate!: SVGElement;
    private _canvas!: HTMLCanvasElement;
    private _mounted = false;

    public componentDidMount() {
        const itemPressed = (x: number, y: number, item: PlateItem) => {
            const [parentX, parentY] = Utils.getSvgCoords(item.parentSlot);
            this._frontSlot.setAttribute("transform", `translate(${parentX}, ${parentY})`);
            item.setParent(this._frontSlot);
            this.props.onPressed(x, y, item);
        };

        this._slots.forEach((slot, index) => {
            this._items[index] = new PlateItem(this._slots[index], itemPressed);
        });

        this._canvas.width = window.innerWidth;
        this._canvas.height = window.innerHeight;
        this._point = this._svg.createSVGPoint();
        this._mounted = true;
        // requestAnimationFrame(() => this.refresh());
    }

    public componentWillUnmount() {
        this._mounted = false;
    }

    public render() {

        const plateImage = Images.get("/public/gamelets/plate/BigPlate.svg");
        return (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    position: "relative"
                }}
            >
                <svg
                    ref={e => this._svg = e as SVGSVGElement}
                    viewBox={`0 0 ${Private.svgSize.x} ${Private.svgSize.y}`}
                    preserveAspectRatio="xMidYMid meet"
                    style={{
                        // overflow: "visible",
                        width: "100%",
                        height: "100%",
                        position: "absolute"
                    }}
                >
                    <g transform="translate(320, 22)">                        
                        <image
                            ref={e => this._plate = e as SVGElement}
                            width={plateImage.width}
                            height={plateImage.height}
                            xlinkHref="/public/gamelets/plate/BigPlate.svg"
                        />
                        {
                            (() => {
                                if (this.props.extraSlot) {
                                    return [
                                        <g
                                            key={0}
                                            ref={e => this._plateSlots[0] = { slot: e as SVGGElement }}
                                            transform="translate(180, 60)"
                                        />,
                                        <g
                                            key={1}
                                            ref={e => this._plateSlots[1] = { slot: e as SVGGElement }}
                                            transform="translate(480, 100)"
                                        />,
                                        <g
                                            key={2}
                                            ref={e => this._plateSlots[2] = { slot: e as SVGGElement }}
                                            transform={"translate(180, 220)"}
                                        />,
                                        <g
                                            key={3}
                                            ref={e => this._plateSlots[3] = { slot: e as SVGGElement }}
                                            transform="translate(510, 260)"
                                        />
                                    ];
                                } else {
                                    return [
                                        <g
                                            key={0}
                                            ref={e => this._plateSlots[0] = { slot: e as SVGGElement }}
                                            transform="translate(180, 120)"
                                        />,
                                        <g
                                            key={1}
                                            ref={e => this._plateSlots[1] = { slot: e as SVGGElement }}
                                            transform="translate(480, 124)"
                                        />,
                                        <g
                                            key={2}
                                            ref={e => this._plateSlots[2] = { slot: e as SVGGElement }}
                                            transform="translate(350, 290)"
                                        />,
                                    ];
                                }
                            })()
                        }                        
                    </g>
                    <g transform="translate(130, 22)" ref={e => this._slots[0] = e as SVGGElement} />
                    <g transform="translate(22, 222)" ref={e => this._slots[1] = e as SVGGElement} />
                    <g transform="translate(30, 425)" ref={e => this._slots[2] = e as SVGGElement} />
                    <g transform="translate(248, 605)" ref={e => this._slots[3] = e as SVGGElement} />
                    <g transform="translate(594, 585)" ref={e => this._slots[4] = e as SVGGElement} />
                    <g transform="translate(900, 565)" ref={e => this._slots[5] = e as SVGGElement} />
                    <g ref={e => this._frontSlot = e as SVGGElement} />
                </svg>
                <canvas                     
                    ref={e => this._canvas = e as HTMLCanvasElement} 
                    style={{ 
                        position: "absolute",
                        pointerEvents: "none",
                        transform: `translate(0px, -${Config.headerHeight}px)`
                    }}
                />
            </div>
        );
    }

    public getIndex(item: PlateItem) {
        return this._items.indexOf(item);
    }

    public move(item: PlateItem, x: number, y: number) {
        const local = this.screenToSvg(x, y, true);
        item.setPosition(local.x, local.y);
    }

    public transitionIn(question: number, region: Region, character: Character) {
        const items = PlateUtils.getData(region, character).getItems()[question];

        const slots = this._items;
        let startingSlot = slots.length - items.length;
        
        // only use the last slot if there are 6 items
        if (items.length < 6) {
            startingSlot--;
        }
      
        for (let i = 0; i < slots.length; ++i) {
            const used = i >= startingSlot && ((i - startingSlot) < items.length);
            if (!used) {
                slots[i].hide();
            } else {
                const currentItem = i - startingSlot;
                slots[i].transitionIn(items[currentItem], currentItem);
            }
        }

        // move 4th slot to a better position if more than 3 plates
        if (items.length > 3) {
            this._slots[3].setAttribute("transform", "translate(268, 600)");
        } else {
            this._slots[3].setAttribute("transform", "translate(248, 605)");
        }
    }

    public transitionOut() {
        return new Promise(resolve => {
            this._items.forEach(item => item.transitionOut());
            setTimeout(resolve, 800);
        });
    }

    public isPointInPlate(x: number, y: number) {
        const threshold = 20;
        const rc = this._plate.getBoundingClientRect();
        return x > rc.left - threshold
            && x < rc.right + threshold
            && y > rc.top - threshold
            && y < rc.bottom + threshold;
    }

    public dropInPlate(item: PlateItem) {
        const [absX, absY] = Private.getAbsolutePos(item.food);
        const slotDists = this._plateSlots.map(slot => {
            const [slotX, slotY] = Private.getAbsolutePos(slot.slot);
            const dx = absX - slotX;
            const dy = absY - slotY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            return {
                slot,
                distance,
                slotX,
                slotY
            };
        });
        slotDists.sort((a, b) => a.distance - b.distance);
        for (const slotDist of slotDists) {
            const { slot, slotX, slotY } = slotDist;
            const emptySlot = slot.slot.children.length === 0;
            if (emptySlot) {
                const localX = absX - slotX;
                const localY = absY - slotY;
                item.dropInPlate(slot.slot, localX, localY);
                slot.contentUrl = item.foodUrl;
                break;
            }
        }
    }

    private screenToSvg(x: number, y: number, withAspectRatioOffset: boolean) {
        if (withAspectRatioOffset) {
            const clientRatio = this._svg.clientWidth / this._svg.clientHeight;
            // Take preserveAspectRatio="xMidYMid meet" into account
            if (clientRatio > Private.svgRatio) {
                const svgWidth = Private.svgRatio * this._svg.clientHeight;
                const offset = (this._svg.clientWidth - svgWidth) / 2;
                x += offset;
            } else {
                const svgHeight = this._svg.clientWidth / Private.svgRatio;
                const offset = (this._svg.clientHeight - svgHeight) / 2;
                y += offset;
            }
        }
        this._point.x = x;
        this._point.y = y;
        return this._point.matrixTransform((this._svg.getScreenCTM() as DOMMatrix).inverse());
    }

    private refresh() {
        if (!this._mounted) {
            return;
        }

        const ctx = this._canvas.getContext("2d") as CanvasRenderingContext2D;
        ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);

        const plateImage = Images.get("/public/gamelets/plate/BigPlate.svg");
        const plateRc = this._plate.getBoundingClientRect();        
        ctx.drawImage(
            plateImage, 
            plateRc.left, 
            plateRc.top, 
            plateRc.width, 
            plateRc.height
        );

        // plate slots
        this._plateSlots.forEach(({ slot, contentUrl }) => {
            const content = slot.children[0] as SVGRectElement;
            if (content) {
                // tslint:disable-next-line
                console.assert(contentUrl);
                const foodImage = Images.get(contentUrl as string);
                const slotRc = content.getBoundingClientRect();
                ctx.drawImage(
                    foodImage,
                    slotRc.left,
                    slotRc.top,
                    slotRc.width,
                    slotRc.height
                );
            }
        });

        // food images
        this._items.forEach(i => i.draw(ctx));
        requestAnimationFrame(() => this.refresh());
    }
}
