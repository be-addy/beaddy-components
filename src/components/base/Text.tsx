import styled from 'styled-components';
import Theme from '../../theme';

interface Props {
    font?: string;
    color?: string;
    marginBottom?: string;

    theme?: Theme;
}

export default styled.span`
    font-family: ${(props: Props) => props.font || (props.theme as Theme).font};
    color: ${props => props.color || props.theme.secondary};
    margin-bottom: ${props => props.marginBottom || '0px'};
    font-size: 14px;
    line-height: 1.29;
`;