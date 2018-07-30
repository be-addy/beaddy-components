interface Props {
    header: string;
    locked: boolean;
    title: string;
    pos: number;
    onPosChange: (pos: number) => void;
    onLockChange: (lock: boolean) => void;
}

export default Props;