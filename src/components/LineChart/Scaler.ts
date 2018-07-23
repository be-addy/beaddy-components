import { ChartPoint, Provider } from './Types';
import { DX, DY } from './Shift';

class Scaler {
    private provider: Provider;
    private width: number;
    private height: number;

    private xmax: number;
    private ymax: number;

    constructor(provider: Provider, ymax: number, width: number, height: number) {
        this.provider = provider;
        this.width = width;
        this.height = height;

        this.xmax = provider.data.length;
        this.ymax = ymax;
    }

    public scale(): Array<ChartPoint> {
        return this.provider.data.map((point, i) => ({
            x: this.getX(i), 
            y: this.getY(point.value),
            provider: this.provider.type,
            ...point,
        }));
    }

    private getX(x: number) {
        return (x / this.xmax * this.width) + DX;
    }

    private getY(y: number) {
        return this.height - (y / this.ymax * this.height) + DY;
    }
}

export default Scaler;