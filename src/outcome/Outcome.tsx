
import * as React from "react";
import * as types from "../Types";
import { CharacterData } from "../data/CharacterData";
import { OutcomeRow } from "./OutcomeRow";
import { Button } from "@material-ui/core";
import { Utils } from "../common/Utils";
import { CanadaSylviaScoreData } from "../data/canada/CanadaSylviaScoreData";
import { Scores } from "../Scores";
import { IScoreData, IScore, OutcomeType } from "../Types";
import { CanadaEstherScoreData } from "../data/canada/CanadaEstherScoreData";
import { CanadaHardeepScoreData } from "../data/canada/CanadaHardeepScoreData";
import { BrazilGabrielScoreData } from "../data/brazil/BrazilGabrielScoreData";
import { BrazilSandraScoreData } from "../data/brazil/BrazilSandraScoreData";
import { BrazilMariaScoreData } from "../data/brazil/BrazilMariaScoreData";
import { IndonesiaWulandariScoreData } from "../data/indonesia/IndonesiaWulandariScoreData";
import { IndonesiaNisaScoreData } from "../data/indonesia/IndonesiaNisaScoreData";
import { IndonesiaHassanScoreData } from "../data/indonesia/IndonesiaHassanScoreData";
import { NordicsEliasScoreData } from "../data/nordics/NordicsEliasScoreData";
import { NordicsAmenaScoreData } from "../data/nordics/NordicsAmenaScoreData";
import { NordicsLisenScoreData } from "../data/nordics/NordicsLisenScoreData";
import { OutcomeScore } from "./OutcomeScore";
import { SlideIndicator } from "../common/SlideIndicator";
import { Http } from "../common/HTTP";
import { RegionData } from "../data/RegionData";
import { OutcomeDialog, IOutcomeDialogInfo } from "./OutcomeDialog";
import "./outcome.css";

// tslint:disable:no-console max-line-length

interface IOutcomeProps {
    region: types.Region;
    character: types.Character;
    onReplay: () => void;
}

interface IOutcomeState {
    dialogInfo?: IOutcomeDialogInfo;
}

interface IOutcome {
    score: number;
    outcome: string;
    icon: string;
    id: string;

    screenText?: string | JSX.Element;
    link?: string;
    type?: OutcomeType;
    desc?: string;
}

namespace Private {
    export const outcomeInfo: {
        [key: string]: {
            name: string;
            color: string;
            bgColor: string;
            displayName?: string;
        }
    } = {
        [OutcomeType.Environment]: {
            name: "Environment",
            color: "#649e63",
            bgColor: "rgba(244, 194, 83, .3)"
        },
        [OutcomeType.Health]: { name: "Health", color: "#efe7c3", bgColor: "rgba(209, 227, 252, .3)" },
        [OutcomeType.Healthcare]: { name: "Healthcare", color: "#c95a49", bgColor: "rgba(248, 216, 186, .3)" },
        [OutcomeType.Culture]: { name: "Culture", color: "#c8d7f6", bgColor: "rgba(217, 106, 86, .3)" },
        [OutcomeType.Climate]: { name: "Climate", displayName: "Climate Change", color: "#cea055", bgColor: "#EFF3EC" }
    };
}

export class Outcome extends React.Component<IOutcomeProps, IOutcomeState> {

    private _root!: HTMLDivElement;
    private _slider!: SlideIndicator;

    private _outcomes: IOutcome[] = [];
    private _outcomeDialog!: OutcomeDialog;

    private _envScore = 0;
    private _cultureScore = 0;
    private _healthcareScore = 0;
    private _climateScore = 0;
    private _healthScore = 0;
    private _maxScore = 0;

    constructor(props: IOutcomeProps) {
        super(props);
        this.state = {};

        const scoreMap: Array<Array<{ [questionId: string]: IScoreData[] }>> = [
            // Canada
            [
                CanadaSylviaScoreData.get(),
                CanadaEstherScoreData.get(),
                CanadaHardeepScoreData.get()
            ],
            // Brazil
            [
                BrazilGabrielScoreData.get(),
                BrazilSandraScoreData.get(),
                BrazilMariaScoreData.get()
            ],
            // Indonesia
            [
                IndonesiaWulandariScoreData.get(),
                IndonesiaNisaScoreData.get(),
                IndonesiaHassanScoreData.get()
            ],
            // Nordics
            [
                NordicsEliasScoreData.get(),
                NordicsAmenaScoreData.get(),
                NordicsLisenScoreData.get()
            ]
        ];

        const scoresData = scoreMap[props.region][props.character];
        const scores = Scores.get();
        const finalScores = scores.reduce(
            (prev, cur) => {
                const questionData = scoresData[cur.questionId];
                if (Boolean(questionData)) {
                    const answerData = questionData[cur.answerIndex];
                    if (Boolean(answerData)) {
                        return prev.concat({
                            data: answerData,
                            id: `${cur.questionId}_${cur.answerIndex}`
                        });
                    } else {
                        return prev;
                    }
                } else {
                    return prev;
                }
            },
            [] as Array<{ data: IScoreData; id: string; }>
        ).filter(s => Boolean(s.data.outcome) && Boolean(s.data.icon));

        // 4 is equivalent to 2, because [-2, 2] range is normalized to [0, 4]
        this._maxScore = finalScores.length * 4;

        const scoresCopy = finalScores.slice();
        const sortByProp = (property: keyof IScore): IOutcome[] => {
            return scoresCopy
                .sort((a, b) => a.data.scores[property] - b.data.scores[property])
                .map(s => ({
                    score: s.data.scores[property],
                    outcome: s.data.outcome as string,
                    icon: s.data.icon as string,
                    id: s.id,
                    screenText: s.data.screenText,
                    link: s.data.link
                } as IOutcome));
        };

        const envScores = sortByProp("Environment");
        const cultureScores = sortByProp("Culture");
        const healthcareScores = sortByProp("Healthcare");
        const climateScores = sortByProp("Climate");
        const healthScores = sortByProp("Health");

        /*const getSignificantItem = (arr: IOutcome[]) => {
            if (arr.length < 1) {
                return undefined;
            }

            const firstScore = Math.abs(arr[0].score);
            const lastScore = Math.abs(arr.slice(-1)[0].score);
            const index = firstScore > lastScore ? 0 : arr.length - 1;
            return arr[index];
        };

        const getId = (outcome: IOutcome | undefined) => outcome ? outcome.id : "undefined";*/

        // tslint:disable-next-line
        //*
        this._outcomes = finalScores.map(s => {
            const info = s.data.outcomeType ? Private.outcomeInfo[s.data.outcomeType] : null;
            // tslint:disable-next-line
            const prop = info?.displayName ?? info?.name ?? "Health";
            return {
                // tslint:disable-next-line
                score: (s.data.scores as any)[prop],
                outcome: s.data.outcome as string,
                icon: s.data.icon as string,
                id: s.id,
                screenText: s.data.screenText,
                link: s.data.link,
                desc: s.data.outcomeDesc,
                type: s.data.outcomeType
            } as IOutcome;
        });

        // convert from [-2, 2] to [0, 4], then average it
        // tslint:disable-next-line
        const calcScore = (sectionScores: IOutcome[]) => sectionScores.reduce((prev, cur) => prev + (cur.score + 2), 0);

        this._envScore = calcScore(envScores);
        this._cultureScore = calcScore(cultureScores);
        this._healthcareScore = calcScore(healthcareScores);
        this._climateScore = calcScore(climateScores);
        this._healthScore = calcScore(healthScores);

        // tslint:disable-next-line
        console.log(`max score: ${this._maxScore}`);
        console.log(`env ${this._envScore}, culture ${this._cultureScore}, healthcare ${this._healthcareScore}, climate ${this._climateScore}, health ${this._healthScore}`);

        // submit scores
        const { region, character } = props;
        const submittedScores = {
            session: Scores.sessionId,
            region: RegionData.get(region).name,
            character: CharacterData.get(region, character).name,
            answers: Scores.getAllScores(),
            outcome: {
                cultural: `${this._cultureScore}`,
                healthcare: `${this._healthcareScore}`,
                climate: `${this._climateScore}`,
                environment: `${this._envScore}`,
                health: `${this._healthScore}`
            }
        };
        Http.request({
            url: "/api/scores/submit",
            method: "POST",
            headerParams: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(submittedScores)
        })
            .then(() => {
                // tslint:disable-next-line
                console.log("scores submitted");
                // tslint:disable-next-line
                console.log(submittedScores);
            });
    }

    public render() {
        const { region, character } = this.props;
        const characterData = CharacterData.get(region, character);

        const getColor = (factor: number) => {
            if (this._slider) {
                return this._slider.getColor(factor);
            }
            return "red";
        };

        return (
            <div
                className="fadeIn"
                ref={e => this._root = e as HTMLDivElement}
                style={{
                    textAlign: "center",
                    padding: "32px",
                    width: "calc(100% - 64px)",
                    position: "relative"
                }}
            >
                <div>
                    <img
                        src={characterData.iconOutcome}
                        style={{
                            height: "25vh"
                        }}
                    />
                </div>
                <div
                    style={{
                        padding: "40px"
                    }}
                >
                    <img
                        src="/public/Header.svg"
                    />
                </div>
                <div
                    style={{
                        fontSize: "30px",
                    }}
                >
                    The Story of {characterData.name}'s Food Choices
                </div>
                <div
                    style={{
                        maxWidth: "600px",
                        margin: "0 auto",
                        padding: "20px"
                    }}
                >
                    {characterData.name}'s diet can have an impact on {characterData.possessivePronoun} health,
                    on the cost of {characterData.possessivePronoun} country's national healthcare system,
                    on the environment, on climate change and even on culture.
                    Let's see what happens when {characterData.name} makes your food choices.
                </div>
                <div
                    style={{
                        maxWidth: "600px",
                        margin: "0 auto",
                        marginTop: "30px"
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center"
                        }}
                    >
                        <SlideIndicator
                            ref={e => this._slider = e as SlideIndicator}
                            low={{
                                value: 0
                            }}
                            mid={{
                                value: 50
                            }}
                            high={{
                                value: 100
                            }}
                            current={(() => {
                                const averageScore = (this._envScore
                                    + this._cultureScore
                                    + this._healthcareScore
                                    + this._climateScore
                                    + this._healthScore) / 5;
                                const totalScore = (averageScore / this._maxScore) * 100;
                                return totalScore;
                            })()}
                            backgroundColor="#D2E3FC"
                            color={{
                                property: "backgroundImage",
                                value: "linear-gradient(to right, red, yellow, green)"
                            }}
                            showValues={false}
                            styleOverride={{
                                height: "3vw",
                                maxHeight: "30px"
                            }}
                            globalGradient={true}
                        />
                        {/* <div>
                            <div
                                className="clickable"
                                style={{
                                    width: "48px",
                                    height: "48px",
                                    backgroundColor: "red",
                                    borderRadius: "50%",
                                    cursor: "pointer",
                                    display: "grid",
                                    alignItems: "center",
                                    color: "white",
                                    fontSize: "22px",
                                    marginLeft: "40px"
                                }}
                            >
                                <div>
                                    ?
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        maxWidth: "1000px",
                        margin: "0 auto",
                        marginTop: "60px",
                        marginBottom: "60px"
                    }}
                >
                    <div>
                        <img
                            src="/public/outcome/impacts.svg"
                        />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                            alignItems: "center",
                            width: "100%"
                        }}
                    >
                        <OutcomeScore
                            icon="/public/outcome/Health.svg"
                            description="Personal Health"
                            score={this._healthScore}
                            maxScore={this._maxScore}
                            getColor={getColor}
                            id={0}
                            color={Private.outcomeInfo[OutcomeType.Health].color}
                        />
                        <OutcomeScore
                            icon="/public/outcome/Healthcare.svg"
                            description="National Healthcare"
                            score={this._healthcareScore}
                            maxScore={this._maxScore}
                            getColor={getColor}
                            id={1}
                            color={Private.outcomeInfo[OutcomeType.Healthcare].color}
                        />
                        <OutcomeScore
                            icon="/public/outcome/Environment.svg"
                            description="Environment"
                            score={this._envScore}
                            maxScore={this._maxScore}
                            getColor={getColor}
                            id={2}
                            color={Private.outcomeInfo[OutcomeType.Environment].color}
                        />
                        <OutcomeScore
                            icon="/public/outcome/Climate Change.svg"
                            description="Climate"
                            score={this._climateScore}
                            maxScore={this._maxScore}
                            getColor={getColor}
                            id={3}
                            color={Private.outcomeInfo[OutcomeType.Climate].color}
                        />
                        <OutcomeScore
                            icon="/public/outcome/Culture.svg"
                            description="Culture"
                            score={this._cultureScore}
                            maxScore={this._maxScore}
                            getColor={getColor}
                            id={4}
                            color={Private.outcomeInfo[OutcomeType.Culture].color}
                        />
                    </div>
                </div>
                {
                    this._outcomes.map((o, i) => {

                        const randoms: Array<[OutcomeType, string]> = [
                            [
                                OutcomeType.Healthcare,
                                "Whole grains and diabetes"
                            ],
                            [
                                OutcomeType.Environment,
                                "Pesticides"
                            ],
                            [
                                OutcomeType.Climate,
                                "Green House Gas"
                            ],
                            [
                                OutcomeType.Culture,
                                "Food miles"
                            ],
                            [
                                OutcomeType.Health,
                                "Diet and Obesity"
                            ]
                        ];

                        const random = randoms[Math.min(Math.floor(Math.random() * randoms.length), randoms.length - 1)];

                        // tslint:disable-next-line
                        const info = Private.outcomeInfo[o.type ?? random[0]];
                        const buttonClass = `${info.name.toLowerCase()}-outcome`;                        

                        return (
                            <OutcomeRow
                                key={i}
                                icon={o.icon}
                                description={o.outcome}
                                caption={`Learn about ${o.desc ?? random[1]}`}
                                // tslint:disable-next-line
                                backgroundColor={Private.outcomeInfo[o.type ?? random[0]].bgColor}
                                // tslint:disable-next-line
                                buttonClass={buttonClass}
                                // backgroundColor="#EFF3EC"
                                // buttonClass="climate-outcome"
                                // tslint:disable-next-line
                                onClicked={() => this.onOutcomeClicked(
                                    info.displayName ?? info.name,
                                    o.desc ?? random[1],
                                    buttonClass,
                                    o.link
                                )}
                                // tslint:disable-next-line
                                outcomeIcon={`/public/outcome/${info.displayName ?? info.name}.svg`}
                            />
                        );
                    })
                }                           
                <div
                    style={{
                        marginTop: "20px"
                    }}
                >
                    <Button
                        className="button"
                        color="primary"
                        variant="contained"
                        style={{
                            borderRadius: "40px",
                            padding: "16px",
                            margin: "8px",
                        }}
                        onClick={() => {
                            Utils.fadeOut(this._root)
                                .then(() => {
                                    this.props.onReplay();
                                });
                        }}
                    >
                        Play Again
                    </Button>
                </div>
                <OutcomeDialog
                    ref={e => this._outcomeDialog = e as OutcomeDialog}
                    info={this.state.dialogInfo}
                    onClosed={() => this.setState({ dialogInfo: undefined })}
                />
            </div>
        );
    }

    private onOutcomeClicked(type: string, desc: string, buttonClass: string, link?: string) {
        Scores.addOutcomeClicked(
            `${type} ${desc}`
        );
        this.setState({
            dialogInfo: {
                screenText: <div />,
                link
            }
        });    
    }
}
