import * as React from 'react';

import { Item, ScaledItem, ContentData } from './Props';
import Content from './Content';
import Drawing from './Drawing';
export { PieChartIcon } from './Icons';
import { Size } from './Sizes';
export { Size } from './Sizes';

interface Props {
    size: Size;
    content: ContentData;
    slices: Array<Item>;
}

class PieChart extends React.Component<Props> {
    state = {
        pressed: false,
        x: 0,
        y: 0,
    };

    public render() {
        let scaled = this.scale(this.props.slices);
        return (
            <div style={{ position: 'relative' }}>
                <Drawing
                    size={this.props.size}
                    data={scaled}
                    onMouseDown={(e: any) => this.onMouseDown(e)}
                />
                <Content {...this.props.content} />
            </div>
        );
    }

    private onMouseDown(e: MouseEvent) {
        if (e.which === 1) {
            this.setState({ pressed: true });
        }
    }

    private scale(data: Array<Item>): Array<ScaledItem> {
        let total = data.reduce((acc, item) => acc + item.value, 0);
        let sum = 0;
        let scaled = data.map(item => {
            let fraction = item.value / total;
            let percent = Math.floor(fraction * 100);
            sum += percent;

            return { ...item, pos: sum };
        });

        scaled[scaled.length - 1].pos = 101;
        return scaled.reverse();
    }
}

export default PieChart;