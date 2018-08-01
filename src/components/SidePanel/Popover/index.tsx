import * as React from 'react';

import BaseText from '../../base/Text';

import Popover from '../../Popover';
import List from '../../Popover/List';
import Button from '../../Popover/List/Button';
import Down from '-!svg-react-loader!./dropdown.svg';
import BaseTitle from '../../base/Title';

const Text = BaseText.extend`
    color: #352e56;
    margin-right: 16px;
`;

const Title = BaseTitle.extend`
    margin-bottom: 8px;
`;

export interface PopoverData {
    title: string;
    options: string[];
}

interface Props extends PopoverData {
    index: number;
    onSelected: (index: number) => void;
}

class SidePanelPopover extends React.Component<Props> {
    state = {
        visible: false,
    };

    public render() {
        const { title, index, options, onSelected } = this.props;
        return (
            <>
                <Title>{title}</Title>
                <div
                    style={{ cursor: 'pointer' }}
                    onClick={() => this.setState({ visible: !this.state.visible })}
                    onBlur={() => this.setState({ visible: false })}
                >
                    <Text>{options[index]}</Text><Down />
                    <div style={{ position: 'relative', top: 16, width: 152 }}>
                        <Popover visible={this.state.visible}>
                            <List>
                                {options.map((o, i) =>
                                    <Button
                                        key={o}
                                        onClick={() => onSelected(i)}
                                    >
                                        {o}
                                    </Button>)}
                            </List>
                        </Popover>
                    </div>
                </div>
            </>
        );
    }
}

export default SidePanelPopover;