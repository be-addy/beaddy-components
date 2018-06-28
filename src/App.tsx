import * as React from 'react';

import { ThemeProvider } from 'styled-components';

import cool from './theme/cool';
import warm from './theme/warm';

import TextButton from './components/TextButton';

class App extends React.Component {
    public state = {
        name: 'default',
        theme: {},
    };
    
    constructor(props?: any) {
        super(props);
        this.handleThemeChange = this.handleThemeChange.bind(this);
    }

    public render() {
        return (
            <ThemeProvider theme={this.state.theme}>
                <div>
                    <label>Default<input
                        type="radio"
                        name="theme"
                        value="default"
                        checked={this.state.name === 'default'}
                        onChange={this.handleThemeChange}
                    /></label>
                    <label>Warm<input
                        type="radio"
                        name="theme"
                        value="warm"
                        checked={this.state.name === 'warm'}
                        onChange={this.handleThemeChange}
                    /></label>
                    <label>Cool<input
                        type="radio"
                        name="theme"
                        value="cool"
                        checked={this.state.name === 'cool'}
                        onChange={this.handleThemeChange}
                    /></label>
                    <div>
                        <TextButton onClick={this.onClick} text="Ok" />
                    </div>
                </div>
            </ThemeProvider>
        );
    }

    private handleThemeChange(e: any) {
        const name = e.target.value;
        let theme = null;

        switch (name) {
            case 'warm':
                theme = warm;
                break;
            case 'cool':
                theme = cool;
                break;
            default:
                theme = {};
        }

        this.setState({
            name,
            theme,
        });
    }

    onClick() {
        // tslint:disable-next-line
        console.log('onClick');
    }
}

export default App;
