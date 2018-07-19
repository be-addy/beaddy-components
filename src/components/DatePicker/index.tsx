import * as React from 'react';
import MonthSwitch from './MonthSwitch';
import Days from './Days';

interface Date {
    day: number;
    month: number;
    year: number;
}

interface Props {
    date?: Date;
    onSelected: (date: Date) => void;
}

class DatePicker extends React.Component<Props, Date> {
    constructor(props: Props) {
        super(props);

        this.state = props.date || this.now();
    }

    public render() {
        return (
            <div>
                <MonthSwitch
                    month={this.state.month}
                    year={this.state.year}
                    onChange={(m, y) =>
                        this.setState({ month: m, year: y })
                    }
                />
                <Days
                    month={this.state.month}
                    year={this.state.year}
                    onSelected={
                        (day) => {
                            this.setState({ day });
                            this.props.onSelected(this.state);
                        }
                    }
                />
            </div>
        );
    }

    private now() {
        let date = new Date();
        return {
            day: date.getDate(),
            month: date.getMonth(),
            year: date.getFullYear(),
        };
    }
}

export default DatePicker;