import * as React from 'react';
import Sizes, { Size } from '../../Sizes';
import ChartTip, { ChartTipData } from '../../../ChartTip';

import { Thumb } from '../Components';

import Container from './Container';

interface Props extends ChartTipData {
    size: Size;
    color: string;
}

const Tip = (props: Props) => {
    if (props.visible === false) {
        return null;
    }

    let R = Sizes(props.size).thumb.R;
    let x = Sizes(props.size).chartTip.x;
    let y = Sizes(props.size).chartTip.y;

    return (
        <Container x={props.x} y={props.y}>
            <Thumb R={R} color={props.color} />
            <ChartTip {...props} x={x} y={y} />
        </Container>
    );
};

export default Tip;