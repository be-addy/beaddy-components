import { ProviderType } from '../base/Types';

export interface Point {
    x: number;
    y: number;
}

export type Points = Array<Point>;

export type Provider = {
    type: ProviderType,
    color: string,
    data: Points,
};

export type DataPoint = {
    x: number,
    y: number,
    data: {
        value: number,
        provider: ProviderType
    }
};
