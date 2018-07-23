import * as React from 'react';

import styled from 'styled-components';

import Line from '../base/Line';

import DatePicker, { Date } from '../DatePicker';

import ControlPanel, { Mode } from './ControlPanel';
export { Mode } from './ControlPanel';
import * as Utils from './DateUtils';

interface Range {
    start: Date;
    end: Date;
}

interface Props extends Range {
    launch: Date;
    mode: Mode;
    onStartSelected: (date: Date) => void;
    onEndSelected: (date: Date) => void;
    onModeChanged: (mode: Mode) => void;
}

const Row = styled.div`
    display: flex;
`;

// tslint:disable
class DateRange extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    componentWillReceiveProps(props: Props) {
        if (props.mode === this.props.mode) {
            return;
        }

        switch (props.mode) {
            case Mode.SinceLaunch:
                let start = props.launch;
                let end = Utils.getNow();
                props.onStartSelected(start);
                props.onEndSelected(end);
                break;
            case Mode.ThisWeek:
                start = Utils.getFirstDayOfTheWeek();
                end = Utils.getLastDayOfTheWeek();
                props.onStartSelected(start);
                props.onEndSelected(end);
                break;
            case Mode.ThisMonth:
                start = Utils.getFirstDayOfTheMonth();
                end = Utils.getNow();
                props.onStartSelected(start);
                props.onEndSelected(end);
                break;
            case Mode.ThisYear:
                start = Utils.getFirstDayOfTheYear();
                end = Utils.getNow();
                props.onStartSelected(start);
                props.onEndSelected(end);
                break;
            default:
                console.log('default', props.mode);
            // throw 'Unknown mode';
        }
    }

    public render() {
        return (
            <div>
                <Row>
                    <DatePicker
                        date={this.props.start}
                        onSelected={(date) => {
                            this.props.onStartSelected(date);
                            this.props.onModeChanged(Mode.Custom);
                        }}
                    />
                    <DatePicker
                        date={this.props.end}
                        onSelected={(date) => {
                            this.props.onEndSelected(date);
                            this.props.onModeChanged(Mode.Custom);
                        }}
                    />
                </Row>
                <Line />
                <ControlPanel
                    mode={this.props.mode}
                    onSelected={(mode) => this.props.onModeChanged(mode)}
                />
            </div>
        );
    }
}

export default DateRange;