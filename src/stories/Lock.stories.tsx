import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Lock from '../components/base/Lock';

const stories = storiesOf('Lock', module);

class LockTest extends React.Component {
    state = {
        locked: true,
    };

    public render() {
        return (
            <Lock
                locked={this.state.locked}
                onChange={locked => this.setState({ locked })}
            />
        );
    }
}

stories.add('default', () => <LockTest />);