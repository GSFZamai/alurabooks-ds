import React from "react";
import { BotaoEstilizado } from "./styles";

export interface AbBotaoProps {
    titulo?: string,
    tipo?: "primario" | "secundario",
    onClick?: () => void
}

export const AbBotao = (
    {
        titulo = "Clique Aqui!",
        tipo = "primario",
        onClick,
    }: AbBotaoProps) => {
    return (
        <BotaoEstilizado
            onClick={onClick}
            tipo={tipo}
        >
            {titulo}
        </BotaoEstilizado>
    )
}