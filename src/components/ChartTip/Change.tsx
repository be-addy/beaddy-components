import { Direction } from '../base/Types';
import Theme from '../../theme';
import Value from './Value';

interface Props {
    direction: Direction;
    theme?: Theme;
}

const Change = Value.extend`
color: ${(props: Props) => props.direction === Direction.UP
        ? (props.theme as Theme).change.positive.color
        : (props.theme as Theme).change.negative.color}
`;

export default Change;