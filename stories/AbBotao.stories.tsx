import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { AbBotao, AbBotaoProps } from "../src";

export default {
    title: "Componentes/AbBotao",
    component: AbBotao,
} as ComponentMeta<typeof AbBotao>


const Template: ComponentStory<typeof AbBotao> = (args) => <AbBotao {...args} /> 

export const Primario = Template.bind({});

Primario.args = {
    titulo: "Ab botão Primário",
    tipo: "primario"
} as AbBotaoProps

export const Secundario = Template.bind({});

Secundario.args = {
    titulo: "Ab botão Secundário",
    tipo: "secundario"
} as AbBotaoProps