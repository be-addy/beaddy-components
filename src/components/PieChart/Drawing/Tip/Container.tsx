import styled from 'styled-components';

interface Props {
    x?: string;
    y?: string;
}

const Container = styled.div`
    position: absolute;
    top: ${(props: Props) => props.y};
    left: ${(props: Props) => props.x};
    z-index: 1;
    pointer-events: none;
`;

export default Container;