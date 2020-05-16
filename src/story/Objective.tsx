
import * as React from "react";

interface IObjectProps {
    message: string;
}

export class Objective extends React.Component<IObjectProps> {
    public render() {
        const { message } = this.props;
        return (
            <div
                style={{
                    display: "flex",
                    alignItems: "center"
                }}
            >
                <div
                    style={{
                        backgroundColor: "#57A35D",
                        borderRadius: "50%",
                        width: "9px",
                        height: "9px",
                        margin: "8px"
                    }}
                />
                <div style={{ fontSize: "18px" }}>
                    {message}
                </div>
            </div>
        );
    }
}
