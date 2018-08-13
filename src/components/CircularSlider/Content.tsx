import * as React from 'react';
import styled from 'styled-components';

import Header from '../base/H2';
import Lock from '../base/Lock';
import Title from '../base/Title';
import Column from '../base/Circle/Column';

const Item = styled.div`
    padding: 8px;
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