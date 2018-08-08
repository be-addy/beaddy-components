import * as React from 'react';

import Row from '../../base/Row';
import Line from '../../base/Line';
import Text from '../../base/Text';
import Title from '../../base/Title';
import Arrow from '../../base/Arrow';
import Column from '../../base/Column';
import Padding from '../../base/Padding';
import { Direction } from '../../base/Types';

const Value = Title.extend`
  font-size: 20px;
  font-weight: normal;
`;

export interface ExtraData {
    title: string;
    value: number;
    change: number;
    direction: Direction;
}

class Extra extends React.Component<ExtraData> {
    public render() {
        const { title, value, change, direction } = this.props;
        return (
            <Padding top={8} bottom={8}>
                <Line />
                <Padding top={8} bottom={8}>
                    <Column>
                        <Padding bottom={4}><Title>{title}</Title></Padding>
                        <Padding bottom={4}><Value>{value.toFixed(3)}</Value></Padding>
                        <Padding bottom={4}>
                            <Row>
                                <Text>{change}</Text>
                                <Padding left={2}>
                                    <Arrow width={14} height={14} direction={direction} />
                                </Padding>
                            </Row>
                        </Padding>
                    </Column>
                </Padding>
                <Line />
            </Padding>
        );
    }
}

export default Extra;