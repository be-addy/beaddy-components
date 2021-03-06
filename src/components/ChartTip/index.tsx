import * as React from 'react';

import Row from '../base/Row';

import Menu from '../base/Popover';
import Value from './Value';
import Change from './Change';

import Arrow from '../base/Arrow';
import Provider from '../base/Provider';
import { Direction, ProviderType } from '../base/Types';

import Panel from './Panel';

export interface ChartTipData {
    provider: ProviderType;
    value: string;
    change: string;
    direction: Direction;
    visible: boolean;
    x?: string;
    y?: string;
}

const ChartTip = ({ provider, value, change, direction, visible, x, y }: ChartTipData) => (
    <Menu visible={visible} x={x} y={y}>
        <Panel>
            <Row>
                <Provider type={provider} />
                <Value>{value}</Value>
                <Change direction={direction}>{change}</Change>
                <Arrow width={10} height={10} direction={direction} />
            </Row>
        </Panel>
    </Menu>
);

export default ChartTip;