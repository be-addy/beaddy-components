import * as React from 'react';

import Row from '../base/Row';

import Menu from '../base/Popover/Menu';
import Value from './Value';
import Change from './Change';

import Arrow from '../base/Arrow';
import Provider from '../base/Provider';
import { Direction, ProviderType } from '../base/Types';

import Panel from './Panel';

interface Props {
    provider: ProviderType;
    value: string;
    change: string;
    direction: Direction;
    visible: boolean;
    x?: string;
    y?: string;
}

const ChartTip = ({ provider, value, change, direction, visible, x, y}: Props) => (
    <Menu visible={visible} x={x} y={y}>
        <Panel>
            <Row>
                <Provider type={provider} />
                <Value>{value}</Value>
                <Change direction={direction}>{change}</Change>
                <Arrow direction={direction} />
            </Row>
        </Panel>
    </Menu>
);

export default ChartTip;