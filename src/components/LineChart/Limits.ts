import { Point, Points } from './Types';

export const getMin = (data: Points) => {
    return {
        x: data[0].x,
        y: data.reduce((min: number, p: Point) => p.y < min ? p.y : min, data[0].y),
    };
};

export const getMax = (data: Points) => {
    return {
        x: data[data.length - 1].x,
        y: data.reduce((max: number, p: Point) => p.y > max ? p.y : max, data[0].y),
    };
};