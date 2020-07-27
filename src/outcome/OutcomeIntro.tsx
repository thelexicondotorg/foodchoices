
import * as React from "react";
import { Button } from "@material-ui/core";
import { Utils } from "../common/Utils";
import { Region, Character } from "../Types";

interface IOutcomeIntroProps {
    onAccept: () => void;
}

export class OutcomeIntro extends React.Component<IOutcomeIntroProps> {

    private _root!: HTMLDivElement;

    public render() {
        return (
            <div
                className="fadeIn"
                ref={e => this._root = e as HTMLDivElement}
                style={{
                    display: "grid",
                    alignItems: "center",
                    height: "100%"
                }}
            >
                <div>
                    <div
                        style={{
                            fontSize: "5vh",
                            textAlign: "center",
                            padding: "4vh",
                            maxWidth: "800px",
                            margin: "0 auto"
                        }}
                    >
                        The food you eat tells a story.<br/>Would you like to see yours?
                    </div>
                    <div
                        style={{
                            textAlign: "center"
                        }}
                    >
                        <Button
                            className="button"
                            color="primary"
                            variant="contained"
                            style={{
                                borderRadius: "40px",
                                margin: "8px",
                            }}
                            onClick={() => {
                                Utils.fadeOut(this._root)
                                    .then(() => {
                                        this.props.onAccept();
                                    });
                            }}
                        >
                            Yes, tell me my food story!
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}
