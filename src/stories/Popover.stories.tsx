import * as React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';

import Popover from '../components/Popover';
import PopoverTestList from './Helpers/TestList';

import ChartTip from '../components/ChartTip';

import { Direction, ProviderType } from '../components/base/Types';

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
                    <div style={{ display: 'flex' }}>
                        <Button onClick={this.toggle} onBlur={this.hide}>Focus</Button>
                        <ChartTip
                            visible={this.state.visible}
                            provider={ProviderType.TWITTER}
                            value="224.003"
                            change="20"
                            direction={Direction.UP}
                        />
                    </div>
                </div>
                <Popover visible={this.state.visible}>
                    <PopoverTestList />
                </Popover>
            </div >
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