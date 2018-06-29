import styled from 'styled-components';

interface Props {
    width?: string;
    height?: string;
}

export default styled.div`
    width: ${(props: Props) => props.width};
    height: ${props => props.height};

    border-radius: 5px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    border: solid 1px rgba(183, 179, 204, 0.3);

    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;