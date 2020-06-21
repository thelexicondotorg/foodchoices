
import * as React from "react";
import { Config } from "../Config";

interface ICharacterItemProps {
    icon: string;
    description: string;
    onClick: () => void;
}

interface ICharacterItemState {
    clicked: boolean;
}

export class CharacterItem extends React.Component<ICharacterItemProps, ICharacterItemState> {

    constructor(props: ICharacterItemProps) {
        super(props);
        this.state = {
            clicked: false
        };
    }

    public render() {
        const { icon, description } = this.props;
        return (
            <div>
                <div>
                    <img 
                        className={`${this.state.clicked ? "selected" : "clickable"}`}
                        src={icon}
                        style={{                            
                            height: "90%"
                        }}
                        onClick={() => {
                            if (this.state.clicked) {
                                return;
                            }
                            this.setState({ clicked: true });
                            setTimeout(() => {
                                this.props.onClick();
                            }, Config.clickAcceptDelay);
                        }}
                    />
                </div>
                <div
                    className="character-select-description"
                    style={{
                        // padding: "3vh",
                        fontWeight: "bold"
                    }}
                >
                    {description}
                </div>
            </div>
        );
    }
}
