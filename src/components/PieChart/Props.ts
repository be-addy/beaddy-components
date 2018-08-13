import { ProviderType, Direction } from '../../components/base/Types';
import { PieChartIcon } from './index';

export interface Item {
    provider: ProviderType;
    color: string;
    value: number;
    change: number;
}

export interface ScaledItem extends Item {
    pos: number;
}

export interface ContentData {
    icon?: PieChartIcon;
    title: string;
    value: string;
    extra?: string;
    change: string;
    direction?: Direction;
}