import * as React from 'react';
import styled from 'styled-components';

interface Props {
    text?: string;
    placeholder?: string;
    label?: string;
    onChange: (text: string) => void;
}

const Text = styled.span`
    font-size: 10px;
    font-weight: 800;
    font-family: ${(props: any) => props.font || props.theme.font};
    letter-spacing: 1px;
    color: ${props => props.color || props.theme.input.color};
    display: block;
`;

const Input = styled.input`
    font-family: ${(props: any) => props.font || props.theme.font};
    background: transparent;
    border: none;
    border-bottom: 3px solid ${props => props.color || props.theme.input.color};
    &::placeholder {
        font-size: 14px;
        font-weight: normal;
        line-height: 1.29;
        color: #b7b3cd;
    }
`;

class Component extends React.Component<Props> {
    public render() {
        const { text, placeholder, label, onChange } = this.props;
        return (
            <label><Text>{label}</Text>
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