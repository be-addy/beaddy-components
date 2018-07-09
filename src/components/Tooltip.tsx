import * as React from 'react';

import Menu from './base/Popover/Menu';
import Panel from './base/Popover/Panel/Horizontal/index';

interface Props {
    visible: boolean;
    children: any;
}

export default ({ children, visible }: Props) => (
    <Menu visible={visible}>
        <Panel>
            {children}
        </Panel>
    </Menu>
);