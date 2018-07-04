import styled from 'styled-components';
import Theme from '../../../theme';

interface Props {
    color?: string;
    hover?: string;
    radius?: string;
    width?: string;
    height?: string;
    margin?: string;

    theme?: Theme;
}

export default styled.button`
    background-color: ${(props: Props) => props.color || (props.theme as Theme).button.color.default};

    border-radius: ${props => props.radius || '100px'};
    width: ${props => props.width || '164px'};
    height: ${props => props.height || '40px'};
    margin: ${props => props.margin || '5px'};
    border: none;
    &:hover {
        background-color: ${(props: Props) => props.hover || (props.theme as Theme).button.color.hover}
    }
`;