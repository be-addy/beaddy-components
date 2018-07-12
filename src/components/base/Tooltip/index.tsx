import * as React from 'react';

import Menu from '../Popover/Menu';
import Panel from './Panel';

interface Props {
    visible: boolean;
    children: any;
}

const Tooltip = ({ children, visible }: Props) => (
    <Menu visible={visible}>
        <Panel>
            {children}
        </Panel>
    </Menu>
);

export default Tooltip;