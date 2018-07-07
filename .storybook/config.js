import { configure, addDecorator } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import '../src/global-styles';
import def from '../src/theme/light';

const req = require.context('../src/stories', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => <ThemeProvider theme={def}>{story()}</ThemeProvider>);
configure(loadStories, module);
