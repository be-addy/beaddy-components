import * as React from 'react';

import { storiesOf } from '@storybook/react';

import DatePicker from '../components/DatePicker';

const stories = storiesOf('DatePicker', module);

// tslint:disable
export const DatePickerDefault = (
    <DatePicker
        onSelected={(date) => console.log(date)}
    />
);

export const DatePickerDate = (
    <DatePicker
        date={{ day: 1, month: 1, year: 1999 }}
        onSelected={(date) => console.log(date)}
    />
);

stories.add('default', () => DatePickerDefault);
stories.add('date', () => DatePickerDate);