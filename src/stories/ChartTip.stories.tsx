import * as React from 'react';

import { storiesOf } from '@storybook/react';

import ChartTip from '../components/ChartTip';

import { Direction, ProviderType } from '../components/base/Types';

const stories = storiesOf('ChartTip', module);
export const ChartTipDefault = (
    <ChartTip
        visible={true}
        provider={ProviderType.TWITTER}
        value="224.003"
        change="20"
        direction={Direction.UP}
    />
);

stories.add('default', () => ChartTipDefault);