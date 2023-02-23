import styled, { css } from "styled-components";
import { AbBotaoProps } from ".";

export const BotaoEstilizado = styled.button<AbBotaoProps>`
    background-color: ${({ tipo }) => tipo === "primario" ? "#EB9B00" : "#FFFFFF"};
    padding: 16px 32px;
    font-weight: 700;
    border: 2px solid #EB9B00;
    color: ${({ tipo }) => tipo === "primario" ? "#FFFFFF" : "#EB9B00"};
    font-size: 20px;
    cursor: pointer;
    ${({ tipo }) => tipo === "primario" ?
        css`
                &:hover {
                    background-color: #B87900;
                    border: 2px solid #B87900;
                }
        `:
        css`
        &:hover {
                    border: 2px solid #B87900;
                    color: #B87900;
                }
        `
    }
`;