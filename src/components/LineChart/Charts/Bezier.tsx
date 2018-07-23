import * as React from 'react';
import { ChartPoint } from '../Types';
import Dot from './Dot';

interface Point {
    x: number;
    y: number;
}

interface Props {
    color: string;
    data: Array<ChartPoint>;
    onMouseOver: (e: any) => void;
    onMouseOut: () => void;
}

const smoothing = 0.2;

class Bezier extends React.Component<Props> {
    public render() {
        return this.svgPath(this.props.data);
    }

    line(pointA: Point, pointB: Point) {
        const lengthX = pointB.x - pointA.x;
        const lengthY = pointB.y - pointA.y;
        return {
            length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
            angle: Math.atan2(lengthY, lengthX)
        };
    }

    controlPoint(
        current: Point,
        previous: Point,
        next: Point,
        reverse: boolean = false) {

        const p = previous || current;
        const n = next || current;

        const o = this.line(p, n);

        const angle = o.angle + (reverse ? Math.PI : 0);
        const length = o.length * smoothing;

        const x = current.x + Math.cos(angle) * length;
        const y = current.y + Math.sin(angle) * length;
        return { x, y };
    }

    bezierCommand(point: Point, i: number, a: Array<ChartPoint>) {
        const cps = this.controlPoint(a[i - 1], a[i - 2], point);

        const cpe = this.controlPoint(point, a[i - 1], a[i + 1], true);
        return `C ${cps.x},${cps.y} ${cpe.x},${cpe.y} ${point.x},${point.y}`;
    }

    svgPath(points: Array<ChartPoint>) {
        const d = points.reduce(
            (acc, point, i, a) => {
                return i === 0
                    ? `M ${point.x},${point.y}`
                    : `${acc} ${this.bezierCommand(point, i, a)}`;
            },
            '');
        return (
            <g>
                <path d={d} fill="none" stroke={this.props.color} />
                {
                    points.map((point, i) =>
                        <Dot
                            key={i}
                            color={this.props.color}
                            {...point}
                            onMouseOver={(e) => this.props.onMouseOver(e)}
                            onMouseOut={() => this.props.onMouseOut()}
                        />
                    )}
            </g>
        );
    }
}

export default Bezier;