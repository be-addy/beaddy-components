import * as React from 'react';

import TextButton from './TextButton';
import Panel from './base/Panel';
import Header from './base/Header';
import Row from './base/Row';
import Text from './base/Text';

interface Props {
    title: string;
    message: string;
    buttonOkText: string;
    buttonCancelText: string;
    onOk: () => void;
    onCancel: () => void;
}

const ModalOkCancel = ({ title, message, buttonOkText, buttonCancelText, onOk, onCancel }: Props) => (
    <Panel width="491px" height="207px">
        <Header>{title}</Header>
        <Text marginBottom="20px">{message}</Text>
        <Row>
            <TextButton buttonColor="#352e56" width="150px" onClick={onOk} text={buttonOkText} />
            <TextButton onClick={onCancel} width="150px" text={buttonCancelText} />
        </Row>
    </Panel>
);

export default ModalOkCancel;