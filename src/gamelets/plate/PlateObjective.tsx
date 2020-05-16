
import * as React from "react";

export enum PlateObjectiveState {
    None,
    Current,    
    Done,
    Error
}

interface IPlateObjectiveProps {
    item: string;
    state: PlateObjectiveState;
    delayedFlash?: boolean;
}

export class PlateObjective extends React.Component<IPlateObjectiveProps> {
    public render() {
        const { item, state, delayedFlash } = this.props;
        const isCurrent = state === PlateObjectiveState.Current;
        const flashAnimation = delayedFlash ? "plate-objective-delayed-flash" : "plate-objective-flash";
        return (
            <div
                style={{
                    display: "flex"
                }}
            >
                <div
                    style={{
                        position: "relative",
                        width: "42px",
                        height: "33px"
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            width: "30px",
                            height: "28px",
                            border: "1px solid #DBD7D7",
                            borderRadius: "8px",
                            backgroundColor: state === PlateObjectiveState.Error ? "#FA7D7D" : undefined
                        }}
                    />
                    {
                        state === PlateObjectiveState.Done
                        &&
                        <div
                            className="plate-checkmark-appear"
                            style={{
                                position: "absolute",
                                left: "8px",
                                top: "-3px"
                            }}
                        >
                            <img src="/public/gamelets/plate/CheckMark.svg" />
                        </div>
                    }
                </div>
                <div
                    className={isCurrent ? flashAnimation : ""}
                    style={{
                        fontSize: "20px",                        
                        fontWeight: state === PlateObjectiveState.Current ? "bold" : undefined,
                        transition: "font-weight 1s"
                    }}
                >
                    Pick a {item}
                </div>
            </div>
        );
    }
}
