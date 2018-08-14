import * as React from 'react';

import H2 from '../../base/H2';
import Title from '../../base/Title';
import Margin from '../../base/Margin';
import Padding from '../../base/Padding';
import { Direction } from '../../base/Types';

import Change from './Change';

export interface ConversionData {
    title: string;
    value: number;
    direction?: Direction;
}

const Item = (props: ConversionData) => {
    const { title, direction } = props;
    const value = props.value == null ? '' : props.value.toFixed(3);
    return (
        <Padding top={12} bottom={12}>
            <Margin bottom={5}>
                <Title>{title}</Title>
            </Margin>
            {
                direction == null
                    ? <H2>{value}</H2>
                    : <Change value={value} direction={direction} />
            }
        </Padding>
    );
};

export default Item;