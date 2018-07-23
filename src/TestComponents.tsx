import * as React from 'react';

import { PopoverDefault } from './stories/Popover.stories';
import { ChartTipDefault } from './stories/ChartTip.stories';
import { TextButtonDefault } from './stories/TextButton.stories';
import { TextInputDefault } from './stories/TextInput.stories';
import { ModalOkCancelDefault } from './stories/ModalOkCancel.stories';
import { LineChartDefault } from './stories/LineChart.stories';
import { DateRangeDefault } from './stories/DateRange.stories';

const COMPONENTS = [
    TextButtonDefault,
    ModalOkCancelDefault,
    TextInputDefault,
    PopoverDefault,
    ChartTipDefault,
    LineChartDefault,
    DateRangeDefault,
];

const TestComponents = () => (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {COMPONENTS.map((c, i) => <div style={{ margin: '10px' }} key={i}>{c}</div>)}
    </div>
);

export default TestComponents;