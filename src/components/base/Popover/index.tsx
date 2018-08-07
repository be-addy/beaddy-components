import styled, { css } from 'styled-components';

const Hidden = css`
    opacity: 0;
    display: none;
`;

const Visible = css`
    opacity: 1;
    display: block;
`;

interface Props {
    visible: boolean;
    x?: string;
    y?: string;
}

const Menu = styled.div`
    position: absolute;
    ${(props: Props) => props.visible ? Visible : Hidden};
    transition: visibility 0.5s;
    left: ${(props: Props) => props.x || 0};
    top: ${ (props: Props) => props.y || 0};
`;

export default Menu;