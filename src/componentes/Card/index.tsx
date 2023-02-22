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

export const Card = () => {
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
                Liderança em Design
            </CardSubTitle>
            <CardCommonText>
                Habilidades de gestão para alavancar sua carreira
            </CardCommonText>
            <CardCommonText>
                Por: Viton Zanini
            </CardCommonText>
            <CardFooter>
                <CardValueControl>
                    <ValueLabel>
                        A partir de:
                    </ValueLabel>
                    <CardPrice>
                        R$ 29,90
                    </CardPrice>
                </CardValueControl>
                <AbBotao />
            </CardFooter>

        </CardContainer>
    )
}