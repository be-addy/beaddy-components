import * as React from 'react';
import { DX, DY, MarginBottom } from './Shift';

import { Months } from '../DatePicker';

interface Props {
    dates: Array<Date>;

    width: number;
    height: number;

    maxValue: number;
}

class Axis extends React.Component<Props> {
    public render() {
        return this.makeAxis();
    }

    private vmarks() {
        const { height, maxValue } = this.props;

        const NotchCount = 3;

        const dVal = Math.floor((maxValue / (NotchCount + 1)) / 10000) * 10000;

        const k = height / maxValue;
        const dY = k * dVal;

        let val = 0;
        let y = height + DY;

        let comps: any = [];
        for (let i = 0; i < NotchCount; ++i) {
            val += dVal;
            y -= dY;

            comps.push(<text key={i} x={0} y={y}>{val / 1000 + 'k'}</text>);
        }

        return comps;
    }

    private hmarks() {
        const { height, width, dates } = this.props;

        const NotchCount = dates.length;
        const dX = Math.floor(width / NotchCount);

        let index = 0;
        let x = 0;

        let comps: any = [];
        for (let i = 0; i < NotchCount; ++i) {
            comps.push(
                <text
                    key={i}
                    x={x + DX}
                    y={height + (DY + MarginBottom) - 3}
                >
                    {dates[index].getDate()} {this.getMonthName(dates[index].getMonth())}
                </text>);
            index += 1;
            x += dX;
        }

        return comps;
    }

    private getMonthName(index: number) {
        return Months[index].substr(0, 3).toLowerCase();
    }

    private makeAxis() {
        const { width, height } = this.props;

        return (
            <g style={{ stroke: '#b7b3cc', fontSize: '10px', fontFamily: 'Muli' }}>
                {this.vmarks()}
                {this.hmarks()}
                <line
                    x1={DX}
                    y1={height}
                    x2={width + DX}
                    y2={height}
                />
            </g>
        );
    }
}

export default Axis;