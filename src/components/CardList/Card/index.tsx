import * as React from 'react';
import styled from 'styled-components';

import Extra, { ExtraData } from './Extra';

import Text from '../../base/SidePanel/Text';

import Icon, { CardIcon } from '../Icons';
import Close from '../Icons/Close';

import Panel from './Panel';

const Date = styled.div`
  font-family: Muli;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1px;
  color: ${(props: any) => props.highlight ? '#ffffff' : '#b7b3cc'};
`;

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

const Link = styled.a`
  font-family: Muli;
  font-size: 14px;
  color: ${(props: any) => props.highlight ? '#ffffff' : '#5b31da'};
  text-decoration: none;
  display: block;
  text-align: center;
  padding: 0 0 16px 0;
`;

const HighlightedText = Text.extend`
    color: #ffffff;
`;

interface Props extends CardData {
    onClose: (id: number) => void;
}

const Padding = styled.div`
    padding: 8px 12px 0 12px;
`;

class Card extends React.Component<Props> {
    public render() {
        const { id, date, icon, text, link, linkText, highlight, extra, onClose } = this.props;
        return (
            <Panel highlight={highlight}>
                <Padding>
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
                            {
                                highlight
                                    ? <HighlightedText>{text}</HighlightedText>
                                    : <Text>{text}</Text>
                            }
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
