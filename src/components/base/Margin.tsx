import styled from 'styled-components';

interface Props {
    children: any;
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}

const Margin = styled.div`
    ${(p: Props) => p.top && `margin-top: ${p.top}px`}
    ${(p: Props) => p.right && `margin-right: ${p.right}px`}
    ${(p: Props) => p.bottom && `margin-bottom: ${p.bottom}px`}
    ${(p: Props) => p.left && `margin-left: ${p.left}px`}
`;

export default Margin;