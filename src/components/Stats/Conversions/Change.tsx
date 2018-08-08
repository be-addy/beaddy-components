import * as React from 'react';

import H2 from '../../base/H2';
import Row from '../../base/Row';
import Arrow from '../../base/Arrow';
import Margin from '../../base/Margin';

const Change = ({ value, direction }: any) => (
    <Row>
        <H2>{value}</H2>
        <Margin left={4}>
            <Arrow width={20} height={20} direction={direction} />
        </Margin>
    </Row>
);

export default Change;