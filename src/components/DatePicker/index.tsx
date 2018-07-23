import * as React from 'react';
import styled from 'styled-components';
import MonthSwitch from './MonthSwitch';
export { Months } from './MonthSwitch';

import Days from './Days';

import Date from './Date';
export { default as Date } from './Date';

interface Props {
    date: Date;
    onSelected: (date: Date) => void;
}

const Main = styled.div`
    display: inline-block;
    margin: 20px;
`;

class DatePicker extends React.Component<Props, Date> {
    constructor(props: Props) {
        super(props);

        this.state = props.date;
    }

    componentWillReceiveProps(props: Props) {
        if (props.date) {
            this.setState(props.date);
        }
    }

    public render() {
        return (
            <Main>
                <MonthSwitch
                    month={this.state.month}
                    year={this.state.year}
                    onChange={(m, y) =>
                        this.setState({ month: m, year: y })
                    }
                />
                <Days
                    selected={this.props.date}
                    month={this.state.month}
                    year={this.state.year}
                    onSelected={
                        (date) => {
                            this.props.onSelected(date);
                        }
                    }
                />
            </Main>
        );
    }
}

export default DatePicker;