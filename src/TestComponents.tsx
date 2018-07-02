import * as React from 'react';
import Popover from './components/base/Popover';
import Panel from './components/base/Popover/Panel';
import PopoverList from './PopoverList';

import TextButton from './components/TextButton';
import TextInput from './components/TextInput';
import ModalOkCancel from './components/ModalOkCancel';

export default () => (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <TextButton onClick={action} text="Text Button" />
        <ModalOkCancel
            title="Quiting early today are we?"
            message="No problem. We’ll save your campaign as draft."
            buttonOkText="Save as draft"
            buttonCancelText="Stay here"
            onOk={action}
            onCancel={action}
        />
        <TextInput label="CAMPAIGN NAME" placeholder="Campaign name" onChange={text => action(text)} />
        <Panel>
            <PopoverList />
        </Panel>
        <Popover>
            <PopoverList />
        </Popover>
    </div>
);

function action(param?: any) {
    // tslint:disable-next-line
    console.log('action', param);
}