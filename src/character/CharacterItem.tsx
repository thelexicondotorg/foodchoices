
import * as React from "react";

interface ICharacterItemProps {
    icon: string;
    description: string;
    onClick: () => void;
}

export class CharacterItem extends React.Component<ICharacterItemProps> {
    public render() {
        const { icon, description } = this.props;
        return (
            <div>
                <div>
                    <img 
                        className="clickable"
                        src={icon}
                        style={{                            
                            height: "90%"
                        }}
                        onClick={() => this.props.onClick()}
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
