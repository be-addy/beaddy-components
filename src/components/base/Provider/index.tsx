import { ProviderType } from '../Types';

import getIcon from './Icon';

interface Props {
    type: ProviderType;
}

const Provider = ({ type }: Props) => {
    return getIcon(type);
};

export default Provider;