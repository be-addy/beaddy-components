import styled from 'styled-components';

export const Outer = styled.circle`
    fill: transparent;
    stroke-width: 8;
    stroke: ${props => props.color};
`;

export const Thumb = styled.div`
    border-radius: 50%;
    width: ${(props: any) => props.R};
    height: ${(props: any) => props.R};
    background: ${props => props.color};
`;