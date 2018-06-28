import * as React from 'react';

import { ThemeProvider } from 'styled-components';

import def from './theme/default';

import ThemeSwitcher from './ThemeSwitcher';

import TextButton from './components/TextButton';

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
                        <TextButton onClick={this.onClick} text="Ok" />
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
