import * as React from 'react';
import styled from 'styled-components';

import Text from '../../base/Text';
import Padding from '../../base/Padding';

import Close from '../Icons/Close';
import Icon, { CardIcon } from '../Icons';

import Date from './Date';
import Link from './Link';
import Panel from './Panel';
import Extra, { ExtraData } from './Extra';

export interface CardData {
    id: number;
    date: string;
    icon: CardIcon;
    text: string;
    link: string;
    linkText: string;
    highlight?: boolean;

    extra?: ExtraData;
}

const Row = styled.div`
    display: flex;
    align-items: center;
    padding: 4px;
`;

interface Props extends CardData {
    onClose: (id: number) => void;
}

class Card extends React.Component<Props> {
    public render() {
        const { id, date, icon, text, link, linkText, highlight, extra, onClose } = this.props;
        return (
            <Panel highlight={highlight}>
                <Padding top={8} right={12} bottom={0} left={12}>
                    <Row>
                        <Date highlight={highlight}>{date}</Date>
                        <div style={{ flex: 1 }} />
                        <Close onClick={(e: any) => onClose(id)} highlight={highlight} height={8} width={8} />
                    </Row>
                    <Row>
                        <div style={{ padding: '0 12px 0 4px' }}>
                            <Icon name={icon} highlight={highlight} height={18} width={18} />
                        </div>
                        <div style={{ paddingRight: 24 }}>
                            <Text highlight={highlight}>{text}</Text>
                        </div>
                    </Row>
                </Padding>
                {extra && <Extra {...extra} />}
                <Link
                    highlight={highlight}
                    href={link}
                >
                    {linkText}
                </Link>
            </Panel >
        );
    }
}

export default Card;
