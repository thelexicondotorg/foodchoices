
import * as React from "react";
import * as types from "../Types";
import { Character } from "./Character";
import { Characters } from "./Characters";
import { CharacterData } from "../data/CharacterData";

interface ICharacterSelectProps {
    region: types.Region;
    onBack: () => void;
    onSelect: (character: types.Character) => void;
}

interface ICharacterSelectState {
    selection?: types.Character;
}

export class CharacterSelect extends React.Component<ICharacterSelectProps, ICharacterSelectState> {

    constructor(props: ICharacterSelectProps) {
        super(props);
        this.state = {
            // selection: types.Character.Sylvia
        };
    }

    public render() {
        const { region } = this.props;
        const { selection } = this.state;
        if (selection !== undefined) {
            const data = CharacterData.get(region, selection);
            return (
                <Character
                    data={data}
                    icon={data.iconMain}
                    onBack={() => this.setState({ selection: undefined })}
                    onPlay={() => this.props.onSelect(selection)}
                />
            );
        } else {
            return (
                <Characters
                    region={region}
                    onSelect={character => {
                        if (Boolean(CharacterData.get(region, character).description)) {
                            this.setState({ selection: character });
                        } else {
                            this.props.onSelect(character);
                        }
                    }}
                    onBack={() => {
                        this.props.onBack();
                    }}
                />
            );
        }
    }
}
