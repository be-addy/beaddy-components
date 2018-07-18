import * as React from 'react';
import Scaler from './Scaler';
import { getMin, getMax } from './Limits';
import Axis from './Axis';

import Bezier from './Charts/Bezier';

import { DY, DX, MarginRight, MarginBottom } from './Shift';

import { Provider, Points, DataPoint } from './Types';

import { ProviderType, Direction } from '../base/Types';
import ChartTip from '../ChartTip';

interface Props {
    data: Array<Provider>;
    width: number;
    height: number;
}

class Chart extends React.Component<Props> {
    state = {
        x: '100px',
        y: '150px',
        visible: false,

        value: '20000',
        provider: ProviderType.FACEBOOK,
        change: '20',
        direction: Direction.UP,
    };

    public render() {
        const { data, width, height } = this.props;
        const w = width - (DX + MarginRight);
        const h = height - (DY + MarginBottom);

        const limits = this.getLimits();
        return (
            <div style={{ position: 'relative' }}>
                {this.chartTip()}
                <svg width={width} height={height}>
                    {
                        data.map((provider, i) => {
                            let scaler = new Scaler(provider, limits.max, w, h);
                            let scaledData = scaler.scale();
                            return <Bezier
                                key={i}
                                onMouseOver={(e: DataPoint) => this.setState(this.getState(e))}
                                onMouseOut={() => this.setState({ visible: false })}
                                color={provider.color}
                                data={scaledData}
                            />;
                        })
                    }

                    <Axis width={w} height={h} limits={limits} />
                </svg>
            </div>
        );
    }

    private chartTip() {
        return (
            <ChartTip
                {...this.state}
            />
        );
    }

    private getState(e: DataPoint) {
        const { x, y, data: { value, provider }} = e;
        const { data } = this.props;

        let providerData = data.find(d => d.type === provider);
        let startValue = (providerData as any).data[0].y;

        let change = value - startValue;

        return {
            visible: true,
            x: x + 5 + 'px',
            y: y + 18 + 'px',
            value: value / 1000,
            provider,
            direction: change > 0 ? Direction.UP : Direction.DOWN,
            change: Math.floor(Math.abs(change / 1000)),
        };
    }

    private getLimits() {
        const { data } = this.props;

        let mins: Points = [];
        let maxs: Points = [];

        data.forEach(provider => {
            mins.push(getMin(provider.data));
            maxs.push(getMax(provider.data));
        });

        return {
            min: getMin(mins),
            max: getMax(maxs),
        };
    }
}

export default Chart;