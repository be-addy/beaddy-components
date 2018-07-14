import * as React from 'react';
import { css } from 'styled-components';
import Col from '../base/Col';

import { Triangle as BaseTriangle, Content as BaseContent } from '../base/Popover/Panel/Vertical';
import Theme from '../../theme';

interface Props {
    theme?: Theme;
}

const Background = css`
    background: ${(props: Props) => (props.theme as Theme).popover.background.color};
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
    <Col>
        <Triangle />
        <Content>
            {children}
        </Content>
    </Col>
);

export default Panel;