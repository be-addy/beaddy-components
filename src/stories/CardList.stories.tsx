import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { Direction } from '../components/base/Types';

import CardList from '../components/CardList';
import { CardIcon } from '../components/CardList/Icons';

const stories = storiesOf('CardList', module);
const popover = {
    title: 'JUMP TO',
    options: [
        'Select report',
        'Report 1',
        'Report 2',
    ],
};

const LINK = 'https://www.google.com/search?q=';
const cards = [
    {
        id: 1,
        date: 'JUNE 26, 2017 - 11:31',
        icon: CardIcon.DOC,
        text: 'Report available for: ”Our best deals"',
        link: LINK + 'report1',
        linkText: 'View report',
        highlight: true,
    },
    {
        id: 2,
        date: 'JUNE 26, 2017 - 12:31',
        icon: CardIcon.FIRE,
        text: 'Share our passion is on fire!',
        link: 'https://google.com/fire',
        linkText: 'View more',

        extra: {
            title: 'CLICKS',
            value: 548.345,
            change: 100000,
            direction: Direction.UP,
        }
    },
    {
        id: 3,
        date: 'JUNE 26, 2017 - 12:31',
        icon: CardIcon.COMPLETE,
        text: 'Share our passion is on fire!',
        link: 'https://google.com/fire',
        linkText: 'View results',
    },
    {
        id: 4,
        date: 'JUNE 26, 2017 - 12:31',
        icon: CardIcon.DOC,
        text: 'Share our passion is on fire!',
        link: 'https://google.com/fire',
        linkText: 'View report',
        extra: {
            title: 'CLICKS',
            value: 548.3,
            change: 100000,
            direction: Direction.DOWN,
        }
    },
    {
        id: 5,
        date: 'JUNE 26, 2017 - 12:31',
        icon: CardIcon.DOC,
        text: 'Share our passion is on fire!',
        link: 'https://google.com/fire',
        linkText: 'View report',
    },
    {
        id: 6,
        date: 'JUNE 26, 2017 - 12:31',
        icon: CardIcon.DOC,
        text: 'Share our passion is on fire!',
        link: 'https://google.com/fire',
        linkText: 'View report',
    },
];

class CardListDefault extends React.Component {
    state = {
        index: 0,
        cards,
        hidden: false,
    };

    public render() {
        return (
            <div>
                <button
                    onClick={() => this.setState({ hidden: !this.state.hidden })}
                >
                    Toggle
                </button>
                <CardList
                    activities={2}
                    data={this.state.cards}
                    onClose={(id) => this.remove(id)}
                    index={this.state.index}
                    onSelected={(index) => this.setState({ index })}
                    dropdownData={popover}
                    hidden={this.state.hidden}
                />
            </div>
        );
    }

    remove(id: number) {
        let temp = [...this.state.cards];
        let index = temp.findIndex(c => c.id === id);
        temp.splice(index, 1);
        this.setState({ cards: temp });
    }
}

stories.add('default', () => <CardListDefault />);