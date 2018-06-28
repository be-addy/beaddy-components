import * as React from 'react';

import Text from './base/Text';
import Button from './base/Button';

interface Props {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    text: string;

    disabled?: boolean;
    textColor?: string;
    buttonColor?: string;
}

export default ({ onClick, text, textColor, buttonColor }: Props) => (
    <Button color={buttonColor} onClick={onClick}>
        <Text color={textColor}>{text}</Text>
    </Button>
);