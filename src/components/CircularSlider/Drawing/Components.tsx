import styled from 'styled-components';
import { ThumbStroke } from '../const';

export const Outer = styled.circle`
    fill: lightgrey;
    stroke: #5b31da;
    stroke-width: 8;
`;

export const Thumb = styled.circle`
    stroke: #5b31da;
    stroke-width: ${ThumbStroke};
    fill: #ffffff;
`;