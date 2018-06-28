import * as React from 'react';

import cool from './theme/cool';
import warm from './theme/warm';

interface Props {
    onSwitch: (theme: any) => void;
}

class ThemeSwitcher extends React.Component<Props> {
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
                </div>
                   
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
        });

        this.props.onSwitch(theme);
    }
}

export default ThemeSwitcher;
