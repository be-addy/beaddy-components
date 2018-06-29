import * as React from 'react';

import Text from './base/Text';
import Button from './base/Button';

interface Props {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    text: string;

    width?: string;
    textColor?: string;
    buttonColor?: string;
}

export default (props: Props) => (
    <Button color={props.buttonColor} width={props.width} onClick={props.onClick}>
        <Text color={props.textColor}>{props.text}</Text>
    </Button>
);