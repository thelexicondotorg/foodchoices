
import * as React from "react";
import { Config } from "../../Config";
import { Utils } from "../../common/Utils";

interface IMCQItemProps {
    icon: string;
    description: string;
    descriptionElem?: JSX.Element;
    animClass: string;
    descStyle: object;
    // tslint:disable-next-line
    customStyle?: any;
    onClick: () => void;
}

interface IMCQItemState {
    selected: boolean;
}

export class MCQItem extends React.Component<IMCQItemProps, IMCQItemState> {

    constructor(props: IMCQItemProps) {
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
        const { icon, description, descriptionElem, animClass, descStyle, customStyle } = this.props;
        const { selected } = this.state;

        return (
            <div
                className={animClass}
                style={{
                    height: "50%",
                    position: "relative"
                }}
            >
                <div
                    style={{
                        height: customStyle?.iconHeight ?? "65%",
                        position: "relative"
                    }}
                >
                    <img
                        style={{
                            height: "100%",
                            width: "auto"
                        }}
                        className={`${selected ? "selected" : "clickable"}`}
                        src={icon}
                        onClick={() => {
                            this.setState({
                                selected: true
                            });
                            setTimeout(this.props.onClick, Config.clickAcceptDelay);
                        }}
                    />
                </div>
                <div
                    className="lunch-description"
                    style={{
                        height: customStyle?.textHeight ?? "35px",
                        maxWidth: "320px",
                        overflow: "visible",
                        padding: customStyle ? undefined : "10px",
                        ...descStyle
                    }}
                >
                    {descriptionElem ?? Utils.sanitize(description)}
                </div>
            </div>
        );
    }
}
