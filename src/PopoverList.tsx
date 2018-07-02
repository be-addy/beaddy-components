import * as React from 'react';

import Title from './components/base/Popover/Title';
import Line from './components/base/Line';

import List from './components/base/Popover/List';
import Item from './components/base/Popover/List/Item';
import Button from './components/base/Popover/Button';

export default () => (
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

// tslint:disable
function action(text: string) {
    console.log(text);
}