import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Popover from './';
import Panel from './Panel';
import PopoverList from '../../../PopoverList';

const stories = storiesOf('Popover', module);

export const PopoverAlwaysVisible = (
    <Panel>
        <PopoverList />
    </Panel>
);

export const PopoverTogglable = (
    <Popover>
        <PopoverList />
    </Popover>
);

stories.add('always visible', () => PopoverAlwaysVisible);
stories.add('togglable', () => PopoverTogglable);