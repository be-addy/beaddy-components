import styled from 'styled-components';

const Panel = styled.div`
    width: 235px;
    border-radius: 5px;
    background: ${(props: any) => props.highlight ? '#5b31da' : '#ffffff'};
    border: solid 1px rgba(183, 179, 204, 0.3);
`;

export default Panel;