import * as React from 'react';
import styled from 'styled-components';
import { ProviderType } from './Types';

const Twitter = styled.div`
    width: 16px;
    height: 16px;
    background-color: #53acf0;
    margin: 0 4px 0 4px;
`;

const Facebook = Twitter.extend`
    background-color: #5b31da;
`;

interface Props {
    type: ProviderType;
}

export default ({ type }: Props) => {
    let provider;

    switch (type) {
        case ProviderType.FACEBOOK:
            provider = <Facebook />;
            break;
        case ProviderType.TWITTER:
            provider = <Twitter />;
            break;
        default:
            throw 'Unknown provider type ' + type;
    }

    return provider;
};