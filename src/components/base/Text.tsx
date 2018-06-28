import styled from 'styled-components';
import Theme from '../../theme';

interface Props {
    font?: string;
    color?: string;

    theme?: Theme;
}

export default styled.span`
    font-family: ${(props: Props) => props.font || (props.theme as Theme).font}
    color: ${props => props.color || props.theme.secondary}
    font-size: 14px
    line-height: 1.29
`;