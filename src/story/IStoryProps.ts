import * as types from "../Types";

export interface IStoryProps {
    region: types.Region;
    character: types.Character;
    onIntroFinished: () => void;
    onProgress: () => void;
    gamelet: types.GameletType;
    section: number;
    intro: boolean;
}
