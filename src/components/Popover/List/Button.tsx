import styled from 'styled-components';
import Padding from './Padding';
import Theme from '../../../theme';

interface Props {
    disabled?: boolean;
    theme?: Theme;
}

const Button = styled.button`
    background: transparent;
    border: none;
    outline: 0;
    ${Padding}
    cursor: pointer;
    color: ${(props: Props) => props.disabled
        ? (props.theme as Theme).popover.list.button.disabled.color
        : (props.theme as Theme).popover.list.button.active.color};
    &:hover {
        color: ${(props: Props) => props.disabled
        ? (props.theme as Theme).popover.list.button.disabled.color
        : (props.theme as Theme).popover.list.button.hover.color};
    }
`;

export default Button;