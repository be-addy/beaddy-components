import * as React from 'react';
import { ProviderType } from '../../Types';

import Facebook from '-!svg-react-loader!./icon-facebook.svg';
import Twitter from '-!svg-react-loader!./icon-twitter.svg';
import Google from '-!svg-react-loader!./icon-google.svg';
import AppNexus from '-!svg-react-loader!./icon-appnexus.svg';

const Icons = [
    { type: ProviderType.FACEBOOK, icon: Facebook },
    { type: ProviderType.TWITTER, icon: Twitter },
    { type: ProviderType.GOOGLE, icon: Google },
    { type: ProviderType.APPNEXUS, icon: AppNexus },
    { type: ProviderType.NONE, icon: () => <div /> },
];

const get = (type: ProviderType) => {
    let data = Icons.find(icon => icon.type === type);
    if (!data) {
        throw `Unknown provider type ${type}`;
    }

    const Icon = data.icon;
    return <Icon width={16} height={16} />;
};

export default get;