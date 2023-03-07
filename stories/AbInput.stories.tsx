import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { AbInput, AbInputProps } from "../src/componentes/AbInput";

export default {
    title: "Componentes/Input",
    component: AbInput
} as ComponentMeta<typeof AbInput>

const Template: ComponentStory<typeof AbInput> = (args) => {
    return(
        <AbInput {...args}/>
    )
};

export const Padrao = Template.bind({});

Padrao.args = {
    label: "E-mail",
    name: "email",
    inputAtrributes: {
        placeholder: "seuemail@provedor.com.br",
        id: "email"
    }
} as AbInputProps