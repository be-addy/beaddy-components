import * as React from 'react';
import styled from 'styled-components';
import Title from './Title';

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
    &:before {
        padding: 5px 10px;
        background-color: #94a4a5;
    }   
`;

const MenuContent = styled.ul`
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

    &:before {
        content: "";
        width: 0;
        height: 0;

        border-bottom: 10px solid #364656;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;

        position: absolute;
        top: -10px;
    }

    background-color: #364656;
    width: auto;

    margin-top: 19px;
    margin-left: 0;
    padding: 10px;
`;

const Item = styled.li`
    color: #f2f5e9;
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
            <Title>{title}</Title>
            <Item><Button>One</Button></Item>
            <Item><Button>Two</Button></Item>
        </MenuContent>
    </Menu>);