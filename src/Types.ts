
export enum Section {
    Intro,
    RegionSelect,
    CharacterSelect,
    Story,
    OutcomeIntro,
    Outcome
}

export enum Region {
    Canada,
    Brazil,
    Indonesia,
    Nordics
}

export enum CanadaCharacters {
    Sylvia,
    Esther,
    Hardeep
}

export enum BrazilCharacters {
    Gabriel,
    Sandra,
    Maria
}

export enum IndonesiaCharacters {
    Wulandari,
    Neesa,
    Hassan
}

export enum NordicCharacters {
    Elias,
    Amena,
    Lisen
}

export enum OutcomeType {
    Health,
    Healthcare,
    Climate,
    Environment,
    Culture
}

export type Character = CanadaCharacters | BrazilCharacters | IndonesiaCharacters | NordicCharacters;

export enum GameletType {
    Time,
    MCQ,
    Lunch,
    Stacking,
    Slider,
    YesNoSocial,
    Plate,
    // Specific to certain regions
    FruitShopping,
    LunchSnack
}

export interface ICharacterData {
    name: string;
    possessivePronoun: string;
    subjectPronoun: string;    
    selfPronoun: string;
    objectPronoun: string;
    iconMain: string;
    iconSecondary: string;
    iconOutcome: string;
    description?: string;
    age?: number;
    occupation?: string;
    attributes?: {
        access: number;
        security: number;
        literacy: number;
    };
}

export interface IRegionData {
    name: string;
    description: JSX.Element;
    flag: string | string[];
    globe: string;
    background: string;
    backgroundColor: string;
}

export interface IStoryData {
    icons: string[];
    message: string;
    backgroundColor: string;
}

export interface IChoiceItem {
    icon: string;
    description: string;
    easterEgg?: string;
    easterEggCanContinue?: boolean;
    score?: IScore;
}

export interface IPoint {
    x: number;
    y: number;
}

interface ISvgInfo {
    content: string;
    offset: IPoint;
}

export interface IPlateItem {
    containerUrl: string;
    foodInfo: ISvgInfo;
    descriptionInfo: ISvgInfo;
    easterEgg?: string;
    containerScale?: number;
    scale?: number;
    plateOffset?: IPoint;
    plateScale?: number;
}

export interface IScore {
    Culture: number;
    Healthcare: number;
    Climate: number;
    Environment: number;
    Health: number;
}

export interface IScoreData {
    outcome?: string;
    scores: IScore;
    icon?: string;
    // TODO implement
    screenText?: string | JSX.Element;
    links?: string[];
    outcomeType?: OutcomeType;
    outcomeDesc?: string;
}

export interface IEasterEgg {
    backgroundColor?: string;
    icon?: string;
    message: string;
    pickMessage?: string;
    canContinue?: boolean;
}
