
import * as React from "react";
import "./timeitem.css";
import { Utils } from "../../common/Utils";
import { Config } from "../../Config";

interface ITimeItemProps {    
    icon: string;
    description: string;
    animPrefix: string;
    iconClass: string;
    invert?: boolean;
    onClick: () => void;
}

interface ITimeItemState {
    selected: boolean;
}

export class TimeItem extends React.Component<ITimeItemProps, ITimeItemState> {

    constructor(props: ITimeItemProps) {
        super(props);
        this.state = {
            selected: false
        };
    }

    public reset() {
        this.setState({
            selected: false
        });
    }

    public render() {
        const { icon, description, animPrefix, iconClass, invert } = this.props;
        const _invert = invert === true;
        const { selected } = this.state;

        const iconElem = (
            <div
                key="icon"
                style={{ 
                    height: "100%",
                    overflow: "visible"
                }}
            >
                <img
                    style={{
                        height: "100%"
                    }}
                    className={`${iconClass} ${selected ? "selected" : "clickable"}`}
                    src={icon}
                    onClick={() => {
                        this.setState({
                            selected: true
                        });
                        setTimeout(this.props.onClick, Config.clickAcceptDelay);                        
                    }}
                />
            </div>
        );

        // Make sure first letter is upper case
        const descriptionElem = (
            <div
                key="desc"
                style={{
                    width: _invert ? "100%" : "100%",
                    textAlign: _invert ? "right" : undefined,
                    overflow: "hidden"
                }}
            >                
                <div
                    style={{
                        maxWidth: _invert ? "230px" : undefined,
                        float: _invert ? "right" : undefined
                    }}
                >
                    {Utils.sanitize(description)}
                </div>
            </div>
        );

        const elems = [iconElem, descriptionElem];
        if (_invert) {
            elems.reverse();
        }

        return (
            <div
                className={animPrefix}
                style={{
                    display: "grid",
                    gridTemplateColumns: `${_invert ? "1fr 1fr" : "1.5fr 1fr"}`,
                    alignItems: "center",
                    height: "22%",
                    overflow: "visible"
                }}
            >
                {...elems}
            </div>
        );
    }
}
