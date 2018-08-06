import * as React from 'react';
import styled from 'styled-components';

const Panel = styled.div`
    width: 307px;
    background: rgba(183, 179, 205, 0.2);
    display: ${props => props.hidden ? 'hidden' : 'block'};
`;

interface Props {
    children: any;
    hidden: boolean;
}

class SidePanel extends React.Component<Props> {
    public render() {
        const { children } = this.props;
        return (
            <Panel hidden={this.props.hidden}>
                {children}
            </Panel>
        );
    }
}

export default SidePanel;