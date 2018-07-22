import { ProviderType } from '../base/Types';

export interface Point {
    date: Date;
    value: number;
}

export interface ChartPoint extends Point {
    provider: ProviderType;
    x: number;
    y: number;
}

export type Provider = {
    type: ProviderType,
    color: string,
    data: Array<Point>,
};