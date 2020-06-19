
import * as React from "react";

import "./outcomedialog.css";
import Button from "@material-ui/core/Button";
import { LoadingIndicator } from "../LoadingIndicator";

namespace Private {
    export const appearDelay = 300;
}

export interface IOutcomeDialogInfo {
    screenText: string | JSX.Element;
    link?: string;
}

interface IOutcomeDialogProps {
    info?: IOutcomeDialogInfo;
    onClosed: () => void;
}

interface IOutcomeDialogState {
    info?: IOutcomeDialogInfo;
}

export class OutcomeDialog extends React.Component<IOutcomeDialogProps, IOutcomeDialogState> {

    private _dialog!: HTMLDivElement;
    private _dialogText!: HTMLDivElement;
    private _buttons!: HTMLDivElement;
    private _iframeContainer!: HTMLDivElement;
    private _iframe!: HTMLIFrameElement;

    constructor(props: IOutcomeDialogProps) {
        super(props);
        this.state = {
            info: props.info
        };
    }

    public onExplain() {
        if (!this._iframe) {
            // create
            this._iframe = document.createElement("iframe");
            this._iframe.src = this.props.info?.link ?? "https://www.greenbrownblue.com/biodiversity-explained/#stefano-padulosi";
            this._iframe.style.width = "100%";
            this._iframe.style.height = "100%";
            this._iframe.style.border = "0px";
            this._iframe.style.position = "absolute";
            this._iframe.style.top = "0px";
            this._iframe.style.left = "0px";
            // this._iframe.style.backgroundColor = "white";
            // this._iframe.onscroll = () => {
            //     console.log("iframe scrolled");
            // };
            this._iframeContainer.appendChild(this._iframe);                                    
        }
        this._iframeContainer.style.display = "block";
        this._dialog.scrollTo(0, 0);
        this.forceUpdate();
    }

    public UNSAFE_componentWillReceiveProps(nextProps: IOutcomeDialogProps) {
        if (Boolean(nextProps.info) !== Boolean(this.state.info)) {
            this.setState({ info: nextProps.info });
            if (nextProps.info) {
                if (this._dialog) {
                    this._dialog.classList.replace("outcome-dialog-out", "outcome-dialog-in");
                }
                setTimeout(() => {
                    this._dialogText.style.opacity = "1";
                    // this._buttons.style.display = "block";
                    this.onExplain(); // go straight to iframe
                }, Private.appearDelay);
            } else {
                // closed dialog
                delete this._iframe;
            }
        }
    }

    public close() {
        this._dialogText.style.opacity = "0";
        // this._buttons.style.display = "none";
        this._dialog.classList.replace("outcome-dialog-in", "outcome-dialog-out");
        setTimeout(() => {
            this.props.onClosed();
        }, Private.appearDelay);
    }

    public render() {
        const { info } = this.state;
        if (!info) {
            return null;
        }

        const { screenText } = info;

        return (
            <div
                style={{
                    position: "fixed",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",                    
                    backgroundColor: "rgba(0,0,0,0.4)",
                }}
                onClick={() => {
                    this.close();
                }}
            >
                <div
                    ref={e => this._dialog = e as HTMLDivElement}                    
                    style={{
                        borderRadius: "4px",
                        boxShadow: "0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19)",                       
                        backgroundColor: "white",
                        marginBottom: "10p",
                        fontSize: "26px",
                        // overflow: "auto",
                        width: "1150px",
                        maxWidth: "calc(100% - 40px)",
                        margin: "0 auto",
                        height: "calc(100% - 40px)",
                        marginTop: "20px",
                        // height: "80%",
                        textAlign: "left",
                        transform: "scaleY(0)"
                    }}
                    className="outcome-dialog-in"
                    onClick={e => e.stopPropagation()}
                >
                    <div
                        ref={e => this._dialogText = e as HTMLDivElement}
                        style={{
                            opacity: 0,
                            display: (() => {
                                if (!this._iframeContainer || this._iframeContainer.style.display === "none") {
                                    return "block";
                                } else {
                                    return "none";
                                }
                            })()
                        }}
                    >
                        {screenText}
                    </div>
                    <div
                        ref={e => this._iframeContainer = e as HTMLDivElement}
                        style={{
                            backgroundColor: "white",
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            left: "0px",
                            top: "0px",
                            display: "none",
                            overflow: "auto"
                        }}
                    >
                        <LoadingIndicator />
                    </div>
                    <div
                        style={{
                            position: "absolute",
                            right: "20px",
                            top: "10px",
                            width: "40px",
                            height: "40px",
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: "#e13119",
                                borderRadius: "50%",
                                width: "100%",
                                height: "100%",
                                color: "white",
                                fontWeight: "bold",
                                display: "grid",
                                textAlign: "center",
                                alignItems: "center",
                                cursor: "pointer"
                            }}
                            onClick={() => {
                                this.close();
                            }}
                        >
                            X
                        </div>
                    </div>
                </div>
                {/* <div
                    ref={e => this._buttons = e as HTMLDivElement}
                    style={{
                        display: "none"
                    }}
                >                            
                    {
                        (this._iframeContainer && this._iframeContainer.style.display !== "none")
                        &&
                        <Button
                            className="button"
                            color="secondary"
                            variant="contained"
                            style={{
                                borderRadius: "40px",
                                padding: "16px",
                                margin: "8px",
                            }}
                            onClick={e => {
                                this.close();
                                // e.stopPropagation();
                                // this._iframeContainer.style.display = "none";
                                // this.forceUpdate();
                            }}
                        >
                            Back
                        </Button>
                    }                   
                </div> */}
            </div>
        );
    }
}
