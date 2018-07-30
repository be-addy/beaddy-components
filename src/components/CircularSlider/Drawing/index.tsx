import * as React from 'react';
import styled from 'styled-components';
import {
    RadiusInScreenPixels,
    Radius,
    Width,
    ThumbStroke,
    ThumbRadius
} from '../Const';

const Svg = styled.svg`
    transform: rotate(-90deg);
    border-radius: 50%;
`;

const Outer = styled.circle`
    fill: lightgrey;
    stroke: #5b31da;
    stroke-width: 32;
`;

const Inner = styled.circle`
    fill: #ffffff;
    stroke: none;
    stroke-width: 1;
`;

const Thumb = styled.circle`
    stroke: #5b31da;
    stroke-width: ${ThumbStroke};
    fill: #ffffff;
`;

interface Props {
    onRef: (e: any) => void;
    onMouseDown: (e: any) => void;
    x: number;
    y: number;

    pos: number;
}

class Drawing extends React.Component<Props> {
    public render() {
        const { onMouseDown, x, y, onRef } = this.props;

        return (
            <Svg
                innerRef={(e) => onRef(e)}
                width={RadiusInScreenPixels * 2}
                height={RadiusInScreenPixels * 2}
                viewBox={`0 0 ${Radius * 2} ${Radius * 2}`}
            >
                <Outer
                    onMouseDown={(e: any) => onMouseDown(e.nativeEvent)}
                    r={Radius}
                    cx={Radius}
                    cy={Radius}
                    strokeDasharray={`${this.props.pos} 100`}
                />
                <Inner
                    r={Radius - Width}
                    cx={Radius}
                    cy={Radius}
                />
                <Thumb
                    onMouseDown={(e: any) => onMouseDown(e.nativeEvent)}
                    r={ThumbRadius}
                    cx={x}
                    cy={y}
                />
            </Svg>
        );
    }
}

export default Drawing;