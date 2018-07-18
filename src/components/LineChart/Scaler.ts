import { Point, Provider, DataPoint } from './Types';
import { DX, DY } from './Shift';

class Scaler {
    private provider: Provider;
    private width: number;
    private height: number;

    private max: Point;

    constructor(provider: Provider, max: Point, width: number, height: number) {
        this.provider = provider;
        this.width = width;
        this.height = height;

        this.max = max;
    }

    public scale(): Array<DataPoint> {
        return this.provider.data.map(point => ({
            x: this.getX(point.x), 
            y: this.getY(point.y),
            data: {
                value: point.y,
                provider: this.provider.type,
            }
        }));
    }

    private getX(x: number) {
        return (x / this.max.x * this.width) + DX;
    }

    private getY(y: number) {
        return this.height - (y / this.max.y * this.height) + DY;
    }
}

export default Scaler;