import * as React from 'react';
import styled from 'styled-components';
import BaseText from '../base/Text';

const Circle = styled.div`
    border-radius: 50%;
    background: #23e2a1;
    width: 16px;
    height: 16px;
    text-align: center;
    margin-left: 4px;
`;

const Text = BaseText.extend`
    font-size: 10px;
    font-weight: 600;
    text-align: center;
    color: #ffffff;
`;

interface Props {
    children: any;
}

class Component extends React.Component<Props> {
    public render() {
        return (
            <Circle>
                <Text>
                    {this.props.children}
                </Text>
            </Circle>
        );
    }
}

export default Component;