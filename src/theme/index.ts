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

    panel: {
        color: string,
    };

    header: {
        color: string;
    };

    text: {
        color: string;
    };
}