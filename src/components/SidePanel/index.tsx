import * as React from 'react';
import styled from 'styled-components';
import H3 from '../base/H3';

import Line from '../base/Line';

import Conversions, { ConversionData } from './Conversions';
import Popover, { PopoverData } from './Popover';
import Providers, { ProviderData } from './Providers';

const StyledPanel = styled.div`
    width: 315px;
    background: rgba(183, 179, 205, 0.2);
    display: ${props => props.hidden ? 'hidden' : 'block'};
`;

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

class SidePanel extends React.Component<Props> {
    public render() {
        const { conversions, providers, popover, index, onSelected } = this.props;
        return (
            <StyledPanel hidden={this.props.hidden}>
                <HeaderPadding>
                    <H3>Web Conversions</H3>
                </HeaderPadding>
                <Line />
                <Padding>
                    <Conversions data={conversions} />
                </Padding>
                <Line />
                <Padding>
                    <Popover {...popover} index={index} onSelected={(i) => onSelected(i)} />
                </Padding>
                <Line />
                <Padding>
                    <Providers data={providers} />
                </Padding>
            </StyledPanel>
        );
    }
}

export default SidePanel;