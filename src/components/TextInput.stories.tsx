import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TextInput from './TextInput';

const stories = storiesOf('TextInput', module);

export const TextInputDefault = (
    <TextInput
        label="CAMPAIGN NAME"
        placeholder="Campaign name"
        onChange={text => action(text)}
    />
);

stories.add('default', () => TextInputDefault);