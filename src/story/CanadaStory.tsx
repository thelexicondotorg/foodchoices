
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
import { CanadaQuestions } from "../score/ScoreTypes";

interface IStoryProps {
    region: types.Region;
    character: types.CanadaCharacters;
    onIntroFinished: () => void;
    onProgress: () => void;
    gamelet: number;
    section: number;
    intro: boolean;
}

export class CanadaStory extends React.Component<IStoryProps> {
    public render() {
        const { intro, gamelet, section, onProgress, onIntroFinished, region, character } = this.props;
        if (intro) {
            return (
                <StoryIntro
                    section={section}
                    onCompleted={onIntroFinished}
                    region={region}
                    character={character}
                />
            );
        }

        const onCompleted = (questionId: string, answerIndex: number) => {
            Scores.register(questionId, answerIndex);
            onProgress();
        };

        const yesNoQuestions = [
            CanadaQuestions.Dinner1,
            CanadaQuestions.Dinner2,
            CanadaQuestions.Dinner3,
            CanadaQuestions.Dinner4
        ];
        
        const gamelets = [
            <Time
                region={region}
                character={character}
                onCompleted={i => onCompleted(CanadaQuestions.Breakfast, i)}
            />,
            <MCQ
                region={region}
                character={character}
                onCompleted={onProgress}
                choiceMade={(question, answer) => {
                    const id = [
                        CanadaQuestions.Snacks1,
                        CanadaQuestions.Snacks2,
                    ][question];
                    Scores.register(id, answer);
                }}
            />,
            <Lunch
                region={region}
                character={character}
                choiceMade={(question, answer) => {
                    const id = [
                        CanadaQuestions.Lunch1
                    ][question];
                    Scores.register(id, answer);
                }}
                onCompleted={onProgress}
            />,
            <Stacking
                region={region}
                character={character}
                onCompleted={i => onCompleted(CanadaQuestions.Lunch2, i)}
            />,
            <Slider
                region={region}
                character={character}
                onCompleted={i => onCompleted(CanadaQuestions.Groceries, i)}
            />,
            <YesNoSocial
                region={region}
                character={character}
                onCompleted={onProgress}
                onYesPicked={question => Scores.registerYesNo(yesNoQuestions[question], "Yes")}
                onNoPicked={question => Scores.registerYesNo(yesNoQuestions[question], "No")}                
            />,
            <Plate
                region={region}
                character={character}
                onCompleted={onProgress}
                choiceMade={(question, answer) => {
                    const id = [
                        CanadaQuestions.DinnerProtein,
                        CanadaQuestions.DinnerGrains,
                        CanadaQuestions.DinnerVeggies
                    ][question];
                    Scores.register(id, answer);
                }}
            />
        ];
        return gamelets[gamelet];
    }
}
