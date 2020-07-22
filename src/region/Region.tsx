
import * as React from "react";
import { Button } from "@material-ui/core";
import { Utils } from "../common/Utils";

interface IRegionProps {
    name: string;
    description: JSX.Element;
    flag: string | string[];
    globe: string;
    background: string;
    backgroundColor: string;
    onBack: () => void;
    onPlay: () => void;
}

export class Region extends React.Component<IRegionProps> {

    private _root!: HTMLDivElement;

    public render() {

        const { name, description, flag, globe, background, backgroundColor } = this.props;
        return (
            <div
                className="fadeIn"
                ref={e => this._root = e as HTMLDivElement}
                style={{
                    backgroundColor,
                    height: "100%",
                    position: "relative",
                    overflow: "auto"
                }}
            >
                <div
                    style={{
                        maxWidth: "1100px",
                        margin: "0 auto",
                        height: "100%",
                        display: "grid",
                        alignItems: "center",
                        gridTemplateColumns: "1fr 1fr",
                        position: "relative"
                    }}
                >
                    <div
                        style={{
                            height: "100%",                            
                            display: "grid"
                        }}
                    >
                        <div style={{ alignSelf: "center" }} >
                            <div
                                style={{
                                    padding: "20px 20px 0px 20px",
                                    display: "flex",
                                    alignItems: "center"
                                }}
                            >
                                <div>
                                    {(() => {
                                        if (Array.isArray(flag)) {
                                            return flag.map((f, index) => (
                                                <img key={index} className="flags" src={f} />
                                            ));
                                        } else {
                                            return <img className="flag" src={flag} />;
                                        }
                                    })()}
                                </div>
                                <div>
                                    <img
                                        className={Array.isArray(flag) ? "region-globe" : ""}
                                        style={{
                                            marginLeft: Array.isArray(flag) ? undefined : "30px",
                                            width: Array.isArray(flag) ? "120px" : "80px"
                                        }}
                                        src={globe}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    color: "white",
                                    fontSize: "20px",
                                    textAlign: "justify",
                                    padding: "20px"
                                }}
                            >
                                {description}
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            height: "100%",
                            display: "grid"
                        }}
                    >
                        <div style={{ alignSelf: "center" }} >
                            <div style={{ textAlign: "center" }}>
                                <img
                                    style={{ 
                                        maxHeight: "60vh"
                                    }}
                                    src={background} 
                                />
                            </div>
                            <div
                                style={{
                                    padding: "24px",
                                    textAlign: "center"
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
                                    Yes, let's Play!
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
