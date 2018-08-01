import Theme from './';

const PRIMARY_COLOR = 'grey';
const HEADER_COLOR = 'white';

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

    h2: {
        color: HEADER_COLOR,
    },

    h3: {
        color: HEADER_COLOR,
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
            color: 'lightgrey',
        },
        negative: {
            color: 'darkgrey',
        },
    },

    chart: {
        tooltip: {
            background: {
                color: 'white',
            },
            value: {
                color: 'grey',
            }
        }
    },

    popover: {
        background: {
            color: 'darkgrey',
        },
        list: {
            button: {
                active: {
                    color: 'white',
                },
                hover: {
                    color: 'black',
                },
                disabled: {
                    color: 'lightgrey',
                },
            },
            title: {
                color: 'white',
            },
            line: {
                color: 'white',
            },
        },
    }
};

export default Dark;