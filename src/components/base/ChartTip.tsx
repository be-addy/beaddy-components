import Text from './Text';
import { Direction } from './Types';
import Theme from '../../theme';

export const Value = Text.extend`
    color: #ffffff;
    margin: 0 4px 0 8px;
    font-size: 16px;
`;

interface Props {
    direction: Direction;
    theme?: Theme;
}

export const Change = Value.extend`
color: ${(props: Props) => props.direction === Direction.UP
        ? (props.theme as Theme).change.positive.color
        : (props.theme as Theme).change.negative.color}
`;