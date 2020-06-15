
import * as React from "react";
import { PlateObjective, PlateObjectiveState } from "./PlateObjective";
import { Region, Character, IndonesiaCharacters } from "../../Types";

interface IPlateObjectesState {
    currentObjective: number;
}

interface IPlateObjectivesProps {
    region: Region;
    character: Character;    
}

export class PlateObjectives extends React.Component<IPlateObjectivesProps, IPlateObjectesState> {

    private _objectives: PlateObjective[] = [];

    constructor(props: IPlateObjectivesProps) {
        super(props);
        this.state = {
            currentObjective: 0
        };
    }

    public render() {
        const { currentObjective } = this.state;
        const { region, character } = this.props;

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
                    ref={e => this._objectives[0] = e as PlateObjective}
                    item="protein"
                    state={getState(0)}
                    delayedFlash={true}
                    multiple={region === Region.Indonesia && character === IndonesiaCharacters.Neesa}
                />
                <PlateObjective
                    ref={e => this._objectives[1] = e as PlateObjective}
                    item={grainDescription}
                    state={getState(1)}
                />
                <PlateObjective
                    ref={e => this._objectives[2] = e as PlateObjective}
                    item="vegetable"
                    state={getState(2)}
                />
            </div>
        );
    }

    public animate() {
        this._objectives[this.state.currentObjective].animate();
    }
}
