
import * as React from "react";
import { Intro } from "./intro/Intro";
import { RegionSelect } from "./region/RegionSelect";
import * as types from "./Types";
import { CharacterSelect } from "./character/CharacterSelect";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { CanadaStory } from "./story/CanadaStory";
import { Outcome } from "./outcome/Outcome";
import { Header } from "./common/Header";
import { LoadingIndicator } from "./LoadingIndicator";
import { Preloading } from "./Preloading";
import { OutcomeIntro } from "./outcome/OutcomeIntro";
import { GameletType } from "./Types";
import { BrazilStory } from "./story/BrazilStory";
import { NordicsStory } from "./story/NordicsStory";
import { IndonesiaStory } from "./story/IndonesiaStory";
import { Config } from "./Config";
import "./common/common.css";
import { CanadaQuestions } from "./score/ScoreTypes";
import { Scores } from "./Scores";
import { Http } from "./common/HTTP";

import * as uuid from "uuid";
import { Utils } from "./common/Utils";
import { Intro2 } from "./intro/Intro2";

interface IAppState {
    isPreloading: boolean;
    fontsPreloaded: boolean;
    section: types.Section;
    region?: types.Region;
    character?: types.Character;
    gamelet: types.GameletType;
    gameletSection: number;
    gameletSectionIntro: boolean;
    rotateScreenPrompt: boolean;
}

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: "#ddd"            
        },
        primary: {
            main: "#1A73E8"
        }
    }
});

export class App extends React.Component<{}, IAppState> {

    private _pingTimer: any;
    private _topWindowSize?: [number, number];

    constructor(props: {}) {
        super(props);

        // tslint:disable-next-line
        console.log(process.env.NODE_ENV);

        if (process.env.NODE_ENV === "development") {
            this.state = { 
                isPreloading: true,
                fontsPreloaded: false,
                section: types.Section.Outcome,
                region: types.Region.Canada,
                character: types.CanadaCharacters.Sylvia,
                gamelet: types.GameletType.Slider,
                gameletSection: 0,
                gameletSectionIntro: false,
                rotateScreenPrompt: false
            };

            /*Scores.register(CanadaQuestions.Breakfast, 0);
            Scores.register(CanadaQuestions.Snacks1, 0);
            Scores.register(CanadaQuestions.DinnerProtein, 0);
            Scores.register(CanadaQuestions.DinnerGrains, 0);
            Scores.register(CanadaQuestions.DinnerVeggies, 0);
            Scores.register(CanadaQuestions.Lunch1, 0);*/
            
        } else {
            this.state = {
                isPreloading: true,
                fontsPreloaded: false,
                section: types.Section.Intro,
                gamelet: types.GameletType.Time,
                gameletSection: 0,
                gameletSectionIntro: true,
                rotateScreenPrompt: false
            };
        }
    }

    public componentDidMount() {
        if (process.env.NODE_ENV === "development") {
            Preloading.preload1()
                .then(() => Preloading.preload2(
                    this.state.region as types.Region,
                    this.state.character as types.Character
                ))
                .then(() => Preloading.preload3(
                    this.state.region as types.Region,
                    this.state.character as types.Character
                ))
                .then(() => Preloading.preload4())
                .then(() => this.setState({ 
                    fontsPreloaded: true,
                    isPreloading: false 
                }));
        } else {
            Preloading.preload1().then(() => this.setState({ 
                fontsPreloaded: true,
                isPreloading: false 
            }));
        }

        this.checkIfPortrait();
        this.onResize = this.onResize.bind(this);
        window.addEventListener("resize", this.onResize);        

        this.onMessage = this.onMessage.bind(this);
        // window.addEventListener("message", this.onMessage, false);
    }

    public componentWillUnmount() {
        window.removeEventListener("resize", this.onResize);
        // window.removeEventListener("message", this.onMessage);
        if (this._pingTimer) {
            clearInterval(this._pingTimer);
            delete this._pingTimer;
        }
    }

    public render() {
        
        const header = () => {
            const { fontsPreloaded } = this.state;
            if (!fontsPreloaded) {
                return null;
            }

            return (
                <div
                    style={{
                        height: "40px",
                        width: `calc(100% - ${Config.headerHeight}px)`,
                        padding: "20px 40px 20px 40px",
                        display: "flex",
                        justifyContent: "space-between"
                    }}
                >
                    <div
                        className="header-link"
                        style={{
                            fontFamily: "Work Sans",
                            lineHeight: "40px",
                            fontSize: "24px",
                            fontWeight: "bold"
                        }}
                        onClick={() => window.location.href = " https://www.greenbrownblue.com/food-choices-for-a-healthy-planet/"}
                    >
                        Food Choices for a Healthy Planet
                    </div>
                    <div>
                        <img 
                            style={{
                                cursor: "pointer",
                                maxWidth: "100px",
                                transform: "translate(0px, 4px)"
                            }}
                            src="/public/greenbrownblue_logo-1.svg" 
                            onClick={() => window.location.href = "https://www.greenbrownblue.com/"}
                        />
                    </div>
                </div>
            );
        };

        const { isPreloading } = this.state;
        return (
            <MuiThemeProvider theme={theme}>
                <div
                    style={{
                        width: "100%",
                        height: "100%"
                    }}
                >
                    {/* {header()} */}
                    {
                        isPreloading
                        &&
                        <LoadingIndicator />
                    }
                    <div
                        style={{
                            height: `calc(100% - ${Config.headerHeight}px)`,
                            position: "relative",
                        }}
                    >
                        {(() => {
                            if (!isPreloading) {
                                const isIntro = this.state.section === types.Section.Intro;
                                const hideOverflow = this.state.rotateScreenPrompt || isIntro;
                                return (
                                    <div
                                        className="unselectable"
                                        style={{
                                            height: "100%",
                                            overflow: hideOverflow ? "hidden" : undefined,
                                            position: "relative",
                                            WebkitOverflowScrolling: "touch"
                                        }}
                                    >
                                        {this.renderInternal()}
                                    </div>
                                );
                            }
                        })()}
                        {
                            this.state.section !== types.Section.Intro
                            &&
                            <Header
                                section={this.state.section}
                                region={this.state.region}
                                character={this.state.character}
                                gamelet={this.state.gamelet}
                                gameletIntro={this.state.gameletSectionIntro}
                            />
                        }
                        <div                            
                            style={{
                                position: "absolute",
                                width: "100vw",
                                height: "100vh",
                                left: "0px",
                                top: "0px",
                                backgroundColor: "black",
                                display: this.state.rotateScreenPrompt ? "grid" : "none",
                                alignItems: "center",
                                textAlign: "center"
                            }}
                        >
                            <div>
                                <div>
                                    <img src="/public/rotate-device.png" />
                                </div>
                                <div
                                    style={{
                                        color: "white",
                                        fontSize: "1.8vh",
                                        padding: "20px"
                                    }}
                                >
                                    Please rotate your device
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }

    private renderInternal() {

        const onGameletsCompleted = () => {
            this.setState({
                section: types.Section.OutcomeIntro,
                isPreloading: true
            });
            Preloading.preload4().then(() => this.setState({ isPreloading: false }));
        };

        const { section } = this.state;
        switch (section) {
            case types.Section.Intro:
                return (
                    <Intro2
                        onPlay={() => {
                            // tslint:disable-next-line
                            console.log("clearing scores");
                            Scores.clear();
                            if (this._pingTimer) {
                                clearInterval(this._pingTimer);
                                delete this._pingTimer;
                            }

                            Scores.sessionId = uuid.v1();
                            Http.request({
                                url: `/api/scores/init/${Scores.sessionId}/${Date.now()}`,
                                method: "GET"
                            })
                                .then(() => {
                                    // tslint:disable-next-line
                                    console.log(`session ${Scores.sessionId} started`);
                                    this._pingTimer = setInterval(
                                        () => {
                                            Http.request({
                                                url: `/api/scores/ping/${Scores.sessionId}/${Date.now()}`,
                                                method: "GET"
                                            });
                                        },
                                        10000
                                    );
                                });

                            this.setState({ section: types.Section.RegionSelect });
                        }}
                    />
                );
            case types.Section.RegionSelect:
                return (
                    <RegionSelect
                        onSelect={region => this.setState({
                            region,
                            section: types.Section.CharacterSelect
                        })}
                        selection={this.state.region}
                    />
                );
            case types.Section.CharacterSelect:
                return (
                    <CharacterSelect
                        region={this.state.region as types.Region}
                        onSelect={character => {
                            this.setState({
                                character,
                                section: types.Section.Story,
                                isPreloading: true
                            });
                            Preloading.preload2(this.state.region as types.Region, character)
                                .then(() => this.setState({ isPreloading: false }));
                        }}
                        onBack={() => this.setState({ section: types.Section.RegionSelect })}
                    />
                );
            case types.Section.Story:
                const { gamelet, gameletSection } = this.state;
                switch (this.state.region) {
                    case types.Region.Canada:
                        return (
                            <CanadaStory
                                region={this.state.region as types.Region}
                                character={this.state.character as types.CanadaCharacters}
                                gamelet={gamelet}
                                section={this.state.gameletSection}
                                intro={this.state.gameletSectionIntro}
                                onIntroFinished={() => this.setState({ gameletSectionIntro: false })}
                                onProgress={() => {
                                    switch (gamelet) {
                                        case types.GameletType.Time:
                                            this.setState({ gamelet: types.GameletType.MCQ });
                                            break;
                                        case types.GameletType.MCQ:
                                            this.setState({
                                                gameletSectionIntro: true,
                                                gameletSection: gameletSection + 1,
                                                gamelet: types.GameletType.Lunch
                                            });
                                            break;
                                        case types.GameletType.Lunch:
                                            this.setState({ gamelet: types.GameletType.Stacking });
                                            break;
                                        case types.GameletType.Stacking:
                                            this.setState({ isPreloading: true });
                                            Preloading.preload3(
                                                this.state.region as types.Region,
                                                this.state.character as types.CanadaCharacters
                                            ).then(() => this.setState({
                                                isPreloading: false,
                                                gameletSectionIntro: true,
                                                gameletSection: gameletSection + 1,
                                                gamelet: types.GameletType.Slider
                                            }));
                                            break;
                                        case types.GameletType.Slider:
                                            this.setState({
                                                gameletSectionIntro: true,
                                                gameletSection: gameletSection + 1,
                                                gamelet: types.GameletType.YesNoSocial
                                            });
                                            break;
                                        case types.GameletType.YesNoSocial:
                                            this.setState({ gamelet: types.GameletType.Plate });
                                            break;
                                        case types.GameletType.Plate:
                                            onGameletsCompleted();
                                            break;
                                    }
                                }}
                            />
                        );
                    case types.Region.Brazil:
                        return (
                            <BrazilStory
                                region={this.state.region as types.Region}
                                character={this.state.character as types.BrazilCharacters}
                                gamelet={gamelet}
                                section={this.state.gameletSection}
                                intro={this.state.gameletSectionIntro}
                                onIntroFinished={() => this.setState({ gameletSectionIntro: false })}
                                onProgress={() => {
                                    switch (gamelet) {
                                        case types.GameletType.Time:
                                            this.setState({ gamelet: types.GameletType.MCQ });
                                            break;
                                        case types.GameletType.MCQ:
                                            this.setState({
                                                gameletSectionIntro: true,
                                                gameletSection: gameletSection + 1,
                                                gamelet: types.GameletType.Lunch
                                            });
                                            break;
                                        case types.GameletType.Lunch:
                                            this.setState({ gamelet: types.GameletType.Stacking });
                                            break;
                                        case types.GameletType.Stacking:
                                            this.setState({ isPreloading: true });
                                            Preloading.preload3(
                                                this.state.region as types.Region,
                                                this.state.character as types.CanadaCharacters
                                            ).then(() => this.setState({
                                                isPreloading: false,
                                                gameletSectionIntro: true,
                                                gameletSection: gameletSection + 1,
                                                gamelet: types.GameletType.Slider
                                            }));
                                            break;
                                        case types.GameletType.Slider:
                                            this.setState({
                                                gameletSectionIntro: true,
                                                gameletSection: gameletSection + 1,
                                                gamelet: types.GameletType.YesNoSocial
                                            });
                                            break;
                                        case types.GameletType.YesNoSocial:
                                            // if (this.state.character === types.BrazilCharacters.Maria) {
                                            //     // No plate game for Maria
                                            //     onGameletsCompleted();
                                            // } else {
                                            this.setState({ gamelet: types.GameletType.Plate });
                                            // }
                                            break;
                                        case types.GameletType.Plate:
                                            onGameletsCompleted();
                                            break;
                                    }
                                }}
                            />
                        );
                    case types.Region.Nordics:
                        return (
                            <NordicsStory
                                region={this.state.region as types.Region}
                                character={this.state.character as types.NordicCharacters}
                                gamelet={gamelet}
                                section={this.state.gameletSection}
                                intro={this.state.gameletSectionIntro}
                                onIntroFinished={() => this.setState({ gameletSectionIntro: false })}
                                onProgress={() => {
                                    switch (gamelet) {
                                        case types.GameletType.Time:
                                            this.setState({ gamelet: types.GameletType.MCQ });
                                            break;
                                        case types.GameletType.MCQ:
                                            this.setState({
                                                gameletSectionIntro: true,
                                                gameletSection: gameletSection + 1,
                                                gamelet: GameletType.Lunch
                                            });
                                            break;
                                        case types.GameletType.Lunch:
                                            this.setState({ isPreloading: true });
                                            Preloading.preload3(
                                                this.state.region as types.Region,
                                                this.state.character as types.NordicCharacters
                                            ).then(() => this.setState({
                                                isPreloading: false,
                                                gameletSectionIntro: true,
                                                gameletSection: gameletSection + 1,
                                                gamelet: types.GameletType.YesNoSocial
                                            }));
                                            break;
                                        // case types.GameletType.Stacking:
                                        //     this.setState({ isPreloading: true });
                                        //     Preloading.preload3(
                                        //         this.state.region as types.Region,
                                        //         this.state.character as types.CanadaCharacters
                                        //     ).then(() => this.setState({
                                        //         isPreloading: false,
                                        //         gameletSectionIntro: true,
                                        //         gameletSection: gameletSection + 1,
                                        //         gamelet: gamelet + 1
                                        //     }));
                                        //     break;
                                        // case types.GameletType.Slider:
                                        //     this.setState({
                                        //         gameletSectionIntro: true,
                                        //         gameletSection: gameletSection + 1,
                                        //         gamelet: gamelet + 1
                                        //     });
                                        //     break;
                                        case types.GameletType.YesNoSocial:
                                            this.setState({ gamelet: types.GameletType.Plate });
                                            break;
                                        case types.GameletType.Plate:
                                            onGameletsCompleted();
                                            break;
                                    }
                                }}
                            />
                        );
                    case types.Region.Indonesia:
                        return (
                            <IndonesiaStory
                                region={this.state.region as types.Region}
                                character={this.state.character as types.IndonesiaCharacters}
                                gamelet={gamelet}
                                section={this.state.gameletSection}
                                intro={this.state.gameletSectionIntro}
                                onIntroFinished={() => this.setState({ gameletSectionIntro: false })}
                                onProgress={() => {
                                    switch (gamelet) {
                                        // Breakfast
                                        case GameletType.Time:
                                            this.setState({ 
                                                gamelet: GameletType.MCQ,
                                                gameletSectionIntro: true,
                                                gameletSection: gameletSection + 1
                                            });
                                            break;
                                        // Snacks
                                        case GameletType.MCQ:
                                            this.setState({                 
                                                gameletSectionIntro: true,
                                                gameletSection: gameletSection + 1,                               
                                                gamelet: GameletType.Lunch
                                            });
                                            break;
                                        // Lunch
                                        case GameletType.Lunch:
                                            this.setState({ isPreloading: true });
                                            Preloading.preload3(
                                                this.state.region as types.Region,
                                                this.state.character as types.IndonesiaCharacters
                                            ).then(() => this.setState({
                                                isPreloading: false,
                                                gamelet: GameletType.LunchSnack
                                            }));
                                            break;
                                        // Lunch snack
                                        case GameletType.LunchSnack:
                                            this.setState({
                                                gameletSectionIntro: true,
                                                gameletSection: gameletSection + 1,
                                                gamelet: GameletType.Slider
                                            });
                                            break;
                                        // Groceries
                                        case GameletType.Slider:
                                            this.setState({
                                                gamelet: GameletType.GroceriesShopping,
                                            });
                                            break;
                                        // Groceries shopping
                                        case GameletType.GroceriesShopping:
                                            this.setState({
                                                gamelet: GameletType.FruitShopping,
                                            });
                                            break;
                                        case GameletType.FruitShopping:
                                            this.setState({
                                                gamelet: GameletType.Stacking,
                                                gameletSectionIntro: true,
                                                gameletSection: gameletSection + 1
                                            });
                                            break;
                                        // case types.GameletType.YesNoSocial:
                                        //     this.setState({ gamelet: gamelet + 1 });
                                        //     break;
                                        // Plate
                                        // Stacking
                                        case GameletType.Stacking:
                                            this.setState({
                                                gamelet: GameletType.Plate
                                            });
                                            break;
                                        case GameletType.Plate:
                                            this.setState({
                                                section: types.Section.OutcomeIntro,
                                                isPreloading: true
                                            });
                                            Preloading.preload4().then(() => this.setState({ isPreloading: false }));
                                            break;
                                    }
                                }}
                            />
                        );
                }
                return null;
            case types.Section.OutcomeIntro:
                return (
                    <OutcomeIntro
                        onAccept={() => {
                            this.setState({
                                section: types.Section.Outcome
                            });
                        }}
                    />
                );
            case types.Section.Outcome:
                return (
                    <Outcome
                        region={this.state.region as types.Region}
                        character={this.state.character as types.Character}
                        onReplay={() => {
                            this.setState({
                                section: types.Section.Intro,
                                gamelet: 0,
                                gameletSection: 0,
                                gameletSectionIntro: true,
                                region: undefined,
                                character: undefined
                            });
                        }}
                    />
                );
        }
    }

    private onResize() {
        this.checkIfPortrait();
    }

    private checkIfPortrait() {
        const [width, height] = /*this._topWindowSize ??*/ [window.innerWidth, window.innerHeight];
        const isPortrait = height > width;
        this.setState({ rotateScreenPrompt: isPortrait });
    }

    private onMessage(event: MessageEvent) {
        // this._topWindowSize = JSON.parse(event.data);
        // this.onResize();
    }
}
