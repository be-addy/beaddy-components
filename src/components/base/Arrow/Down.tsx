import * as React from 'react';
import { withTheme } from 'styled-components';

import Theme from '../../../theme';

interface Props {
    theme: Theme;
}

const Down = ({ theme }: Props) => (
    <svg width="10px" height="10px" strokeWidth="1" fill={theme.change.negative.color}>
        <polygon
            transform="translate(5.000000, 5.000000) rotate(-315.000000) translate(-5.000000, -5.000000) "
            points="8 2 8 8 2 8"
        />
    </svg>
);

export default withTheme(Down);