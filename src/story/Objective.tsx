
import * as React from "react";

interface IObjectProps {
    message: string;
}

export class Objective extends React.Component<IObjectProps> {
    public render() {
        const { message } = this.props;
        return (
            <div
                className="gamelet-header-text"
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
                {message}
            </div>
        );
    }
}
