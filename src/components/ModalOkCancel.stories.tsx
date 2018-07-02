import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ModalOkCancel from './ModalOkCancel';

const stories = storiesOf('ModalOkCancel', module);

export const ModalOkCancelDefault = (
    <ModalOkCancel
        title="Quiting early today are we?"
        message="No problem. We’ll save your campaign as draft."
        buttonOkText="Save as draft"
        buttonCancelText="Stay here"
        onOk={action('onOk')}
        onCancel={action('onCancel')}
    />
);

stories.add('default', () => ModalOkCancelDefault);