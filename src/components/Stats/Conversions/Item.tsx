import * as React from 'react';
import styled from 'styled-components';

import { Direction } from '../../base/Types';
import H2 from '../../base/H2';
import BaseTitle from '../../base/Title';

import Change from './Change';

const Padding = styled.div`
    padding: 12px 0 12px 0;
`;

const Title = BaseTitle.extend`
    margin: 0 0 5px 0;
`;

export interface ConversionData {
    title: string;
    value: number;
    direction?: Direction;
}

const Item = (props: ConversionData) => {
    const { title, direction } = props;
    const value = props.value == null ? '' : props.value.toFixed(3);
    return (
        <Padding>
            <Title>{title}</Title>
            {direction == null
                ? <H2>{value}</H2>
                : <Change value={value} direction={direction} />
            }
        </Padding>
    );
};

export default Item;