
import * as React from "react";
import { Region, IRegionData } from "../Types";

namespace Private {

    const backgroundColor = "#8ccf99";

    // tslint:disable:max-line-length
    export const data: { [region: string]: IRegionData } = {
        [Region.Canada]: {
            name: "Canada",
            description: (
                <div>                    
                    Canadians come from all across the globe, and bring along their unique habits and attitudes towards food!
                    In 2019, Canada released a new food guide, which promotes greater consumption of vegetables and fruits,
                    whole grains, and plant-based proteins and a decrease in consumption of highly processed foods.
                    It is a significant shift for Canadians, as the vast majority of them eat unhealthy diets,
                    made up largely of ‘ultra-processed' foods.
                </div>
            ),
            flag: "/public/region/canada/flag.svg",
            globe: "/public/region/canada/globe.svg",
            background: "/public/region/Canada.svg",
            backgroundColor
        },
        [Region.Nordics]: {
            name: "Nordics",
            description: (
                <div>                    
                    Imagine climatic conditions with drastic seasonal changes; long winters with frost and snow combined with long and warm summer days: only the most well adapted and resilient of plants and wild animals survive. These are the conditions facing the farmers in the Nordic region (Finland, Sweden, Denmark, Norway and Iceland). Most of the Nordic diet is made up of potatoes, root vegetables, fish and shellfish, meat, berries, fruits (such as apples and pears). Predominantly plant-based and locally sourced, the Nordic diet encourages more sustainable production and it's 10 basic principles can easily be adapted to other food cultures. Compared to an average Western diet, it contains less sugar and fat but twice the fiber and seafood.
                </div>
            ),
            flag: [
                "/public/region/nordics/flag1.svg",
                "/public/region/nordics/flag2.svg",
                "/public/region/nordics/flag3.svg",
                "/public/region/nordics/flag4.svg",
                "/public/region/nordics/flag5.svg",
                "/public/region/nordics/Faroe-Islands-flag.svg",
                "/public/region/nordics/Aaland-flag.svg",
                "/public/region/nordics/Greenland-flag.svg"
            ],
            globe: "/public/region/nordics/globe.svg",
            background: "/public/region/Nordics.svg",
            backgroundColor
        },
        [Region.Brazil]: {
            name: "Brazil",
            description: (
                <div>
                    Brazil is a middle-income country where buying and cooking with fresh foods are still less expensive than buying/eating ultra-processed foods. In 2014, Brazil released a new food guide with this golden rule: “always prefer natural or minimally processed foods and freshly made dishes and meals to ultra-processed foods.” In other words, opt for water, milk, and fruits instead of soft drinks, dairy drinks, and biscuits; do not replace freshly prepared dishes with products that do not require culinary preparation; and stick to homemade desserts, avoiding industrialized ones. The results of these guidelines have encouraged Brazilians to maintain their traditional diets and avoid ultra-processed foods.
                </div>
            ),
            flag: "/public/region/brazil/flag.svg",
            globe: "/public/region/brazil/globe.svg",
            background: "/public/region/Brazil.svg",
            backgroundColor
        },
        [Region.Indonesia]: {
            name: "Indonesia",
            description: (
                <div>
                    Indonesia is a diverse country made up of over 17,000 islands and 250 million people. It is considered a middle-income country, but for a large part of the population, the dietary patterns remain far more typical of a low-income country with high intake of a single staple (rice) and low overall animal-source food (especially meat) consumption; however this is not so for all Indonesians. Indonesia suffers from a double burden of undernutrition and overweight/obesity (with the latter mainly a problem of the rich at present). As Indonesia continues to develop and grow, there is an opportunity to provide all Indonesians access to a diverse and high quality foods within a sustainable food system and to encourage them to make healthy choices. 
                </div>
            ),
            flag: "/public/region/indonesia/flag.svg",
            globe: "/public/region/indonesia/globe.svg",
            background: "/public/region/Indonesia.svg",
            backgroundColor
        }
    };
}

export class RegionData {
    public static get(region: Region): IRegionData {
        return Private.data[region];
    }

    public static getAll() {
        return Object.entries(Private.data);
    }
}
