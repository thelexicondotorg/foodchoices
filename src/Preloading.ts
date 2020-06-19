import { Images } from "./Images";
import { Fonts } from "./Fonts";
import { RegionData } from "./data/RegionData";
import { CharacterData } from "./data/CharacterData";
import { TimeData } from "./data/TimeData";
import { MCQData } from "./data/MCQData";
import { LunchData } from "./data/LunchData";
import { SliderData } from "./data/SliderData";
import { YesNoSocialData } from "./data/YesNoSocialData";
import { Region, Character } from "./Types";
import { PlateUtils } from "./gamelets/plate/PlateUtils";
import { LunchSnackData } from "./data/indonesia/LunchSnackData";
import { FruitShoppingData } from "./data/indonesia/FruitShoppingData";
import { StoryData } from "./data/StoryData";
import { GroceriesShoppingData } from "./data/indonesia/GroceriesShoppingData";
import { StackingData } from "./gamelets/stacking/StackingData";

export class Preloading {
    public static preload1() {        
        const regions = RegionData.getAll();
        let regionData = regions.reduce(
            (prev, [region, data]) => prev.concat([data.background, data.globe]), [] as string[]
        );

        regionData = regionData.concat(regions.reduce(
            (prev, [region, data]) => {
                if (Array.isArray(data.flag)) {
                    return prev.concat(data.flag);
                } else {
                    return prev.concat([data.flag]);
                }
            },
            [] as string[]
        ));

        const characters = CharacterData.getAll();
        const characterData = characters.reduce(
            (prev, [region, data]) => prev.concat(Array.from(new Set([
                data.iconMain, 
                data.iconSecondary, 
                data.iconOutcome
            ]))), [] as string[]
        );
        return Images.preload(
            [
                // Intro
                // "/public/intro/Logo.svg",
                // "/public/intro/Footer.svg",
                // "/public/intro/Girl.svg",
                // "/public/intro/Girl2.svg",
                // "/public/intro/Guy.svg",
                // "/public/intro/Madam.svg",
                // "/public/intro/Man.svg",
                // "/public/intro/Sylvia.svg",
                // "/public/intro/Woman.svg",
                // "/public/intro/Apple.svg",
                "/public/intro/title.svg",
                "/public/intro/foodplay.svg",
                "/public/intro/boy-intro.svg",
                "/public/intro/center-group.svg",
                "/public/intro/left-group.svg",
                "/public/intro/man-intro.svg",
                "/public/intro/play-button.svg",
                "/public/intro/right-group.svg",
                "/public/intro/sylvia-intro.svg",
                "/public/intro/woman-intro.svg",
                "/public/intro/woman2-intro.svg",
                "/public/intro/wulandari-intro.svg",

                // Character
                "/public/common/BalloonPink.svg",
                "/public/common/BalloonGreen.svg",
                "/public/common/BalloonYellow.svg",
                "/public/common/BalloonBlue.svg"
            ]
                .concat(regionData)
                .concat(characterData)
        )
            .then(() => Fonts.preload());
    }

    public static preload2(region: Region, character: Character) {
        return Images.preload([
            // Easter eggs
            "/public/story/ExclamationPoint.png",
            // Transitions
            ...StoryData.getIcons(),
            // Time
            ...TimeData.getQuestions(region, character).map(i => i.icon),
            // MCQ
            ...MCQData.getQuestions(region, character).reduce(
                (prev, cur) => prev.concat(cur.map(i => i.icon)),
                [] as string[]
            ),
            // Lunch
            ...LunchData.getQuestions(region, character).reduce(
                (prev, cur) => prev.concat(cur.map(i => i.icon)),
                [] as string[]
            ),
            // Stacking            
            // No icons
        ]);
    }

    public static preload3(region: Region, character: Character) {

        const customIndonesiaData: string[] = (() => {
            if (region === Region.Indonesia) {
                const lunchSnackData = LunchSnackData.getQuestions(character).reduce(
                    (prev, cur) => {
                        return prev.concat(cur.map(c => c.icon));
                    },
                    [] as string[]
                );               

                const groceryShopping = GroceriesShoppingData.getQuestions(character).map(c => c.icon);

                const fruitShoppingData = FruitShoppingData.getQuestions(character).reduce(
                    (prev, cur) => {
                        return prev.concat(cur.map(c => c.icon));
                    },
                    [] as string[]
                );
                return [...lunchSnackData, ...groceryShopping, ...fruitShoppingData];
            } else {
                return [];
            }
        })();        

        return Images.preload([
            // Slider
            "/public/gamelets/slider/cart.svg",
            "/public/gamelets/slider/cartpath.svg",
            ...customIndonesiaData,
            ...SliderData.getQuestions(region, character).map(i => i.icon),
            // YesNoSocial
            ...YesNoSocialData.getQuestions(region, character).map(i => i.icon),
            // Plate
            "/public/gamelets/plate/CheckMark.svg",
            "/public/gamelets/plate/BigPlate.svg",
            ...PlateUtils.getData(region, character).getItems().reduce(
                (prev, cur) => {
                    return prev.concat(
                        cur.reduce(
                            (prev2, cur2) => prev2.concat([cur2.foodInfo.content, cur2.containerUrl]),
                            [] as string[]
                        )
                    );
                },
                [] as string[]
            )
        ]);
    }

    public static preload4() {
        return Images.preload([
            "/public/outcome/Health.svg",
            "/public/outcome/Healthcare.svg",
            "/public/outcome/Environment.svg",
            "/public/outcome/Climate Change.svg",
            "/public/outcome/Culture.svg",
            "/public/outcome/impacts.svg",
            StackingData.getOutcomeIcon()
        ]);
    }
}
