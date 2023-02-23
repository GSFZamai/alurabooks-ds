import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Card } from "../src";


export default {
    title: "Componentes/Card",
    component: Card
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = () =>{
    return(
        <Card 
            autor="Vitor Zanini"
            price={29.90}
            subtitulo="Habilidades de gestão para alavancar sua carreira"
            titulo="Liderança em Design"
        />
    )
};

export const Primario = Template.bind({});