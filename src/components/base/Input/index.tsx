import * as React from 'react';
import styled from 'styled-components';
import Theme from '../../../theme';
import Title from '../Title';

interface StyledProps {
    theme?: Theme;
}

const Input = styled.input`
    font-family: ${(props: StyledProps) => (props.theme as Theme).font};
    background: transparent;
    border: none;
    border-bottom: 3px solid ${(props: StyledProps) => (props.theme as Theme).input.color};
    &::placeholder {
        font-size: 14px;
        font-weight: normal;
        line-height: 1.29;
        color: #b7b3cd;
    }
`;

interface Props {
    text?: string;
    placeholder?: string;
    label?: string;
    onChange: (text: string) => void;

    theme?: Theme;
}

class Component extends React.Component<Props> {
    public render() {
        const { text, placeholder, label, onChange } = this.props;
        return (
            <label><Title>{label}</Title>
                <Input
                    type="text"
                    value={text}
                    placeholder={placeholder}
                    onChange={(e: React.FormEvent<HTMLInputElement>) => onChange(e.currentTarget.value)}
                />
            </label>
        );
    }
}

export default Component;