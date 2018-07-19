import * as React from 'react';
import Button from './Button';

import styled from 'styled-components';

export const Months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const Main = styled.div`
    display: flex;
`;

const Content = styled.div`
    flex: 1;
    text-align: center;
`;

interface Props {
    month: number;
    year: number;
    onChange: (month: number, year: number) => void;
}

class MonthSwitch extends React.Component<Props> {
    public render() {
        return (
            <Main>
                <Button onClick={() => this.onChange(-1)}>&lt;</Button>
                <Content>{Months[this.props.month]}, {this.props.year}</Content>
                <Button onClick={() => this.onChange(1)}>&gt;</Button>
            </Main>
        );
    }

    private onChange(d: number) {
        let month = this.props.month + d;
        let year = this.props.year;

        if (month === -1) {
            month = 11;
            --year;
        }

        if (month === 12) {
            month = 0;
            ++year;
        }

        this.props.onChange(month, year);
    }
}

export default MonthSwitch;