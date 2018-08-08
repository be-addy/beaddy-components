import * as React from 'react';

import H3 from '../base/H3';
import Line from '../base/Line';
import Padding from '../base/Padding';
import SidePanel from '../base/SidePanel';
import Dropdown, { DropdownData } from '../base/Dropdown';

import Providers, { ProviderData } from './Providers';
import Conversions, { ConversionData } from './Conversions';

interface Props {
    conversions: Array<ConversionData>;
    dropdownData: DropdownData;
    providers: Array<ProviderData>;

    index: number;
    onSelected: (index: number) => void;

    hidden: boolean;
}

const Left = 48;
class Stats extends React.Component<Props> {
    public render() {
        const { conversions, providers, dropdownData, index, onSelected } = this.props;
        return (
            <SidePanel hidden={this.props.hidden}>
                <Padding top={32} bottom={16} left={Left}>
                    <H3>Web Conversions</H3>
                </Padding>
                <Line />
                <Padding top={16} bottom={16} left={Left}>
                    <Conversions data={conversions} />
                </Padding>
                <Line />
                <Padding  top={16} right={64} bottom={16} left={Left}>
                    <Dropdown {...dropdownData} index={index} onSelected={(i) => onSelected(i)} />
                </Padding>
                <Line />
                <Padding top={16} bottom={16} left={Left}>
                    <Providers data={providers} />
                </Padding>
            </SidePanel>
        );
    }
}

export default Stats;