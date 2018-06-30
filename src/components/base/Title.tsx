import styled from 'styled-components';
import Theme from '../../theme';

interface Props {
    font?: string;
    color?: string;

    theme?: Theme;
}

export default styled.span`
    font-size: 10px;
    font-weight: 800;
    font-family: ${(props: Props) => props.font || (props.theme as Theme).font};
    letter-spacing: 1px;
    color: ${(props: Props) => props.color || (props.theme as Theme).title.color};
    display: block;
`;