import * as React from 'react';
import styled from 'styled-components';
import Button from './Button';
import CustomDate from './Date';

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

interface DayProps {
    selected: boolean;
}

const Day = Button.extend`
    width: 24px;
    ${(props: DayProps) => props.selected && 'font-weight: bold'};
`;

interface Props {
    month: number;
    year: number;

    selected: CustomDate;
    onSelected: (date: CustomDate) => void;
}

class Days extends React.Component<Props> {
    public render() {
        const dates = this.getDaysInMonth(this.props.month, this.props.year);
        let dayOfWeek = dates[0].getDay();
        let days: Array<number> = [];

        for (let i = 0; i < dayOfWeek; ++i) {
            days.push(-1);
        }

        days = days.concat(dates.map(date => date.getDate()));

        dayOfWeek = dates[dates.length - 1].getDay();

        for (let i = dayOfWeek; i < 7; ++i) {
            days.push(-1);
        }

        return <div>{this.getRows(days)}</div>;
    }

    private getRows(days: Array<number>) {
        let rows = [];
        let len = days.length;
        let index = 0;
        let exit = false;

        while (true) {
            let row = [];
            for (let i = 0; i < 7; ++i) {
                if (index === len) {
                    exit = true;
                    break;
                }

                let day = days[index++];

                row.push((
                    <Day
                        key={index + 'day'}
                        selected={this.props.selected.day === day
                            && this.props.selected.month === this.props.month
                            && this.props.selected.year === this.props.year}
                        onClick={() =>
                            this.props.onSelected(
                                {
                                    day,
                                    month: this.props.month,
                                    year: this.props.year
                                }
                            )}
                    >
                        {day > 0 ? day : ''}
                    </Day>)
                );
            }

            if (exit) {
                break;
            }

            rows.push(<Row key={index + 'row'}>{row}</Row>);
        }

        return rows;
    }

    private getDaysInMonth(month: number, year: number) {
        var date = new Date(year, month, 1);
        var days = [];
        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }

        return days;
    }
}

export default Days;