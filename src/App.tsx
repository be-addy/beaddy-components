import * as React from 'react';

import { ThemeProvider } from 'styled-components';

import def from './theme/default';

import ThemeSwitcher from './ThemeSwitcher';

import TextButton from './components/TextButton';
import ModalOkCancel from './components/ModalOkCancel';

class App extends React.Component {
    public state = {
        theme: def,
    };

    public render() {
        return (
            <ThemeProvider theme={this.state.theme}>
                <div>
                    <ThemeSwitcher onSwitch={theme => this.setState({ theme })} />
                    <div>
                        <TextButton onClick={this.onClick} text="Text Button" />
                        <ModalOkCancel
                            title="Quiting early today are we?"
                            message="No problem. We’ll save your campaign as draft."
                            buttonOkText="Save as draft"
                            buttonCancelText="Stay here"
                            onOk={this.onClick}
                            onCancel={this.onClick} 
                        />
                    </div>
                </div>
            </ThemeProvider>
        );
    }

    onClick() {
        // tslint:disable-next-line
        console.log('onClick');
    }
}

export default App;
