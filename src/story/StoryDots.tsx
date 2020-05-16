
import * as React from "react";
import "./storydots.css";

interface IStoryDotsProps {
    current: number;
    maxDots?: number;
}

export class StoryDots extends React.Component<IStoryDotsProps> {
    public render() {
        const { current } = this.props;
        const dots: JSX.Element[] = [];
        const maxDots = this.props.maxDots || 4;
        for (let i = 0; i < maxDots; ++i) {
            dots.push((
                <div
                    key={i}
                    className={`story-dot ${i === current ? "story-dot-animate" : ""}`}
                    style={{
                        backgroundColor: i >= current ? "white" : "#CB3C34"
                    }}
                />
            ));
        }
        return (
            <div className="story-dot-container">
                {dots}
            </div>
        );
    }
}
