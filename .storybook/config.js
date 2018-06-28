import { configure, addDecorator } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import def from '../src/theme/default';

// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => <ThemeProvider theme={def}>{story()}</ThemeProvider>);
configure(loadStories, module);
