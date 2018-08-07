import * as React from 'react';

import Item, { ConversionData } from './Item';

export { ConversionData } from './Item';

interface Props {
    data: Array<ConversionData>;
}

const Conversions = ({ data }: Props) => (
    <>
        {
            data.map(d => (
                <Item
                    key={d.title}
                    {...d}
                />))
        }
    </>
);

export default Conversions;