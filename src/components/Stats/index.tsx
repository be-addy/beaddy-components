import * as React from 'react';
import styled from 'styled-components';
import H3 from '../base/H3';

import Line from '../base/Line';

import Conversions, { ConversionData } from './Conversions';
import Dropdown, { PopoverData } from '../base/Dropdown';
import Providers, { ProviderData } from './Providers';
import SidePanel from '../base/SidePanel';

const Padding = styled.div`
    padding: 16px 0 16px 48px;
`;

const HeaderPadding = Padding.extend`
    padding-top: 32px;
`;

interface Props {
    conversions: Array<ConversionData>;
    popover: PopoverData;
    providers: Array<ProviderData>;

    index: number;
    onSelected: (index: number) => void;

    hidden: boolean;
}

const PaddingDropdown = Padding.extend`
    padding-right: 64px;
`;

class Stats extends React.Component<Props> {
    public render() {
        const { conversions, providers, popover, index, onSelected } = this.props;
        return (
            <SidePanel hidden={this.props.hidden}>
                <HeaderPadding>
                    <H3>Web Conversions</H3>
                </HeaderPadding>
                <Line />
                <Padding>
                    <Conversions data={conversions} />
                </Padding>
                <Line />
                <PaddingDropdown>
                    <Dropdown {...popover} index={index} onSelected={(i) => onSelected(i)} />
                </PaddingDropdown>
                <Line />
                <Padding>
                    <Providers data={providers} />
                </Padding>
            </SidePanel>
        );
    }
}

export default Stats;