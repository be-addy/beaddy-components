import * as React from 'react';

import styled from 'styled-components';

import Button from './Button';

const Row = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 16px;
`;

const ActiveButton = Button.extend`
    border-radius: 100px;
    background: #5b31da;
    border: none;
    outline: 0;

    color: #ffffff;
    padding: 2px 12px 4px 12px;
    &:hover {
        color: #ffffff;
    }
`;

export enum Mode {
    SinceLaunch,
    ThisWeek,
    ThisMonth,
    ThisYear,

    Custom,
}

const Buttons = [
    'Since launch',
    'This week',
    'This month',
    'This year',
];

interface Props {
    mode: Mode;
    onSelected: (mode: Mode) => void;
}

const ControlPanel = ({ mode, onSelected }: Props) => (
    <Row>
        {
            Buttons.map((text, i) =>
                mode === i
                    ? <ActiveButton key={i}>{text}</ActiveButton>
                    : <Button
                        key={i}
                        onClick={() => onSelected(i)}
                    >
                        {text}
                    </Button>
            )
        }
    </Row>
);

export default ControlPanel;