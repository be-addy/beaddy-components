import * as React from 'react';
import Title from './base/Title';
import Input from './base/Input';

interface Props {
    text?: string;
    placeholder?: string;
    label?: string;
    onChange: (text: string) => void;
}

export default ({ text, placeholder, label, onChange }: Props) => (
    <label><Title>{label}</Title>
        <Input
            type="text"
            value={text}
            placeholder={placeholder}
            onChange={(e: React.FormEvent<HTMLInputElement>) => onChange(e.currentTarget.value)}
        />
    </label>
);