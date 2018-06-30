import * as React from 'react';

import { ThemeProvider } from 'styled-components';

import light from './theme/light';

import ThemeSwitcher from './ThemeSwitcher';

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
