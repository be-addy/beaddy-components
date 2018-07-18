import * as React from 'react';
import { Point } from './Types';
import { DX, DY, MarginBottom } from './Shift';

interface Props {
    width: number;
    height: number;
    limits: {
        min: Point,
        max: Point,
    };
}

class Axis extends React.Component<Props> {
    public render() {
        return this.makeAxis();
    }

    private vmarks() {
        const { height, limits } = this.props;

        const NotchCount = 3;

        const maxVal = limits.max.y;
        const dVal = Math.floor((maxVal / (NotchCount + 1)) / 10000) * 10000;

        const k = height / maxVal;
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
        const { height, width, limits } = this.props;

        const NotchCount = limits.max.x - limits.min.x;
        const dX = Math.floor(width / NotchCount);

        let val = limits.min.x;
        let x = 0;

        let comps: any = [];
        for (let i = 0; i < NotchCount; ++i) {
            comps.push(<text key={i} x={x + DX} y={height + (DY + MarginBottom)}>{val}</text>);
            val += 1;
            x += dX;
        }

        return comps;
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