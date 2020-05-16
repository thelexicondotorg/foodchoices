import { Utils } from "../../common/Utils";

namespace Private {
    export const viewWidth = 600;
    export const viewHeight = 520;
    export const rectW = viewWidth;
    export const rectH = 150;
}

export class StackItem {
    public get x() { return this._x; }
    public get y() { return this._y; }
    public get parentSlot() { return this._parentSlot; }
    public get index() { return this._index; }

    private _root!: SVGGElement;
    private _parentSlot!: SVGGElement;
    private _x = 0;
    private _y = 0;
    private _index = 0;

    constructor(
        parent: SVGGElement,
        color: string,
        index: number,
        description: string,
        fontSize: string,
        onPressed: (x: number, y: number, item: StackItem) => void,
        textColor?: string
    ) {
        this._index = index;

        this._parentSlot = parent;
        this._root = document.createElementNS("http://www.w3.org/2000/svg", "g");        
        if (Utils.hasTouch()) {
            this._root.ontouchstart = e => {
                e.preventDefault();
                const touch = e.changedTouches[0];
                if (touch) {
                    onPressed(touch.clientX, touch.clientY, this);
                }
            };
        } else {
            this._root.onmousedown = e => {
                e.preventDefault();
                onPressed(e.clientX, e.clientY, this);
            };
        }

        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.classList.add("svg-clickable");
        rect.setAttribute("x", "0");
        rect.setAttribute("y", "0");
        rect.setAttribute("rx", "20");
        rect.setAttribute("ry", "20");
        rect.setAttribute("width", `${Private.rectW}`);
        rect.setAttribute("height", `${Private.rectH}`);
        rect.setAttribute("fill", color);
        this._root.appendChild(rect);

        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", `${Private.rectW / 2}`);
        text.setAttribute("y", `${Private.rectH / 2}`);
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("alignment-baseline", "middle");
        text.setAttribute("font-size", fontSize);
        text.setAttribute("fill", textColor || "white");
        text.style.pointerEvents = "none";
        text.innerHTML = description;
        this._root.appendChild(text);

        parent.appendChild(this._root);
    }

    public setPosition(x: number, y: number, transition?: boolean) {
        if (transition === true) {
            if (!this._root.classList.contains("transform-transition")) {
                this._root.classList.add("transform-transition");
            }
        } else {
            if (this._root.classList.contains("transform-transition")) {
                this._root.classList.remove("transform-transition");
            }
        }
        this._x = x;
        this._y = y;
        const setPos = () => this._root.style.transform = `translate(${x}px, ${y}px)`;
        if (transition) {
            setTimeout(setPos, 60);
        } else {
            setPos();
        }
    }

    public setParent(parent: SVGGElement, isSlot?: boolean) {
        parent.appendChild(this._root);
        if (isSlot) {
            this._parentSlot = parent;
        }
    }
}
