import * as React from 'react';
import { withTheme } from 'styled-components';

import Theme from '../../../theme';

interface Props {
    theme: Theme;
}

const Down = ({ theme }: Props) => (
    <svg
        viewBox="0 0 10 10"
        fill={theme.change.negative.color}
    >
        <polygon
            transform="translate(5.000000, 5.000000) rotate(-315.000000) translate(-5.000000, -5.000000) "
            points="8 2 8 8 2 8"
        />
    </svg>
);

export default withTheme(Down);