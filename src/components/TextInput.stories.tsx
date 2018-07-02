import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TextInput from './TextInput';

const stories = storiesOf('TextInput', module);

stories.add('default', () => (
    <TextInput
        label="CAMPAIGN NAME"
        placeholder="Campaign name"
        onChange={text => action(text)}
    />
));