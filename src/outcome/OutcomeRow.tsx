
import * as React from "react";
import { Button } from "@material-ui/core";

interface IOutcomeRowProps {
    icon: string;
    description: string;
    caption: string;
    backgroundColor: string;
    buttonClass: string;
    outcomeIcon: string;
    onClicked: () => void;
}

export class OutcomeRow extends React.Component<IOutcomeRowProps> {
    public render() {
        const { icon, description, caption, backgroundColor, onClicked } = this.props;
        return (
            <div
                style={{
                    display: "grid",
                    // gridTemplateColumns: ".3fr .4fr .3fr",
                    gridTemplateColumns: "1fr 1.2fr 1fr",
                    alignItems: "center",
                    maxWidth: "1200px",
                    // maxWidth: "800px",
                    margin: "0 auto",
                    // width: "100%",
                    borderRadius: "20px",
                    backgroundColor
                }}
            >
                <div
                    style={{
                        padding: "20px"
                    }}
                >
                    <img
                        style={{
                            height: "10vw",
                            maxHeight: "100px",
                            width: "auto"
                        }}
                        src={icon}
                    />
                </div>
                <div
                    style={{
                        padding: "20px",
                        textAlign: "left"
                    }}
                >
                    {description}
                </div>
                <div
                    style={{
                        display: "flex",
                        margin: "0 auto"
                    }}
                >
                    <div
                        style={{
                            maxWidth: "230px",
                            // margin: "0 auto"
                        }}
                    >
                        <Button
                            className={`button ${this.props.buttonClass}`}
                            // color="primary"
                            variant="contained"
                            style={{
                                borderRadius: "40px",
                                padding: "16px",
                                margin: "8px",
                            }}
                            onClick={onClicked}
                        >
                            {caption}
                        </Button>
                    </div>
                    <div
                        style={{
                            display: "grid",
                            alignItems: "center",
                            // paddingLeft: "20px",
                            margin: "8px"
                        }}
                    >
                        <img
                            style={{
                                width: "64px",
                                height: "64px",
                                maxWidth: "64px"
                            }}
                            src={this.props.outcomeIcon}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
