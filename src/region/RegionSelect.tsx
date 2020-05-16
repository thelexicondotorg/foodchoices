
import * as React from "react";
import * as types from "../Types";
import { RegionData } from "../data/RegionData";
import { Region } from "./Region";
import { Regions } from "./Regions";

interface IRegionSelectProps {
    selection?: types.Region;
    onSelect: (region: types.Region) => void;
}

interface IRegionSelectState {
    selection?: types.Region;
}

export class RegionSelect extends React.Component<IRegionSelectProps, IRegionSelectState> {

    constructor(props: IRegionSelectProps) {
        super(props);
        this.state = {
            selection: props.selection
        };
    }

    public render() {
        const { selection } = this.state;
        if (selection !== undefined) {
            const data = RegionData.get(selection);
            return (
                <Region
                    name={data.name}
                    description={data.description}
                    flag={data.flag}
                    globe={data.globe}
                    background={data.background}
                    backgroundColor={data.backgroundColor}
                    onBack={() => this.setState({ selection: undefined })}
                    onPlay={() => this.props.onSelect(selection)}
                />
            );
        } else {
            return (
                <Regions
                    onSelect={region => {
                        if (Boolean(RegionData.get(region))) {
                            this.setState({ selection: region });
                        } else {
                            this.props.onSelect(region);
                        }
                    }}
                />
            );
        }
    }
}
