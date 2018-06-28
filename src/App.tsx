import * as React from 'react';

import TextButton from './components/TextButton';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <TextButton onClick={this.onClick} text="Ok" />
      </div>
    );
  }

  onClick() {
      // tslint:disable-next-line
      console.log('onClick');
  }
}

export default App;
