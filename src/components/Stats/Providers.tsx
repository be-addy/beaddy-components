import * as React from 'react';
import BaseText from '../base/Text';

import { ProviderType } from '../base/Types';
import Provider from '../base/Provider';

const Text = BaseText.extend`
    color: #352e56;
    margin-left: 16px;
`;

export interface ProviderData {
    type: ProviderType;
    value: number;
}

interface Props {
    data: Array<ProviderData>;
}

const Providers = ({ data }: Props) => (
    <>
        {
            data.map((p: ProviderData) => {
                const value = p.value == null ? '' : p.value.toFixed(3);
                return (
                    <div key={p.type} style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                        <Provider type={p.type} /><Text>{value}</Text>
                    </div>);
            })
        }
    </>
);

export default Providers;
