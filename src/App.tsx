import * as React from 'react';

import { ThemeProvider } from 'styled-components';

import light from './theme/light';

import ThemeSwitcher from './ThemeSwitcher';

import Popover from './components/base/Popover';
import List from './components/base/Popover/List';
import Item from './components/base/Popover/List/Item';
import Button from './components/base/Popover/Button';

import Panel from './components/base/Popover/Panel';

import Title from './components/base/Title';

import TextButton from './components/TextButton';
import Input from './components/base/Input';
import ModalOkCancel from './components/ModalOkCancel';

class App extends React.Component {
    public state = {
        theme: light,
    };

    public render() {
        return (
            <ThemeProvider theme={this.state.theme}>
                <div>
                    <ThemeSwitcher onSwitch={theme => this.setState({ theme })} />
                    <div>
                        <TextButton onClick={action} text="Text Button" />
                        <ModalOkCancel
                            title="Quiting early today are we?"
                            message="No problem. We’ll save your campaign as draft."
                            buttonOkText="Save as draft"
                            buttonCancelText="Stay here"
                            onOk={action}
                            onCancel={action}
                        />
                        <Input label="CAMPAIGN NAME" placeholder="Campaign name" onChange={text => action(text)} />
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                width: '50%'
                            }}
                        >
                            <Popover width="182px">
                                <List>
                                    <Title>MANAGE CAMPAIGN</Title>
                                    <Item><Button>Edit Campaign</Button></Item>
                                    <Item><Button>Copy Campaign</Button></Item>
                                    <Item><Button>Delete Campaign</Button></Item>
                                    <Item><hr /></Item>
                                    <Item><Button>Launch Campaign</Button></Item>
                                    <Item><Button>Change launch date</Button></Item>
                                </List>
                            </Popover>
                            <Panel>
                                <List>
                                    <Title>MANAGE CAMPAIGN</Title>
                                    <Item><Button>One</Button></Item>
                                    <Item>Two</Item>
                                    <Item>Three</Item>
                                </List>
                            </Panel>
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        );
    }
}

function action(param?: any) {
    // tslint:disable-next-line
    console.log('action', param);
}

export default App;
