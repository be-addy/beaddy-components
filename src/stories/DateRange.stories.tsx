import * as React from 'react';
import { storiesOf } from '@storybook/react';
import log from '../log';

import { Date } from '../components/DatePicker';
import DateRange, { Mode } from '../components/DateRange';

import Popover from '../components/Popover';

const stories = storiesOf('DateRange', module);

interface Props {
    mode: Mode;
}

interface State {
    start: Date;
    end: Date;
    mode: Mode;
}

export class DateRangeTest extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            start: { day: 2, month: 11, year: 2016 },
            end: { day: 20, month: 1, year: 2017 },
            mode: props.mode
        };
    }

    public render() {
        log('state', this.state);

        return (
            <div style={{ position: 'relative', width: 420, height: 200 }}>
                <Popover visible={true}>
                    <DateRange
                        mode={this.state.mode}
                        start={this.state.start}
                        end={this.state.end}
                        launch={{ day: 5, month: 9, year: 2014 }}
                        onStartSelected={(start) => { log('Start', start); this.setState({ start }); }}
                        onEndSelected={(end) => { log('End', end); this.setState({ end }); }}
                        onModeChanged={(mode) => { log('mode', mode); this.setState({ mode }); }}
                    />
                </Popover>
            </div>
        );
    }
}

const DateRangeDefault = <DateRangeTest mode={Mode.SinceLaunch} />;
export { DateRangeDefault };

stories.add('since launch', () => DateRangeDefault);
stories.add('custom', () => <DateRangeTest mode={Mode.Custom} />);