import styled from 'styled-components';
export default styled.span`
    font-family: ${(props: any) => props.font || props.theme.font || 'Muli'};
    color: ${props => props.color || props.theme.secondary || '#ffffff'}
    font-size: 14px;
    line-height: 1.29;
`;