import * as React from 'react';
import Close from '-!svg-react-loader!./close.svg';

const Icon = ({ height, width, highlight = false, onClick }: any) => {
    return (
        <Close
            onClick={(e: any) => onClick(e)}
            className={'close-icon' + (highlight ? ' highlight' : '')}
            width={width}
            height={height}
        />
    );
};

export default Icon;