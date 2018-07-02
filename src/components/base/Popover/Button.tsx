import styled from 'styled-components';
import Padding from './Padding';

export default styled.button`
    background: transparent;
    border: none;
    color: inherit;
    cursor: inherit;
    outline: 0;
    ${Padding}
    cursor: pointer;
    &:hover {
        color: #ff8c31;
    }
`;