import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TextButton from '../components/TextButton';

const stories = storiesOf('Button', module);

export const TextButtonDefault = (
    <TextButton
        onClick={() => action('clicked')}
        text="Text Button"
    />
);

stories.add('default', () => TextButtonDefault);