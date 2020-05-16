
import * as React from "react";
import { PlateObjective, PlateObjectiveState } from "./PlateObjective";
import { Region } from "../../Types";

interface IPlateObjectesState {
    currentObjective: number;
}

interface IPlateObjectivesProps {
    region: Region;
}

export class PlateObjectives extends React.Component<IPlateObjectivesProps, IPlateObjectesState> {

    constructor(props: IPlateObjectivesProps) {
        super(props);
        this.state = {
            currentObjective: 0
        };
    }

    public render() {
        const { currentObjective } = this.state;
        const { region } = this.props;

        const getState = (index: number) => {
            if (index === currentObjective) {
                return PlateObjectiveState.Current;
            } else if (index > currentObjective) {
                return PlateObjectiveState.None;
            } else {
                return PlateObjectiveState.Done;
            }
        };

        const grainDescription = region === Region.Nordics ? "carbohydrate" : "grain";

        return (
            <div>
                <PlateObjective
                    item="protein"
                    state={getState(0)}
                    delayedFlash={true}
                />
                <PlateObjective
                    item={grainDescription}
                    state={getState(1)}
                />
                <PlateObjective
                    item="vegetable"
                    state={getState(2)}
                />
            </div>
        );
    }
}
