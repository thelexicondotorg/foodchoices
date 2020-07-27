import * as React from "react";
import { IChoiceItem, Character } from "../../Types";

// tslint:disable:max-line-length

namespace Private {
  export const questions: IChoiceItem[][] = [
    // Wulandari
    [
      {
        icon: "/public/food/indonesia/groceries-shopping/W_C_CHOICE_1.svg",
        description: "",
        descriptionElem: (
          <React.Fragment>
            <div>
              4 eggs<br />4 instant noodle packets<br />chili sauce
                        <br />
              <b>(38,000 rpa)</b>
            </div>
            <div style={{ paddingLeft: "8px" }}>
              250 g. oil<br />cabbage, tomatoes<br />100g milk powder
                      </div>
          </React.Fragment>
        )
      },
      {
        icon: "/public/food/indonesia/groceries-shopping/W_C_CHOICE_2.svg",
        description: "",
        descriptionElem: (
          <div>
            <div>
              250 g. beef<br />4 instant noodle packets<br />250 gr. oil, tomatoes<br />100 g. milk powder<br />250 g. sugar<br />
              <b>(53,000 rpa)</b>
            </div>
          </div>
        ),
        easterEgg: "Wulandari doesn't have enough money"
      },
      {
        icon: "/public/food/indonesia/groceries-shopping/W_C_CHOICE_3.svg",
        description: "",
        descriptionElem: (
          <React.Fragment>
            <div>
              0.5 kg. fish<br />0.5 kg. rice<br />spinach<br />small satchet of shrimp paste
                          <br />
              <b>(32,000 rpa)</b>
            </div>
            <div style={{ paddingLeft: "8px" }}>
              250 g. oil<br />tomatoes<br />100 g. sugar<br />half portion (50g.) of milk powder
                        </div>
          </React.Fragment>
        )
      },
      {
        icon: "/public/food/indonesia/groceries-shopping/W_C_CHOICE_4.svg",
        description: "",
        descriptionElem: (
          <React.Fragment>
            <div>
              500 g. tempeh<br />250 g. yams<br />100 g. oil<br />soy sauce
                          <br />
              <b>(23,000 rpa)</b>
            </div>
            <div style={{ paddingLeft: "8px" }}>
              tomatoes<br />cabbage<br />100 g. milk
              </div>
          </React.Fragment>
        )
      }
    ],
    // Neesa
    [
      {
        icon: "/public/food/indonesia/groceries-shopping/NEESA_CHOICE_1.svg",
        description: "",
        descriptionElem: (
          <React.Fragment>
            <div>
              250 g. chicken<br />1 kg. rice<br />oil<br />8 eggs
                          <br />
              <b>(46,500 rpa)</b>
            </div>
            <div style={{ paddingLeft: "8px" }}>
              250 g. sugar<br />chili sauce<br />cabbage<br />tomatoes
                        </div>
          </React.Fragment>
        )
      },
      {
        icon: "/public/food/indonesia/groceries-shopping/NEESA_CHOICE_2.svg",
        description: "",
        descriptionElem: (
          <React.Fragment>
            <div>
              250 g. beef<br />4 pkts. noodles<br />1 L. milk<br />2 pkts. oil
                          <br />
              <b>(72,600 rpa)</b>
            </div>
            <div style={{ paddingLeft: "8px" }}>
              4 eggs<br />250 g. sugar<br />tomatoes<br />soy sauce
                        </div>
          </React.Fragment>
        )
      },
      {
        icon: "/public/food/indonesia/groceries-shopping/NEESA_CHOICE_3.svg",
        description: "",
        descriptionElem: (
          <React.Fragment>
            <div>
              1/2 kg fish<br />1 kg. rice<br />1 L. milk<br />yams
                          <br />
              <b>(46, 000 rpa)</b>
            </div>
            <div style={{ paddingLeft: "8px" }}>
              cabbage<br />tomatoes<br />100 g. sugar<br />shrimp paste
                        </div>
          </React.Fragment>
        )
      },
      {
        icon: "/public/food/indonesia/groceries-shopping/NEESA_CHOICE_4.svg",
        description: "",
        descriptionElem: (
          <React.Fragment>
            <div>
              250 g. tofu<br />1 kg. rice<br />4 eggs<br />
              <b>(28,000 rpa)</b>
            </div>
            <div style={{ paddingLeft: "8px" }}>
              yams<br />spinach<br />tomatoes<br />250 g. sugar
            </div>
          </React.Fragment>
        )
      }
    ],
    // Hassan
    [
      {
        icon: "/public/food/indonesia/groceries-shopping/HASSAN_CHOICE_1.svg",
        description: "",
        descriptionElem: (
          <React.Fragment>
            <div>
              250 g. chicken<br />1 kg. rice<br />oil<br />8 eggs<br />
              <b>(46,500 rpa)</b>
            </div>
            <div style={{ paddingLeft: "8px" }}>
              250 g. sugar<br />chili sauce<br />cabbage<br />tomatoes
            </div>
          </React.Fragment>
        )
      },
      {
        icon: "/public/food/indonesia/groceries-shopping/HASSAN_CHOICE_2.svg",
        description: "",
        descriptionElem: (
          <React.Fragment>
            <div>
              250 g. beef<br />4 pkts. noodles<br />1 L. milk<br />2 pkts. oil<br />
              <b>(72,600 rpa)</b>
            </div>
            <div style={{ paddingLeft: "8px" }}>
              4 eggs<br />250 g. sugar<br />tomatoes<br />soy sauce
            </div>
           </React.Fragment>
        )
      },
      {
        icon: "/public/food/indonesia/groceries-shopping/HASSAN_CHOICE_3.svg",
        description: "",
        descriptionElem: (
          <React.Fragment>
            <div>
              1/2 kg fish<br />1 kg. rice<br />1 L. milk<br />yams<br />
              <b>(46, 000 rpa)</b>
            </div>
            <div style={{ paddingLeft: "8px" }}>
              cabbage<br />tomatoes<br />100 g. sugar<br />shrimp paste
            </div>
          </React.Fragment>
        )
      },
      {
        icon: "/public/food/indonesia/groceries-shopping/HASSAN_CHOICE_4.svg",
        description: "",
        descriptionElem: (
          <React.Fragment>
            <div>
              250 g. tofu<br />4 pkts<br />4 eggs<br />oil<br />yams<br />
              <b>(29,500 rpa)</b>
            </div>
            <div style={{ paddingLeft: "8px" }}>
              spinach<br />tomatoes<br />250 g. sugar
            </div>
          </React.Fragment>
        )
      }
    ]
  ];
}

export class GroceriesShoppingData {
  public static getQuestions(character: Character): IChoiceItem[] {
    return Private.questions[character];
  }
}
