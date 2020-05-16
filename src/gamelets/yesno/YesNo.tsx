
import * as React from "react";
import { Gamelet, IGameletProps } from "../Gamelet";

interface IYesNoState {
    question: number;
}

export class YesNo extends Gamelet<{}, IYesNoState> {
    constructor(props: {} & IGameletProps) {
        super(props);
        this.state = {
            question: 0
        };
    }

    public render() {
        return (
            <div/>
        );
    }
}
