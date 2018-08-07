import * as React from 'react';

import Menu from '../base/Popover';
import Panel from './Panel';

interface Props {
    visible: boolean;
    children: any;
}

const Popover = ({ children, visible }: Props) => (
    <Menu visible={visible}>
        <Panel>
            {children}
        </Panel>
    </Menu>
);

export default Popover;