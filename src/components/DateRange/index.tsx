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

class DateRange extends React.Component<Props> {
    constructor(props: Props) {
        super(props);

        this.setRange(props);
    }

    componentWillReceiveProps(props: Props) {
        if (props.mode === this.props.mode) {
            return;
        }

        this.setRange(props);
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

    private setRange(props: Props): void {
        let start;
        let end;

        switch (props.mode) {
            case Mode.SinceLaunch:
                start = props.launch;
                end = Utils.getNow();
                break;
            case Mode.ThisWeek:
                start = Utils.getFirstDayOfTheWeek();
                end = Utils.getLastDayOfTheWeek();
                break;
            case Mode.ThisMonth:
                start = Utils.getFirstDayOfTheMonth();
                end = Utils.getNow();
                break;
            case Mode.ThisYear:
                start = Utils.getFirstDayOfTheYear();
                end = Utils.getNow();
                break;
            case Mode.Custom:
                return;
            default:
                throw 'Unknown mode ' + props.mode;
        }

        props.onStartSelected(start);
        props.onEndSelected(end);
    }
}

export default DateRange;