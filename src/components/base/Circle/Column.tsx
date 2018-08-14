import BaseColumn from '../Column';

const Column = BaseColumn.extend`
    justify-content: center;

    position: absolute;
    top: 0px;

    width: 160px;
    height: 160px;

    margin: 20px;
    border-radius: 50%;

    user-select: none;
`;

export default Column;