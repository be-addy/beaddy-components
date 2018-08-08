import * as React from 'react';
import { withTheme } from 'styled-components';
import { Direction } from '../Types';

import Up from './Up';
import Down from './Down';
import BaseProps from './Props';

interface Props extends BaseProps {
    direction: Direction;
}

const Arrow = ({ direction, width, height }: Props) => {
    return direction === Direction.UP
        ? <Up width={width} height={height} />
        : <Down width={width} height={height} />;
};

export default withTheme(Arrow);