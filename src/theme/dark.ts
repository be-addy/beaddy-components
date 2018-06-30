import Theme from './';

const PRIMARY_COLOR = 'grey';

const Dark: Theme = {
    font: 'Arial',

    button: {
        color: {
            default: PRIMARY_COLOR,
            hover: 'lightgrey',
        },
        text: {
            color: 'white',
        }
    },

    header: {
        color: 'white',
    },

    input: {
        color: PRIMARY_COLOR,
    },

    text: {
        color: 'white',
    },

    panel: {
        color: 'darkgrey',
    },
};

export default Dark;