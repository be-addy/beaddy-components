import * as React from 'react';
import log from '../log';

import { storiesOf } from '@storybook/react';

import DatePicker from '../components/DatePicker';

const stories = storiesOf('DatePicker', module);

export const DatePickerDefault = (
    <DatePicker
        date={{ day: 1, month: 1, year: 1999 }}
        onSelected={(date) => log(date)}
    />
);

stories.add('default', () => DatePickerDefault);