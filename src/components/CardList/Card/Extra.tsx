import * as React from 'react';
import styled from 'styled-components';

import Text from '../../base/Text';
import Arrow from '../../base/Arrow';
import { Direction } from '../../base/Types';
import Line from '../../base/Line';

export interface ExtraData {
    title: string;
    value: number;
    change: number;
    direction: Direction;
}

const Title = styled.div`
  font-family: Muli;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1px;
  color: #5b31da;
`;

const Value = styled.div`
  font-family: Muli;
  font-size: 20px;
  color: #5b31da;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
`;

const Padding = styled.div`
    padding: 0 0 4px 0;
`;

class Extra extends React.Component<ExtraData> {
    public render() {
        const { title, value, change, direction } = this.props;
        return (
            <div style={{ padding: '8px 0 8px 0' }}>
                <Line />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '8px 0 8px 0' }}>
                    <Padding><Title>{title}</Title></Padding>
                    <Padding><Value>{value.toFixed(3)}</Value></Padding>
                    <Padding>
                        <Row>
                            <Text>{change}</Text>
                            <div style={{ width: 14, height: 14, paddingLeft: 2 }}>
                                <Arrow direction={direction} />
                            </div>
                        </Row>
                    </Padding>
                </div>
                <Line />
            </div>
        );
    }
}

export default Extra;