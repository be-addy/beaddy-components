import * as React from 'react';

import List from '../../components/Popover/List';
import Item from '../../components/Popover/List/Item';

import Title from '../../components/Popover/List/Title';
import Button from '../../components/Popover/List/Button';

import Line from '../../components/base/Line';

const TestList = () => (
    <List>
        <Item><Title>MANAGE CAMPAIGN</Title></Item>
        <Item><Button onClick={() => action('1')}>Edit Campaign</Button></Item>
        <Item><Button onClick={() => action('2')}>Copy Campaign</Button></Item>
        <Item><Button onClick={() => action('3')}>Delete Campaign</Button></Item>
        <Item><Line /></Item>
        <Item><Button disabled={true} onClick={() => action('4')}>Launch Campaign</Button></Item>
        <Item><Button disabled={true} onClick={() => action('5')}>Change launch date</Button></Item>
    </List>
);

export default TestList;

// tslint:disable
function action(text: string) {
    console.log(text);
}