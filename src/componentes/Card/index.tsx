import React from "react";
import { AbBotao } from "../AbBotao";

import {
    CardCommonText,
    CardContainer,
    CardSubTitle,
    CardTitle,
    ValueLabel,
    CardPrice,
    CardActions,
    CardHeader,
    CardFooter,
    CardValueControl
} from "./styles";

export interface CardProps {
    titulo: string,
    subtitulo: string,
    autor: string,
    price: number
}

export const Card = ({
    autor,
    price,
    subtitulo,
    titulo
}: CardProps) => {
    return (
        <CardContainer>
            <CardHeader>
                <CardTitle>
                    Sobre o livro:
                </CardTitle>
                <CardActions>
                    <img src={require("./assets/heart-icon.svg")} />
                    <img src={require("./assets/bag-icon.svg")} />
                </CardActions>

            </CardHeader>
            <CardSubTitle>
                {titulo}
            </CardSubTitle>
            <CardCommonText>
                {subtitulo}
            </CardCommonText>
            <CardCommonText>
                Por: {autor}
            </CardCommonText>
            <CardFooter>
                <CardValueControl>
                    <ValueLabel>
                        Preço:
                    </ValueLabel>
                    <CardPrice>
                        {price.toLocaleString("pt-BR", {style: "currency", currency: "BRL", minimumIntegerDigits: 2, minimumFractionDigits: 2})}
                    </CardPrice>
                </CardValueControl>
                <AbBotao
                    titulo="Comprar"
                />
            </CardFooter>

        </CardContainer>
    )
}