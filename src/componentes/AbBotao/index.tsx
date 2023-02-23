import React from "react";
import { BotaoEstilizado } from "./styles";

export interface AbBotaoProps {
    titulo?: string
}

export const AbBotao = (
    {
        titulo = "Clique Aqui!"
    }: AbBotaoProps) => {
    return (
        <BotaoEstilizado>
            {titulo}
        </BotaoEstilizado>
    )
}