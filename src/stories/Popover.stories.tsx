import * as React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';

import Popover from '../components/Popover/index';
import PopoverTestList from './Helpers/TestList';

const stories = storiesOf('Popover', module);

const Button = styled.button`
    margin: 5px;
`;

class PopoverTest extends React.Component {
    state = {
        visible: true,
    };

    render() {
        return (
            <div>
                <div>
                    <Button onClick={this.toggle}>Toggle</Button>
                    <Button onMouseOver={this.show} onMouseOut={this.hide}>Hover</Button>
                    <Button onClick={this.toggle} onBlur={this.hide}>Focus</Button>
                </div>
                <Popover visible={this.state.visible}>
                    <PopoverTestList />
                </Popover>
            </div>
        );
    }

    show = () => {
        this.setState({ visible: true });
    }

    hide = () => {
        this.setState({ visible: false });
    }

    toggle = () => {
        this.setState({ visible: !this.state.visible });
    }
}

export const PopoverDefault = <PopoverTest />;
stories.add('default', () => PopoverDefault);