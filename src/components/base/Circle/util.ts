export function pointToCirclePercents(r: number, element: any, event: MouseEvent) {
    let rect = element.getBoundingClientRect();

    const dx = event.x - rect.x - r;
    const dy = r - (event.y - rect.y);

    let rads = getAngle(dx, dy);
    return radsToPerc(rads);
}

function getAngle(x: number, y: number) {
    if (x > 0 && y > 0) {
        return Math.atan(x / y);
    }

    if (x > 0 && y < 0) {
        return Math.atan(Math.abs(y) / x) + Math.PI / 2;
    }

    if (x < 0 && y < 0) {
        return Math.atan(Math.abs(x) / Math.abs(y)) + Math.PI;
    }

    if (x < 0 && y > 0) {
        return Math.atan(y / Math.abs(x)) + 3 * Math.PI / 2;
    }

    if (x === 0) {
        if (y > 0) {
            return 0;
        }

        return Math.PI;
    }

    if (x > 0) {
        return Math.PI / 2;
    }

    return 3 * Math.PI / 2;
}

function radsToPerc(rads: number) {
    return (rads / (2 * Math.PI)) * 100;
}

export function percToRads(perc: number) {
    return (2 * Math.PI * perc) / 100;
}