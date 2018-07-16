import Text from '../base/Text';
import Theme from '../../theme';

interface Props {
    theme?: Theme;
}

const Value = Text.extend`
    color: ${(props: Props) => (props.theme as Theme).chart.tooltip.value.color};
    margin: 0 4px 0 8px;
    font-size: 16px;
`;

export default Value;