
import * as React from "react";

interface ISliderItemProps {
    icon: string;
    description: string;
    customStyle: object;
}

export class SliderItem extends React.Component<ISliderItemProps> {

    private _icon!: HTMLImageElement;

    public render() {
        const { icon, description, customStyle } = this.props;
        return (
            <div
                className="opacity-transition"
                style={{
                    // padding: "16px",
                    height: "50%",
                    position: "relative",
                    ...customStyle
                }}
            >
                <div
                    style={{
                        height: "65%",
                        position: "relative"
                    }}
                >
                    <img 
                        style={{
                            height: "100%"
                        }}
                        ref={e => this._icon = e as HTMLImageElement}                      
                        src={icon}                        
                    />
                </div>
                <div
                    className="slider-description"
                    style={{
                        margin: "0 auto",
                        padding: "8px",
                        height: "calc(35% - 16px)",
                        // overflow: "hidden"
                        width: "60%",
                        maxWidth: "320px",
                        minWidth: "180px"
                    }}
                >
                    {description}
                </div>
            </div>
        );
    }

    public animate() {
        this._icon.classList.remove("slider-selection-anim");
        setTimeout(() => {
            this._icon.classList.add("slider-selection-anim");            
        }, 60);
    }
}
