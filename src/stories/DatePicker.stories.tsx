import * as React from 'react';

import { storiesOf } from '@storybook/react';

import DatePicker from '../components/DatePicker';

const stories = storiesOf('DatePicker', module);

class DatePickerTest extends React.Component {
    state = {
        date: { day: 1, month: 1, year: 1999 },
    };

    public render() {
        return (
            <DatePicker
                date={this.state.date}
                onSelected={(date) => this.setState({date})}
            />
        );
    }
}

stories.add('default', () => <DatePickerTest />);