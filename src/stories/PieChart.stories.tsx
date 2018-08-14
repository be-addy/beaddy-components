import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { ProviderType, Direction } from '../components/base/Types';

import PieChart, { PieChartIcon, Size } from '../components/PieChart';

const stories = storiesOf('PieChart', module);

const content1 = {
    icon: PieChartIcon.CONV,
    title: 'WEB CONVERSIONS',
    value: '322.000',
    change: '+100.000',
    direction: Direction.UP,
};

const content2 = {
    title: 'SPEND',
    value: '€635.550',
    extra: '€1.000.000',
    change: '+€400 p.h.',
};

const slices = [
    { provider: ProviderType.TWITTER, color: '#53acf0', value: 224.003, change: 20, direction: Direction.UP },
    { provider: ProviderType.FACEBOOK, color: '#5b31da', value: 224.003, change: 34, direction: Direction.DOWN },
    { provider: ProviderType.GOOGLE, color: '#50e3c2', value: 600.000, change: 21, direction: Direction.DOWN },
    { provider: ProviderType.APPNEXUS, color: '#352E56', value: 300.000, change: 55, direction: Direction.UP },
];

const slices2 = [
    { provider: ProviderType.GOOGLE, color: '#50e3c2', value: 250.000, change: 21, direction: Direction.DOWN },
    { provider: ProviderType.TWITTER, color: '#53acf0', value: 100.003, change: 20, direction: Direction.UP },
    { provider: ProviderType.FACEBOOK, color: '#5b31da', value: 50.003, change: 34, direction: Direction.DOWN },
    { provider: ProviderType.NONE, color: 'lightgrey', value: 250.000, change: 21, direction: Direction.DOWN },
];

const PieChartDefault = (
    <PieChart
        size={Size.WIDE}
        content={content1}
        slices={slices}
    />
);

export { PieChartDefault };

stories.add('default', () => PieChartDefault);

const PieChartNoIcon = (
    <PieChart
        size={Size.NARROW}
        content={content2}
        slices={slices2}
    />
);

stories.add('no icon', () => PieChartNoIcon);

export { PieChartNoIcon };