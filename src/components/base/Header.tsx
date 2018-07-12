import styled from 'styled-components';
import Theme from '../../theme';

interface Props {
    font?: string;
    color?: string;

    theme?: Theme;
}

const Header = styled.span`
    font-family: ${(props: Props) => props.font || (props.theme as Theme).font};
    color: ${(props: Props) => props.color || (props.theme as Theme).header.color};
    font-size: 24px;
`;

export default Header;