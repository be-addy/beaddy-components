import styled from 'styled-components';
import Theme from '../../theme';

interface Props {
    highlight?: boolean;
    theme?: Theme;
}

const Text = styled.div`
    font-family: ${(props: Props) => (props.theme as Theme).font};
    color: ${(props: Props) => props.highlight
        ? (props.theme as Theme).text.color.highlight
        : (props.theme as Theme).text.color.default
    };
    font-size: 14px;
    line-height: 1.29;
`;

export const Light = Text.extend`
    color: #b7b3cc;
`;

export default Text;