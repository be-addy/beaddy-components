import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TextButton from './TextButton';

const stories = storiesOf('Button', module);

stories.add('default', () => <TextButton onClick={() => action('clicked')} text="Text Button" />);