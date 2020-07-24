
import * as React from "react";
import "./intro2.css";
import { Config } from "../Config";

interface IIntroProps {
    onPlay: () => void;
}

interface IIntroState {
    playClicked: boolean;
}

export class Intro2 extends React.Component<IIntroProps, IIntroState> {

    private _image!: HTMLImageElement;
    private _playButton!: HTMLImageElement;

    constructor(props: IIntroProps) {
        super(props);
        this.state = {
            playClicked: false
        };
    }

    public componentDidMount() {
        this.onResize();
        this.onResize = this.onResize.bind(this);
        window.addEventListener("resize", this.onResize);
        this.onMessage = this.onMessage.bind(this);
        window.addEventListener("message", this.onMessage, false);
    }

    public componentWillUnmount() {
        window.removeEventListener("resize", this.onResize);
        window.removeEventListener("message", this.onMessage);
    }

    public render() {

        return (
            <div
                className="intro-fade-in"
            >
                <div>
                    <img
                        ref={e => this._image = e as HTMLImageElement}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain"
                        }}
                        src="/public/intro/intro-image2.svg"
                    />
                </div>
                <img
                    ref={e => this._playButton = e as HTMLImageElement}
                    style={{
                        position: "absolute"
                    }}
                    src="/public/intro/play-button2.svg"
                    className={`${this.state.playClicked ? "selected" : "clickable"}`}
                    onClick={() => {
                        // if (this.state.playClicked) {
                        //     return;
                        // }
                        // this.setState({ playClicked: true });
                        this.props.onPlay();
                        /*setTimeout(() => {
                            this.props.onPlay();
                        }, Config.clickAcceptDelay);*/
                    }}
                />
            </div>
        );
    }

    private onResize() {
        const { width, height } = this._image.getBoundingClientRect();
        const origWidth = 1920;
        const origHeight = 1127;
        const playButtonOrigWidth = 336;
        const playButtonOrigHeight = 72.430;
        const playButtonOrigX = 795.610;
        const playButtonOrigY = 301.370;

        const ratio = width / height;
        const origRatio = origWidth / origHeight;
        let playButtonWidth = playButtonOrigWidth;
        const playButtonY = origHeight - playButtonOrigY - playButtonOrigHeight;
        if (ratio > origRatio) {
            // Center horizontally + 'bars' on the sides
            const sizeRatio = height / origHeight;
            playButtonWidth = playButtonOrigWidth * sizeRatio;
            const newWidth = origWidth * sizeRatio;
            const offset = (width - newWidth) / 2;
            this._playButton.style.left = `${offset + playButtonOrigX * sizeRatio}px`;
            this._playButton.style.top = `${playButtonY * sizeRatio}px`;
        } else {
            // Center vertically + 'bars' on top & bottom
            const sizeRatio = width / origWidth;
            playButtonWidth = playButtonOrigWidth * sizeRatio;
            const newHeight = origHeight * sizeRatio;
            const offset = (height - newHeight) / 2;
            this._playButton.style.left = `${playButtonOrigX * sizeRatio}px`;
            this._playButton.style.top = `${offset + playButtonY * sizeRatio}px`;
        }

        this._playButton.style.width = `${playButtonWidth}px`;
    }

    private onMessage(event: MessageEvent) {
        this.onResize();
    }
}
