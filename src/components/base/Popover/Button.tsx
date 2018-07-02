import styled from 'styled-components';
import Padding from './Padding';

interface Props {
    disabled?: boolean;
}

export default styled.button`
    background: transparent;
    border: none;
    outline: 0;
    ${Padding}
    cursor: pointer;
    color: ${(props: Props) => props.disabled ? 'grey' : 'inherit'};
    &:hover {
        color: ${(props: Props) => props.disabled ? 'grey' : '#ff8c31'};
    }
`;