import * as React from 'react';
import styled from 'styled-components';
import Container from './Container';

const Value = styled.span`
    font-family: Muli;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.13;
    letter-spacing: normal;
    color: #ffffff;

    margin: 0 8px 0 8px;
`;

const Change = Value.extend`
    color: #23e2a1;
`;

const Up = Change.extend`
    margin: 0 0 0 5px;
`;

const Provider = styled.span`
    width: 16px;
    height: 16px;
    background-color: #53acf0;
    margin: 0 8px 0 8px;
`;

export default () => (
    <Container>
        <Provider />
        <Value>224.003</Value>
        <Change>20</Change>
        <Up>^</Up>
    </Container>
);