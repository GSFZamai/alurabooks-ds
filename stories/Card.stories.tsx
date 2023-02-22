import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Card } from "../src";


export default {
    title: "Componentes/Card",
    component: Card
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = () => <Card />;

export const Primario = Template.bind({});