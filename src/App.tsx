import * as React from 'react';

import { ThemeProvider } from 'styled-components';

import light from './theme/light';

import ThemeSwitcher from './ThemeSwitcher';
import TestComponents from './TestComponents';

class App extends React.Component {
    public state = {
        theme: light,
    };

    public render() {
        return (
            <ThemeProvider theme={this.state.theme}>
                <div>
                    <ThemeSwitcher onSwitch={theme => this.setState({ theme })} />
                    <TestComponents />
                </div>
            </ThemeProvider>
        );
    }
}

export default App;