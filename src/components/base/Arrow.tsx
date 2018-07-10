import styled from 'styled-components';
import { Direction } from './Types';
import Theme from '../../theme';

interface Props {
    direction: Direction;
    theme?: Theme;
}

export default styled.div`
    width: 16px;
    height: 16px;

    margin: 0 6px 0 0;

    background: ${(props: Props) => props.direction === Direction.UP
        ? (props.theme as Theme).change.positive.color
        : (props.theme as Theme).change.negative.color}
`;