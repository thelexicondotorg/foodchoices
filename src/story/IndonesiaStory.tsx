
import * as React from "react";
import * as types from "../Types";
import { MCQ } from "../gamelets/mcq/MCQ";
import { Time } from "../gamelets/time/Time";
import { Stacking } from "../gamelets/stacking/Stacking";
import { Slider } from "../gamelets/slider/Slider";
import { Plate } from "../gamelets/plate/Plate";
import { StoryIntro } from "./StoryIntro";
import { Lunch } from "../gamelets/mcq/Lunch";
import { Scores } from "../Scores";
import { IndonesiaQuestions } from "../score/ScoreTypes";
import { IStoryProps } from "./IStoryProps";
import { FruitShoppingData } from "../data/indonesia/FruitShoppingData";
import { LunchSnackData } from "../data/indonesia/LunchSnackData";

export class IndonesiaStory extends React.Component<IStoryProps> {
    public render() {

        const { intro, gamelet, section, onProgress, onIntroFinished, region, character } = this.props;
        if (intro) {
            return (
                <StoryIntro
                    section={section}
                    onCompleted={onIntroFinished}
                    region={region}
                    character={character}
                    maxSections={5}
                />
            );
        }

        const onCompleted = (questionId: string, answerIndex: number) => {
            Scores.register(questionId, answerIndex);
            onProgress();
        };

        const gamelets: { [g: string]: JSX.Element } = {
            [types.GameletType.Time]: (
                <Time
                    region={region}
                    character={character}
                    onCompleted={i => onCompleted(IndonesiaQuestions.Breakfast, i)}
                />
            ),
            [types.GameletType.MCQ]: (
                <MCQ
                    region={region}
                    character={character}
                    onCompleted={onProgress}
                    choiceMade={(question, answer) => {
                        const id = [
                            IndonesiaQuestions.Snacks1
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
                            IndonesiaQuestions.Lunch1,
                            IndonesiaQuestions.Lunch1Drinks,
                        ][question];
                        Scores.register(id, answer);
                    }}
                />
            ),            
            [types.GameletType.LunchSnack]: (
                <MCQ
                    region={region}
                    character={character}
                    onCompleted={onProgress}
                    choiceMade={(question, answer) => {
                        const id = [
                            IndonesiaQuestions.LunchSnack
                        ][question];
                        Scores.register(id, answer);
                    }}
                    customQuestions={LunchSnackData.getQuestions(character)}
                />
            ),
            [types.GameletType.Slider]: (
                <Slider
                    region={region}
                    character={character}
                    onCompleted={i => onCompleted(IndonesiaQuestions.Groceries, i)}
                />
            ),
            [types.GameletType.FruitShopping]: (
                <MCQ
                    region={region}
                    character={character}
                    onCompleted={onProgress}
                    choiceMade={(question, answer) => {
                        const id = [
                            IndonesiaQuestions.FruitShopping
                        ][question];
                        Scores.register(id, answer);
                    }}
                    customQuestions={FruitShoppingData.getQuestions(character)}
                />
            ),            
            [types.GameletType.Stacking]: (
                <Stacking
                    region={region}
                    character={character}
                    onCompleted={i => onCompleted(IndonesiaQuestions.Dinner, i)}
                />
            ),
            [types.GameletType.Plate]: (
                <Plate
                    region={region}
                    character={character}
                    onCompleted={onProgress}
                    choiceMade={(question, answer) => {
                        const id = [
                            IndonesiaQuestions.DinnerProtein,
                            IndonesiaQuestions.DinnerGrains,
                            IndonesiaQuestions.DinnerVeggies
                        ][question];
                        Scores.register(id, answer);
                    }}
                />
            )
        };

        return gamelets[gamelet];
    }
}
