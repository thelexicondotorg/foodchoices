
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
import { BrazilQuestions } from "../score/ScoreTypes";

interface IStoryProps {
    region: types.Region;
    character: types.BrazilCharacters;
    onIntroFinished: () => void;
    onProgress: () => void;
    gamelet: number;
    section: number;
    intro: boolean;
}

export class BrazilStory extends React.Component<IStoryProps> {
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
            BrazilQuestions.Dinner1,
            BrazilQuestions.Dinner2,
            BrazilQuestions.Dinner3,
            BrazilQuestions.Dinner4
        ];
        
        const gamelets = [
            <Time
                region={types.Region.Brazil}
                character={character}
                onCompleted={i => onCompleted(BrazilQuestions.Breakfast, i)}
            />,
            <MCQ
                region={types.Region.Brazil}
                character={character}
                onCompleted={onProgress}
                choiceMade={(question, answer) => {
                    const id = [
                        BrazilQuestions.Snacks1
                    ][question];
                    Scores.register(id, answer);
                }}
            />,
            <Lunch
                region={types.Region.Brazil}
                character={character}
                choiceMade={(question, answer) => {
                    const id = [
                        BrazilQuestions.Lunch1,
                        BrazilQuestions.Lunch1Drinks,
                    ][question];
                    Scores.register(id, answer);
                }}
                onCompleted={onProgress}
            />,
            <Stacking
                region={types.Region.Brazil}
                character={character}
                onCompleted={i => onCompleted(BrazilQuestions.Lunch2, i)}
            />,
            <Slider
                region={types.Region.Brazil}
                character={character}
                onCompleted={i => onCompleted(BrazilQuestions.Groceries, i)}
            />,
            <YesNoSocial
                region={types.Region.Brazil}
                character={character}
                onCompleted={onProgress}
                onYesPicked={question => Scores.registerYesNo(yesNoQuestions[question], "Yes")}
                onNoPicked={question => Scores.registerYesNo(yesNoQuestions[question], "No")}
            />,
            <Plate
                region={types.Region.Brazil}
                character={character}
                onCompleted={onProgress}
                choiceMade={(question, answer) => {
                    const id = [
                        BrazilQuestions.DinnerProtein,
                        BrazilQuestions.DinnerGrains,
                        BrazilQuestions.DinnerVeggies
                    ][question];
                    Scores.register(id, answer);
                }}
            />
        ];
        return gamelets[gamelet];
    }
}
