
import * as React from "react";
import * as types from "../Types";
import "./region.css";
import { Utils } from "../common/Utils";
import { RegionData } from "../data/RegionData";
import { Config } from "../Config";

interface IRegionsProps {
    onSelect: (region: types.Region) => void;
}

interface IResionsState {
    clickedRegion?: types.Region;
}

export class Regions extends React.Component<IRegionsProps, IResionsState> {

    private _root!: HTMLDivElement;

    constructor(props: IRegionsProps) {
        super(props);
        this.state = {            
        };
    }

    public render() {

        const makeRegion = (region: types.Region) => {
            const data = RegionData.get(region);
            return (
                <div className="region-container">
                    <div className="region-sub-container">
                        <img
                            className={`${this.state.clickedRegion === region ? "selected" : "clickable"} region-image`}
                            src={data.background}
                            onClick={e => {
                                if (this.state.clickedRegion) {
                                    return;
                                }
                                this.setState({ clickedRegion: region });
                                setTimeout(() => {
                                    Utils.fadeOut(this._root).then(() => this.props.onSelect(region));
                                }, Config.clickAcceptDelay);
                            }}
                        />
                        <div className="region-name">
                            {data.name}
                        </div>
                    </div>
                </div>
            );
        };

        return (
            <div
                className="fadeIn"
                ref={e => this._root = e as HTMLDivElement}
            >
                <div className="region-row">
                    {makeRegion(types.Region.Canada)}
                    {makeRegion(types.Region.Nordics)}
                </div>
                <div className="region-row">
                    {makeRegion(types.Region.Brazil)}
                    {makeRegion(types.Region.Indonesia)}
                </div>
                <div
                    className="region-logo"
                    style={{
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "100%",
                        height: "100%",
                        textAlign: "center",
                        display: "grid",
                        pointerEvents: "none"
                    }}
                >
                    <div
                        style={{
                            alignSelf: "flex-end",
                            padding: "8px"
                        }}
                    >
                        <img 
                            style={{
                                width: "24vw"
                            }}
                            src="/public/intro/foodplay.svg" 
                        />
                    </div>
                    <div
                        style={{
                            fontWeight: "bold",
                            fontSize: "20px",
                            color: "#1A73E8"
                        }}
                    >
                        Pick A Region
                    </div>
                </div>
            </div>
        );
    }
}
