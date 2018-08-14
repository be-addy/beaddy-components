import * as React from 'react';
import * as util from '../base/Circle/util';

import {    
    RadiusInScreenPixels,
    Radius,
} from '../base/Circle/const';

import {
    ThumbRadius,
    ThumbStroke
} from './const';

import Props from './Props';
import Drawing from './Drawing';
import Content from './Content';

class CircularSlider extends React.Component<Props> {
    element: any;

    state = {
        pressed: false,
        x: 0,
        y: 0,
    };

    componentDidMount() {
        this.stateFromProps(this.props);
        window.addEventListener('mousemove', this.onMouseMove.bind(this), false);
        window.addEventListener('mouseup', this.onMouseUp.bind(this), false);
    }

    componentWillReceiveProps(props: Props) {
        this.stateFromProps(props);
    }

    stateFromProps(props: Props) {
        this.setThumbPos(util.percToRads(props.pos as number));
    }

    public render() {
        const { header, title, pos, onLockChange } = this.props;
        return (
            <div style={{ position: 'relative' }}>
                <Drawing
                    x={this.state.x}
                    y={this.state.y}
                    onRef={(e: any) => this.element = e}
                    onMouseDown={(e: any) => this.onMouseDown(e)}
                    pos={pos}
                />
                <Content
                    header={header}
                    title={title}
                    locked={this.props.locked}
                    onLockChange={(locked: boolean) => onLockChange(locked)}
                />
            </div>
        );
    }

    private onMouseMove(e: MouseEvent) {
        if (this.state.pressed) {
            this.getPos(e);
        }
    }

    private onMouseUp(e: MouseEvent) {
        if (e.which === 1) {
            this.setState({ pressed: false });
        }
    }

    private onMouseDown(e: MouseEvent) {
        if (e.which === 1) {
            this.setState({ pressed: true });
            this.getPos(e);
        }
    }

    private getPos(e: MouseEvent): void {
        if (this.props.locked) {
            return;
        }

        let pos = util.pointToCirclePercents(RadiusInScreenPixels, this.element, e);
        this.props.onPosChange(pos);
    }

    private setThumbPos(rads: number) {
        let r = Radius - (ThumbRadius + ThumbStroke * 0.5);
        let angle = rads + Math.PI / 2;
        let x = Math.sin(angle) * r + Radius;
        let y = Radius - Math.cos(angle) * r;
        this.setState({ x, y });
    }
}

export default CircularSlider;