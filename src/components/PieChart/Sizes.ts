const Narrow = {
    width: 1.5,
    chartTip: {
        x: '16px',
        y: '-12px',
    },

    thumb: {
        R: '16px',
        pos: {
            dr: 0.7,
            dxy: 8,
        }
    }
};

const Wide = {
    width: 3,
    chartTip: {
        x: '24px',
        y: '-9px',
    },

    thumb: {
        R: '24px',
        pos: {
            dr: 1.5,
            dxy: 12,
        }
    }
};

export enum Size {
    WIDE,
    NARROW,
}

const list = [
    { size: Size.WIDE, data: Wide},
    { size: Size.NARROW, data: Narrow}
];

const Sizes = (size: Size) => {
    let sizes = list.find((d) => d.size === size);
    if (sizes == null) {
        throw 'Unknown size ' + size;
    }

    return sizes.data;
};

export default Sizes;