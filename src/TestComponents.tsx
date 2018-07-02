import * as React from 'react';

import { PopoverAlwaysVisible, PopoverTogglable } from './components/base/Popover/index.stories';
import { TextButtonDefault } from './components/TextButton.stories';
import { TextInputDefault } from './components/TextInput.stories';
import { ModalOkCancelDefault } from './components/ModalOkCancel.stories';

export default () => (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {TextButtonDefault}
        {ModalOkCancelDefault}
        {TextInputDefault}
        {PopoverAlwaysVisible}
        {PopoverTogglable}
    </div>
);