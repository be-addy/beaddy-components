import * as React from 'react';

import { storiesOf } from '@storybook/react';

import LineChart from '../components/LineChart';
import { ProviderType } from '../components/base/Types';

const stories = storiesOf('LineChart', module);

class LineChartTest extends React.Component {
    public render() {
        const Providers = [
            { type: ProviderType.TWITTER, color: '#53acf0' },
            { type: ProviderType.FACEBOOK, color: '#5b31da' },
            { type: ProviderType.GOOGLE, color: '#50e3c2' },
            { type: ProviderType.APPNEXUS, color: '#352E56' },
        ];

        const data = Providers.map(provider => ({
            type: provider.type,
            color: provider.color,
            data: this.createFakeData(new Date(2017, 9, 22)),
        }));

        return (
            <LineChart data={data} height={200} width={860} />
        );
    }

    private createFakeData(start: Date, scale: number = 200000) {
        const shift = 100000;
        const data = [];
        let date = start;
        let end = new Date(start);
        end.setDate(end.getDate() + 10);

        while (date < end) {
            const random = Math.random();
            const temp: any = data.length > 0 ? data[data.length - 1].value : scale;
            const value = random >= .45 ? temp + Math.floor(random * shift) : temp - Math.floor(random * shift);
            data.push({ date, value });

            date = new Date(date);
            date.setDate(date.getDate() + 1);
        }

        return data;
    }
}

const LineChartDefault = <LineChartTest />;
export { LineChartDefault };

stories.add('default', () => LineChartDefault);