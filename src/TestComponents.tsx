import * as React from 'react';

import { PopoverDefault } from './components/base/Popover/index.stories';
import { TextButtonDefault } from './components/TextButton.stories';
import { TextInputDefault } from './components/TextInput.stories';
import { ModalOkCancelDefault } from './components/ModalOkCancel.stories';

const COMPONENTS = [
    TextButtonDefault,
    ModalOkCancelDefault,
    TextInputDefault,
    PopoverDefault,
];

export default () => (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {COMPONENTS.map((c, i) => <div style={{margin: '10px'}} key={i}>{c}</div>)}
    </div>
);