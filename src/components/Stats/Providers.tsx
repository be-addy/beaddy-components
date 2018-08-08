import * as React from 'react';
import Text from '../base/Text';

import Row from '../base/Row';
import Margin from '../base/Margin';
import Provider from '../base/Provider';
import { ProviderType } from '../base/Types';

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
                    <Margin key={p.type} bottom={16}>
                        <Row>
                            <Provider type={p.type} />
                            <Margin left={16}>
                                <Text>
                                    {value}
                                </Text>
                            </Margin>
                        </Row>
                    </Margin>
                );
            })
        }
    </>
);

export default Providers;
