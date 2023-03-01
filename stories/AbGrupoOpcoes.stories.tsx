import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AbGrupoOpcoes, AbGrupoOpcoesProps } from "../src/componentes/AbGrupoOpcoes";


export default {
    title: "Componentes/AbGrupoOpcoes",
    component: AbGrupoOpcoes
} as ComponentMeta<typeof AbGrupoOpcoes>

const Template: ComponentStory<typeof AbGrupoOpcoes> = (args) => {
    return(
        <AbGrupoOpcoes {...args} />
    )
}

export const Padrao = Template.bind({});

Padrao.args = {
    opcoes: [
        {
            id: 1,
            titulo: "E-book",
            valor: "R$ 00.00",
            rodape: ".pdf, .epub, .mob"
        },
        {
            id: 2,
            titulo: "Impresso",
            valor: "R$ 00.00",
            rodape: "Brochura"
        },
        {
            id: 3,
            titulo: "Impresso + E-book",
            valor: "R$ 00.00",
            rodape: ".pdf, .epub, .mob, Brochura"
        },
    ],
} as AbGrupoOpcoesProps;