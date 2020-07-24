
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button } from "@material-ui/core";

interface IHelpPopupProps {
    visible: boolean;
    onClose: () => void;
}

// tslint:disable:max-line-length

export class IntroPopup extends React.Component<IHelpPopupProps> {

    private static readonly config = {
        animDuration: 300
    };

    private _root!: HTMLElement;

    public render() {
        if (!this.props.visible) {
            return null;
        }

        const close = () => {
            this._root.classList.replace("dialog-in", "dialog-out");
            setTimeout(this.props.onClose, 300);
        };

        return ReactDOM.createPortal(
            (
                <div
                    className="fill-parent"
                    style={{
                        position: "fixed",
                        left: 0,
                        top: 0,
                        backgroundColor: "rgba(0,0,0,0.4)",
                        display: "grid"                        
                    }}
                    onClick={close}
                >
                    <div
                        ref={e => this._root = e as HTMLElement}
                        className="card dialog-in"
                        style={{
                            maxWidth: "800px",
                            maxHeight: "650px",
                            width: "95%",
                            height: "95vh",
                            backgroundColor: "white",
                            margin: "0 auto",
                            alignSelf: "center",
                            transform: "scaleY(0)",
                            padding: "40px",
                            paddingBottom: "10px",
                            position: "relative",
                            boxSizing: "border-box"
                        }}
                        onClick={e => e.stopPropagation()}
                    >
                        <div style={{ paddingRight: "20px" }}>
                            <div
                                style={{
                                    overflow: "auto",
                                    height: "calc(100% - 70px)"
                                }}
                            >
                                <div style={{ textAlign: "center" }}>
                                    <img src="/public/Header.svg" />
                                </div>
                                <div
                                    style={{
                                    }}
                                >
                                    <p>Welcome to the "Food Choices Game"!</p>

                                    <p>This game was designed to raise awareness about the <b>impacts our food choices have</b> on our own health, but also the environment, climate change and the cultures in which we live.</p>

                                    <p>First, you can <b>choose one of the four global regions</b> and pick a character that you want to play.</p>

                                    <p>Each region has distinct cultural, economic, historical, and agricultural capacities to feed itself, and each character faces different challenges, such as varied access to food, higher or lower family income, and food literacy. </p>

                                    <p>As you take your character through their day, select the choices you think they might make given their situation. </p>

                                    <p>At the end of the day you will get a report on the impact of your food choices on five areas: <b>health</b>, <b>healthcare</b>, <b>climate</b>, <b>environment</b> and <b>culture</b>. Take some time to read through them. Now go back and try again. Can you make improvements in all five areas? Did one area score higher, but another score lower?</p>

                                    <p>FOOD CHOICES FOR A HEALTHY PLANET will help you better understand how all these regions and characters' particularities can influence our food choices, and how our food choices can impact our personal health, national healthcare, environment, climate, and culture. Let's Play!</p>
                                </div>
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
                                        margin: "8px"
                                    }}
                                    onClick={close}
                                >
                                    OK!
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            document.body
        );
    }
}
