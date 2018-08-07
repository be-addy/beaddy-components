import * as React from 'react';

import Fire from '-!svg-react-loader!./fire.svg';
import Complete from '-!svg-react-loader!./icon-complete.svg';
import Doc from '-!svg-react-loader!./icon-doc.svg';

export enum CardIcon {
    FIRE,
    COMPLETE,
    DOC,
}

const Icons = [
    { name: CardIcon.FIRE, icon: Fire },
    { name: CardIcon.COMPLETE, icon: Complete },
    { name: CardIcon.DOC, icon: Doc },
];

interface Props {
    name: CardIcon;
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