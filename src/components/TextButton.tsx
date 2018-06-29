import * as React from 'react';
import styled from 'styled-components';

import Theme from '../theme';

import Button from './base/Button';

interface Props {
    font?: string;
    color?: string;

    theme?: Theme;
}

const Text = styled.span`
    font-family: ${(props: Props) => props.font || (props.theme as Theme).font};
    color: ${(props: Props) => props.color || (props.theme as Theme).button.text.color};
    font-size: 14px;
    line-height: 1.29;
`;

interface ButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    text: string;

    width?: string;
    textColor?: string;
    buttonColor?: string;
}

export default (props: ButtonProps) => (
    <Button
        color={props.buttonColor}
        width={props.width}
        onClick={props.onClick}
    >
        <Text color={props.textColor}>{props.text}</Text>
    </Button>
);