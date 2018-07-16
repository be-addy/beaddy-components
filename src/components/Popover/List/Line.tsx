import Line from '../../base/Line';
import Theme from '../../../theme';

interface Props {
    theme?: Theme;
}

export default Line.extend`
    color: ${(props: Props) => (props.theme as Theme).popover.list.line.color};
`;