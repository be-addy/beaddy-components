import * as React from 'react';

import * as util from '../../base/Circle/util';
import { Svg, Inner } from '../../base/Circle/Components';
import { ProviderType, Direction } from '../../base/Types';

import {
    RadiusInScreenPixels,
    Radius,
} from '../../base/Circle/const';

import Sizes, { Size } from '../Sizes';
import { ScaledItem } from '../Props';

import Tip from './Tip';
import { Outer } from './Components';

interface Props {
    size: Size;
    onMouseDown: (e: any) => void;
    data: Array<ScaledItem>;
}

const r = Radius;
const cx = Radius;
const cy = cx;

const side = 2 * Radius;

class Drawing extends React.Component<Props> {
    element: any;
    state = {
        x: '100px',
        y: '150px',
        visible: false,

        value: 20000,
        provider: ProviderType.FACEBOOK,
        change: '20',
        direction: Direction.UP,
        color: 'red',
    };

    public render() {
        const { data } = this.props;

        return (
            <div style={{ position: 'relative' }}>
                <Svg
                    innerRef={(e) => this.element = e}
                    width={RadiusInScreenPixels * 2}
                    height={RadiusInScreenPixels * 2}
                    viewBox={`0 0 ${side} ${side}`}
                >
                    {
                        data.map((item, index) => {
                            return (
                                <Outer
                                    key={index}
                                    onMouseOut={(e: any) => this.onMouseOut(e.nativeEvent)}
                                    onMouseMove={(e: any) => this.onMouseMove(e.nativeEvent)}
                                    r={r}
                                    cx={cx}
                                    cy={cy}
                                    strokeDasharray={`${item.pos} 100`}
                                    color={item.color}
                                />
                            );
                        })
                    }
                    <Inner
                        r={r - Sizes(this.props.size).width}
                        cx={cx}
                        cy={cy}
                    />
                </Svg>
                <Tip size={this.props.size} {...this.state} value={this.state.value.toFixed(3)} />
            </div>
        );
    }

    private onMouseMove(e: any) {
        let pos = this.getPos(e);
        let thumbPos = this.getThumbPos(pos);
        this.setThumbPos(util.percToRads(thumbPos));
    }

    private onMouseOut(e: any) {
        this.setState({ visible: false });
    }

    private getThumbPos(pos: number) {
        const { data } = this.props;
        let index = 0;
        while (data[index].pos > pos) {
            ++index;
            if (index === data.length) {
                break;
            }
        }

        --index;

        if (index < 0) {
            throw 'Position is incorrect ' + pos;
        }

        this.setState({ ...data[index] });

        let nextPos = index + 1 < data.length ? data[index + 1].pos : 0;
        let thisPos = data[index].pos;

        let middle = nextPos + (thisPos - nextPos) / 2;

        return middle;
    }

    private setThumbPos(angle: number) {
        let dr = Sizes(this.props.size).thumb.pos.dr;
        let x = Math.sin(angle) * (r - dr) + Radius;
        let y = Radius - Math.cos(angle) * (r - dr);
        const k = RadiusInScreenPixels / r;

        let dxy = Sizes(this.props.size).thumb.pos.dxy;
        this.setState(
            {
                x: x * k - dxy + 'px',
                y: y * k - dxy + 'px',
                visible: true
            }
        );
    }

    private getPos(e: MouseEvent) {
        return util.pointToCirclePercents(RadiusInScreenPixels, this.element, e);
    }
}

export default Drawing;