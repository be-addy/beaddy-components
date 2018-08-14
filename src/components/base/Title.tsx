import styled from 'styled-components';
import Theme from '../../theme';

interface Props {
    font?: string;
    color?: string;

    theme?: Theme;
}

const Title = styled.div`
    font-size: 10px;
    font-weight: 800;
    font-family: ${(props: Props) => (props.theme as Theme).font};
    letter-spacing: 1px;
    color: ${(props: Props) => (props.theme as Theme).title.color};
`;

export default Title;