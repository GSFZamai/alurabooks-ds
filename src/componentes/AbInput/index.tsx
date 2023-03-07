import React, { InputHTMLAttributes, LabelHTMLAttributes } from "react";
import {
    Input,
    InputContainer,
    InputLabel
} from "./styles";

export interface AbInputProps {
    label: string,
    name: string,
    inputAtrributes?: InputHTMLAttributes<HTMLInputElement>
    labelAtrributes?: LabelHTMLAttributes<HTMLLabelElement>
}

export function AbInput({ label, name, inputAtrributes, labelAtrributes }: AbInputProps) {
    return (
        <InputContainer>
            <InputLabel htmlFor={name} {...labelAtrributes} >
                {label}
            </InputLabel>
            <Input name={name} id={name} {...inputAtrributes} />
        </InputContainer>
    )
}