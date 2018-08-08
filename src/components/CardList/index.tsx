import * as React from 'react';

import H3 from '../base/H3';
import Line from '../base/Line';
import Row from '../base/Row';
import Padding from '../base/Padding';
import SidePanel from '../base/SidePanel';
import Dropdown, { DropdownData } from '../base/Dropdown';

import Card, { CardData } from './Card';
import Circle from './Circle';

interface Props {
    activities: number;
    data: Array<CardData>;

    dropdownData: DropdownData;
    index: number;
    onSelected: (index: number) => void;

    onClose: (id: number) => void;

    hidden: boolean;
}

const Left = 28;
class CardList extends React.Component<Props> {
    public render() {
        const { activities, data, onClose, dropdownData, index, onSelected } = this.props;
        return (
            <SidePanel hidden={this.props.hidden}>
                <Padding top={32} right={48} bottom={20} left={Left}>
                    <Dropdown {...dropdownData} index={index} onSelected={(i) => onSelected(i)} />
                </Padding>
                <Line />
                <Padding top={20} bottom={32}>
                    <Padding bottom={16} left={Left}>
                        <Row>
                            <H3>Activities</H3>
                            <Circle>{activities}</Circle>
                        </Row>
                    </Padding>
                    {data.map((c) => (
                        <Padding top={4} bottom={4} left={Left}>
                            <Card onClose={(id) => onClose(id)} {...c} />
                        </Padding>
                    ))}
                </Padding>
            </SidePanel>
        );
    }
}

export default CardList;