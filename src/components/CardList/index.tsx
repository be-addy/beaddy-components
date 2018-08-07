import * as React from 'react';
import styled from 'styled-components';

import H3 from '../base/H3';
import Line from '../base/Line';
import Row from '../base/Row';

import Dropdown, { PopoverData } from '../base/Dropdown';

import SidePanel from '../base/SidePanel';

import Card, { CardData } from './Card';

const Padding = styled.div`
    padding: 4px 0 4px 28px;
`;

const PaddingActivities = Padding.extend`
    padding-bottom: 16px;
`;

const PaddingDropdown = Padding.extend`
    padding: 32px 48px 20px 28px;
`;

const Circle = styled.div`
    border-radius: 50%;
    background: #23e2a1;
    width: 16px;
    height: 16px;
    text-align: center;
    margin-left: 4px;
`;

const Text = styled.div`
    font-family: Muli;
    font-size: 10px;
    font-weight: 600;
    text-align: center;
    color: #ffffff;
`;

interface Props {
    activities: number;
    data: Array<CardData>;
    popover: PopoverData;

    index: number;
    onSelected: (index: number) => void;

    onClose: (id: number) => void;

    hidden: boolean;
}

class CardList extends React.Component<Props> {
    public render() {
        const { activities, data, popover, index, onSelected, onClose } = this.props;
        return (
            <SidePanel hidden={this.props.hidden}>
                <PaddingDropdown>
                    <Dropdown {...popover} index={index} onSelected={(i) => onSelected(i)} />
                </PaddingDropdown>
                <Line />
                <div style={{ padding: '20px 0 32px 0' }}>
                    <PaddingActivities>
                        <Row>
                            <H3>Activities</H3>
                            <Circle>
                                <Text>{activities}</Text>
                            </Circle>
                        </Row>
                    </PaddingActivities>
                    {data.map((c) => (
                        <Padding>
                            <Card onClose={(id) => onClose(id)} {...c} />
                        </Padding>
                    ))}
                </div>
            </SidePanel>
        );
    }
}

export default CardList;