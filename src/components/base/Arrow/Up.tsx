import * as React from 'react';
import { withTheme } from 'styled-components';

import Props from './Props';

const Up = ({ width, height, theme }: Props) => (
    <svg
        width={width}
        height={height}
        style={{ display: 'block' }}
        viewBox="0 0 10 10"
        fill={theme.change.positive.color}
    >
        <polygon
            transform="translate(5.000000, 5.000000) rotate(-135.000000) translate(-5.000000, -5.000000) "
            points="8 2 8 8 2 8"
        />
    </svg>
);

export default withTheme(Up);