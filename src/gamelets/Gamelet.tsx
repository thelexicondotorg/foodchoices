
import * as React from "react";
import { Config } from "../Config";
import { Utils } from "../common/Utils";
import { Region, Character } from "../Types";

export interface IGameletProps {
    region: Region;
    character: Character;
    onCompleted: (answerIndex: number) => void;
}

export class Gamelet<P = {}, S = {}> extends React.Component<P & IGameletProps, S> {
    protected _root!: HTMLDivElement;

    public fadeOut() {
        return Utils.fadeOut(this._root);        
    }

    public fadeIn() {
        return new Promise(resolve => {
            setTimeout(
                () => {
                    this._root.classList.remove("disabled");
                    this._root.classList.replace("fadeOut", "fadeIn");
                    setTimeout(resolve, Config.fadeDuration);
                },
                Config.clickAcceptDelay
            );
        });
    }

    public complete(answerIndex: number) {
        return this.fadeOut().then(() => this.props.onCompleted(answerIndex));
    }
}
