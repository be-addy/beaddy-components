import * as React from 'react';

import Title from './components/base/Popover/Title';
import Line from './components/base/Line';

import List from './components/base/Popover/List';
import Item from './components/base/Popover/List/Item';
import Button from './components/base/Popover/Button';

export default () => (
    <List>
        <Item><Title>MANAGE CAMPAIGN</Title></Item>
        <Item><Button>Edit Campaign</Button></Item>
        <Item><Button>Copy Campaign</Button></Item>
        <Item><Button>Delete Campaign</Button></Item>
        <Item><Line /></Item>
        <Item><Button>Launch Campaign</Button></Item>
        <Item><Button>Change launch date</Button></Item>
    </List>
);