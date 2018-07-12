import * as React from 'react';

import Row from './base/Row';

import { Value, Change } from './base/ChartTip';
import Arrow from './base/Arrow';
import Provider from './base/Provider';
import { Direction, ProviderType } from './base/Types';

import Tooltip from './base/Tooltip/index';

interface Props {
    provider: ProviderType;
    value: string;
    change: string;
    direction: Direction;
    visible: boolean;
}

const ChartTip = ({ provider, value, change, direction, visible }: Props) => (
    <Tooltip visible={visible}>
        <Row>
            <Provider type={provider} />
            <Value>{value}</Value>
            <Change direction={direction}>{change}</Change>
            <Arrow direction={direction} />
        </Row>
    </Tooltip>
);

export default ChartTip;