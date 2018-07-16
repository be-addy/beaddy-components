import Title from '../../base/Title';
import Padding from './Padding';

import Theme from '../../../theme';

interface Props {
    theme?: Theme;
}

export default Title.extend`
    ${Padding};
    color: ${(props: Props) => (props.theme as Theme).popover.list.title.color};
`;