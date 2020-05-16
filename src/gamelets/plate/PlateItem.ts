import { Utils } from "../../common/Utils";
import { IPlateItem } from "../../Types";
import { Images } from "../../Images";

export class PlateItem {
    public get parentSlot() { return this._root.parentNode as SVGGElement; }
    public get food() { return this._foodGroup; }
    public get foodUrl() { return this._info.foodInfo.content; }

    private _root!: SVGGElement;
    private _foodGroup!: SVGGElement;
    private _info!: IPlateItem;
    private _container!: SVGElement;
    private _description!: SVGTextElement;

    constructor(parent: SVGGElement, onPressed: (x: number, y: number, item: PlateItem) => void) {
        this._root = document.createElementNS("http://www.w3.org/2000/svg", "g");
        
        this._container = document.createElementNS("http://www.w3.org/2000/svg", "image");
        this._root.appendChild(this._container);

        this._foodGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
        this._root.appendChild(this._foodGroup);

        this._description = document.createElementNS("http://www.w3.org/2000/svg", "text");
        this._description.setAttribute("text-anchor", "middle");
        this._description.setAttribute("alignment-baseline", "middle");        
        if (Utils.isMobile()) {
            this._description.setAttribute("font-size", "30px");
        } else {
            this._description.setAttribute("font-size", "18px");

        }
        this._description.setAttribute("fill", "black");
        this._description.style.pointerEvents = "none";
        this._root.appendChild(this._description);
        parent.appendChild(this._root);

        if (Utils.hasTouch()) {
            this._foodGroup.ontouchstart = e => {
                e.preventDefault();
                const touch = e.changedTouches[0];
                if (touch) {
                    onPressed(touch.clientX, touch.clientY, this);
                }
            };
        } else {
            this._foodGroup.onmousedown = e => {
                e.preventDefault();
                onPressed(e.clientX, e.clientY, this);
            };
        }   
    }    

    public setPosition(x: number, y: number, transition?: boolean, noOffset?: boolean) {
        if (transition === true) {
            if (!this._foodGroup.classList.contains("transform-transition")) {
                this._foodGroup.classList.add("transform-transition");
            }
        } else {
            if (this._foodGroup.classList.contains("transform-transition")) {
                this._foodGroup.classList.remove("transform-transition");
            }
        }        

        const itemX = x + (noOffset ? 0 : this._info.foodInfo.offset.x);
        const itemY = y + (noOffset ? 0 : this._info.foodInfo.offset.y);
        const { scale } = this._info;
        const setPos = () => this._foodGroup.setAttribute("transform", `translate(${itemX}, ${itemY}) scale(${scale || 1})`);
        if (transition) {
            setTimeout(setPos, 60);
        } else {
            setPos();
        }        
    }

    public transitionIn(info: IPlateItem, itemIndex: number) {
        setTimeout(() => {
            this.setContent(info);
            this._root.classList.remove("plate-item-out");
            this._root.classList.add("plate-item-in");
            this._root.style.display = "inline";
        }, itemIndex * 40);
    }

    public transitionOut() {
        this._root.classList.remove("plate-item-in");
        this._root.classList.add("plate-item-out");
    }

    public setParent(parent: SVGGElement) {
        parent.appendChild(this._foodGroup);
    }

    public resetParent() {
        this._root.appendChild(this._foodGroup);
        this.setPosition(0, 0, true);
    }

    public hide() {
        this._root.style.display = "none";
    }

    public dropInPlate(slot: SVGGElement, x: number, y: number) {
        const { scale, plateScale, plateOffset } = this._info;
        const _scale = scale || 1;
        const _plateScale = plateScale || 2;
        const _plateOffset = plateOffset || { x: 0, y: 0 };
        const food = this._foodGroup.children[0] as SVGRectElement;
        slot.appendChild(food);
        food.setAttribute("transform", `translate(${x}, ${y}) scale(${_scale})`);
        food.classList.add("transform-transition");
        food.classList.remove("svg-clickable");
        setTimeout(() => food.setAttribute("transform", `translate(${_plateOffset.x}, ${_plateOffset.y}) scale(${_plateScale})`), 60);
        this.resetParent();
    }

    public draw(ctx: CanvasRenderingContext2D) {
        const isHidden = this._root.style.display === "none";
        if (!this._info || isHidden) {
            return;
        }

        // draw container
        const { containerUrl, foodInfo } = this._info;
        const containerRc = this._container.getBoundingClientRect();
        const containerImg = Images.get(containerUrl);
        ctx.drawImage(
            containerImg, 
            containerRc.left, 
            containerRc.top, 
            containerRc.width, 
            containerRc.height
        );

        // draw food
        const food = this._foodGroup.children[0] as SVGRectElement;
        if (food) {
            const foodRc = food.getBoundingClientRect();
            const foodImg = Images.get(foodInfo.content);
            ctx.drawImage(
                foodImg, 
                foodRc.left, 
                foodRc.top, 
                foodRc.width, 
                foodRc.height
            );
        }
    }

    private setContent(info: IPlateItem) {
        const { containerUrl, foodInfo, descriptionInfo, scale, containerScale } = info;
        const _scale = scale || 1;
        const _containerScale = containerScale || 1;
        this._info = info;
        // this._container.setAttribute("href", containerUrl);
        const containerImage = Images.get(containerUrl);
        this._container.setAttributeNS("http://www.w3.org/1999/xlink", "href", containerUrl);
        this._container.setAttribute("width", `${containerImage.width}`);
        this._container.setAttribute("height", `${containerImage.height}`);
        this._container.setAttribute("transform", `scale(${_containerScale})`);
        this._foodGroup.setAttribute("transform", `translate(${foodInfo.offset.x}, ${foodInfo.offset.y}) scale(${_scale})`);               
        const foodIcon = document.createElementNS("http://www.w3.org/2000/svg", "image");
        foodIcon.setAttributeNS("http://www.w3.org/1999/xlink", "href", foodInfo.content);
        const foodImage = Images.get(foodInfo.content);
        foodIcon.setAttribute("width", `${foodImage.width}`);
        foodIcon.setAttribute("height", `${foodImage.height}`);
        foodIcon.classList.add("svg-clickable");
        if (this._foodGroup.children.length > 0) {
            this._foodGroup.removeChild(this._foodGroup.children[0]);
        }
        this._foodGroup.appendChild(foodIcon);
        this._description.setAttribute("x", `${descriptionInfo.offset.x}`);
        this._description.setAttribute("y", `${descriptionInfo.offset.y}`);
        this._description.innerHTML = Utils.stripEndPoint(descriptionInfo.content);
    }
}
