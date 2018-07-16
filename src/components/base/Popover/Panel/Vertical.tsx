import styled from 'styled-components';

export const Triangle = styled.div`
    height: 15px;
    position: relative;
    overflow: hidden;

    &:after {
        content: "";
        position: absolute;
        width: 25px;
        height: 25px;
        background: #ffffff;
        transform: rotate(45deg);
        top: 5px;
        left: 50%;
        margin-left: -12px;
        box-shadow: 0 0 20px 0 rgba(53, 46, 86, 0.1);
        border: solid 1px rgba(183, 179, 204, 0.3);

        z-index: 1;
    }
`;

export const Content = styled.div`
    border-radius: 5px;
    box-shadow: 0 0 20px 0 rgba(53, 46, 86, 0.1);
    background-color: #ffffff;
    border: solid 1px rgba(183, 179, 204, 0.3);

    position: relative;
    top: -1px;
`;