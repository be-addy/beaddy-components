import * as React from 'react';
import styled from 'styled-components';

import Row from '../base/Row';
import Header from '../base/H2';
import Title from '../base/Title';
import Arrow from '../base/Arrow';
import Margin from '../base/Margin';
import Column from '../base/Circle/Column';
import Text, { Light } from '../base/Text';

import Icon from './Icons';
import { ContentData } from './Props';

const Item = styled.div`
    padding: 2px;
`;

const Content = (props: ContentData) => (
    <Column>
        {props.icon != null && (
            <Item>
                <Icon name={props.icon} width={16} height={16} />
            </Item>
        )}
        <Item>
            <Title>{props.title}</Title>
        </Item>
        <Item>
            {props.direction
                ? (
                    <Row>
                        <Header>{props.value}</Header>
                        <Margin left={4}>
                            <Arrow width={16} height={16} direction={props.direction} />
                        </Margin>
                    </Row>
                )
                : <Header>{props.value}</Header>
            }
        </Item>
        {props.extra && (
            <Item>
                <Light>{props.extra}</Light>
            </Item>)
        }
        <Item>
            <Text>{props.change}</Text>
        </Item>
    </Column>
);

export default Content;