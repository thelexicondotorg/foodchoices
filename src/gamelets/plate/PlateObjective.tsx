
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
    multiple?: boolean;
}

export class PlateObjective extends React.Component<IPlateObjectiveProps> {
    private _text!: HTMLElement;

    public render() {
        const { item, state, delayedFlash, multiple } = this.props;
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
                    ref={e => this._text = e as HTMLElement}
                    className={`plate-objective-text ${isCurrent ? flashAnimation : ""}`}
                    style={{
                        fontWeight: state === PlateObjectiveState.Current ? "bold" : undefined,
                        transition: "font-weight 1s"
                    }}
                >
                    Pick {multiple ? "two" : "a"} {item}{multiple ? "s" : ""}
                </div>
            </div>
        );
    }

    public animate() {
        this._text.classList.remove("plate-objective-delayed-flash");
        this._text.classList.remove("plate-objective-flash");
        setTimeout(() => this._text.classList.add("plate-objective-flash"), 60);
    }
}
