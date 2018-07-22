import * as React from 'react';
import { ProviderType } from '../Types';

import Facebook from '-!svg-react-loader!./Icon/icon-facebook.svg';
import Twitter from '-!svg-react-loader!./Icon/icon-twitter.svg';
import Google from '-!svg-react-loader!./Icon/icon-google.svg';
import AppNexus from '-!svg-react-loader!./Icon/icon-appnexus.svg';

interface Props {
    type: ProviderType;
}

const Provider = ({ type }: Props) => {
    let provider;

    switch (type) {
        case ProviderType.FACEBOOK:
            provider = <Facebook width={16} height={16} />;
            break;
        case ProviderType.TWITTER:
            provider = <Twitter width={16} height={16} />;
            break;
        case ProviderType.GOOGLE:
            provider = <Google width={16} height={16} />;
            break;
        case ProviderType.APPNEXUS:
            provider = <AppNexus width={16} height={16} />;
            break;
        default:
            throw 'Unknown provider type ' + type;
    }

    return provider;
};

export default Provider;