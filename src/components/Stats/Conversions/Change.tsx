import * as React from 'react';

import Arrow from '../../base/Arrow';
import Row from '../../base/Row';
import H2 from '../../base/H2';

const Change = ({ value, direction }: any) => (
    <Row>
        <H2>{value}</H2>
        <div style={{ width: 20, height: 20, marginLeft: 4 }}>
            <Arrow direction={direction} />
        </div>
    </Row>
);

export default Change;