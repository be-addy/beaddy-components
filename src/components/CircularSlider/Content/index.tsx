import * as React from 'react';
import styled from 'styled-components';

import Title from '../../base/Title';
import Header from '../../base/H2';
import Lock from '../../base/Lock';

import Item from './Item';

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0px;

    width: 160px;
    height: 160px;

    margin: 20px;
    border-radius: 50%;

    user-select: none;
`;

interface Props {
    title: string;
    header: string;

    locked: boolean;
    onLockChange: (locked: boolean) => void;
}

const Content = (props: Props) => (
    <Column>
        <Item>
            <Title>{props.title}</Title>
        </Item>
        <Item>
            <Header>{props.header}</Header>
        </Item>
        <Item>
            <Lock
                locked={props.locked}
                onChange={locked => props.onLockChange(locked)}
            />
        </Item>
    </Column>
);

export default Content;