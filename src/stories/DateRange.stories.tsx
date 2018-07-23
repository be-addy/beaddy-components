import * as React from 'react';
import { storiesOf } from '@storybook/react';
import log from '../log';

import DateRange, { Mode } from '../components/DateRange';
import Popover from '../components/Popover';

const stories = storiesOf('DateRange', module);

export class DateRangeTest extends React.Component {
    state = {
        start: { day: 2, month: 11, year: 1990 },
        end: { day: 20, month: 1, year: 2000 },
        mode: Mode.SinceLaunch,
    };

    public render() {
        log('state', this.state);

        return (
            <Popover visible={true}>
                <DateRange
                    mode={this.state.mode}
                    start={this.state.start}
                    end={this.state.end}
                    launch={{ day: 2, month: 11, year: 2000 }}
                    onStartSelected={(start) => { log('Start', start); this.setState({ start }); }}
                    onEndSelected={(end) => { log('End', end); this.setState({ end }); }}
                    onModeChanged={(mode) => { log('mode', mode); this.setState({ mode }); }}
                />
            </Popover>
        );
    }
}

const DateRangeDefault = <DateRangeTest />;
export { DateRangeDefault };

stories.add('default', () => DateRangeDefault);