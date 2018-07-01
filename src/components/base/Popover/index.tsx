import * as React from 'react';
import styled from 'styled-components';

import Title from '../Title';

import Panel from './Panel';
import List from './List';
import Item from './List/Item';
import Button from './Button';

const Menu = styled.div.attrs({
    tabIndex: 0,
})`
    position: relative;
    &:before {
        content: "click me!";
    }

    &:focus {
        pointer-events: none;
    }

    padding: 0;
    margin: 0 0 1em 0;
    outline: 0;
`;

const Content = styled.div`
    position: absolute;
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    transition: visibility 0.5s;

    ${Menu}:focus & {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
    }
`;

interface Props {
    title: string;
}

export default ({ title }: Props) => (
    <Menu>
        <Content>
            <Panel>
                <List>
                    <Title>{title}</Title>
                    <Item><Button>One</Button></Item>
                    <Item><Button>Two</Button></Item>
                </List>
            </Panel>
        </Content>
    </Menu>
);