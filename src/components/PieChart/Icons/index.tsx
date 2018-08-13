import * as React from 'react';

import Conv from '-!svg-react-loader!./icon-conv.svg';

export enum PieChartIcon {
    CONV,
}

const Icons = [
    { name: PieChartIcon.CONV, icon: Conv },
];

interface Props {
    name: PieChartIcon;
    height: number;
    width: number;
    highlight?: boolean;
}

const Icon = ({ name, height, width, highlight = false }: Props) => {
    let data = Icons.find(icon => icon.name === name);
    if (!data) {
        throw `Unknown icon name ${name}`;
    }

    return (
        <data.icon
            className={'card-list-icon' + (highlight ? ' highlight' : '')}
            width={width}
            height={height}
        />
    );
};

export default Icon;