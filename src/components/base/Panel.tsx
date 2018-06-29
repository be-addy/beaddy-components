import styled from 'styled-components';
import Theme from '../../theme';

interface Props {
    width?: string;
    height?: string;

    color?: string;

    theme?: Theme;
}

export default styled.div`
    width: ${(props: Props) => props.width};
    height: ${props => props.height};

    border-radius: 5px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
    background-color: ${(props: Props) => props.color || (props.theme as Theme).panel.color};
    border: solid 1px rgba(183, 179, 204, 0.3);

    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;