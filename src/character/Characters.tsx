
import * as React from "react";
import * as types from "../Types";
import { CharacterItem } from "./CharacterItem";
import { CharacterData } from "../data/CharacterData";
import { Utils } from "../common/Utils";
import { Button } from "@material-ui/core";

interface ICharactersProps {
    region: types.Region;
    onSelect: (character: types.Character) => void;
    onBack: () => void;
}

export class Characters extends React.Component<ICharactersProps> {

    private _root!: HTMLDivElement;

    public render() {

        const { region } = this.props;
        return (
            <div
                className="fadeIn gamelet keep-overflow"
                ref={e => this._root = e as HTMLDivElement}
            >
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        textAlign: "center",
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            position: "relative",
                            display: "grid"
                        }}
                    >
                        <div
                            style={{
                                alignSelf: "center",
                                height: "100%",
                                position: "relative"
                            }}
                        >
                            <div
                                className="character-select-question"
                                style={{
                                    padding: "4vh"
                                }}
                            >
                                Who would you like to be?
                            </div>
                            <div
                                style={{
                                    display: "grid",
                                    maxWidth: "80%",
                                    margin: "0 auto",
                                    gridTemplateColumns: "1fr 1fr 1fr",
                                    height: Utils.isMobile() ? "48%" : "60%",
                                    position: "relative"
                                }}
                            >
                                {
                                    (() => {
                                        const characters = CharacterData.getAllForRegion(region);
                                        return characters.map(([_character, characterData]) => {
                                            const { iconMain } = characterData;
                                            const character = parseInt(_character, 10);
                                            const title = CharacterData.getTitle(region, character);
                                            return (
                                                <CharacterItem
                                                    key={character}
                                                    icon={iconMain}
                                                    description={title}
                                                    onClick={() => {
                                                        // tslint:disable-next-line
                                                        Utils.fadeOut(this._root).then(() => this.props.onSelect(character));
                                                    }}
                                                />
                                            );
                                        });
                                    })()
                                }
                            </div>
                            <div
                                style={{
                                    marginTop: "20px"
                                }}
                            >
                                <Button
                                    className="button"
                                    color="secondary"
                                    variant="contained"
                                    style={{
                                        borderRadius: "40px",
                                        color: "black",
                                        margin: "8px"
                                    }}
                                    onClick={() => Utils.fadeOut(this._root).then(() => this.props.onBack())}
                                >
                                    Go Back
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
