import styled, { css } from 'styled-components';

const Hidden = css`
    opacity: 0;
    visibility: hidden;
`;

const Visible = css`
    opacity: 1;
    visibility: visible;
`;

interface Props {
    visible: boolean;
}

const Menu = styled.div`
    ${(props: Props) => props.visible ? Visible : Hidden}
    transition: visibility 0.5s;
`;

export default Menu;