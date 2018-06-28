import * as React from 'react';

import { storiesOf } from '@storybook/react';

import TextButton from './TextButton';

const stories = storiesOf('Button', module);

stories.add('with text', () => <TextButton onClick={() => alert('clicked')} text="Text Button" />);