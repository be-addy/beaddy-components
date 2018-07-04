import * as React from 'react';

import light from './theme/light';
import dark from './theme/dark';

interface Props {
    onSwitch: (theme: any) => void;
}

class ThemeSwitcher extends React.Component<Props> {
    public state = {
        name: 'light',
    };

    constructor(props?: any) {
        super(props);
        this.handleThemeChange = this.handleThemeChange.bind(this);
    }

    public render() {
        return (
            <div>
                <label>Light<input
                    type="radio"
                    name="theme"
                    value="light"
                    checked={this.state.name === 'light'}
                    onChange={this.handleThemeChange}
                /></label>
                <label>Dark<input
                    type="radio"
                    name="theme"
                    value="dark"
                    checked={this.state.name === 'dark'}
                    onChange={this.handleThemeChange}
                /></label>
            </div>
        );
    }

    private handleThemeChange(e: any) {
        const name = e.target.value;
        let theme = null;

        switch (name) {
            case 'light':
                theme = light;
                break;
            case 'dark':
                theme = dark;
                break;
            default:
                throw 'Unknown theme selected';
        }

        this.setState({
            name,
        });

        this.props.onSwitch(theme);
    }
}

export default ThemeSwitcher;
