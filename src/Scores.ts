import { Http } from "./common/HTTP";

interface IAnswerInfo { 
    questionId: string; 
    answerIndex: number; 
}

interface IYesNoAnswerInfo {
    gamelet: string;
    answer: string;
}

namespace Private {
    export const scores: IAnswerInfo[] = [];
    export const yesNoScores: IYesNoAnswerInfo[] = [];
    export const outcomesClicked: string[] = [];
    export let sessionId: string;
}

export class Scores {

    public static set sessionId(s: string) { Private.sessionId = s; }
    public static get sessionId() { return Private.sessionId; }

    public static register(questionId: string, answerIndex: number) {
        // tslint:disable-next-line
        console.log(`register ${questionId}, answer: ${answerIndex}`);
        Private.scores.push({
            questionId, 
            answerIndex
        });
    }

    public static registerYesNo(gamelet: string, answer: string) {
        // tslint:disable-next-line
        console.log(`register ${gamelet}, answer: ${answer}`);
        Private.yesNoScores.push({
            gamelet,
            answer
        });
    }

    public static clear() {
        Private.scores.length = 0;
        Private.yesNoScores.length = 0;
        Private.outcomesClicked.length = 0;
    }

    public static get() {
        // used to calculate outcomes
        return Private.scores;
    }

    public static getAllScores() {
        // used to send scores to backend
        return (Private.scores as object[]).concat(Private.yesNoScores);
    }

    public static addOutcomeClicked(outcome: string) {
        Private.outcomesClicked.push(outcome);
        Http.request({
            url: "/api/scores/outcomesClicked",
            method: "POST",
            headerParams: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                session: Private.sessionId,
                outcomes: Private.outcomesClicked
            })
        });
    }
}
