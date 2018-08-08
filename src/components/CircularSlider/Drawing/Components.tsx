import styled from 'styled-components';
import { ThumbStroke } from '../const';

export const Svg = styled.svg`
    transform: rotate(-90deg);
    border-radius: 50%;
`;

export const Outer = styled.circle`
    fill: lightgrey;
    stroke: #5b31da;
    stroke-width: 32;
`;

export const Inner = styled.circle`
    fill: ${(props: any) => props.theme.circularSlider.background.color};
    stroke: none;
    stroke-width: 1;
`;

export const Thumb = styled.circle`
    stroke: #5b31da;
    stroke-width: ${ThumbStroke};
    fill: #ffffff;
`;