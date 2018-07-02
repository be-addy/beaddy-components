import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Popover from './';
import Panel from './Panel';
import PopoverList from '../../../PopoverList';

const stories = storiesOf('Popover', module);

stories.add('always visible', () => (
    <Panel>
        <PopoverList />
    </Panel>
));

stories.add('togglable', () => (
    <Popover>
        <PopoverList />
    </Popover>
));