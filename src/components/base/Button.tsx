import styled from 'styled-components';

interface Props {
    color?: string;
    radius?: string;
    width?: string;
    height?: string;

    theme?: any;
}

export default styled.button`
    background-color: ${(props: Props) => props.color || props.theme.primary || '#5b31da'}

    border-radius: ${props => props.radius || '100px'}
    width: ${props => props.width || '164px'};
    height: ${props => props.height || '40px'};
`;