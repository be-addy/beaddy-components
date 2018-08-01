export default interface Theme {
    font: string;

    button: {
        color: {
            default: string,
            hover: string,
        },

        text: {
            color: string,
        }
    };

    title: {
        color: string,
    };

    input: {
        color: string,
    };

    panel: {
        color: string,
    };

    h2: {
        color: string;
    };

    h3: {
        color: string;
    };

    text: {
        color: string;
    };

    change: {
        positive: {
            color: string;
        },
        negative: {
            color: string;
        }
    };

    chart: {
        tooltip: {
            background: {
                color: string;
            },
            value: {
                color: string;
            }
        }
    };

    popover: {
        background: {
            color: string;
        },
        list: {
            title: {
                color: string;
            },
            button: {
                active: {
                    color: string;
                };
                hover: {
                    color: string;
                };
                disabled: {
                    color: string;
                };
            },
            line: {
                color: string;
            },
        }
    };
}