import * as React from 'react';

import Button from './base/Button';
import Text from './base/Button/Text';

interface Props {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    text: string;

    width?: string;
    textColor?: string;
    buttonColor?: string;
    buttonHoverColor?: string;
}

const TextButton = (props: Props) => (
    <Button
        color={props.buttonColor}
        hover={props.buttonHoverColor}
        width={props.width}
        onClick={props.onClick}
    >
        <Text color={props.textColor}>{props.text}</Text>
    </Button>
);

export default TextButton;