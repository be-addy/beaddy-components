import * as React from 'react';
import { css } from 'styled-components';
import Row from '../base/Row';

import { Triangle as BaseTriangle, Content as BaseContent } from '../base/Popover/Panel/Horizontal';
import Theme from '../../theme';

interface Props {
    theme?: Theme;
}

const Background = css`
    background: ${(props: Props) => (props.theme as Theme).chart.tooltip.background.color};
`;

const Triangle = BaseTriangle.extend`
    &:after {
        ${Background};
    }
`;

const Content = BaseContent.extend`
    ${Background};
`;

const Panel = ({ children }: any) => (
    <Row>
        <Triangle />
        <Content>
            {children}
        </Content>
    </Row>
);

export default Panel;