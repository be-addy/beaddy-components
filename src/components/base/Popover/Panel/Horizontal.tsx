import styled from 'styled-components';

export const Triangle = styled.div`
    height: 18px;
    width: 12px;
    position: relative;
    overflow: hidden;

    &:after {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        background: #ffffff;
        transform: rotate(45deg);
        top: 50%;
        left: 6px;
        margin-top: -5px;
        box-shadow: 0 0 20px 0 rgba(53, 46, 86, 0.1);
        border: solid 1px rgba(183, 179, 204, 0.3);

        z-index: 1;

        background: rgb(53, 46, 86);
    }
`;

export const Content = styled.div`
    border-radius: 5px;
    box-shadow: 0 0 20px 0 rgba(53, 46, 86, 0.1);
    border: solid 1px rgba(183, 179, 204, 0.3);

    position: relative;
    left: -1px;

    background: rgb(53, 46, 86);

    padding: 8px;
`;