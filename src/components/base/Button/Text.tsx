import styled from 'styled-components';
import Theme from '../../../theme';

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

export default Text;