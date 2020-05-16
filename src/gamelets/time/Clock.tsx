
import * as React from "react";

interface IClockProps {
    duration: number;
    onElapsed: () => void;
}

interface IClockState {
    currentTime: number;
}

export class Clock extends React.Component<IClockProps, IClockState> {

    // tslint:disable-next-line
    private _timer: any;

    constructor(props: IClockProps) {
        super(props);
        this.state = {
            currentTime: props.duration
        };
    }

    public componentDidMount() {
        const decrTime = () => {
            const newTime = this.state.currentTime - 1;
            this.setState({ currentTime: newTime });
            if (newTime === 0) {
                this.props.onElapsed();
            } else {                
                this._timer = setTimeout(decrTime, 1000);
            }
        };
        this._timer = setTimeout(decrTime, 1000);
    }

    public componentWillUnmount() {
        clearTimeout(this._timer);
    }

    public render() {
        return (            
            <div
                style={{
                    backgroundColor: "#FFC69A",
                    borderRadius: "50%",
                    width: "66px",
                    height: "66px",
                    display: "grid",
                    alignItems: "center",
                    float: "right",
                    textAlign: "center"
                }}
            >
                {this.state.currentTime}
            </div>
        );
    }
}
