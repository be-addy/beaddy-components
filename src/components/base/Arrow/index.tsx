import * as React from 'react';
import { withTheme } from 'styled-components';
import { Direction } from '../Types';
import Theme from '../../../theme';

import Up from './Up';
import Down from './Down';

interface Props {
    direction: Direction;
    theme?: Theme;
}

const Arrow = (props: Props) => {
    return props.direction === Direction.UP ? <Up /> : <Down />;
};

export default withTheme(Arrow);