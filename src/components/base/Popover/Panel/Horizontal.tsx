import * as React from 'react';
import styled from 'styled-components';

const Triangle = styled.div`
    height: 18px;
    width: 12px;
    position: relative;
    overflow: hidden;

    &:after {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        background: #ffffff;
        transform: rotate(45deg);
        top: 50%;
        left: 6px;
        margin-top: -5px;
        box-shadow: 0 0 20px 0 rgba(53, 46, 86, 0.1);
        border: solid 1px rgba(183, 179, 204, 0.3);

        z-index: 1;

        background-color: rgb(53, 46, 86);
    }
`;

const Panel = styled.div`
    border-radius: 5px;
    box-shadow: 0 0 20px 0 rgba(53, 46, 86, 0.1);
    background-color: #ffffff;
    border: solid 1px rgba(183, 179, 204, 0.3);

    position: relative;
    left: -1px;

    background-color: rgb(53, 46, 86);
    z-index: -100;

    padding: 10px;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
`;

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

export default ({ children }: any) => (
    <Container>
        <Triangle />
        <Panel>
            <Container>
                <Provider />
                <Value>224.003</Value>
                <Change>20</Change>
                <Up>^</Up>
            </Container>
        </Panel>
    </Container>
);