import * as React from 'react';
import Scaler from './Scaler';
import Axis from './Axis';

import Bezier from './Charts/Bezier';

import { DY, DX, MarginRight, MarginBottom } from './Shift';

import { Provider, ChartPoint } from './Types';

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

        const maxValue = this.getMaxValue();
        const dates = data[0].data.map(point => point.date);

        return (
            <div style={{ position: 'relative' }}>
                {this.chartTip()}
                <svg width={width} height={height}>
                    {
                        data.map((provider, i) => {
                            let scaler = new Scaler(provider, maxValue, w, h);
                            let scaledData = scaler.scale();

                            return <Bezier
                                key={i}
                                onMouseOver={(e: ChartPoint) => this.setState(this.getState(e))}
                                onMouseOut={() => this.setState({ visible: false })}
                                color={provider.color}
                                data={scaledData}
                            />;
                        })
                    }

                    <Axis dates={dates} width={w} height={h} maxValue={maxValue} />
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

    private getState(e: ChartPoint) {
        const { x, y, value, provider } = e;
        const { data } = this.props;

        let providerData = data.find(d => d.type === provider);
        let startValue = (providerData as any).data[0].value;

        let change = value - startValue;

        return {
            visible: true,
            x: x + 5 + 'px',
            y: y - 18 + 'px',
            value: value / 1000,
            provider,
            direction: change > 0 ? Direction.UP : Direction.DOWN,
            change: Math.floor(Math.abs(change / 1000)),
        };
    }

    private getMaxValue() {
        const { data } = this.props;

        let maxValue = 0;

        data.forEach(provider => {
            let maxProviderValue = provider.data
                .map(d => d.value)
                .reduce(
                    (max: number, value: number) =>
                        value > max
                            ? value
                            : max,
                    provider.data[0].value
                );

            maxValue = Math.max(maxValue, maxProviderValue);
        });

        return maxValue;
    }
}

export default Chart;