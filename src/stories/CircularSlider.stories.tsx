import * as React from 'react';

import { storiesOf } from '@storybook/react';

import CircularSlider from '../components/CircularSlider';

const stories = storiesOf('CircularSlider', module);

class CircularSliderTest extends React.Component {
    state = {
        locked: false,
        pos: 33,
    };

    public render() {
        const value = 5000;
        const header = Math.floor(value * (this.state.pos / 100));

        return (
            <CircularSlider
                title="BUDGET"
                locked={this.state.locked}
                header={'€' + header}
                pos={this.state.pos}
                onPosChange={pos => this.setState({ pos })}
                onLockChange={locked => this.setState({ locked })}
            />
        );
    }
}

const CircularSliderDefault = <CircularSliderTest />;
export { CircularSliderDefault };

stories.add('default', () => <CircularSliderTest />);