import * as React from 'react';
import styled from 'styled-components';

const Triangle = styled.div`
    height: 10px;
    position: relative;
    overflow: hidden;

    &:after {
        content: "";
        position: absolute;
        width: 50px;
        height: 50px;
        background: #ffffff;
        transform: rotate(45deg);
        top: 10px;
        left: 25px;
        box-shadow: 0 0 20px 0 rgba(53, 46, 86, 0.1);
        border: solid 1px rgba(183, 179, 204, 0.3);

        z-index: 1;
    }
`;

const Panel = styled.div`
    border-radius: 5px;
    box-shadow: 0 0 20px 0 rgba(53, 46, 86, 0.1);
    background-color: #ffffff;
    border: solid 1px rgba(183, 179, 204, 0.3);

    position: relative;
    top: -1px;
`;

export default ({children}: any) => <div><Triangle /><Panel>{children}</Panel></div>;
