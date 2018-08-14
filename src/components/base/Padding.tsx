import styled from 'styled-components';

interface Props {
    children: any;
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}

const Padding = styled.div`
    ${(p: Props) => p.top && `padding-top: ${p.top}px`}
    ${(p: Props) => p.right && `padding-right: ${p.right}px`}
    ${(p: Props) => p.bottom && `padding-bottom: ${p.bottom}px`}
    ${(p: Props) => p.left && `padding-left: ${p.left}px`}
`;

export default Padding;