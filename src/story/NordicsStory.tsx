
import * as React from "react";
import * as types from "../Types";
import { MCQ } from "../gamelets/mcq/MCQ";
import { Time } from "../gamelets/time/Time";
import { Stacking } from "../gamelets/stacking/Stacking";
import { Slider } from "../gamelets/slider/Slider";
import { YesNoSocial } from "../gamelets/yesnosocial/YesNoSocial";
import { Plate } from "../gamelets/plate/Plate";
import { StoryIntro } from "./StoryIntro";
import { Lunch } from "../gamelets/mcq/Lunch";
import { Scores } from "../Scores";
import { NordicQuestions } from "../score/ScoreTypes";

interface IStoryProps {
    region: types.Region;
    character: types.NordicCharacters;
    onIntroFinished: () => void;
    onProgress: () => void;
    gamelet: number;
    section: number;
    intro: boolean;
}

export class NordicsStory extends React.Component<IStoryProps> {
    public render() {

        const { intro, gamelet, section, onProgress, onIntroFinished, region, character } = this.props;
        if (intro) {
            return (
                <StoryIntro
                    section={section}
                    onCompleted={onIntroFinished}
                    region={region}
                    character={character}
                    maxSections={3}
                />
            );
        }

        const onCompleted = (questionId: string, answerIndex: number) => {
            Scores.register(questionId, answerIndex);
            onProgress();
        };

        const yesNoQuestions = [
            NordicQuestions.Dinner1,
            NordicQuestions.Dinner2,
            NordicQuestions.Dinner3,
            NordicQuestions.Dinner4
        ];

        const gamelets: { [g: string]: JSX.Element } = {
            [types.GameletType.Time]: (
                <Time
                    region={region}
                    character={character}
                    onCompleted={i => onCompleted(NordicQuestions.Breakfast, i)}
                />
            ),
            [types.GameletType.MCQ]: (
                <MCQ
                    region={region}
                    character={character}
                    onCompleted={onProgress}
                    choiceMade={(question, answer) => {
                        const id = [
                            NordicQuestions.Snacks1
                        ][question];
                        Scores.register(id, answer);
                    }}
                />
            ),
            [types.GameletType.Lunch]: (
                <Lunch
                    region={region}
                    character={character}
                    onCompleted={onProgress}
                    choiceMade={(question, answer) => {
                        const id = [
                            NordicQuestions.Lunch1,
                            NordicQuestions.Lunch1Drinks,
                        ][question];
                        Scores.register(id, answer);
                    }}
                />
            ),
            [types.GameletType.YesNoSocial]: (
                <YesNoSocial
                    region={region}
                    character={character}
                    onCompleted={onProgress}
                    onYesPicked={question => Scores.registerYesNo(yesNoQuestions[question], "Yes")}
                    onNoPicked={question => Scores.registerYesNo(yesNoQuestions[question], "No")}
                />
            ),
            [types.GameletType.Plate]: (
                <Plate
                    region={region}
                    character={character}
                    onCompleted={onProgress}
                    choiceMade={(question, answer) => {
                        const id = [
                            NordicQuestions.DinnerProtein,
                            NordicQuestions.DinnerGrains,
                            NordicQuestions.DinnerVeggies
                        ][question];
                        Scores.register(id, answer);
                    }}
                />
            )
        };
        
        return gamelets[gamelet];
    }
}
