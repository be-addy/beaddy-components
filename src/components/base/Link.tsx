import styled from 'styled-components';
import Theme from '../../theme';

interface Props {
    highlight?: boolean;
    theme?: Theme;
}

const Link = styled.a`
  font-family: ${(props: Props) => (props.theme as Theme).font};
  font-size: 14px;
  color: ${(props: Props) => props.highlight
        ? (props.theme as Theme).link.color.highlight
        : (props.theme as Theme).link.color.default
    };
  text-decoration: none;
  display: block;
`;

export default Link;