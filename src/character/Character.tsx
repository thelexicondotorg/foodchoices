
import * as React from "react";
import { Button } from "@material-ui/core";
import { SlideIndicator } from "../common/SlideIndicator";
import { Utils } from "../common/Utils";
import "./character.css";
import { ICharacterData } from "../Types";

interface ICharacterProps {
    data: ICharacterData;
    icon: string;
    onBack: () => void;
    onPlay: () => void;
}

export class Character extends React.Component<ICharacterProps> {

    private _root!: HTMLDivElement;

    public render() {

        const { data, icon } = this.props;
        const { name, description } = data;
        const attributes = data.attributes || {
            access: -1,
            security: -.5,
            literacy: 1
        };

        return (
            <div
                className="fadeIn gamelet characters"
                ref={e => this._root = e as HTMLDivElement}
            >
                <div
                    style={{
                        height: "100%",
                        position: "relative"
                    }}
                >
                    <div
                        style={{
                            maxWidth: "1400px",
                            width: "100%",
                            position: "relative",
                            height: "100%",
                            margin: "0 auto"
                        }}
                    >
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1.6fr",
                                height: "100%"
                            }}
                        >
                            <div
                                style={{
                                    alignSelf: "center",
                                    textAlign: "center",
                                    overflow: "hidden"
                                }}
                            >
                                <img
                                    style={{
                                        // height: "80vh"
                                    }}
                                    src={icon}
                                />
                            </div>
                            <div
                                style={{
                                    padding: "20px",  
                                    paddingRight: "40px",                                 
                                    height: "calc(100% - 40px)",
                                    position: "relative"
                                }}
                            >
                                <div
                                    className="character-description"
                                    style={{
                                        textAlign: "justify",
                                        display: "grid",
                                        alignItems: "center",
                                        paddingBottom: "20px",
                                        overflow: "auto",
                                        height: "calc(40% - 20px)"                                        
                                    }}
                                >
                                    {description}
                                </div>
                                <div
                                    className="character-select-text"
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-around",
                                        height: "40%"
                                    }}
                                >
                                    <SlideIndicator
                                        low={{
                                            value: -2,
                                            caption: "Low Food Access"
                                        }}
                                        mid={{
                                            value: 0
                                        }}
                                        high={{
                                            value: 2,
                                            caption: "High Food Access"
                                        }}
                                        current={attributes.access}
                                        backgroundColor="#F8D2CE"
                                        color={{
                                            property: "backgroundColor",
                                            value: "#ECB3A1"
                                        }}
                                        balloon="BalloonPink"
                                        showValues={true}
                                    />
                                    <SlideIndicator
                                        low={{
                                            value: -2,
                                            caption: "Low Food Security"
                                        }}
                                        mid={{
                                            value: 0
                                        }}
                                        high={{
                                            value: 2,
                                            caption: "High Food Security"
                                        }}
                                        current={attributes.security}
                                        backgroundColor="#CEEAD6"
                                        color={{
                                            property: "backgroundColor",
                                            value: "#BBD3C1"
                                        }}
                                        balloon="BalloonGreen"
                                        showValues={true}
                                    />
                                    <SlideIndicator
                                        low={{
                                            value: -2,
                                            caption: "Low Food Literacy"
                                        }}
                                        mid={{
                                            value: 0
                                        }}
                                        high={{
                                            value: 2,
                                            caption: "High Food Literacy"
                                        }}
                                        current={attributes.literacy}
                                        backgroundColor="#FFEFC3"
                                        color={{
                                            property: "backgroundColor",
                                            value: "#F3C04F"
                                        }}
                                        balloon="BalloonYellow"
                                        showValues={true}
                                    />
                                </div>
                                <div
                                    style={{
                                        // padding: "24px",
                                        textAlign: "right",
                                        height: "20%"
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
                                    <Button
                                        className="button"
                                        color="primary"
                                        variant="contained"
                                        style={{
                                            borderRadius: "40px",
                                            margin: "8px"
                                        }}
                                        onClick={() => Utils.fadeOut(this._root).then(() => this.props.onPlay())}
                                    >
                                        Play as {name}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
