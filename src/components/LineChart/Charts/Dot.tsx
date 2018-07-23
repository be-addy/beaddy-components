import * as React from 'react';
import styled from 'styled-components';

import { ChartPoint } from '../Types';

const InnerCircle = styled.circle`
    stroke: ${props => props.color};
    fill: ${props => props.fill};
    stroke-width: 1px;
`;

const OuterCircle = styled.circle`
    fill: none;
    pointer-events: all;
`;

interface Props extends ChartPoint {
    color: string;
    onMouseOver: (e: any) => void;
    onMouseOut: () => void;
}

class Dot extends React.Component<Props> {
    state = {
        hover: false,
    };

    public render() {
        const { color, x, y, value, date, provider } = this.props;
        return (
            <g>
                <InnerCircle
                    color={color}
                    fill={this.state.hover ? '#ffffff' : color}
                    cx={x}
                    cy={y}
                    r={this.state.hover ? '5' : '2'}
                />
                <OuterCircle
                    cx={x}
                    cy={y}
                    r={10}
                    onMouseOver={(e) => {
                        this.setState({ hover: true });
                        this.props.onMouseOver({x, y, value, date, provider});
                    }}
                    onMouseOut={(e) => {
                        this.setState({ hover: false });
                        this.props.onMouseOut();
                    }}
                />
            </g>
        );
    }
}

export default Dot;