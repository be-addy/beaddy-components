import Theme from './';

const PRIMARY_COLOR = '#5b31da';

const Light: Theme = {
    font: 'Muli',

    button: {
        color: {
            default: PRIMARY_COLOR,
            hover: '#ac97ec',
        },
        text: {
            color: '#ffffff',
        }
    },

    title: {
        color: PRIMARY_COLOR,
    },

    input: {
        color: PRIMARY_COLOR,
    },

    header: {
        color: '#352e56',
    },

    text: {
        color: 'rgba(53, 46, 86, 0.6)',
    },

    panel: {
        color: '#ffffff'
    },

    change: {
        positive: {
            color: '#23e2a1',
        },
        negative: {
            color: '#ff426d',
        },
    },

    chart: {
        tooltip: {
            background: {
                color: 'rgb(53, 46, 86)',
            },
            value: {
                color: '#ffffff',
            }
        }
    },

    popover: {
        background: {
            color: '#ffffff',
        }
    }
};

export default Light;