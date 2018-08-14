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

    title: {
        color: PRIMARY_COLOR,
    },

    input: {
        color: PRIMARY_COLOR,
    },

    text: {
        color: {
            default: 'white',
            highlight: 'lightgreen',
        },
    },

    link: {
        color: {
            default: 'red',
            highlight: 'green',
        },
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
    },

    circularSlider: {
        background: {
            color: '#505050',
        },
    },
};

export default Dark;