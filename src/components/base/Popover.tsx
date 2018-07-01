import * as React from 'react';
import styled from 'styled-components';
// import Theme from '../../theme';

import Title from './Title';

const Triangle = styled.div`
    width: 100px;
    height: 10px;
    position: relative;
    overflow: hidden;

    &:after {
        content: "";
        position: absolute;
        width: 50px;
        height: 50px;
        background: #ffffff;
        transform: rotate(45deg);
        top: 10px;
        left: 25px;
        box-shadow: 0 0 20px 0 rgba(53, 46, 86, 0.1);
        border: solid 1px rgba(183, 179, 204, 0.3);

        z-index: 1;
    }
`;

const List = styled.ul`
    margin: 0;
    padding: 0;

    height: 100px;
    width: 100px;

    border-radius: 5px;
    box-shadow: 0 0 20px 0 rgba(53, 46, 86, 0.1);
    background-color: #ffffff;
    border: solid 1px rgba(183, 179, 204, 0.3);

    position: relative;
    top: -1px;
`;

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

const MenuContent = styled.div`
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

const Item = styled.li`
    list-style-type: none;
    white-space: nowrap;
`;

const Button = styled.button`
    background: transparent;
    border: none;
    color: inherit;
    cursor: inherit;
    outline: 0;
    cursor: pointer;
    &:hover {
        color: #ff8c31;
    }
`;

interface Props {
    title: string;
}

export default ({ title }: Props) => (
    <Menu>
        <MenuContent>
            <Triangle />
            <List>
                <Title>{title}</Title>
                <Item><Button>One</Button></Item>
                <Item><Button>Two</Button></Item>
            </List>
        </MenuContent>
    </Menu>);