import styled from 'styled-components';

export const Svg = styled.svg`
    transform: rotate(-90deg);
    border-radius: 50%;
`;

export const Inner = styled.circle`
    fill: ${(props: any) => props.theme.circularSlider.background.color};
    stroke: none;
    stroke-width: 1;
`;