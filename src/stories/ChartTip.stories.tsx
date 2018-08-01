import * as React from 'react';

import { storiesOf } from '@storybook/react';

import ChartTip from '../components/ChartTip';

import { Direction, ProviderType } from '../components/base/Types';

const stories = storiesOf('ChartTip', module);

class ChartTipTest extends React.Component {
    state = {
        provider: ProviderType.FACEBOOK,
        value: '223.003',
        change: '20',
        direction: Direction.UP,
    };

    public render() {
        const { provider, value, change, direction } = this.state;
        return (
            <>
                <div style={{ position: 'relative', width: 200, height: 40 }}>
                    <ChartTip
                        visible={true}
                        provider={provider}
                        value={value}
                        change={change}
                        direction={direction}
                    />
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                Provider
                            </td>
                            <td>
                                <select
                                    value={provider}
                                    onChange={(e: any) => this.setState(
                                        {
                                            provider: parseInt(e.currentTarget.value, 10)
                                        }
                                    )}
                                >
                                    <option value={ProviderType.TWITTER}>Twitter</option>
                                    <option value={ProviderType.FACEBOOK}>Facebook</option>
                                    <option value={ProviderType.GOOGLE}>Google</option>
                                    <option value={ProviderType.APPNEXUS}>App Nexus</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Direction</td>
                            <td>
                                <label>Up
                                    <input
                                        type="radio"
                                        name="direction"
                                        value={Direction.UP}
                                        checked={direction === Direction.UP}
                                        onChange={(e: any) => this.setState(
                                            {
                                                direction: parseInt(e.currentTarget.value, 10)
                                            }
                                        )}
                                    />
                                </label>
                                <label>Down
                                    <input
                                        type="radio"
                                        name="direction"
                                        value={Direction.DOWN}
                                        checked={direction === Direction.DOWN}
                                        onChange={(e: any) => this.setState(
                                            {
                                                direction: parseInt(e.currentTarget.value, 10)
                                            }
                                        )}
                                    />
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>Value</td>
                            <td>
                                <input
                                    type="text"
                                    name="value"
                                    value={value}
                                    onChange={(e: any) => this.setState({ value: e.currentTarget.value })}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Change</td>
                            <td>
                                <input
                                    type="text"
                                    name="change"
                                    value={change}
                                    onChange={(e: any) => this.setState({ change: e.currentTarget.value })}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </>
        );
    }
}

const ChartTipDefault = <ChartTipTest />;
export { ChartTipDefault };

stories.add('default', () => ChartTipDefault);