
import * as React from "react";
import { StoryDots } from "./StoryDots";
import { StoryData } from "../data/StoryData";
import { Utils } from "../common/Utils";
import { Region, Character } from "../Types";
import { CharacterData } from "../data/CharacterData";
import "./storyintro.css";

interface IStoryIntroProps {
    section: number;
    region: Region;
    character: Character;
    maxSections?: number;
    onCompleted: () => void;
}

export class StoryIntro extends React.Component<IStoryIntroProps> {

    private _root!: HTMLDivElement;

    // tslint:disable-next-line
    private _timer: any;

    public componentDidMount() {
        this._timer = setTimeout(() => Utils.fadeOut(this._root).then(() => this.props.onCompleted()), 3000);
    }

    public componentWillUnmount() {
        clearTimeout(this._timer);
    }

    public render() {
        const { section, region, character } = this.props;
        const { icons, message, backgroundColor } = StoryData.get(section, region, character);
        const characterData = CharacterData.get(region, character);
        return (
            <div
                className="fadeIn"
                ref={e => this._root = e as HTMLDivElement}
                style={{
                    display: "grid",
                    alignItems: "center",
                    height: "100%",
                    backgroundColor
                }}
            >
                <div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-around",
                            maxWidth: "70%",
                            margin: "0 auto",
                            maxHeight: "30vh",
                            height: "20vh",
                            position: "relative"
                        }}
                    >
                        {icons.map((icon, i) => (
                             <img 
                                className={`storyintro-bounce${i + 1}`}
                                key={i} 
                                src={icon}
                                style={{
                                    height: "100%"
                                }}
                             />
                        ))}
                    </div>
                    <div
                        className="storyintro-message"
                        style={{
                            textAlign: "center",
                            padding: "4vh",
                            maxWidth: "800px",
                            margin: "0 auto"
                        }}
                    >
                        {Utils.resolve(message, characterData)}
                    </div>
                    <StoryDots current={section} maxDots={this.props.maxSections} />
                </div>
            </div>
        );
    }
}
