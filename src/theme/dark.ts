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

    title: {
        color: PRIMARY_COLOR,
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
    
    change: {
        positive: {
            color: 'blue',
        },
        negative: {
            color: 'orange',
        },
    },
};

export default Dark;