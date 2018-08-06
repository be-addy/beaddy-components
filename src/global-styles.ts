import { injectGlobal } from 'styled-components';

// tslint:disable:no-unused-expression
injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Muli');
    .card-list-icon path {
        fill: #5b31da;
    }

    .card-list-icon.highlight path {
        fill: #ffffff;
    }

    .close-icon path {
        stroke: #352E56;
    }

    .close-icon.highlight path {
        stroke: #ffffff;
    }
`;