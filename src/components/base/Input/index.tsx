import styled from 'styled-components';
import Theme from '../../../theme';

interface StyledProps {
    theme?: Theme;
}

export default styled.input`
    font-family: ${(props: StyledProps) => (props.theme as Theme).font};
    background: transparent;
    border: none;
    border-bottom: 1px solid ${(props: StyledProps) => (props.theme as Theme).input.color};
    padding: 8px 0 8px 0;
    &::placeholder {
        font-size: 14px;
        font-weight: normal;
        line-height: 1.29;
        color: #b7b3cd;
    }

    &:focus {
        outline: none;
    }
`;