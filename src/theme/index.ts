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

    header: {
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
}