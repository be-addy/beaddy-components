import * as React from 'react';

import LockIcon from '-!svg-react-loader!./Icon/lock.svg';
import UnlockIcon from '-!svg-react-loader!./Icon/unlock.svg';

interface Props {
    locked: boolean;
    onChange: (locked: boolean) => void;
}

class Lock extends React.Component<Props> {
    public render() {
        return this.props.locked 
            ? <LockIcon onClick={() => this.props.onChange(!this.props.locked)} /> 
            : <UnlockIcon onClick={() => this.props.onChange(!this.props.locked)} />;
    }
}

export default Lock;