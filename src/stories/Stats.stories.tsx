import * as React from 'react';

import { storiesOf } from '@storybook/react';

import SidePanel from '../components/Stats';
import { ProviderType, Direction } from '../components/base/Types';

const stories = storiesOf('Stats', module);

const data = {
    conversions: [
        { title: 'WEB CONVERSIONS', value: 322.000 },
        { title: 'AVERAGE PER DAY', value: 20.520, direction: Direction.UP },
        { title: 'AVERAGE PER CAMPAIGN', value: 281.234, direction: Direction.DOWN },
    ],
    dropdownData: {
        title: 'SHOW SERVICES',
        options: [
            'All Campaigns',
            'Campaign 1',
            'Campaign 2',
            'Campaign 3',
        ],
    },
    providers: [
        { type: ProviderType.FACEBOOK, value: 233.450 },
        { type: ProviderType.TWITTER, value: 140.133 },
        { type: ProviderType.APPNEXUS, value: 123.111 },
        { type: ProviderType.GOOGLE, value: 83.459 },
    ],
};

class StatsDefault extends React.Component {
    state = {
        index: 0,
        hidden: false,
    };

    public render() {
        return (
            <div>
                <button
                    onClick={() => this.setState({ hidden: !this.state.hidden })}
                >
                    Toggle
                </button>
                <SidePanel
                    {...data}
                    index={this.state.index}
                    onSelected={(index) => this.setState({ index })}
                    hidden={this.state.hidden}
                />
            </div>
        );
    }
}

stories.add('default', () => <StatsDefault />);