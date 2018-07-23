import * as React from 'react';
import log from '../../log';

import List from '../../components/Popover/List';
import Item from '../../components/Popover/List/Item';

import Title from '../../components/Popover/List/Title';
import Button from '../../components/Popover/List/Button';

import Line from '../../components/Popover/List/Line';

const TestList = () => (
    <List>
        <Item><Title>MANAGE CAMPAIGN</Title></Item>
        <Item><Button onClick={() => log('1')}>Edit Campaign</Button></Item>
        <Item><Button onClick={() => log('2')}>Copy Campaign</Button></Item>
        <Item><Button onClick={() => log('3')}>Delete Campaign</Button></Item>
        <Item><Line /></Item>
        <Item><Button disabled={true} onClick={() => log('4')}>Launch Campaign</Button></Item>
        <Item><Button disabled={true} onClick={() => log('5')}>Change launch date</Button></Item>
    </List>
);

export default TestList;