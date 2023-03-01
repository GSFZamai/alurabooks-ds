import React from "react";
import { ComponentMeta, ComponentStory,  } from "@storybook/react"
import { Tag } from "../src"

export default {
    title: "Componentes/Tag"
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = (args) => {
   return <Tag {...args}/>
} 

export const Primario = Template.bind({});

Primario.args = {
    texto: "OO"
}